<template>
  <div class="screen" style="background: #F2F2F2">
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
      <div class="title">
        <div class="title_info">
          <img class="title_img" src="../../../static/icon/back.png" alt="">
          <div class="title_word">个人信息填写</div>
        </div>
        <div class="title_bg">
          <div>
            <img class="up_img" src="../../../static/icon/mobile.png" alt="" >
            <img class="edit_img" src="../../../static/icon/edit.png" alt="" >
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content_name">
          <div>您的真实姓名</div>
          <img src="../../../static/icon/point.png" alt="" >
          <input type="text" >
        </div>
        <div class="content_sex">
          <div class="sex_name">
            <div>您的性别</div>
            <img src="../../../static/icon/point.png" alt="" >
          </div>
          <div class="select_sex">
            <div class="sex_but">先生</div>
            <div class="sex_but">女士</div>
          </div>
        </div>
        <div class="birth">
          <div>出生年月日</div>
          <img src="../../../static/icon/down.png" alt="" >
        </div>
        <div class="company">
          <span>公司(学校)</span>
          <input type="text" >
        </div>
        <div class="job">
          <span>职业</span>
          <input type="text" >
        </div>
        <div class="job_tips">
          <img src="../../../static/icon/duihao.png" alt="" >
          <div>当前自由职业或不在职，所填为前职</div>
        </div>
        <div class="degree">
          <div>最高学历</div>
          <select v-model="SelectDegree" @change="changeDegree">
            <option v-for="item in degree" :value =item.id>{{ item.value }}</option>
          </select>
        </div>
        <div class="company">
          <span>毕业学校</span>
          <input type="text" >
        </div>
        <div class="self">
          <span>自我介绍</span>
          <textarea rows="5" cols="100"></textarea>
        </div>
      </div>
      <div class="next_but">
        <span @click="nextStep">下一步</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        degree: [{
          id: 1,
          value: '博士'
        },{
          id: 2,
          value: '硕士'
        },{
          id: 3,
          value: '本科'
        },{
          id: 4,
          value: '大专'
        }],
        SelectDegree: 1
      }
    },
    methods: {
      nextStep () {
        this.$router.push('/userInfo');
      },
      changeDegree () {
        console.log(this.SelectDegree)
      }
    }
  }
</script>

<style scoped>
  .title {
    width: 750px;
    height: 346px;
    background-image: url(../../../static/icon/register_bg.png);
    background-size: cover;
    box-shadow:0px 3px 11px rgba(0,0,0,0.16);
    opacity:0.66;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .title_info {
    width:750px;
    height:82px;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 18px rgba(0,0,0,0.16);
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
    font-family:Microsoft YaHei,Lucida Grande,Lucida Sans Unicode;
    font-weight:400;
    color:rgba(0,0,0,1);
    display: inline-block;
  }
  .title_bg {
    height: 264px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .up_img {
    width:145px;
    height:145px;
    border:3px solid rgba(255,255,255,1);
    border-radius:50%;
    opacity:1;
  }
  .edit_img {
    width: 35px;
    height: 35px;
    position: relative;
    left: -95px;
    top: -60px;
  }
  .content {
    width:707px;
    height:1056px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 27px;
    padding-left: 15px;
    font-size:25px;
    font-family:Microsoft YaHei,Lucida Grande,Lucida Sans Unicode;
    font-weight:500;
    color:rgba(137,137,137,1);
  }
  .content input {
    width: 260px;
    border-style:none;
    border:0;
    outline:none;
    margin-left: 20px;
    font-size:25px;
    font-family:Microsoft YaHei,Lucida Grande,Lucida Sans Unicode;
    font-weight:500;
    color:rgba(137,137,137,1);
  }
  .content textarea {
    width: 350px;
    border-style:none;
    border:0;
    outline:none;
    margin-left: 20px;
    font-size:25px;
    font-family:Microsoft YaHei,Lucida Grande,Lucida Sans Unicode;
    font-weight:500;
    color:rgba(137,137,137,1);
  }
  .content_name {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 31px;
  }
  .content_name img {
    width:5px;
    height:5px;
    background:rgba(43,178,108,1);
    border-radius:50%;
    margin-left: 5px;
  }
  .content_sex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 72px;
  }
  .content_sex img {
    width:5px;
    height:5px;
    background:rgba(43,178,108,1);
    border-radius:50%;
    margin-left: 5px;
  }
  .sex_name {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .select_sex {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-right: 33px;
  }
  .sex_but {
    width:109px;
    height:47px;
    border:1px solid rgba(137,137,137,1);
    border-radius:9px;
    text-align: center;
    line-height: 47px;
    font-size:25px;
    font-family:Microsoft YaHei,Lucida Grande,Lucida Sans Unicode;
    font-weight:400;
    color:rgba(0,131,63,1);
    margin-left: 13px;
  }
  .birth {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 72px;
  }
  .birth img {
    width: 25px;
    height: 15px;
    margin-right: 45px;
  }
  .company {
    margin-top: 72px;
  }
  .job {
    margin-top: 72px;
  }
  .job_tips {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 47px;
  }
  .job_tips img {
    width: 25px;
    height: 25px;
    margin-right: 20px;
  }
  .degree {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 47px;
  }
  .degree select {
    width: 120px;
    border-style:none;
    border:0;
    outline:none;
    font-size:25px;
    font-family:Microsoft YaHei,Lucida Grande,Lucida Sans Unicode;
    font-weight:500;
    color:rgba(137,137,137,1);
  }
  .self {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 72px;
  }
  .self textarea {
    margin-left: 20px;
  }
  .next_but {
    width:100%;
    height:72px;
    background:linear-gradient(159deg,rgba(43,178,108,1) 0%,rgba(15,152,115,1) 100%);
    border-radius:5px;
    text-align: center;
    line-height: 72px;
    margin-top: 42px;
  }
  /*option{
    color: black;
    line-height: 20px;
    border: 0;
  }
  select:focus{
    border: 0;
    box-shadow: 0 0 15px 1px #DDDDDD;
  }*/
</style>
