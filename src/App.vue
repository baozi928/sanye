<template>
  <div id="app">
    <router-view/>
    <!--    用户访问money组件时，页面显示在这里-->
    <hr>
</div>
</template>

<style lang="scss">
@import "./assets/style/reset.scss";
@import "./assets/style/helper.scss";

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    line-height: 1.5;
    font-family: $font-hei;
    font-size: 16px;
    //background: #f6ece3;
  }
  #app{
    max-width: 500px;
    margin: 0 auto;
    background: #f6ece3;
  }

</style>
