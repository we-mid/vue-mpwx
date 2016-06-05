<template>
  <div style="margin-top: .3em;">
    <label v-for="item in list" class="frm_radio_label"
      :class="{ selected: value == item.value }"
      @click="selected = item.value">
      <i class="icon_checkbox"></i>
      <span type="label_content">{{item.title}}</span>
    </label>
    <input type="hidden" :name="name" :value="value">
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String
      },
      list: {
        type: Array,
        default: []
      },
      default: {
        // 字符串/数字都行
        // type: String,
        // default: ''
      }
    },

    computed: {
      value () {
        if (this.selected != null) { // 已选中值
          return this.selected
        }
        if (this.default != null) {// 指定默认值
          return this.default
        }
        if (this.list && this.list[0]) { // 第一项值
          return this.list[0].value
        }
      }
    },

    data () {
      return {
        // note: data变量 不能用_开头 无法动态更新
        // _value: null
        selected: null
      }
    }
  }
</script>

<style scoped>
  .frm_radio_label, .frm_checkbox_label {
    display: inline-block;
    text-align: left;
    cursor: pointer;
    margin-right: 1em;
  }
  .icon_checkbox {
    background: url(../assets/page_login_z260591.png) 0 -56px no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 3px;
    margin-top: -2px;
  }
  .selected .icon_checkbox {
    background: url(../assets/page_login_z260591.png) 0 -82px no-repeat;
  }
</style>
