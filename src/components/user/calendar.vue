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
      <div class="calendar">
        <Calendar
          v-on:choseDay="clickDay"
          v-on:changeMonth="changeDate"
          v-on:isToday="clickToday"
          :markDateMore=markList
          :topText="topText">
        </Calendar>
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
      <div class="title_start"><span>未开始</span></div>
      <div class="start_list">
        <ul>
          <li v-for="item in startList">
            <div class="left_style"></div>
            <div class="course_date">
              <div class="date_day">{{ item.day }}</div>
              <div class="date_time">{{ item.time }}</div>
            </div>
            <div class="split_course"></div>
            <div class="course_info">
              <div class="info_all">
                <div>{{ item.courseName }}</div>
                <div class="all_split"> | </div>
                <div>{{ item.courseInfo }}</div>
              </div>
              <div class="info_type">{{ item.type }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="course_more">
        <span>更多课程</span>
        <img src="../../../static/icon/right.png" alt="" >
      </div>
      <div class="title_start" style="color:rgba(69,69,69,1);"><span>已结束</span></div>
      <div class="start_list" style="color:rgba(69,69,69,1);">
        <ul>
          <li v-for="item in startList">
            <div class="left_style" style="background:rgba(137,137,137,1);"></div>
            <div class="course_date">
              <div class="date_day">{{ item.day }}</div>
              <div class="date_time">{{ item.time }}</div>
            </div>
            <div class="split_course"></div>
            <div class="course_info">
              <div class="info_all">
                <div>{{ item.courseName }}</div>
                <div class="all_split"> | </div>
                <div>{{ item.courseInfo }}</div>
              </div>
              <div class="info_type" style="color:rgba(137,137,137,1);">{{ item.type }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="course_more" style="color:rgba(137,137,137,1);">
        <span>更多课程</span>
        <img src="../../../static/icon/right_gray.png" alt="" >
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
        },
        markList: [{date:'2018/10/1',className:"mark1"}, {date:'2018/10/13',className:"mark2"}],
        topText: ['MON','TUE','WED','THU','FRI','SAT','SUN'],
        startList: [{
          day: '8 月 18日',
          time: '19:00-21:00',
          courseName: '国画四阶',
          courseInfo: '高级花鸟画班-夏季班·私课',
          type: '作业未发布'
        },{
          day: '8 月 18日',
          time: '19:00-21:00',
          courseName: '国画四阶',
          courseInfo: '高级花鸟画班-夏季班·私课',
          type: '作业未发布'
        },{
          day: '8 月 18日',
          time: '19:00-21:00',
          courseName: '国画四阶',
          courseInfo: '高级花鸟画班-夏季班·私课',
          type: '作业未发布'
        },{
          day: '8 月 18日',
          time: '19:00-21:00',
          courseName: '国画四阶',
          courseInfo: '高级花鸟画班-夏季班·私课',
          type: '作业未发布'
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
      changeDegree () {
        console.log(this.SelectDegree)
      }
    }
  }
</script>

<style>
  .wh_container {
    min-width: 750px;
    height: 490px;
    background-color:#ffffff;
  }
  .wh_content_all {
    min-height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    opacity:0.95;
    background-color:#ffffff;
  }
  .wh_content_item .wh_isToday {
    background: rgba(0,131,63,1);
  }
</style>
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
  .title_start {
    width:707px;
    height:68px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    box-shadow:0px 3px 5px rgba(0,0,0,0.16);
    font-size:27px;
    color:rgba(0,0,0,1);
    line-height: 68px;
    margin-top: 20px;
  }
  .title_start span {
    display: inline-block;
    margin-left: 22px;
    font-weight:400;
  }
  .start_list {
    width:707px;
    background:rgba(255,255,255,1);
    border-radius:7px;
    box-shadow:0px 3px 5px rgba(0,0,0,0.16);
    margin-top: 20px;
  }
  .start_list ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    color:rgba(15,152,115,1);
  }
  .start_list ul li {
    width: 100%;
    height:134px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 33px;
  }
  .left_style {
    width:11px;
    height:101px;
    background:rgba(43,178,108,1);
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
  .split_course {
    width:0px;
    height:72px;
    border:1px solid rgba(209,209,209,1);
  }
  .course_date {
    height:134px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
  }
  .course_date .date_day {
    font-size:29px;
    color:rgba(69,69,69,1);
  }
  .course_date .date_time {
    font-size:22px;
    color:rgba(137,137,137,1);
    margin-top: 10px;
  }
  .course_info {
    width:424px;
    color:rgba(69,69,69,1);
    font-size:25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .info_all {
    width:424px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .all_split {
    margin: 0 5px;
  }
  .info_type {
    font-size:22px;
    color:rgba(43,178,108,1);
    margin-top: 8px;
  }
  .course_more {
    width:707px;
    height:65px;
    background:rgba(255,255,255,1);
    margin-top: 20px;
    text-align: center;
    line-height: 65px;
  }
  .course_more img {
    width:11px;
    height:20px;
    margin-left: 6px;
  }
</style>
