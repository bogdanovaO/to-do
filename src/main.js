import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ThemeProvider} from 'vue-styled-components'
import basicStyles from './styles/basic.js'


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: (h) => {
    return (
      <ThemeProvider theme={ basicStyles }   >
      <App/>
      </ThemeProvider>
    )
  }
}).$mount('#app')
