<template>
    <div class="myLog">
        <div class="box-wliHeader">
            <div class="wli-back icon-back" onclick="history.back()"></div>
            <div class="wli-title">
                <p>我的日志</p>
            </div>
        </div>
        <div class="main-body body-height">
            <div class="logContent">
                <ul class="logUl">
                    <li class="clearboth" v-on:click="toPage">
                        <div class="logBoxLeft">
                           <p class="logTimeDay">09</p>
                           <p class="logTimeMouth">3月</p>
                        </div>
                        <div class="mylogBox">
                           <p class="logTitle">日志标题</p>
                           <p class="logMainContent">日志内容,超出部分隐藏</p>
                        </div>
                    </li>
                  <li class="clearboth">
                    <div class="logBoxLeft">
                      <p class="logTimeDay">09</p>
                      <p class="logTimeMouth">3月</p>
                    </div>
                    <div class="mylogBox">
                      <p class="logTitle">日志标题</p>
                      <p class="logMainContent">日志内容,超出部分隐藏</p>
                    </div>
                  </li>
                </ul>
              <div class="clear"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'myLog',
        data () {
            return {

            }
        },
        methods:{
          toPage: function (event) {
            var element = event.currentTarget ;
            var workLogInfo={
              //存储日志信息
            }
            this.$router.push({path:'/editLog'})
          }
        }
    }
</script>
