<template>
  <div class="screen" style="background: #F2F2F2">
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
      <div class="title">
        <img class="title_img" src="../static/icon/back.png" alt="">
        <div class="title_word">登入</div>
      </div>
      <div class="content">
        <div class="content_login">
          <img class="content_img" src="../static/icon/head_photo.png" alt="" >
          <div class="content_input">
            <div class="mobile">
              <img class="mobile_img" src="../static/icon/mobile.png" alt="">
              <input type="tel" placeholder="请输入您的手机号码">
            </div>
            <hr>
            <div class="verify">
              <div>
                <img class="verify_img" src="../static/icon/verify.png" alt="">
                <input type="number" placeholder="请输入验证码">
              </div>
              <span>获取验证码</span>
            </div>
            <hr>
          </div>
        </div>
        <div class="content_register">
          <span class="content_button" @click="clickRegister">立即注册</span>
        </div>
        <span class="login_button">登入</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  created () {

  },
  methods: {
    clickRegister () {
      this.$router.push('/register');
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
    width: 20px;
    height: 33px;
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
    width:707px;
    height:1074px;
    background:rgba(255,255,255,1);
    border-radius:5px;
    box-shadow:0px 5px 18px rgba(77,80,244,0.06);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 18px;;
  }
  .content_login {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content_img {
    width:157px;
    height:157px;
    background:rgba(255,255,255,1);
    border-radius:50%;
    margin-top: 104px;
  }
  .content_input {
    width:100%;
    font-size:24px;
    font-family:Helvetica Neue;
    font-weight:400;
    color:rgba(172,172,172,1);
    margin-top: 172px;
    margin-left: 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .mobile {
    margin-bottom: 29px;
  }
  .verify {
    width: 591px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
  }
  .verify span {
    width: 155px;
    height:67px;
    background:rgba(0,179,138,1);
    border-radius:5px;
    box-shadow:0px 5px 17px rgba(0,0,0,0.06);
    color:rgba(255,255,255,1);
    display: inline-block;
    text-align: center;
    line-height: 67px;
  }
  .content_input input{
    width: 260px;
    border-style:none;
    border:0;
    outline:none;
  }
  .content_input hr {
    width:591px;
    height:0px;
    border:1px solid rgba(242,242,242,1);
  }
  .mobile_img {
    width:21px;
    height:33px;
    border:1px solid rgba(172,172,172,1);
    margin-right: 20px;
  }
  .verify_img {
    width:21px;
    height:21px;
    border:1px solid rgba(172,172,172,1);
    border-radius:5px;
    margin-right: 20px;
  }
  .content_register {
    width: 591px;
    text-align: end;
  }
  .content_button {
    font-size:23px;
    font-family:Helvetica Neue;
    font-weight:300;
    color:rgba(106,106,106,1);
    display: inline-block;
    margin-top: 22px;
    text-decoration:underline;
  }
  .login_button {
    width:643px;
    height:70px;
    background:linear-gradient(159deg,rgba(43,178,108,1) 0%,rgba(15,152,115,1) 100%);
    border-radius:5px;
    display: inline-block;
    text-align: center;
    line-height: 70px;
    font-size:24px;
    font-family:Helvetica Neue;
    font-weight:bold;
    color:rgba(255,255,255,1);
    margin-top: 304px;
  }
</style>
