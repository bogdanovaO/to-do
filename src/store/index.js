import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    currentNote: {},
    taskTemplate: null,
    noteTemplate: null
  },
  mutations: {
    LOAD_NOTES(state, notes) {
      state.notes = notes
    },
    EDIT_NOTE(state, note) {
      state.notes.find((el, ind) => {
        if (el.id === note.id) {
          state.notes[ind] = note
        }
      })
      const json = JSON.stringify(state.notes)
      localStorage.setItem('notes', json)
    },
    CREATE_NOTE(state, note) {
      state.notes.push(note)
      const json = JSON.stringify(state.notes)
      localStorage.setItem('notes', json)
    },
    GET_NOTE(state, id) {
      state.currentNote = state.notes.find((el) => el.id === id)
    },
    CREATE_TASK_TEMPLATE(state) {
      state.taskTemplate = create()
      function create() {
        const id = `f${(~~(Math.random()*1e8)).toString(16)}`
        return {
          id: id,
          title: '',
          finished: false
        }
      }
    },
    CREATE_NOTE_TEMPLATE(state) {
      state.noteTemplate = create()
      function create() {
        const id = `f${(~~(Math.random()*1e8)).toString(16)}`
        return {
          id: id,
          title: '',
          tasks: []
        }
      }
    },
    DELETE_TASK(state, id) {

      let ind = null
      state.notes.find((note, index) => {
        if (note.id === id) {
          ind = index

        }
      })
      state.notes.splice(ind, 1)
      const json = JSON.stringify(state.notes)
      localStorage.setItem('notes', json)
    }
  },
  actions: {
    loadNotes({
      commit
    }) {
      const json = localStorage.getItem('notes')
      if (json) {
        const notes = JSON.parse(json)
        commit('LOAD_NOTES', notes)
      }
    },
    editNote({
      commit
    }, note) {
      commit('EDIT_NOTE', note)
    },
    createNote({
      commit
    }, note) {
      commit('CREATE_NOTE', note)
    },
    getNote({
      commit
    }, id) {
      commit('GET_NOTE', id)
    },
    createTaskTemplate({
      commit
    }) {
      commit('CREATE_TASK_TEMPLATE')
    },
    createNoteTemplate({
      commit
    }) {
      commit('CREATE_NOTE_TEMPLATE')
    },
    deleteNote({
      commit
    }, id) {
      commit('DELETE_TASK', id)

    },
  },
  modules: {}
})