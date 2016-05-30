<template>
  <div slot="foot" class="pagination" id="wxPagebar_1464532039065">
    <span class="page_nav_area">
      <a href="javascript:void(0);" class="btn page_first" style="display: none;"></a>
      <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>
        <span class="page_num">
          <label>{{curr}}</label>
          <span class="num_gap">/</span>
          <label>{{total}}</label>
        </span>
      <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>
      <a href="javascript:void(0);" class="btn page_last" style="display: none;"></a>
    </span>
    <span class="goto_area">
      <input type="text" v-model="to">
      <a class="btn page_go"
        @click="$dispatch('mpwx-page-goto', to)">跳转</a>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      curr: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 1
      }
    }
  }
</script>

<style scoped>
  .pagination {
    margin: 15px 20px;
    margin-right: 0;
    text-align: right;
  }
  .pagination .btn {
    min-width: 0;
  }

  .page_nav_area, .goto_area {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
  }
  .page_nav_area {
    letter-spacing: 4px;
  }
  .page_nav_area .btn {
    letter-spacing: normal;
  }

  .btn.page_first, .btn.page_last, .btn.page_go {
    background-color: #fff;
    background-image: -moz-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#fff));
    background-image: -webkit-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -o-linear-gradient(top,#fff 0,#fff 100%);
    background-image: linear-gradient(to bottom,#fff 0,#fff 100%);
    border-color: #e6e7ec;
    color: #222;
    height: 30px;
    line-height: 30px;
    width: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  .btn.page_first:hover, .btn.page_last:hover, .btn.page_go:hover {
    background-color: #e6e7ec;
    background-image: -moz-linear-gradient(top,#e6e7ec 0,#e6e7ec 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#e6e7ec),to(#e6e7ec));
    background-image: -webkit-linear-gradient(top,#e6e7ec 0,#e6e7ec 100%);
    background-image: -o-linear-gradient(top,#e6e7ec 0,#e6e7ec 100%);
    background-image: linear-gradient(to bottom,#e6e7ec 0,#e6e7ec 100%);
    border-color: #dadbe0;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    color: #000;
  }

  .btn.page_prev, .btn.page_next {
    position: relative;
    font-size: 0;
    letter-spacing: -5px;
    background-color: #fff;
    background-image: -moz-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#fff));
    background-image: -webkit-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -o-linear-gradient(top,#fff 0,#fff 100%);
    background-image: linear-gradient(to bottom,#fff 0,#fff 100%);
    border-color: #e6e7ec;
    color: #222;
    height: 30px;
    line-height: 30px;
    width: auto;
    padding-left: 14px;
    padding-right: 14px;
  }
  .btn.page_prev:hover, .btn.page_next:hover {
    background-color: #e6e7ec;
    background-image: -moz-linear-gradient(top,#e6e7ec 0,#e6e7ec 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#e6e7ec),to(#e6e7ec));
    background-image: -webkit-linear-gradient(top,#e6e7ec 0,#e6e7ec 100%);
    background-image: -o-linear-gradient(top,#e6e7ec 0,#e6e7ec 100%);
    background-image: linear-gradient(to bottom,#e6e7ec 0,#e6e7ec 100%);
    border-color: #dadbe0;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    color: #000;
  }

  .page_prev .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: dashed;
    border-color: transparent;
    border-left-width: 0;
    border-right-color: #919191;
    border-right-style: solid;
  }
  .btn.page_prev .arrow, .btn.page_next .arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6px;
    margin-left: -3px;
  }
  .page_next .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: dashed;
    border-color: transparent;
    border-right-width: 0;
    border-left-color: #919191;
    border-left-style: solid;
  }
  .btn.page_prev .arrow, .btn.page_next .arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6px;
    margin-left: -3px;
  }

  .page_num {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    letter-spacing: normal;
  }
  .goto_area {
    margin-left: 8px;
  }
  .goto_area input[type="text"] {
    vertical-align: middle;
    width: 75px;
    height: 22px;
    line-height: 22px;
    padding: 4px 0;
    border: 1px solid #e7e7eb;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    text-align: center;
    font-size: 14px;
    margin-right: 4px;
  }
</style>
