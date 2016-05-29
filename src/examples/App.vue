<template>
  <div id="app">
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from '../components/AppFooter.vue'

  export default {
    components: { AppFooter }
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
