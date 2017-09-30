<template>
  <div class="checkAttendance">
    <div class="box-wliHeader">
      <div class="wli-back icon-back" onclick="history.back()"></div>
      <div class="wli-title">
        <p>{{title}}</p>
      </div>
    </div>
    <div class="main-body">
      <div class="logBoxTitle" style="height: 10rem;border-bottom: 1px solid rgb(216,216,216);padding-left: 4rem;padding-top: 1rem;position: relative;background: #fff">
        <div class="headPortrait"></div>
        <div class="logBoxName">
          <p class="logName">用户名</p>
          <p class="logTime">考勤组: <span>考勤</span></p>
        </div>
        <div class="selectTime">2017.09.31</div>
      </div>
      <mt-tab-container v-model="active">
        <!--打卡-->
        <mt-tab-container-item id="punchClock">
            <div class="clockBox">
              <div class="clockTitle">
                <p>一日之计在于晨</p>
              </div>
              <div class="clockBoxa">
                <div class="clockOn">
                  <div class="clockContentTitle">
                    <p>上午:8:00:00(上班时间 8:00:00)</p>
                  </div>
                  <div class="clockDakaBox">
                    <div class="clockDaka">
                      <h2>9:00:23</h2>
                      <h3>更新打卡</h3>
                    </div>
                    <p>当前位置:萧山区大成名座</p>
                  </div>
                </div>
              </div>
            </div>
        </mt-tab-container-item>
        <!--统计-->
        <mt-tab-container-item id="statistics">
          <ul class="statistics">
            <li class="statis">
              <p>出勤天数:</p>
              <p>2天</p>
            </li>
            <li class="statis">
              <p>出勤天数:</p>
              <p>2天</p>
            </li>
            <li class="statis">
              <p>出勤天数:</p>
              <p>2天</p>
            </li>
            <li class="statis">
              <p>出勤天数:</p>
              <p>2天</p>
            </li>
            <li class="statis">
              <p>出勤天数:</p>
              <p>2天</p>
            </li>
            <li class="statis">
              <p>出勤天数:</p>
              <p>2天</p>
            </li>
            <li class="statis">
              <p>出勤天数:</p>
              <p>2天</p>
            </li>
          </ul>
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
