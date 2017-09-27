<template>
  <div class="checkAttendance">
    <div class="box-wliHeader">
      <div class="wli-back icon-back" onclick="history.back()"></div>
      <div class="wli-title">
        <p>{{title}}</p>
      </div>
    </div>
    <div class="main-body">
      <mt-tab-container v-model="active">
        <!--打卡-->
        <mt-tab-container-item id="punchClock">
            打卡
        </mt-tab-container-item>
        <!--统计-->
        <mt-tab-container-item id="statistics">
            统计
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="wliFooter">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="punchClock-select">
          <div class="box-icon">
            <div class="icon-punchClock"></div>
            <span class="fontsizeS">打卡</span>
          </div>
        </mt-tab-item>
        <mt-tab-item id="statistics-select">
          <div class="icon-statistics"></div>
          <span class="fontsizeS tj">统计</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'checkAttendance',
    data () {
      return {
        selected: 'punchClock-select',
        active:'punchClock',
        title:'考勤打卡'
      }
    },
    mounted () {   //判断考勤打卡路径
      if(this.GetQueryString() == 1){
        this.selected = 'punchClock-select'
        this.active = 'punchClock'
      }else if(this.GetQueryString() == 2){
        this.selected = 'statistics-select'
        this.active = 'statistics'
      }
    },
    watch:{
      selected:function(value){
        if(value=='punchClock-select'){
          this.active = 'punchClock';
          this.title='考勤打卡';
        }else if(value == 'statistics-select') {
          this.active = 'statistics';
          this.title='考勤月度汇总';
        }
      }
    },
    methods:{
      GetQueryString:function (){
        var str=location.href; //取得整个地址栏
        var num=str.indexOf("?")
        return str.substring(num + 7,num + 8);
      },
    }
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
