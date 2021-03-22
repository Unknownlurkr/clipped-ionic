import { ref } from "vue";
import  SUPABASE_CLIENT  from "./supabase-config";
import { SupabaseClient } from '@supabase/supabase-js';

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
  
  /**
   * save data
   */
  const saveProducts = async (formData) => {
    try {
      await SUPABASE_CLIENT.from("products").insert([{ ...formData.value }]);
      return { success: true };
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

  return { user, email };
};

const logout = async () => {
  const { user, error } = await SupabaseClient.auth.logout();
  console.log(error && error.message);
  return { user, error };
};

const createAccount = async (email, password) => {
  console.log(email, password);
} 

const forgotPassword = async (email) => {
  console.log(email);
} 

const changePassword = async (password) => {
  console.log(password);
} 

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
