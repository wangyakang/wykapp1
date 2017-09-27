<template>
  <div class="home">
    <!--header-->
    <header  class="header-style">
        <div class="nav-left">
          <span>M-office</span>
        </div>
        <div class="nav-right">
          <div class="icon-setting icon-box"></div>
          <div class="icon-message icon-box"></div>
        </div>
    </header>
    <!--tab-container-->
    <mt-tab-container v-model="active">
      <!--工作列表-->
      <mt-tab-container-item id="work-container">
        <!--banner-->
        <div class="banner-box">
          <mt-swipe :auto="4000">
            <mt-swipe-item class="banner-back">
            </mt-swipe-item>
            <mt-swipe-item class="banner-back">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!--mannage-->
        <div class="mannage-box">
          <div class="go-mannage" data-page="approval" >
            <p>待我审批</p>
            <div class="badge">22</div>
          </div>
          <div class="go-mannage" data-page="attendance" v-on:click="toPage">
            <p>出勤天数</p>
            <div class="badge">22</div>
          </div>
        </div>
        <div class="interval"></div>
        <div class="application">
          <p class="font-application">应用</p>
          <div class="go-application" data-page="checkAttendance" v-on:click="toPage">
            <p>考勤打卡</p>
            <div class="badge icon-attendance"></div>
          </div>
          <div class="go-application" data-page="workLog" v-on:click="toPage">
            <p>工作日志</p>
            <div class="badge icon-journal"></div>
          </div>
          <div class="go-application" data-page="ccprocess" v-on:click="toPage">
            <p>抄送流程</p>
            <div class="badge icon-cc"></div>
          </div>
          <div class="go-application" data-page="myProcess" v-on:click="toPage">
            <p>我的流程</p>
            <div class="badge icon-process"></div>
          </div>
        </div>
      </mt-tab-container-item>
      <!--我的信息列表页-->
      <mt-tab-container-item id="my-container">

      </mt-tab-container-item>
    </mt-tab-container>
    <!--底部tabbar-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="work">
        <div class="icon-work"></div>
        <span class="fontsizeS">工作</span>
      </mt-tab-item>
      <mt-tab-item id="my">
        <div class="icon-my"></div>
        <span class="fontsizeS">我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      selected: 'work',
      active: 'work-container'
    }
  },
  watch: {
    selected: function (value) {
      if (value == 'work') {
        this.active = 'work-container';
      } else if (value == 'my') {
        this.active = 'my-container';
      }
    }
  },
  methods: {
    toPage: function (event) {
      var element = event.currentTarget;
      var dataPage = $(element).attr('data-page');
      if (dataPage == 'workLog') {  //工作日志
        this.$router.push({path: '/workLog'})
      } else if (dataPage == 'checkAttendance') { //考勤打卡
        this.$router.push({path: '/checkAttendance?value=1'})
      } else if (dataPage == 'ccprocess') { //抄送流程
        this.$router.push({path: '/ccprocess'})
      }else if (dataPage == 'myProcess') { //我的流程
        this.$router.push({path: '/myProcess'})
      }else if (dataPage == 'attendance') { //出勤天数
        this.$router.push({path: '/checkAttendance?value=2'})
      }
    }
  }
}
</script>

