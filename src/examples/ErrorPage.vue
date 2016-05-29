<template>
  <app-header></app-header>
  <app-body>
    <div class="page_error_msg">
      <div class="inner">
        <span class="icon_wrp">
          <i class="icon_page_error"></i>
        </span>
        <div class="msg_content">
          <h2>发生错误，请点击<a v-link="'/'">返回首页</a></h2>
        </div>
      </div>
    </div>
  </app-body>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppBody from './AppBody.vue'

  export default {
    components: { AppHeader, AppBody }
  }
</script>

<style scoped>
  .page_error_msg .inner {
    text-align: center;
    padding-top: 170px;
  }

  .page_error_msg .icon_wrp {
    display: inline-block;
  }
  .icon_page_error {
    background: url(../assets/page_error_z264f38.png) 0 0 no-repeat;
    width: 224px;
    height: 172px;
    vertical-align: middle;
    display: inline-block;
  }
  .icon_page_error.notfound {
    background-position: 0 -182px;
  }

  .page_error_msg .msg_content {
    padding-top: 20px;
  }
  .page_error_msg h2 {
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }

  /*.icon_page_error.notfound {
    background-position: 0 -182px;
  }*/
</style>
