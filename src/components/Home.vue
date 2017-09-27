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
          <div class="go-mannage">
            <p>待我审批</p>
            <div class="badge">22</div>
          </div>
          <div class="go-mannage">
            <p>出勤天数</p>
            <div class="badge">22</div>
          </div>
        </div>
        <div class="interval"></div>
        <div class="application">
          <p>应用</p>
          <div class="go-mannage">
            <p>待我审批</p>
            <div class="badge">22</div>
          </div>
          <div class="go-mannage">
            <span>出勤天数</span>
            <div class="badge">22</div>
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
    <button v-on:click="toPage">点击跳转页面</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      selected: 'work',
      active:'work-container'
    }
  },
  watch:{
    selected:function(value){
      if(value=='work'){
        this.active = 'work-container';
      }else if(value == 'my') {
        this.active = 'my-container';
      }
    }
  },
  methods :{
    toPage:function(event){
       this.$router.push({path:'/Approval'})
    }
  }
}
</script>

