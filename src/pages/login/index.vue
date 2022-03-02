<!--
 * @Author: King
 * @Date: 2022-03-02 21:31:56
 * @LastEditTime: 2022-03-02 22:11:43
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \vue-element-template\src\pages\login\index.vue
-->
<template>
  <el-button @click="login">登录</el-button>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    login() {
      this.$router.push({ name: "home" });
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped></style>
