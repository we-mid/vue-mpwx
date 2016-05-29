<template>
  <div class="login_frame">
    <h3>登录</h3>
    <div class="login_err_panel" style="display:none;" id="err"> </div>
    <form class="login_form" id="loginForm">
      <div class="login_input_panel" id="js_mainContent">
        <div class="login_input">
          <i class="icon_login un"> </i>
          <input type="text" placeholder="邮箱/微信号/QQ号" id="account" name="account">
        </div>
        <div class="login_input">
          <i class="icon_login pwd"> </i>
          <input type="password" placeholder="密码" id="pwd" name="password">
        </div>
      </div>
      <!-- <div class="verifycode" style="display:none;" id="verifyDiv">
        <span class="frm_input_box">
          <input class="frm_input" type="text" id="verify" name="verify">
        </span>
        <img id="verifyImg" src="">
        <a href="javascript:;" id="verifyChange">换一张</a>
      </div> -->
      <div class="login_help_panel">
        <label class="frm_checkbox_label" :class="[remember && 'selected']">
          <i class="icon_checkbox"></i>
          <input type="checkbox" class="frm_checkbox" v-model="remember">
          记住帐号
        </label>
        <a class="login_forget_pwd" href="/acct/resetpwd?action=send_email_page">无法登录？</a>
      </div>
      <div class="login_btn_panel">
        <a class="btn_login" title="点击登录" href="javascript:" id="loginBt">登录</a>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        remember: false
      }
    }
  }
</script>

<style scoped>
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
      box-shadow: inset 0 0 0 1000px #fff;
      -moz-box-shadow: inset 0 0 0 1000px #fff;
      -webkit-box-shadow: inset 0 0 0 1000px #fff;
  }
  input[type="checkbox"], input[type="radio"] {
      box-sizing: border-box;
      padding: 0;
  }

  .login_frame {
    padding: 25px 35px 20px;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    -moz-box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    -webkit-box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    background-color: #fff;
  }
  .banner .inner .login_frame {
    width: 316px;
    float: right;
    margin-top: 25px;
  }
  .login_frame h3 {
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
  }
  .login_err_panel {
    color: #e15f63;
    font-size: 13px;
    margin-top: 5px;
  }

  .login_input_panel {
    margin-top: 5px;
  }
  .login_input {
    position: relative;
    padding: 3px 0 3px 54px;
    border: 1px solid #e7e7eb;
    margin-top: -1px;
  }
  .login_input input {
    border: 0;
    outline: 0;
    padding: 11px 0;
    vertical-align: middle;
    width: 100%;
  }
  .icon_login {
    position: absolute;
    left: 15px;
    top: 50%;
    margin-top: -11px;
    width: 16px;
    height: 18px;
    vertical-align: middle;
    display: inline-block;
  }
  .icon_login.un {
    background: url(../assets/page_login_z260591.png) 0 0 no-repeat;
  }
  .icon_login.pwd {
    background: url(../assets/page_login_z260591.png) 0 -28px no-repeat;
  }

  .login_help_panel {
    overflow: hidden;
    margin-top: 10px;
  }
  .frm_checkbox_label {
    display: inline-block;
    text-align: left;
    cursor: pointer;
    margin-right: 1em;
  }
  .login_help_panel label {
    float: left;
  }
  .icon_checkbox {
    background: url(../assets/page_login_z260591.png) 0 -56px no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 3px;
    margin-top: -2px;
  }
  .selected .icon_checkbox {
    background: url(../assets/page_login_z260591.png) 0 -82px no-repeat;
  }

  .frm_checkbox {
    position: absolute;
    left: -999em;
  }
  .login_forget_pwd {
    float: right;
  }

  .login_btn_panel {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .btn_login {
    display: inline-block;
    overflow: visible;
    vertical-align: middle;
    text-align: center;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    background-color: #44b549;
    background-image: -moz-linear-gradient(top,#44b549 0,#44b549 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#44b549),to(#44b549));
    background-image: -webkit-linear-gradient(top,#44b549 0,#44b549 100%);
    background-image: -o-linear-gradient(top,#44b549 0,#44b549 100%);
    background-image: linear-gradient(to bottom,#44b549 0,#44b549 100%);
    border-color: #44b549;
    color: #fff;
    height: 33px;
    line-height: 33px;
    width: 120px;
    padding-left: 0;
    padding-right: 0;
  }
  .btn_login:hover {
    text-decoration: none;
    background-color: #2f9833;
    background-image: -moz-linear-gradient(top,#2f9833 0,#2f9833 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#2f9833),to(#2f9833));
    background-image: -webkit-linear-gradient(top,#2f9833 0,#2f9833 100%);
    background-image: -o-linear-gradient(top,#2f9833 0,#2f9833 100%);
    background-image: linear-gradient(to bottom,#2f9833 0,#2f9833 100%);
    border-color: #2f9833;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    color: #fff;
  }
</style>
