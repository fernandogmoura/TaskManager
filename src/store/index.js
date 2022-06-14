import { setTimeout } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = false

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    tasks: [
      {
      id: 1, 
      title: 'Wake Up!',
      done: false,
      dueDate: '2022-10-16',
      },
      {
      id: 2, 
      title: 'Take a Shower!',
      done: false,
      dueDate: '2022-10-16',
      },
      {
      id: 3, 
      title: 'Eat Breakfast!',
      done: false,
      dueDate: null
      }
    ],
    snackbar: {
      show: false,
      text: ''
    },
    search: null,
    sorting: false,
  },
  mutations: {

    addTask(state, newTask){
      state.tasks.push(newTask)
    },

    doneTask(state, id){
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },

    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    },

    showSnackbar(state, text){
      let timeout = 0

      if(state.snackbar.show){
        state.snackbar.show = false
        timeout = 300
      }

      setTimeout(() =>{
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout); 
    },

    updateTaskTitle(state, payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title
    },

    updateTaskDueDate(state, payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.dueDate = payload.dueDate
    },

    setSearch(state, value){
      state.search = value
      console.log(state.search)
    },

    toggleSorting(state){
      state.sorting = !state.sorting
    },

    setTasks(state, tasks){
      console.log('tasks:', tasks)
      state.tasks = tasks
    },


  },

  actions: {
    addTask({ commit }, newTaskTitle){
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      }
      db.collection('tasks').add(newTask).then(() => {
        commit('addTask', newTask)
        commit('showSnackbar', 'Task added!')
      })
      
    },
    
    doneTask({ state, commit }, id ){
      let task = state.tasks.filter(task => task.id === id)[0]
      console.log(task)
      db.collection('tasks').doc({ id: id }).update({
        done: !task.done
      }).then(() => {
        commit('doneTask', id)
      })
    },
    
    deleteTask({ commit }, id) {
      db.collection('tasks').doc({ id: id }).delete().then(() => {
        commit('deleteTask', id)
        commit('showSnackbar', 'Task deleted!')
      })
    },

    updateTaskTitle({ commit }, payload){
      db.collection('tasks').doc({ id: payload.id }).update({
        title: payload.title
      }).then(() => {
        commit('updateTaskTitle', payload)
        commit('showSnackbar', 'Task updated!')
      })
    },

    updateTaskDueDate({ commit }, payload){
      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('updateTaskDueDate', payload)
        commit('showSnackbar', 'Date updated!')
      }) 
    },

    getTasks({ commit }){
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks)
      })
    },

    setTasks({ commit }, tasks){
      db.collection('tasks').set(tasks)
      commit('setTasks', tasks)

    }
    
  },
  getters: {
    tasksFiltered(state){
      if(!state.search){
        return state.tasks
      }
      return state.tasks.filter(task => task.title.toLowerCase().includes(state.search.toLowerCase()))
    }
  }
})
