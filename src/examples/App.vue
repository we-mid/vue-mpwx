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
  /* base */
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
  fieldset, legend, textarea, input {
    padding: 0;
  }
  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  textarea, input {
    color: #222;
  }
  ul, ol {
    padding-left: 0;
    list-style-type: none;
  }
  input[type="checkbox"], input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
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

  .btn {
    display: inline-block;
    overflow: visible;
    padding: 0 22px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    font-size: 14px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
  }
  .btn {
    min-width: 60px;
  }
  .btn:hover {
    text-decoration: none;
  }
  .btn_default {
    background-color: #fff;
    background-image: -moz-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#fff));
    background-image: -webkit-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -o-linear-gradient(top,#fff 0,#fff 100%);
    background-image: linear-gradient(to bottom,#fff 0,#fff 100%);
    border-color: #e7e7eb;
    color: #222;
  }
  .btn_default:hover {
    background-color: #e7e7eb;
    background-image: -moz-linear-gradient(top,#e7e7eb 0,#e7e7eb 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#e7e7eb),to(#e7e7eb));
    background-image: -webkit-linear-gradient(top,#e7e7eb 0,#e7e7eb 100%);
    background-image: -o-linear-gradient(top,#e7e7eb 0,#e7e7eb 100%);
    background-image: linear-gradient(to bottom,#e7e7eb 0,#e7e7eb 100%);
    border-color: #dadbe0;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    color: #222;
  }
</style>
