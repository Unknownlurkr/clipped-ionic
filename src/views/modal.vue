<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <span>Comment will be displayed as: </span>
    <p style="white-space: pre-line;">{{ commentText }}</p>
    <br>
    <textarea v-model="commentText" placeholder="add multiple lines"></textarea>
  </ion-content>
</template>

<script>
import {
  ref
} from "vue";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Super Modal'
    }

  },
  data() {

        const formData = ref({
          id: "",
          descripticoon: "",
          // eslint-disable-next-line @typescript-eslint/camelcase
          list_price: 0,
          // eslint-disable-next-line @typescript-eslint/camelcase
          sale_price: 0,
          category: "Sweater",
        });
    return {
      content: 'Content',
      commentText: ''
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  }
});
</script>