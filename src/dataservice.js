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

  const loadProducts = async () => {
    console.log("test");
    const { data, error } = await SUPABASE_CLIENT.from("products").select("*");
    productList.value = data;
    displayError.value = error;
  };
  const loadProfiles = async () => {
    console.log("test");
    const { data, error } = await SUPABASE_CLIENT.from("Profiles").select("*");
    productList.value = data;
    displayError.value = error;
  };
  /*
   * Called when dataService is first loaded to initalize the session,
   * also sets a listener to update the session based once changes 
   * in the auth state
   */
  const initialize = async () => {
    session.value = SUPABASE_CLIENT.auth.session();

    // if there is a session at startup, load the data
    if (session.value) {
      await loadProducts();
    }

    SUPABASE_CLIENT.auth.onAuthStateChange(async (_event, _session) => {
      session.value = _session;
      // if there is a session at startup, because of
      // a state change, then load the data
      //TODO: add conditional to check router stack
      if (_session) {
        await loadProducts();
      }
    });
  };

  //FIXME: ensure bucket is properly configured on supabase so writing to product table succeeds
  const saveProducts = async (formData) => {
    try {
      // 1) save image
      const { file, ...productData } = formData;
      //TODO: Get image uploading w/ user ID prefix at some point
      // const imagePath = `products/${uuidv4()}-${file.name}`;
      const imagePath = `products/${file.name}`;

      //FIXME: plz
      const { error: sError } = await SUPABASE_CLIENT.storage
        .from("product-bucket")
        .upload(imagePath, file);
        debugger;
        console.log(`sError ${sError}`);
      if (sError){
        sError.storageType = "Bucket";
        throw sError;
      } 
      const saveProfile = async (formData) => {
        try {
          console.log({...formData.value});
          await SUPABASE_CLIENT.from("Profiles").insert([{...formData.value}]);
          return { success: true };
        } catch (error) {
          return { success: false, error: error}
        }
      };
      // 2) save to database with image ref
      const { data: dbData, error: dbError} = await SUPABASE_CLIENT.from(
        "products"
      ).insert([{ ...productData, image: imagePath }]);
      debugger;
      console.log(`dbError ${dbError}`);
      if (dbError) {
        dbError.storageType = "Table";
        throw dbError;
      }

      return { success: true, data: dbData };
    } catch (e) {
      console.log(e);
      return { success: false, error: e};
    }
  };
  const saveProfile = async (formData) => {
    try {
      console.log({...formData.value});
      await SUPABASE_CLIENT.from("Profiles").insert([{...formData.value}]);
      return { success: true };
    } catch (error) {
      return { success: false, error: error}
    }
  };
  //TODO: Fix misleading naming scheme of parameter "productId" !HINT! it's not the Id, it's the entire object lol
  const removeProduct = async (productId) => {
    const productIdAsNumber = Number(productId.id);
    debugger;
    const {
      data,
      error
    } = await SUPABASE_CLIENT
      .from('products')
      .delete()
      .match({id: productIdAsNumber});

      return { data, error };
  };
  //TODO: Fix misleading naming scheme of parameter "productId" !HINT! it's not the Id, it's the entire object lol
  const removeProduct = async (productId) => {
    const productIdAsNumber = Number(productId.id);
    debugger;
    const {
      data,
      error
    } = await SUPABASE_CLIENT
      .from('products')
      .delete()
      .match({id: productIdAsNumber});

      return { data, error };
  };

const hasUser = () => {
  return session.value !== null;
}

const login = async (email, password) => {
  const { user, error } = await SUPABASE_CLIENT.auth.signIn({
    email,
    password,
  });
  const userCred = SUPABASE_CLIENT.auth.user()
  console.log(userCred);
  console.log(error && error.message);  
  
  if(error == null) return { user, error };

  // REVIEW: idk wth I'm doing here lol
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
    loadProfiles,
    // FUNCTIONS
    saveProducts,
    saveProfile,
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
