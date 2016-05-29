<template>
  <div id="app">
    <app-header></app-header>

    <div id="body" class="body page_error page_500">
      <div class="container_box">
        <router-view></router-view>
      </div>
    </div>

    <app-footer></app-footer>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'

  export default {
    components: { AppHeader, AppFooter }
  }
</script>

<style>
  body, h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, fieldset, textarea {
    margin: 0;
  }
  a {
    color: #459ae9;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  input, textarea, button, a {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    font-family: "Helvetica Neue","Hiragino Sans GB","Microsoft YaHei","\9ED1\4F53",Arial,sans-serif;
    color: #222;
    font-size: 14px;

    min-width: 1200px;
    background: #e7e8eb;
  }
</style>

<style scoped>
  .body {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 36px 0 88px;
  }
  .container_box {
    min-height: 700px;
    border: 1px solid #d9dadc;
    background-color: #fff;
  }
</style>
