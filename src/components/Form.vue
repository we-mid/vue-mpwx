<template>
  <div class="vote_meta option_setting js_question">
    <form id="question_0" class="vote_form" novalidate="novalidate">
      <div class="vote_meta_title group">
        <div class="vote_meta_title_opr">
          <a href="javascript:;" class="js_question_edit" @click="collapsed=!collapsed">{{collapsed ? '编辑' : '收起'}}</a>
        </div>
        <!-- <span class="vote_warn" style="display:none">问题填写完整才能添加下一个问题</span> -->
        <span class="vote_num">{{title}}</span>
        <span class="vote_question js_vote_question"></span>
      </div>
      <div class="vote_meta js_item_container vote_meta_content" :class="[collapsed && 'collapsed']">
        <div class="vote_meta_detail">
          <div class="frm_control_group">
            <label for="" class="frm_label">标题</label>
            <div class="frm_controls">
              <text-input
                :tips="'投票名称只用于管理，不显示在下发的投票内容中'"
                :fail="'需要在1到35个字之间'"
                :name="'question_title'"></text-input>
            </div>
          </div>
        </div>
        <div class="vote_meta_detail js_vote_type vote_meta_radio">
          <div class="frm_control_group">
            <div class="frm_controls vote_meta_radio">
              <radio-group
                :name="'cate'"
                :list="radios"></radio-group>
            </div>
          </div>
        </div>

        <div class="vote_meta_detail js_vote_option">
          <div class="frm_control_group">
            <div class="frm_label">分类</div>
            <div class="frm_controls">
              <dropdown :list="list"></dropdown>
            </div>
          </div>
        </div>

        <div class="vote_meta_detail js_vote_option">
          <div class="frm_control_group">
            <div class="frm_label">选项一</div>
            <div class="frm_controls">
              <text-input
                :name="'option0'">
                <div slot="addon" class="upload_area webuploader-container">
                  <a class="btn btn_upload js_vote_upload_btn webuploader-pick" id="js_upload_0_0">重新上传</a>
                  <ul class="upload_file_box" style="display:none"></ul>
                  <div id="rt_rt_1ak05mk7o1bvq1a4ja2f1m24n5l1" style="position: absolute; top: 0px; left: 0px; width: 106px; height: 32px; overflow: hidden; bottom: auto; right: auto;">
                    <input type="file" accept="image/*" style="display: none;">
                    <label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                  </div>
                </div>
              </text-input>
            </div>
            <div class="img_container" id="js_upload_0_0" style="">
              <span class="img_panel">
                <img class="preview" src="../assets/3dobe.png">
              </span>
              <a href="javascript:;" class="link_dele" id="js_delete_0_0">删除</a>
            </div>
          </div>
        </div>

        <div class="vote_meta_detail js_vote_option">
          <div class="frm_control_group">
            <div class="frm_label">选项二</div>
            <div class="frm_controls">
              <text-input
                :name="'option1'">
                <div slot="addon" class="upload_area webuploader-container">
                  <a class="btn btn_upload js_vote_upload_btn webuploader-pick" id="js_upload_0_1">上传图片</a>
                  <ul class="upload_file_box" style="display:none"></ul><div id="rt_rt_1ak05mk7r1857184a6d9ei3adg4" style="position: absolute; top: 0px; left: 0px; width: 106px; height: 32px; overflow: hidden; bottom: auto; right: auto;"><input type="file" accept="image/*" style="display: none;"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div>
                </div>
              </text-input>
            </div>
          </div>
        </div>

        <div class="vote_meta_detail js_vote_option">
          <div class="frm_control_group">
            <div class="frm_label">选项三</div>
            <div class="frm_controls">
              <text-input :name="'option2'"></text-input>
            </div>
          </div>
        </div>

        <div class="vote_meta_detail tips_wrp">
          <p id="voteAdd" class="tips_global option_tips">
            <a href="javascript:;" class="js_add_item" data-tag="0">添加选项</a>
          </p>
          <!--<p id="voteFull" class="tips_global option_tips">选项已满，不可继续添加</p>-->
        </div>

        <div class="vote_container_dec">
          <a class="btn btn_default btn_add btn_vote_add" href="javascript:;" id="js_add_question"><i class="icon14_common add_gray"></i>添加问题</a>
          <!--#0001#-->
          <p id="js_error" style="display:none;" class="frm_tips">问题填写完整才能添加下一个问题</p>
          <!--%0001%-->
          <!--<div id="js_error" style="display:none;" class="bubble_tips bubble_left warn">
            <div class="bubble_tips_inner">
              <p>问题填写完整才能添加下一个问题</p>
            </div>
            <i class="bubble_tips_arrow out"></i>
            <i class="bubble_tips_arrow in"></i>
          </div>-->
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
  import _ from 'lodash'
  import Dropdown from './Dropdown.vue'
  import TextInput from './TextInput.vue'
  import RadioGroup from './RadioGroup.vue'

  export default {
    components: { Dropdown, TextInput, RadioGroup },

    props: {
      title: {
        type: String
      }
    },

    data () {
      return {
        collapsed: false,

        radios: [
        { title: '单选', value: 1 },
        { title: '多选', value: 2 }
        ],

        fields: [
        { key: 'date', title: '时间' },
        { key: 'new', title: '新关注人数', align: 'right' },
        { key: 'lost', title: '取消关注人数', align: 'right' },
        { key: 'net', title: '净增关注人数', align: 'right' },
        { key: 'acc', title: '累积关注人数', align: 'right' },
        ],
        records: _.times(15, () => ({
          date: '2016-05-28',
          new: 1,
          lost: 1,
          net: 0,
          acc: 103
        })),

        list: _.times(10, (i) => ({
          title: `选项${i}`,
          value: i
        }))
      }
    }
  }
</script>

<style scoped>
  .vote_meta_container, .option_setting {
    border: 1px solid #e7e7eb;
    border-top: 0;
    margin-bottom: 20px;
  }
  .vote_form {
    margin-bottom: 0;
  }

  .vote_meta_title {
    font-weight: 400;
    font-style: normal;
    border-top: 1px solid #e7e7eb;
    border-bottom: 1px solid #e7e7eb;
  }
  .vote_meta.option_setting .vote_meta_title {
    padding: 10px;
    background-color: #f4f5f9;
  }

  .group:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both;
  }
  .vote_meta_title .vote_meta_title_opr {
    float: right;
  }
  .vote_warn {
    color: #e15f63;
    float: right;
  }
  .vote_num {
    float: left;
    margin-right: 1em;
  }
  .vote_question {
    display: block;
    float: left;
    width: 17em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .vote_meta_title .vote_meta_title_opr a {
    margin-left: 1em;
  }
  .vote_meta_content {
    padding: 2em 2em;
  }
  .vote_meta_content.collapsed {
    display: none;
  }

  .frm_control_group {
    padding-bottom: 25px;
  }
  .frm_label {
    float: left;
    width: 5em;
    margin-top: .3em;
    margin-right: 1em;
    font-size: 14px;
  }
  /*.vote_edit .frm_label*/
  .frm_label {
    width: 4em;
  }
  .frm_controls {
    display: table-cell;
    vertical-align: top;
    float: none;
    width: auto;
  }

  .upload_area {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
  .btn.btn_upload {
    background-color: #fff;
    background-image: -moz-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#fff));
    background-image: -webkit-linear-gradient(top,#fff 0,#fff 100%);
    background-image: -o-linear-gradient(top,#fff 0,#fff 100%);
    background-image: linear-gradient(to bottom,#fff 0,#fff 100%);
    border-color: #e7e7eb;
    color: #222;
    height: 30px;
    line-height: 30px;
    width: auto;
    padding-left: 22px;
    padding-right: 22px;
  }
  .upload_file_box {
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
    background-color: #fff;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border: 1px solid #e7e7eb;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
  }
  .upload_file_box {
    margin-top: -1px;
    padding: 5px 0;
    max-height: 300px;
  }
  /*.vote_edit .upload_area .upload_file_box*/
  .upload_area .upload_file_box {
    z-index: 4;
    right: 0;
    left: auto;
  }
  .vote_meta_detail .frm_control_group .link_delete {
    margin-left: .5em;
  }

  .img_container {
    margin-left: 5em;
    margin-top: .5em;
  }
  .img_container .img_panel {
    display: table-cell;
  }
  .img_container img {
    width: 75px;
    height: 75px;
    display: block;
  }
  .img_container .link_dele {
    display: table-cell;
    padding-left: .5em;
  }

  .vote_meta_detail.vote_meta_radio {
    padding-left: 5em;
  }
  .frm_control_group {
    padding-bottom: 25px;
  }

  .vote_meta_detail.tips_wrp {
    border-top: 1px solid #e7e7eb;
    padding-top: .5em;
  }
  .tips_global {
    color: #8d8d8d;
  }

  .btn.btn_vote_add {
    display: block;
    height: 40px;
    line-height: 40px;
  }
  .icon14_common {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    display: inline-block;
    line-height: 100px;
    overflow: hidden;
  }
  .icon14_common.add_gray {
    background: url(../assets/base_z2b638f.png) 0 -3638px no-repeat;
  }

  .vote_container_dec {
    margin-top: 20px;
  }
  .btn.btn_add i {
    margin-right: 5px;
    margin-top: -2px;
  }
</style>
