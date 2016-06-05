<template>
  <div class="menu_box" id="menuBar">
    <dl class="menu no_extra">
      <dt class="menu_title">
        <i class="icon_menu"></i>{{title}}
      </dt>
      <dd v-for="item in list" class="menu_item"
        :class="{ selected: selected === item }">
        <a v-link="item.link">{{item.title}}</a>
      </dd>
      <!-- <dd class="menu_plugins"><a class="btn_plugins_add" data-id="10025" href="/cgi-bin/plugincenter?t=service/plugins&amp;act=all&amp;token=1062882139&amp;lang=zh_CN">添加功能插件<i class="icon_common new"></i></a></dd> -->
    </dl>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    props: {
      title: {
        type: String
      },
      list: {
        type: Array,
        default: []
      }
    },

    computed: {
      selected () {
        return _.find(this.list, this.match)
      }
    },

    methods: {
      match ({ link }) {
        console.log(link)
        console.log(this.$route.path)
        if (link === this.$route.path) return true
        const curr = this.$route.path
        const index = curr.indexOf(link)
        if (index === 0) {
          switch (curr[link.length]) {
            case '?':
            case '#':
            case '/':
              return true
          }
        }
        return false
      }
    }
  }
</script>

<style scoped>
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
    background: url(../assets/icon_menu_function.png) no-repeat;
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
</style>
