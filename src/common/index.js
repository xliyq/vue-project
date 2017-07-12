import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Http from '../api/http'
import '../mock/index'

Vue.use(ElementUI)
Vue.prototype.$http = Http

import './vueFilter'
