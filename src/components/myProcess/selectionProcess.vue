<template>
  <div class="selectionProcess">
    <div class="box-wliHeader">
      <div class="wli-back icon-back" onclick="history.back()"></div>
      <div class="wli-title">
        <p>选择流程</p>
      </div>
    </div>
    <div class="main-bodyCs">
      <div class="vacationBox">
        <div class="vacationTitle">
          <p>出勤休假(4)</p>
        </div>
        <ul class="vacationContentBox">
          <li class="vacationContent">
            <div class="icon-fillCard logoVacation"></div>
            <p>补卡申请</p>
          </li>
          <li class="vacationContent">
            <div class="icon-leave logoVacation"></div>
            <p>请假</p>
          </li>
          <li class="vacationContent">
            <div class="icon-businessTravel logoVacation"></div>
            <p>出差</p>
          </li>
          <li class="vacationContent">
            <div class="icon-out logoVacation"></div>
            <p>外出</p>
          </li>
          <li class="vacationContent">
            <div class="icon-fillCard logoVacation"></div>
            <p>夜勤请假</p>
          </li>
        </ul>
      </div>
      <div class="vacationBox">
        <div class="vacationTitle">
          <p>其他(3)</p>
        </div>
        <ul class="vacationContentBox">
          <li class="vacationContent">
            <div class="icon-reimbursement logoVacation"></div>
            <p>报销</p>
          </li>
          <li class="vacationContent">
            <div class="icon-use logoVacation"></div>
            <p>领用</p>
          </li>
          <li class="vacationContent">
            <div class="icon-userCar logoVacation"></div>
            <p>用车</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'selectionProcess',
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
