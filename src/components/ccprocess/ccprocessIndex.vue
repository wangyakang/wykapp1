<template>
  <div class="ccprocessIndex">
    <div class="box-wliHeader">
      <div class="wli-back icon-back" onclick="history.back()"></div>
      <div class="wli-title">
        <p>抄送流程</p>
      </div>
    </div>
    <div class="main-bodyCs">
      <ul>
        <li class="copyProcessBox">
          <div class="titleTime">
            系统消息 <span> 1:22</span>
          </div>
          <div class="copyCintent">
            <p>梦德发起的物品领用申请需要您进行审批</p>
          </div>
          <div class="copyPrompt">
            <div class="icon-notification"></div>
            <p>流程任务通知</p>
          </div>
          <div class="copyOperation">
            <p>已处理</p>
          </div>
        </li>
        <li class="copyProcessBox"></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'ccprocessIndex',
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
