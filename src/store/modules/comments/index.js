
const state = {
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