<template>
  <div class="head" id="header">
    <div class="head_box">
      <div class="inner wrp">
        <h1 class="logo"><a v-link="'/'" title="微信公众平台"></a></h1>
        <div class="account"> </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .head_box {
    position: relative;
    background-color: #fff;
    border-top: 4px solid #44b549;
    border-bottom: 1px solid #d9dadc;
  }
  .head .inner:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both;
  }

  .head .inner {
    height: 60px;
  }
  .head .inner.wrp {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    float: left;
    padding-top: 10px;
    font-size: 24px;
  }
  .logo a:before {
    display: inline-block;
    content: url(../assets/bg_logo2491a6.png);
  }
</style>
