<template>
  <div class="screen" style="background: #F2F2F2;position: fixed;min-height: 100%;">
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
      <div class="title">
        <ul @click="clickTabs">
          <li>个人信息</li>
          <li>课程日历</li>
          <li>订购记录</li>
          <li>课程与活动</li>
        </ul>
      </div>
      <div>
        <div class="bg_img">
          <img src="../../../static/icon/register_bg.png" alt="" >
        </div>
        <div class="user_msg">
          <div class="user_name">
            <div class="no_verify">未实名</div>
            <div class="name_text">{{ userInfo.name }}</div>
            <img src="../../../static/icon/edit.png" alt="">
          </div>
          <div class="user_sex">
            <div class="sex_text">{{ userInfo.sex }}</div>
            <div class="separate">|</div>
            <div class="sex_text">{{ userInfo.birth }}</div>
          </div>
          <div class="self">{{ userInfo.self }}</div>
        </div>
      </div>
      <div class="under_border"></div>
      <div class="content">
        <div class="company">
          <span>公司(学校) {{ userInfo.company }}</span>
        </div>
        <div class="job">
          <span>职业 {{ userInfo.job }}</span>
        </div>
        <div class="degree">
          <span>最高学历 {{ userInfo.degree }}</span>
        </div>
        <div class="school">
          <span>毕业学校 {{ userInfo.school }}</span>
        </div>
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
        SelectDegree: 1,
        userInfo: {
          name: 'test',
          sex: '女',
          birth: '2014-02-03',
          self: '在个人爱好的带引下，入校我便参加了校书画协会，由干事到副会长，这是对我的付出与努力的肯定。组织开展一系列活动丰富校园生活，被评选为优秀学生社团。',
          company: 'test',
          job: 'test',
          degree: '本科',
          school: 'test'
        }
      }
    },
    methods: {
      clickTabs (e) {
        if (e.target.innerHTML == "个人信息") {
          this.$router.push('/userInfo');
        } else if (e.target.innerHTML == "课程日历") {
          this.$router.push('/calendar');
        } else if (e.target.innerHTML == "订购记录") {
          this.$router.push('/record');
        } else if (e.target.innerHTML == "课程与活动") {
          this.$router.push('/active');
        }
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
    height: 82px;
    background:rgba(255,255,255,1);
    font-size:28px;
    font-weight:500;
  }
  .title ul {
    width: 100%;
    height: 82px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    color:rgba(15,152,115,1)
  }
  .bg_img {
    width: 750px;
    height:386px;
    background-image: url(../../../static/icon/register_bg.png);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg_img img{
    width: 163px;
    height:163px;
    background:rgba(0,0,0,0);
    box-shadow:0px 5px 11px rgba(0,0,0,0.16);
    border-radius:50%;
  }
  .user_msg {
    width:707px;
    height:399px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    box-shadow:0px 5px 11px rgba(0,0,0,0.16);
    margin-top: -200px;
    margin-left: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .user_name {
    width: 200px;
    color:rgba(0,0,0,1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 118px;
  }
  .no_verify {
    background:rgba(43,178,108,1);
    border-radius:4px;
    font-size:14px;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .name_text {
    font-size:35px;
    color:rgba(0,0,0,1);
  }
  .user_sex {
    width: 260px;
    font-weight:400;
    color:rgba(0,0,0,1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 38px;
  }
  .sex_text {
    font-size:27px;
    color:rgba(137,137,137,1);
  }
  .separate {
    width:2px;
    height:18px;
    background:rgba(209,209,209,1);
  }
  .user_name img {
    width:22px;
    height:22px;
    background:rgba(137,137,137,1);
  }
  .self {
    width:670px;
    height:100px;
    font-size:22px;
    font-weight:400;
    color:rgba(137,137,137,1);
    margin-top: 50px;
  }
  .under_border {
    width:707px;
    height:22px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    box-shadow:0px 5px 11px rgba(0,0,0,0.16);
    border-bottom: 10px solid rgba(15,152,115,1);
  }
  .content {
    width:707px;
    height:366px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    box-shadow:0px 5px 11px rgba(0,0,0,0.16);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 27px;
    padding-left: 15px;
    font-size:27px;
    font-weight:500;
    color:rgba(137,137,137,1);
  }
  .company {
    margin-top: 30px;
  }
  .job {
    margin-top: 56px;
  }
  .degree {
    margin-top: 56px;
  }
  .school {
    margin-top: 56px;
  }
</style>
