<template>
  <div class="workLogIndex">
      <div class="box-wliHeader">
        <div class="wli-back icon-back" onclick="history.back()"></div>
        <div class="wli-title">
          <p>工作日志</p>
        </div>
      </div>
      <div class="main-body">
          <div class="logContent">
              <ul>
                <li class="logContentContent">
                  <div class="logBoxTitle">
                    <div class="headPortrait"></div>
                    <div class="logBoxName">
                      <p class="logName">用户名</p>
                      <p class="logTime">2017/09/27</p>
                    </div>
                  </div>
                  <p class="logTitle">日志标题</p>
                  <p class="logMainContent">日志内容,超出部分隐藏</p>
                </li>
              </ul>
          </div>
      </div>
      <div class="wliFooter">
        <div class="myDiary">我的日志</div>
        <div class="writeDiary">写日志</div>
      </div>
  </div>
</template>
<script>
  export default{
    name: 'workLogIndex',
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
