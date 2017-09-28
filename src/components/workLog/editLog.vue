<template>
  <div class="editLog">
    <div class="box-wliHeader">
      <div class="wli-back icon-back" onclick="history.back()"></div>
      <div class="wli-title">
        <p>修改日志</p>
      </div>
    </div>
    <div class="main-body">
      <div class="writeDiaryBox">
        <div class="titleWriteLog">
          <span>标题:</span>
          <input type="text" value="请输入日志标题">
        </div>
        <div class="contentWriteLog">
          <span>内容:</span>
          <textarea name="" id="" cols="30" rows="10">发的</textarea>
          <span class="lastEdit"><i class="icon-prompt"></i>Last Changes On <span>2017年9月28日</span></span>
        </div>
      </div>
    </div>
    <div class="wliFooter">
      <div class="myDiary">删除</div>
      <div class="writeDiary">保存修改</div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'editLog',
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
