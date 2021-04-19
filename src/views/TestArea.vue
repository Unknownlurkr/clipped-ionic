<template>
  <ion-page>

  <comment></comment>

  </ion-page>
</template>

<script>


import { IonPage} from "@ionic/vue";
import Comment from '@/components/comment/Comment.vue';
export default {
  name: 'TestArea',
  components: {
    IonPage,
    Comment
  }
};
</script>


<style>
html,
body {
  background: #f2f6fa;
}

#test-area-container {
  height: 100%;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 769px) {
  html,
  body {
    height: 100%;
  }
}
</style>
