<template>
  <div class="dropdown_menu time" :class="[open && 'open']">
    <a href="javascript:;" class="btn dropdown_switch jsDropdownBt" @click="toggle()">
      <label class="jsBtLabel">{{curr.title}}</label>
      <i class="arrow"></i>
    </a>
    <div class="dropdown_data_container jsDropdownList">
      <ul class="dropdown_data_list">
        <li v-for="(i, item) in list" class="dropdown_data_item"
          @click="select(item)">
          <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{{item.value}}">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <input type="hidden" name="{{name}}" value="{{curr.value}}">
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }
    },

    data () {
      return {
        open: false,
        curr: this.list[0]
      }
    },

    methods: {
      toggle () {
        this.open = !this.open
      },

      select (item) {
        this.curr = item
        this.$dispatch('mpwx-select', item)
        this.open = false
      }
    }
  }
</script>

<style scoped>
  .dropdown_menu {
    display: inline-block;
    position: relative;
    width: 95px;
    line-height: normal;
    text-align: left;
    font-size: 0;
  }
  .dropdown_menu {
    vertical-align: middle;
    width: 116px;
  }
  .date_select .dropdown_menu, .date_select .datepicker_area {
    vertical-align: middle;
    margin: 0 3px;
    letter-spacing: normal;
    font-size: 14px;
  }

  .dropdown_data_container {
    display: none;
    position: absolute;
    top: 100%;
    margin-top: -1px;
    left: 0;
    z-index: 1;
    min-width: 100%;
  }
  .dropdown_data_list {
    max-height: 150px;
    min-height: 2em;
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid #d9dadc;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    background-color: #fff;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    font-size: 14px;
  }
  .dropdown_data_list {
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    padding: 5px 0 10px;
  }
  .dropdown_data_item {
    line-height: 30px;
  }
  .dropdown_data_item:hover {
    background-color: #f4f5f9;
  }
  .dropdown_data_item a {
    display: block;
    text-decoration: none;
    color: #222;
    white-space: nowrap;
    padding: 0 28px 0 10px;
  }

  .dropdown_switch {
    position: relative;
  }
  .btn.dropdown_switch {
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
    padding-left: 0;
    padding-right: 0;
    display: block;
    text-align: left;
  }
  .btn.dropdown_switch {
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
  }

  .dropdown_switch label {
    display: block;
    cursor: pointer;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-wrap: normal;
    word-break: normal;
    margin-left: 10px;
    margin-right: 25px;
  }
  .dropdown_switch .arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -2.5px;
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: dashed;
    border-color: transparent;
    border-bottom-width: 0;
    border-top-color: #c6c6c6;
    border-top-style: solid;
  }

  .dropdown_data_container {
    display: none;
    position: absolute;
    top: 100%;
    margin-top: -1px;
    left: 0;
    z-index: 1;
    min-width: 100%;
  }
  .dropdown_menu.open .dropdown_data_container {
    display: block;
  }
</style>