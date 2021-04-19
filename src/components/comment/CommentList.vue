<template>
    <ion-list inset="true">
       <div
        v-for="comment in comments"
        :key="comment.id"
        class="comment-list--item">
        <Comment :Comment="comment" />
      </div>
    </ion-list>
</template>

<script>
import { mapGetters } from 'vuex';
import Comment from './Comment';
import  {store}  from "@/store/index";
import { IonList } from "@ionic/vue";

export default {
  name: 'CommentList',
  computed: {
    ...mapGetters(['comment'])
  },
  created() {
    store.dispatch('getComments');
    store.dispatch('getTester')
  },
  components: {
    Comment,
    IonList
  }
};
</script>

<style scoped>
.comment--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.comment-list {
  padding-top: 10px;
}

.comment-list--item {
  padding: 10px 0;
}
</style>
