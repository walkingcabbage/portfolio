<template>
  <div class="wrap">
    <div class="holder">
      <div class="title-wrap">
        <h1>EDUCATION</h1>
      </div>
      <div class="content-wrap">
        <swiper  :slides-per-view="'auto'" :space-between="20" :freeMode="true" :modules="modules"  @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide v-for="item in edus.slice().reverse()" :key="item">
            <div class="inner-slide">
              <div class="year-wrap">
                <h2 class="year-con">{{item.year}}</h2>
              </div>
              <ul class="edus-wrap">
                <li class="edu-con" v-for="detail in item.edu" :key="detail">
                  <h3 class="edu-month">{{item.year}}.{{detail.month}}</h3>
                  <p class="edu-details">{{detail.details}}</p>
                </li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>


  </div>
</template>
<script>
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';
  import "swiper/css/free-mode";
import { FreeMode } from "swiper";
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = () => {
      };
      const onSlideChange = () => {
      };

      const edus=[
        {
          year:'2017',
          edu:[{
            month:'02',
            details:'심석고등학교 졸업'
          },{
            month:'03',
            details:'서일대학교 컴퓨터응용전자과 입학'
          }]
        },{
          year:'2020',
          edu:[{
            month:'03',
            details:'서일대학교 소프트웨어 공학과로 전과'
          }]
        },
        {
          year:'2022',
          edu:[{
            month:'02',
            details:'서일대학교 소프트웨어 공학과 졸업'
          },
          {
            month:'06',
            details:'정보처리산업기사 자격증 취득'
          }]
        },{
           year:'2023',
           edu:[{
            month:'02',
            details:`노원 그린컴퓨터 아카데미 
[디지털컨버전스] 뷰(Vue) 활용프론트엔드
웹개발자 양성과정 수료(900시간)`
           }]
        }
      ]
      return {
        onSwiper,
        onSlideChange,
        modules: [FreeMode],
        edus
      }
    }
  }
</script>
<style scoped>
  div.wrap {
    width: 100%;
    height: 60vh;
    min-height: 720px;
    background-color: #000;
    position: relative;
  }
  .holder{
    height: 100%;
  }

  .title-wrap {
    color: #fff;
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
  .content-wrap{
    height: 50%;
  }
  .swiper{
    width: 100%;
    height: 100%
  }
  .swiper-slide{
    width: 350px;
  }
  .inner-slide{
    height: 100%;
    background-color: #fff;
    padding: 43px 36px;
        box-sizing: border-box;
  }
  .year-wrap{
    margin-bottom: 27px;
  }
  .year-con{
    font-size: 60px;
    font-weight: bold;
    color: #FF9128;
  }
  .edu-con{
    margin-bottom: 21px;
  }
  .edu-month{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 7px;
  }
  .edu-details{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        line-height: 20px;
  }
  @media (max-width:1400px) {
    .title-wrap{
      padding: 100px 0;
    }
    .content-wrap{
    height: 50%;
  }
  .swiper-slide{
    width: 300px;
  }
  .year-con{
    font-size: 40px;
  }
  }
  @media (max-width:768px) {
    .title-wrap{
      font-size: 24px;
      text-align: center;
    }
    .swiper-slide{
    width: 250px;
  }
    .year-con{
      font-size: 24px;
    }
    .edu-month{
      font-size: 16px;
    }
    .edu-month{
      font-size: 14px;
    }
  }
</style>
