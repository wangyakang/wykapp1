<template>
    <div class="writeDiary">
        <div class="box-wliHeader">
            <div class="wli-back icon-back" onclick="history.back()"></div>
            <div class="wli-title">
                <p>写日志</p>
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
              </div>
            </div>
        </div>
        <div class="wliFooter">
            <div class="Initiating">发表</div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'writeDiary',
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
