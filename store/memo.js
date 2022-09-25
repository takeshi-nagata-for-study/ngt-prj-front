const axios = require('axios');

export const state = () => ({
  memo: [],
  page: 0,
})


export const mutations = {

  insert: function(state, data) {
    state.memo.unshift(data);
    console.log('state.memo')
    console.log(state.memo)
  },

  set_page: function (state, p) {
    state.page = p;
  },

  remove: function (state, obj) {
    var num = 0;
    for (let i = 0; i < state.memo.length; i++) {
      const ob = state.memo[i];
      if (ob.title == obj.title
      && ob.content == obj.content
      && ob.createdAt == obj.createdAt){
        alert('remove it! --' + ob.title);
        state.memo.splice(i, 1);
        return;
      }
    }
  },

}

export const actions = {
  async insertMemo({ commit, state }, obj) {
    const d = new Date();
    const fmt = d.getFullYear() + '-' + (d.getMonth() + 1)
      + '-' + d.getDate() + ' ' + d.getHours() + ':'
      + d.getMinutes();

    const data = {title: obj.title, content: obj.content, createdAt: fmt}
//    const response = await axios.post('http://localhost:8080/api/insertMemo',data)
//    const response = await axios.post('http://ngt-lb-1-839908689.ap-northeast-1.elb.amazonaws.com:8080/insertMemo',data)
    const response = await axios.post('http://ngt-alb-2317-1442567560.ap-northeast-1.elb.amazonaws.com/api/insertMemo',data)
    commit('insert', data);
  },
}
