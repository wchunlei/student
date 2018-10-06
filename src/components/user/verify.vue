<template>
  <div class="screen" style="background: #F2F2F2">
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
      <div class="title">
        <img class="title_img" src="../../../static/icon/back.png" alt="">
        <div class="title_word">输入验证码</div>
      </div>
      <div class="content">
        <div class="content_verify">
          <div class="tips">已发送6位验证码至</div>
          <div class="number">+86 {{ num }}</div>
          <div class="verify_input_all">
            <div class="verify_input" v-for="item in inputList" :key="item.id">
              <input v-model.number="item.value" type="tel" placeholder="" maxlength="1" @input="handleInput(item)">
              <hr>
            </div>
          </div>
          <span class="login_button" @click="clickVerify">确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'verify',
    data () {
      return {
        num: '18612345678',
        verify_num: '',
        currentIndex: 0, // 当前聚焦元素的索引
        actionType: 'next', // 自动聚焦的行为类型
        focusCtrl: 1,
        inputList: [{
          id: 1,
          value: ''
        },{
          id: 2,
          value: ''
        },{
          id: 3,
          value: ''
        },{
          id: 4,
          value: ''
        },{
          id: 5,
          value: ''
        },{
          id: 6,
          value: ''
        }]
      }
    },
    directives: {
      focus: {
        inserted: function (el, {value}) {
          if (value) {
            el.focus()
          }
        }
      }
    },
    methods: {
      clickVerify () {
        this.$router.push('/registerInfo');
      },
      handleInput(item){
        var txts = document.getElementsByTagName('input');
        for(var i = 0; i<txts.length;i++){
          var t = txts[i];
          t.index = i;
          //t.setAttribute("readonly", true);
          t.onkeyup=function(){
            this.value=this.value.replace(/^(.).*$/,'$1');
            console.log(this.value)
            var next = this.index + 1;
            if(next > txts.length - 1) return;
            //txts[next].removeAttribute("readonly");
            if (this.value) {
              txts[next].focus();
            }
            item.value = this.value.replace(/[^\d]/g, '');
          }
        }
        //txts[0].removeAttribute("readonly");
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
  .content_verify {
    width:685px;
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .tips {
    font-size:25px;
    font-family:Helvetica Neue;
    font-weight:500;
    color:rgba(209,209,209,1);
    margin-bottom: 7px;
  }
  .number {
    font-size:20px;
    font-family:Helvetica Neue;
    font-weight:500;
    color:rgba(137,137,137,1);
  }
  .verify_input_all {
    width:685px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .verify_input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .verify_input input{
    width: 92px;
    border-style:none;
    border:0;
    outline:none;
    margin-top: 155px;
    text-align:center;
  }
  .verify_input hr {
    width:92px;
    height:0px;
    border:2px solid rgba(209,209,209,1);
    background: rgba(209,209,209,1);
    opacity:1;
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
    margin-top: 88px;
  }
</style>
