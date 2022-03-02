/*
 * @Author: King
 * @Date: 2022-03-02 10:53:36
 * @LastEditTime: 2022-03-02 16:24:56
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \vue-element-template\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
