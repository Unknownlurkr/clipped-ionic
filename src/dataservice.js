import { ref } from "vue";
import { SUPABASE_CLIENT } from "./supabase-config";
console.log(SUPABASE_CLIENT);

const productList = ref();
const displayError = ref();

/**
 * THIS CONNECTS TO SUPABASE...
 */
const dataService = () => {
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

  return {
    // PROPERTIES
    displayError,
    loadProducts,
    // FUNCTIONS
    saveProducts,
    productList,
    removeProduct
  };
};
export default dataService;
