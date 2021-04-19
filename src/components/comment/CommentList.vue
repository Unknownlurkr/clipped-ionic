<template>
    <ion-list inset="true">
1       <div
        v-for="comment in comments"
        :key="comment.id"
        class="product-list--item">
        <Comment :comment="comment" />
      </div>
    </ion-list>
</template>

<script>
import { mapGetters } from 'vuex';
import Comment from './Comment';
import  {store}  from "./store/index";

export default {
  name: 'CommentList',
  computed: {
    ...mapGetters(['comments'])
  },
  created() {
    store.
    store.dispatch('getComments');
  },
  components: {
    Comment
  }
};
</script>

<style scoped>

</style>
