/*
 * @Author: King
 * @Date: 2022-03-02 10:53:36
 * @LastEditTime: 2022-03-02 22:16:58
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \vue-element-template\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import Login from "@/pages/login/index";
import Home from "@/pages/home/index";
import Layout from "@/Layout/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/layout",
      name: "Layout",
      component: Layout
    }
  ]
});
