/**
 * Th is responsible to initialise our APP into an element(#root) in entry file(index.html).
 * Any third party components such should be declared here
 */

import Vue from 'vue';
import App from './app.vue'
import router from './config/router'
import { nav } from "./utils";
import {i18n} from './config/i18n';
require('semantic-ui-css/semantic.css');
import InitSw from './config/InitSW';
window.$ = window.jQuery = require('jquery') // required for semanticUI to work
require('semantic-ui-css/semantic.min.css');
require('semantic-ui-css/semantic');
Vue.config.productionTip = false
Vue.prototype.$nav = nav // global nav provides option to filter routes to be outputted
InitSw.startRegistration();
  new Vue({
      i18n,
      render: h=>h(App),
      router
  }).$mount("#root")
