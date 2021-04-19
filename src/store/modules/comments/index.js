import { productSeed } from "@/productSeed";
const state = {
    productSeed,
    comment: [],
    timestamps: []
};

const mutations = {
    ADD_COMMENT (state, payload) {
        const newComment = payload;
        state.comments.push(newComment);
    },
    ADD_TIMESTAMP (state, payload) {
        const newTimeStamp = payload;
        state.timestamps.push(newTimeStamp);
    }
  }

const actions = {
    addComment(context, payload) {
        context.commit('ADD_COMMENT', payload);
    },
    addTimeStamp(context, payload) {
        context.commit('ADD_TIMESTAMP', payload);}
    }

const getters = {
    getCommentObj(commentId, eventDetails){
        const commentObj = this.state.productSeed.find(comment => comment.id === commentId)
        return commentObj.events.find(event => event.details === eventDetails)
    },
    // getCommentAuthor()
    getComments: state => state.comments,
    getTimeStamps: state => state.timestamps,
    getCommentCount: state => state.comments.length
}

export const comment = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};