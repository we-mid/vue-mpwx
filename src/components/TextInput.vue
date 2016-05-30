<template>
  <div>
    <span class="frm_input_box with_counter counter_in append vote_title count">
      <input type="text" class="frm_input" name="{{name}}" v-model="value">
      <em class="frm_input_append frm_counter"
        :class="{ warn: value.length > maxLength }">
        {{value.length}}/{{maxLength}}
      </em>
    </span>
    <slot name="addon"></slot>
    <p class="frm_msg fail" v-if="fail">
      <span for="vote_title" class="frm_msg_content" style="display: inline;">{{fail}}</span>
    </p>
    <p class="frm_tips" v-if="tips">{{tips}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String
      },
      value: {
        type: String,
        default: ''
      },
      maxLength: {
        type: Number,
        default: 35
      },
      fail: {
        type: String
      },
      tips: {
        type: String
      }
    }
  }
</script>

<style scoped>
.frm_input_box {
    display: inline-block;
    position: relative;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    width: 278px;
    font-size: 14px;
    padding: 0 10px;
    border: 1px solid #e7e7eb;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    background-color: #fff;
  }
  .frm_input_box.append {
    padding-right: 30px;
  }
  .frm_input_box.counter_in {
    padding-right: 70px;
  }
  .frm_input_box.counter_in {
    width: 228px;
    padding-right: 60px;
  }
  /*.vote_edit .frm_input_box*/
  .frm_input_box {
    width: 248px;
    margin-right: .3em;
  }

  .frm_tips, .frm_msg {
    padding-top: 4px;
    /*width: 300px;*/
    width: auto;
  }
  .frm_msg {
    /*display: none;*/
    overflow: hidden;
  }
  .frm_msg.fail {
    color: #e15f63;
  }
  .frm_tips {
    color: #8d8d8d;
  }
  /*.vote_meta .frm_tips {
    width: auto;
  }*/
  .frm_controls:after {
    content: " . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ";
    visibility: hidden;
    clear: both;
    height: 0!important;
    display: block;
    line-height: 0;
  }

  .frm_input, .frm_textarea {
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: 0;
  }
  .frm_input {
    height: 22px;
    margin: 4px 0;
  }

  .frm_input_box .frm_input_append {
    font-size: 0;
  }
  .frm_input_box.append .frm_input_append {
    position: absolute;
    top: 0;
    right: .8em;
  }
  .frm_input_box.with_counter .frm_counter {
    width: 50px;
    color: #8d8d8d;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
  }
  /*.frm_input_box.with_counter.warn .frm_counter*/
  .frm_input_box.with_counter .frm_counter.warn {
    color: #e15f63;
  }
  .frm_input_box.counter_in .frm_counter {
    right: 0;
    text-align: right;
    padding-right: 10px;
  }
</style>
