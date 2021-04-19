<template>
  <ion-item>
    <!-- <ion-avatar slot="start">
                <img src="../../public/assets/images/avatars/face1.png">
            </ion-avatar> -->
    <ion-label>
      <h2>{{name}}</h2>
      <h3>{{generatedCommentHeader}}</h3>
      <p>{{comment}}</p>
    </ion-label>
  </ion-item>
</template>

<script>
import {
  IonLabel,
  IonItem
} from "@ionic/vue";

//TODO: UNDERSTAND THAT UTILIZING THIS ALLOWS YOUR PROPS TO BE DESTRUCTERED AS NORMAL
// import { toRefs } from 'vue'
export default {
  name: 'Comment',
  props: ['Comment'],
  // data() {
  //   commenter: 'Jeff Grant',
  //   commentHeader: 'Fuck Sloth Madden',
  //   comment: "lol"
  // },
  created() {
    this.name = "Jeff"
    this.comment = "Fuck Sloth Madden"
  },
  computed:{
    generatedCommentHeader() {
      const commentHeader = this.comment.replace(/ .*/,'');
      return commentHeader;
    }
  },
  components: {
    IonItem,
    IonLabel
  }
}
</script>


<style lang="scss" scoped>

#container-comment {
  padding-left: 10%;
  padding-right: 10%;

}
</style>