<template>
  <IonImg :src="imageUrl" width="250" />
</template>

<script>
import { IonImg } from "@ionic/vue";
import { ref } from "@vue/runtime-core";
import SUPABASE_CLIENT from "../supabase-config";
import missingImage from "../../public/assets/imgs/sppoky-skeely-gif.gif"
export default {
  name: "ImageView",
  components: {
    IonImg
  },
  props: {
    image: String
  },
  setup(props) {
    const imageUrl = ref(null);
    /**
     *
     */
    const downloadImage = async path => {
      if (!path) {
        imageUrl.value = missingImage;
        return;
      }
      const { data, error } = await SUPABASE_CLIENT.storage
        .from("product-bucket")
        .download(path);
      if (error) throw error;
      imageUrl.value = URL.createObjectURL(data);
    };
    downloadImage(props?.image);
    return {
      imageUrl
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>