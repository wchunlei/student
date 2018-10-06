<template>
  <div class="screen" style="background: #F2F2F2">
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
      <div class="title">
        <img class="title_img" src="../../../static/icon/back.png" alt="">
        <div class="title_word">输入手机号码</div>
      </div>
      <div class="content">
        <div class="mobile">
          <img class="mobile_img" src="../../../static/icon/mobile.png" alt="">
          <input type="tel" placeholder="请输入您的手机号码">
        </div>
        <hr>
        <span class="login_button" @click="clickVerify">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      clickVerify () {
        this.$router.push('/verify');
      }
    }
  }
</script>

<style scoped>
  .title {
    width: 750px;
    height: 82px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 11px rgba(0,0,0,0.16);
    opacity:0.39;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .title_img {
    width: 19px;
    height: 32px;
    margin: 0 30px 0 26px;
  }
  .title_word {
    font-size:29px;
    font-family:Helvetica Neue;
    font-weight:400;
    color:rgba(0,0,0,1);
    display: inline-block;
  }
  .content {
    width:100%;
    height:1096px;
    background:rgba(255,255,255,1);
    border-radius:5px;
    box-shadow:0px 5px 18px rgba(77,80,244,0.06);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 18px;;
  }
  .mobile {
    width: 685px;
    height: 36px;
    line-height: 36px;
    margin-top: 42px;
    margin-bottom: 33px;
  }
  .content input{
    width: 260px;
    border-style:none;
    border:0;
    outline:none;
  }
  .content hr {
    width:679px;
    height:0px;
    border:1px solid rgba(242,242,242,1);
  }
  .mobile_img {
    width:21px;
    height:33px;
    border:1px solid rgba(172,172,172,1);
    margin-right: 20px;
  }
  .login_button {
    width:685px;
    height:74px;
    /*background:linear-gradient(159deg,rgba(43,178,108,1) 0%,rgba(15,152,115,1) 100%);*/
    background:rgba(209,209,209,1);
    border-radius:5px;
    display: inline-block;
    text-align: center;
    line-height: 70px;
    font-size:24px;
    font-family:Helvetica Neue;
    font-weight:bold;
    color:rgba(255,255,255,1);
    margin-top: 63px;
  }
</style>
