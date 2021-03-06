import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    editorShow: true,
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: '某某',
        city: '深圳',
        title: '前端工程师',
        birthday: '1993-01-01'
      },
      workHistory: [
        { company: '某某公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
 +我的主要工作如下:
 +1. 完成既定产品需求。
 +2. 修复 bug。` },
        { company: '某某公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
 +我的主要工作如下:
 +1. 完成既定产品需求。
 +2. 修复 bug。` }
      ],
      education: [
        { school: '某某大学', content: '本科' },
        { school: '某某大学', content: '本科' },
      ],
      projects: [
        { name: '项目 A', content: '巴拉巴拉' },
        { name: '项目 B', content: '巴拉巴拉' },
      ],
      awards: [
        { name: '再来十瓶', content: '连续十次获得「再来一瓶」奖励' },
        { name: '百好学生', content: '哔哩哔哩' },
      ],
      contacts: [
        { contact: '手机', content: '13141314' },
        { contact: '微信', content: '13141314' },
      ],
    }
  },
  mutations: {
    initState(state, payload){
      Object.assign(state, payload)
    },
    
    switchTab(state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
       objectPath.set(state.resume, path, value)
       localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload) {
      Object.assign(state.user, payload)
    },
    removeUser(state) {
      state.user.id = ''
    },
     PreviewResumerHide(state,payload){
      state.editorShow = false
    },
    PreviewResumerShow(state,payload){
      state.editorShow = true
    }
  }
})
