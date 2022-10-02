const TOKEN = localStorage.getItem('accessToken');

export const state = () => ({
  questions: [],
  question: null,
});

export const actions = {
  async setQuestions({ commit }) {
    try {
      const response = await fetch(`${process.env.backend}/api/questions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      const res = await response.json();
      console.log(res.response);
      commit('setQuestions', res.response);
    } catch (e) {
      console.error(e);
    }
  },

  setQuestion({ commit }, question) {
    commit('setQuestion', question);
  },
};

export const mutations = {
  setQuestions(state, questions) {
    state.questions = questions;
  },
  setQuestion(state, order) {
    state.question = state.questions.find(({ orderNumber }) => +orderNumber === +order);
  },
};
