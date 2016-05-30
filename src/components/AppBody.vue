<template>
  <div id="body" class="body">
    <div class="container_box cell_layout side_l">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .body {
    width: 1200px;
    /*width: 1000px;*/
    margin-left: auto;
    margin-right: auto;
    /*padding: 36px 0 88px;*/
    padding: 36px 0 0;
  }
  .container_box {
    min-height: 700px;
    border: 1px solid #d9dadc;
    background-color: #fff;
  }
</style>
