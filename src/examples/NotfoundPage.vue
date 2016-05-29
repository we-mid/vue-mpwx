<template>
  <div class="page_error_msg">
    <div class="inner">
      <span class="icon_wrp">
        <i class="icon_page_error"></i>
      </span>
      <div class="msg_content">
        <h2>访问的页面不存在，请点击<a v-link="'/'">返回首页</a></h2>
      </div>
    </div>
  </div>
</template>

<style scoped src="./ErrorPage.css"></style>
<style scoped>
  .icon_page_error {
    background-position: 0 -182px;
  }
</style>
