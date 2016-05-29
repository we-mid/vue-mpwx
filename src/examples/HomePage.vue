<template>
  <div>
    <app-header>
      <div slot="account" class="account_meta account_faq">
          第一次使用公众平台？                            <a href="/cgi-bin/readtemplate?t=register/step1_tmpl&amp;lang=zh_CN">立即注册</a><i class="account_line">|</i><a href="http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html" target="_blank">使用帮助</a>
      </div>

      <div class="banner">
        <div class="inner wrp">
          <login-frame></login-frame>

          <!-- <dl class="qrcode_panel">
            <dt>
            <img src="https://res.wx.qq.com/mpres/htmledition/images/mp_qrcode218877.gif" data-pin-nopin="true">
            </dt>
            <dd>扫描并关注<br>微信公众平台</dd>
          </dl> -->
        </div>
      </div>
    </app-header>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppBody from './AppBody.vue'
  import LoginFrame from './LoginFrame.vue'

  export default {
    name: 'HomePage',
    components: { AppHeader, AppBody, LoginFrame }
  }
</script>

<style>
  .body {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  .foot {
    margin-top: 70px;
    padding: 30px 0;
  }
</style>
<style scoped>
  .account_meta {
    display: inline-block;
    vertical-align: bottom;
  }
  .account_line {
    font-weight: 400;
    font-style: normal;
    color: #8d8d8d;
    margin: 0 5px;
    position: relative;
    top: -1px;
    font-size: 12px;
  }
  .account_faq {
    padding-top: 18px;
  }

  .banner {
    background: transparent url(../assets/bg_login_banner_v5218877.jpg) no-repeat center center;
    background-color: #090b1a;
  }

  .banner .inner {
    height: 460px;
    position: relative;
  }
  .head .inner:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both;
  }

  /*.head .inner.wrp {*/
  .banner .inner.wrp {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
