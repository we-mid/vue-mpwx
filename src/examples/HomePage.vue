<template>
  <div>
    <app-header></app-header>
    <app-body>
      <div class="col_side">
        <menubar :title="menu.title" :list="menu.list"></menubar>
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
            <mp-form :title="'问题一'"></mp-form>
            <mp-table style="margin-top: 20px;"
              :title="title" :fields="fields" :records="records">
              <pagination slot="foot" :total="3"
                @mpwx-page-goto="handlePageGoto"></pagination>
            </mp-table>
          </div>
        </div>
      </div>
    </app-body>
  </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  import AppBody from '../components/AppBody.vue'
  import Menubar from '../components/Menubar.vue'
  import Pagination from '../components/Pagination.vue'
  import Form from '../components/Form.vue'
  import Table from '../components/Table.vue'

  export default {
    name: 'HomePage', // for vue-devtool

    components: {
      AppHeader, AppBody, Menubar, Pagination,
      'mp-form': Form,
      'mp-table': Table
    },

    data () {
      return {
        menu: {
          title: '个人数据中心',
          list: [
            { title: '健康管理', link: '/health', selected: true },
            { title: '备忘管理', link: '/todo' },
            { title: '博客管理', link: '/blog' },
          ]
        },

        title: '2016-03-30 至 2016-04-28',
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
        }))
      }
    },

    methods: {
      handlePageGoto (to) {
        console.log('pageGoto', to)
      }
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
