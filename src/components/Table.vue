<template>
  <div class="table_wrp">
    <!-- todo: popover -->
    <div class="table_top">
      <div id="js_table_date" style="float: left;">
        <div>
          <div class="button_group">
            <div class="btn_group_item td_data_container" id="js_date_container0">
              <div class="ta_date" id="div_js_dateRangeTitle4">
                <span class="date_title" id="js_dateRangeTitle4">{{title}}</span>
                <a class="opt_sel" id="js_dateRangeTrigger4" href="#">
                  <i class="i_orderd"></i>
                </a>
              </div>
              <!-- <label class="contrast" for="needCompare_1464532039296" style="display: none;">
                <input type="checkbox" class="pc" name="needCompare_1464532039296" id="needCompare_1464532039296" value="1" disabled="disabled">对比
              </label>
              <div class="ta_date" id="div_compare_js_dateRangeTitle4" style="display: none;">
                <span name="dateCompare" id="js_dateRangeTitle4Compare" class="date_title" style="display: none;">2016-03-30 至 2016-04-28</span>
                <a class="opt_sel" id="compare_trigger_0" href="#">
                  <i class="i_orderd"></i>
                </a>
              </div> -->
            </div>
            <div class="btn_group_item td_data_container" id="js_single_timer_container"> </div>
          </div>
        </div>
      </div>
      <div class="right_box">
        <a target="_blank" id="js_download_detail" href="/misc/useranalysis?&amp;download=1&amp;begin_date=2016-04-29&amp;end_date=2016-05-28&amp;source=99999999&amp;token=747190604&amp;lang=zh_CN">下载表格</a>
        <a class="right_box_link">
          <i class="icon_msg_mini ask" id="js_table_ask"></i>
        </a>
      </div>
    </div>

    <table class="table" cellspacing="0">
      <thead class="thead" style="background: transparent">
        <tr>
          <th v-for="item in fields" data-type="{{item.key}}"
            class="table_cell rank_area" :class="[
              item.align === 'right' && 'tr'
            ]">
            {{item.title}}
            <span class="icon_rank">
              <i class="arrow arrow_up"></i>
              <i class="arrow arrow_down"></i>
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr v-for="item in records">
          <td v-for="f in fields" class="table_cell" :class="[
            f.align === 'right' && 'tr'
          ]">
            {{item[f.key]}}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="turn_page tr">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      fields: {
        type: Array,
        required: true
      },
      records: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  /* base */
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

  .table_wrp {
    position: relative;
    border: 1px solid #e7e7eb;
  }
  .table_top {
    position: relative;
    background-color: #f4f5f9;
    overflow: hidden;
  }
  .button_group {
    font-size: 0;
  }
  .button_group .btn_group_item {
    font-size: 14px;
    margin-right: -1px;
    vertical-align: top;
  }
  .button_group .td_data_container {
    display: inline-block;
  }

  .ta_date {
    border: 1px solid #d8d8d8;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #fefefe;
    background-image: -ms-linear-gradient(top,#fafafa,#f5f5f5);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fafafa),to(#f5f5f5));
    background-image: -moz-linear-gradient(top,#fafafa,#f5f5f5);
    background-image: -o-linear-gradient(top,#fafafa,#f5f5f5);
    background-image: linear-gradient(top,#fafafa,#f5f5f5);
    background-repeat: repeat-x;
    float: left;
  }
  .ta_date {
    border: 1px solid #e6e7ec;
    background-color: #fff;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    background-image: none;
    line-height: 30px;
    padding-left: 10px;
  }
  .table_top .ta_date {
    height: 40px;
    line-height: 40px;
    background-color: #f4f5f9;
    overflow: hidden;
    border: 0;
  }

  .ta_date .date_title {
    font-family: Arial;
    font-size: 14px;
    color: #666;
    padding: 6px 10px;
    border-right: 1px solid #d8d8d8;
    vertical-align: middle;
    cursor: pointer;
  }
  .ta_date .date_title {
    min-width: 76px;
    padding: 0;
    color: #222;
    font-family: "Helvetica Neue","Hiragino Sans GB","Microsoft YaHei","\9ED1\4F53",Arial,sans-serif;
    border: 0;
    display: inline-block;
    vertical-align: top;
    font-family: "Helvetica Neue","Hiragino Sans GB","Microsoft YaHei","\9ED1\4F53",Arial,sans-serif;
  }

  .ta_date .opt_sel {
    width: 30px;
    height: 28px;
    line-height: 28px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    margin-left: -4px;
  }
  .ta_date .opt_sel {
    vertical-align: top;
  }

  .ta_date .i_orderd {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 5px solid #c6c6c6;
    border-right: 5px dashed transparent;
    border-left: 5px dashed transparent;
    font-size: 0;
    content: "";
    overflow: hidden;
  }
  .button_group .btn_group_item .i_orderd {
    margin-top: -2px;
  }
  .table_top .ta_date .i_orderd {
    right: 20px;
    margin-bottom: -11px;
    border-width: 6px;
    border-top: 10px solid #999;
  }

  .right_box {
    float: right;
    overflow: hidden;
  }
  .right_box a {
    float: left;
    display: block;
    height: 40px;
    line-height: 40px;
    border-right: 1px solid #e7e7eb;
    border-left: 1px solid #e7e7eb;
    padding: 0 20px;
  }
  .right_box .right_box_link {
    border: 0 none;
  }
  .right_box_link:hover {
    text-decoration: none;
  }
  .icon_msg_mini {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    display: inline-block;
  }
  .icon_msg_mini.ask {
    background: url(../assets/base_z2b638f.png) 0 -1102px no-repeat;
  }

  .table {
    width: 100%;
    font-size: 14px;
    background-color: #fff;
    text-align: center;
    border-top: 1px solid #e7e7eb;
    border-bottom: 1px solid #e7e7eb;
    border-spacing: 0;
    border-width: 1px;
  }
  .table_cell {
    padding: 0;
    font-weight: 400;
    font-style: normal;
  }
  .table_cell {
    padding-left: 15px;
    padding-right: 15px;
  }
  .table_cell.tr {
    text-align: right;
  }

  .thead .table_cell {
    line-height: 32px;
    border-left: 1px solid #e7e7eb;
    border-bottom: 1px solid #e7e7eb;
  }
  .thead .table_cell {
    border-left-width: 0;
    line-height: 40px;
  }
  .table_cell:first-child {
    text-align: left;
  }
  .thead .table_cell:first-child {
    border-left-width: 0;
  }

  .tbody .table_cell {
    padding-top: 6px;
    padding-bottom: 6px;
    border-top: 1px solid #e7e7eb;
  }
  .tbody .table_cell {
    padding-top: 9px;
    padding-bottom: 9px;
  }
  .tbody tr:first-child .table_cell {
    border-top-width: 0;
  }

  /*.rank_area:hover {*/
  .rank_area {
    cursor: pointer;
  }
  .icon_rank {
    display: inline-block;
    vertical-align: middle;
    margin-top: -3px;
    position: relative;
    width: 10px;
    height: 12px;
  }
  .icon_rank .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: dashed;
    border-color: transparent;
    border-top-width: 0;
    border-bottom-color: #c6c6c6;
    border-bottom-style: solid;
    vertical-align: top;
  }
  .icon_rank .arrow_down {
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom-color: transparent;
    border-bottom-style: dashed;
    border-top-width: 5px;
    border-top-color: #c6c6c6;
    border-top-style: solid;
    border-bottom-width: 0;
  }

  .turn_page {
    margin-top: 20px;
  }
  /*.user_menu_sub .turn_page {*/
  .turn_page {
      margin-bottom: 20px;
      margin-right: 20px;
  }
</style>
