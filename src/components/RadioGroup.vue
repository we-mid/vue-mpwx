<template>
  <div>
    <label v-for="item in list" class="vote_radio_label frm_radio_label" :class="{ selected: curr == item.value }"
      @click="curr = item.value">
      <i class="icon_radio"></i>
      <span type="label_content">{{item.title}}</span>
    </label>
    <input type="hidden" name="{{name}}" value="{{curr}}">
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
      }
    },

    data () {
      return {
        curr: this.list[0].value
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
  .icon_radio {
    background: url(../assets/base_z2b638f.png) 0 0 no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    display: inline-block;
    margin-top: -0.2em;
  }
  .icon_radio {
    margin-right: 4px;
  }
  .icon_radio, .icon_checkbox {
    margin-right: 3px;
    margin-top: -2px;
  }
  .icon_radio {
    background: url(../assets/base_z2b638f.png) 0 -182px no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    display: inline-block;
  }
  .icon_radio.selected, .selected .icon_radio {
    background: url(../assets/base_z2b638f.png) 0 -26px no-repeat;
  }
  .icon_radio.selected, .selected .icon_radio {
    background: url(../assets/base_z2b638f.png) 0 -208px no-repeat;
  }
  .frm_radio, .frm_checkbox {
    position: absolute;
    left: -999em;
  }
</style>
