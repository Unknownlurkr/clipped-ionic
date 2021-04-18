import { ref } from "vue";
import  SUPABASE_CLIENT  from "./supabase-config";
import { v4 as uuidv4 } from "uuid";

const productList = ref();
const displayError = ref();
const session = ref();


/**
 * THIS CONNECTS TO SUPABASE...
 */
const dataService = () => {


  /*
   * Called when dataService is first loaded to initalize the session,
   * also sets a listener to update the session based once changes 
   * in the auth state
   */
  console.log("Calling Auth");
  
  const initialize = async () => {
    session.value = SUPABASE_CLIENT.auth.session();
    SUPABASE_CLIENT.auth.onAuthStateChange((_event, _session) => {
      console.log(_event, session);
      session.value = _session;
    });
  }
  
  //FIXME: ensure bucket is properly configured on supabase so writing to product table succeeds
  const saveProducts = async (formData) => {
    try {
      // 1) save image
      const { file, ...productData } = formData;
      const imagePath = `products/${uuidv4()}-${file.name}`;

      const { error: sError } = await SUPABASE_CLIENT.storage
        .from("product-bucket")
        .upload(imagePath, file);
      if (sError) throw sError;

      // 2) save to database with image ref
      const { data: dbData, error: dbError } = await SUPABASE_CLIENT.from(
        "products"
      ).insert([{ ...productData, image: imagePath }]);
      if (dbError) throw dbError;

      return { success: true, data: dbData };
    } catch (e) {
      console.log(e);
      return { success: false, error: e };
    }
  };

  const removeProduct = async (productId) => {
    await SUPABASE_CLIENT.from("products").delete().eq("id", productId);
  };

  /**
   *
   */
  const loadProducts = async () => {
    const { data, error } = await SUPABASE_CLIENT.from("products").select("*");
    productList.value = data;
    displayError.value = error;
  };

  //Auth

const hasUser = () => {
  return session.value !== null;
}

const login = async (email, password) => {
  const { user, error } = await SUPABASE_CLIENT.auth.signIn({
    email,
    password,
  });
  console.log(error && error.message);  

  if(error == null) return { user, error };

  // REVIEW: idk wtf I'm doing here lol
  // if(error.message == null) {
  //   const newErrorMessage = "Please enter a password";
  //   error.message = newErrorMessage;
  // }

  if (error.message == "You must provide either an email or a third-party provider.") {
    const newErrorMessage = "You must provide an email";
    error.message = newErrorMessage;
  }

  return { user, error };
};

const logout = async () => {
  const { error } = await SUPABASE_CLIENT.auth.signOut();
  console.log(error && error.message);
  return error;
};

const createAccount = async (email, password) => {
  const { user, error } = await SUPABASE_CLIENT.auth.signUp({
    email,
    password
  });
  console.log(error && error.message);
  return { user, error };
} 

const forgotPassword = async (email) => {

  console.log(email);
  const { data, error } = await SUPABASE_CLIENT.auth.api.resetPasswordForEmail(email);
  console.log(error && error.message);
  return { data, error };
} 

const changePassword = async (password) => {
  const { user, error } = await SUPABASE_CLIENT.auth.update({
    password,
    data: { passwordUpdated: new Date() }
  })
  console.log(error && error.message);
  return { user, error };
};

  return {
    // PROPERTIES
    displayError,
    loadProducts,
    // FUNCTIONS
    saveProducts,
    productList,
    removeProduct,
    // Auth
    login,
    logout,
    createAccount,
    forgotPassword,
    changePassword,
    hasUser,
    initialize
  };
};

dataService().initialize();
export default dataService;
