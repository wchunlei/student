<template>
  <div class="screen" style="background: #F2F2F2;">
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center">
      <div class="title">
        <ul @click="clickTabs">
          <li>个人信息</li>
          <li>课程日历</li>
          <li>订购记录</li>
          <li>课程与活动</li>
        </ul>
      </div>
      <div class="course">
        <ul @click="clickCourseTabs">
          <li>全部</li>
          <li>培训团课</li>
          <li>培训私课</li>
          <li>体验课</li>
          <li>雅集</li>
        </ul>
      </div>
      <div class="sending" v-for="item in sendList">
        <div class="sending_title">
          <div style="color:rgba(137,137,137,1);">培训团课</div>
          <div style="color:rgba(0,131,63,1);">课程进行中</div>
        </div>
        <div class="sending_split"></div>
        <div class="sending_content">
          <ul>
            <li>
              <div class="sending_info">
                <img :src=item.img alt="" >
                <div class="sending_word">
                  <div class="word_money">
                    <div>{{ item.name }}</div>
                    <div>{{ item.money }}</div>
                  </div>
                  <div>{{ item.mun }}</div>
                  <div class="sending_date">
                    <div>{{ item.describe }}</div>
                    <div>{{ item.date }}</div>
                  </div>
                </div>
              </div>
              <div>
                <div class="sending_but">
                  <span class="sending_return">退货</span>
                  <span class="good_info" @click="orderInfo">订单详情</span>
                  <span class="sending_sure">确认收货</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="sending" v-for="item in sendList">
        <div class="sending_title">
          <div style="color:rgba(137,137,137,1);">20180831073645</div>
          <div style="color:rgba(0,131,63,1);">已收货</div>
        </div>
        <div class="sending_split"></div>
        <div class="sending_content">
          <ul>
            <li>
              <div class="sending_info">
                <img :src=item.img alt="" >
                <div class="sending_word">
                  <div class="word_money">
                    <div>{{ item.name }}</div>
                    <div>{{ item.money }}</div>
                  </div>
                  <div>{{ item.mun }}</div>
                  <div class="sending_date">
                    <div>{{ item.describe }}</div>
                    <div>{{ item.date }}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Calendar from 'vue-calendar-component';
  export default {
    components: {
      Calendar
    },
    name: 'register',
    data () {
      return {
        sendList: [{
          img: '../../../static/icon/register_bg.png',
          name: '毛笔邹氏农耕笔庄羊兼毫',
          money: '￥120',
          mun: 'x1',
          describe: '檀木/ I 级狼毫/10厘米',
          date: '2018-8-31 14:50'
        },{
          img: '../../../static/icon/register_bg.png',
          name: '毛笔邹氏农耕笔庄羊兼毫',
          money: '￥120',
          mun: 'x1',
          describe: '檀木/ I 级狼毫/10厘米',
          date: '2018-8-31 14:50'
        }]
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
      clickCourseTabs () {

      },
      clickDay(data) {
        console.log(data); //选中某天
      },
      changeDate(data) {
        console.log(data); //左右点击切换月份
      },
      clickToday(data) {
        console.log(data); //跳到了本月
      },
      clickCourseTabs () {

      },
      orderInfo () {
        this.$router.push('/orderInfo');
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
  .course {
    width:707px;
    height:68px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    box-shadow:0px 5px 18px rgba(0,0,0,0.16);
    font-size:28px;
    margin-top: 25px;
    line-height: 68px;
  }
  .course ul {
    width: 100%;
    height: 82px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    color:rgba(15,152,115,1);
  }
  .sending {
    width:708px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    box-shadow:0px 3px 5px rgba(0,0,0,0.16);
    margin-top: 20px;
  }
  .sending_title {
    width: 670px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 18px;
  }
  .sending_split {
    width:100%;
    height:0px;
    border:1px solid rgba(195,195,195,1);
  }
  .sending_content ul li {
    width: 100%;
    height: 245px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .sending_info {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .sending_info img {
    width: 110px;
    height: 110px;
  }
  .sending_word {
    width: 540px;
    height: 110px;
    font-size:22px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    margin-right: 22px;
  }
  .word_money {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight:500;
    color:rgba(0,0,0,1);
  }
  .sending_date {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight:400;
    color:rgba(98,98,98,1);
  }
  .sending_but {
    width:708px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .sending_return {
    width:90px;
    height:46px;
    line-height: 46px;
    text-align: center;
    border:1px solid rgba(137,137,137,1);
    border-radius:9px;
    color:rgba(137,137,137,1);
    font-size:25px;
    margin-right: 22px;
  }
  .good_info {
    width:132px;
    height:46px;
    line-height: 46px;
    text-align: center;
    border:1px solid rgba(137,137,137,1);
    border-radius:9px;
    color:rgba(137,137,137,1);
    font-size:25px;
    margin-right: 22px;
  }
  .sending_sure {
    width:132px;
    height:46px;
    line-height: 46px;
    text-align: center;
    border:1px solid rgba(0,131,63,1);
    border-radius:9px;
    margin-right: 22px;
    font-size:25px;
    color:rgba(0,131,63,1);
  }
</style>
