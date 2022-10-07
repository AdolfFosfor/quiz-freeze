const TOKEN = localStorage.getItem('accessToken');

export const state = () => ({
  questions: [],
  answers: [],
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

  async setAnswers({ commit }) {
    try {
      const response = await fetch(`${process.env.backend}/api/answers/result`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      const res = await response.json();
      console.log(res.response);
      commit('setAnswers', res.response);
    } catch (e) {
      console.error(e);
    }
  },

  async sendAnswer({ state, dispatch, commit }, optionId) {
    try {
      const res = await fetch(`${process.env.backend}/api/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          optionId,
        }),
      });

      const result = await res.json();

      console.log(result);

      await dispatch('setAnswers');
    } catch (e) {
      console.error(e);
    }
  },

  async resetAnswers({ dispatch }) {
    try {
      const res = await fetch(`${process.env.backend}/api/answers/result/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      const result = await res.json();

      console.log(result);

      await dispatch('setAnswers');
    } catch (e) {
      console.error(e);
    }
  },
};

export const mutations = {
  setQuestions(state, questions) {
    state.questions = questions;
  },
  setAnswers(state, answers) {
    state.answers = answers;
  },
  setQuestion(state, order) {
    if (state.questions) {
      state.question = state.questions.find(({ orderNumber }) => +orderNumber === +order);
    }
  },
};
