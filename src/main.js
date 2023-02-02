import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'


library.add(faArrowLeft,faArrowRight)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
