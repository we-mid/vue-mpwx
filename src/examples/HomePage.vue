<template>
  <div>
    <app-header></app-header>
    <app-body>
      <div class="col_side">
        <div class="menu_box" id="menuBar">
          <dl class="menu no_extra">
            <dt class="menu_title">
                <i class="icon_menu" style="background:url(
                https://res.wx.qq.com/mpres/htmledition/images/icon/menu/icon_menu_function.png
                ) no-repeat;"></i>功能
            </dt> 
            <dd class="menu_item selected"><a data-id="10005" href="/cgi-bin/masssendpage?t=mass/send&amp;token=1062882139&amp;lang=zh_CN">群发功能        </a></dd>
            <dd class="menu_item "><a data-id="10006" href="/advanced/autoreply?t=ivr/reply&amp;action=beadded&amp;token=1062882139&amp;lang=zh_CN">自动回复        </a></dd>
            <dd class="menu_item "><a data-id="10007" href="/advanced/selfmenu?action=index&amp;t=advanced/menu-setting&amp;token=1062882139&amp;lang=zh_CN">自定义菜单        </a></dd>
            <dd class="menu_item"><a data-id="10038" href="/cgi-bin/newoperatevote?action=list&amp;token=1062882139&amp;lang=zh_CN">投票管理        </a></dd>
            <!-- <dd class="menu_plugins"><a class="btn_plugins_add" data-id="10025" href="/cgi-bin/plugincenter?t=service/plugins&amp;act=all&amp;token=1062882139&amp;lang=zh_CN">添加功能插件<i class="icon_common new"></i></a></dd> -->
          </dl>
        </div>  
      </div>

      <div class="col_main">
        <div class="main_hd main_hd_bd">
          <h2 class="title_border">
            投票管理
            <!-- <p class="extra_info mini_tips icon_after align_title">
              <a href="http://kf.qq.com/faq/120813euEJVf1501206Jj6fy.html" target="_blank">公众平台投票规则说明 <i class="icon_mini_tips document_link"></i></a>
            </p> -->
          </h2>
        </div>

        <div class="main_bd">
          <div class="wrp_overview">
            <mp-form></mp-form>
            <mp-table style="margin-top: 20px;"></mp-table>
          </div>
        </div>
      </div>
    </app-body>
  </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  import AppBody from '../components/AppBody.vue'
  import Form from '../components/Form.vue'
  import Table from '../components/Table.vue'

  export default {
    name: 'HomePage',
    components: {
      AppHeader, AppBody,
      'mp-form': Form,
      'mp-table': Table
    }
  }
</script>

<style scoped>
  .col_side {
    min-height: 1px;
    background-color: #fff;
  }
  .side_l .col_side {
    border-right: 1px solid #e7e7eb;
  }
  .container_box.cell_layout .col_side {
    width: 17.5%;
    max-width: 208px;
  }

  .menu_box {
    margin-bottom: 150px;
  }
  .menu {
      padding-top: 6px;
  }
  .menu {
    padding-bottom: 6px;
    border-top: 1px solid #e7e7eb;
  }
  .menu.no_extra {
    border-top-width: 0;
    margin-top: 13px;
  }

  .menu_title {
    position: relative;
    padding: 0 30px 0;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    line-height: 34px;
    color: #8d8d8d;
  }
  .menu_title {
    margin-bottom: 0;
  }
  .icon_menu {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    display: inline-block;
  }
  .icon_menu {
    margin-right: 10px;
    margin-top: -0.2em;
  }
  .menu_item {
    line-height: 34px;
  }
  .menu_item:hover {
    background-color: #f4f5f9;
  }
  .menu_item.selected {
    background-color: #44b549;
    color: #fff;
  }
  .menu_item a {
    display: block;
    padding: 0 0 0 58px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: #222;
  }
  .menu_item a:hover {
    text-decoration: none;
  }
  .menu_item.selected a {
    color: #fff;
  }

  .container_box.cell_layout .col_side, .container_box.cell_layout .col_main {
    display: table-cell;
    vertical-align: top;
    word-wrap: break-word;
    word-break: break-all;
  }
  .container_box.cell_layout .col_main {
    width: 2000px;
    height: 700px;
  }

  .container_hd, .main_hd {
    line-height: 40px;
  }
  .container_hd h2, .main_hd h2 {
    font-weight: 400;
    font-style: normal;
  }
  .container_hd h2, .main_hd h2 {
    font-size: 16px;
    padding: 0 30px;
    line-height: 75px;
  }
  .main_hd_bd h2 {
    position: relative;
    line-height: normal;
    margin-bottom: 16px;
    border-bottom: 1px solid #e7e7eb;
    padding-right: 10em;
    margin-bottom: 26px;
    margin-top: 20px;
    padding-bottom: 17px;
  }
  .main_hd_bd h2 {
    margin-bottom: 0;
  }
  .main_hd h2.title_border {
    border-bottom: 1px solid #e7e7eb;
  }

  .wrp_overview {
    padding: 20px 30px 40px;
    position: relative;
  }
</style>
