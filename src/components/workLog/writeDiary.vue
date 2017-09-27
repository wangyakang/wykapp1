<template>
    <div class="writeDiary">
        <div class="box-wliHeader">
            <div class="wli-back icon-back" onclick="history.back()"></div>
            <div class="wli-title">
                <p>写日志</p>
            </div>
        </div>
        <div class="main-body">

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
