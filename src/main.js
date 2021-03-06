/*
 * @Author: King
 * @Date: 2022-03-02 19:31:41
 * @LastEditTime: 2022-03-02 22:18:06
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \vue-element-template\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";

Vue.use(Element);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
