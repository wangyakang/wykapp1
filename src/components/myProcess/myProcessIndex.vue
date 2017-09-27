<template>
  <div class="myProcessIndex">
    <div class="box-wliHeader">
      <div class="wli-back icon-back" onclick="history.back()"></div>
      <div class="wli-title">
        <p>我的流程</p>
      </div>
    </div>
    <div class="main-body">

    </div>
    <div class="wliFooter">
      <div class="Initiating">发起流程</div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'myProcessIndex',
    data () {
      return {

      }
    },
//    methods:{
//      toPage: function (event) {
//        var element = event.currentTarget ;
//        var dataPage = $(element).attr('data-page');
//        if(dataPage=='workLog'){
//          this.$router.push({path:'/workLog'})
//        }
//      }
//    }
  }
</script>
