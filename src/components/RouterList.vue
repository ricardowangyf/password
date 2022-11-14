<template>
  <!-- 路由内容 -->
  <div class="password-all">
    <div class="bottonleft">
      <img :src="eal" style="border-radius: 5px" />
    </div>
    <div class="password-right">
      <div class="password-jkl">
        <h1 class="name">{{ title }}</h1>
        <h2 class="des">{{ des }}</h2>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    des: {
      type: String,
      default: "",
    },
    eal: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
  
<style>
@import url(../assets/css/RouterList.css);
</style>