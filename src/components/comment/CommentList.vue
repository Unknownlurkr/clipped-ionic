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
import { mapGetters, mapActions} from 'vuex';
import Comment from './Comment';
import  store  from "@/store/index";
import { IonList } from "@ionic/vue";

export default {
  name: 'CommentList',
    computed: {
      ...mapGetters({
        comments: 'comment/getComments'
      })
    },
    methods: {
      ...mapActions(['comment/getComments', 'comment/getTester'])
    },
    mounted() {
      //this.$store.dispatch('company/getCompanies', null, {root:true})
      this['comment/getComments']();
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
