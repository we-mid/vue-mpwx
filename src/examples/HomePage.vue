<template>
  <div>
    <app-header></app-header>
    <app-body>
      <div class="wrp_overview">
        <mp-table></mp-table>
      </div>
    </app-body>
  </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  import AppBody from '../components/AppBody.vue'
  import Table from '../components/Table.vue'

  export default {
    name: 'HomePage',
    components: {
      AppHeader, AppBody,
      'mp-table': Table
    }
  }
</script>

<style scoped>
  .wrp_overview {
    padding: 20px 30px 40px;
    position: relative;
  }
</style>
