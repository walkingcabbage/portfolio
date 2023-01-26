<template>
  <div class="wrap">
    <div class="project-swiper-wrap">
      <swiper :navigation="{
        nextEl: '.next-btn',
    prevEl: '.prev-btn',
      }" :slides-per-view="1" :loop="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(item,index) in projectDetails" :key="item">
          <project-con :logoUrl='item.logo' :title="item.tit" :disc="item.dis" :devtime="item.devt" :job="item.jobs"
            :contr="item.cont" :stack="item.stak" :githubUrl="item.github" :total="projectDetails.length"
            :current="index+1" />
        </swiper-slide>
        <div class="prev-btn">
          <font-awesome-icon icon="fa-solid fa-arrow-left" />
        </div>
        <div class="next-btn">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </div>
      </swiper>

    </div>
  </div>
</template>
<script>
  import {
    onMounted
  } from "vue";

  import ProjectCon from './ProjectCon.vue';

  import {
    Swiper,
    SwiperSlide,
  } from 'swiper/vue';
  import {
    Navigation
  } from "swiper";
  import 'swiper/css';
  import 'swiper/css/navigation'
  export default {
    components: {
      ProjectCon,
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = () => {};
      const onSlideChange = () => {};
      const projectDetails = [{
          logo: require(`@/assets/imgs/KWAlogo.png`),
          tit: '한국 폐기물 협회',
          dis: `한국 폐기물협회 웹사이트의 리뉴얼을 진행했습니다. 
디자인에도 문제가 많고, 테이블을 사용하여 웹 사이트가 만들어진 것, 
반응형이 적용이 안 된 것을 보고 구조적으로도 문제가 많다고 생각했습니다.`,
          devt: '2022 11월 초 ~ 12월 중순',
          jobs: '1인 개발',
          cont: '100% / 디자인, 마크업, 동적요소, 서버 구축, 데이터베이스 연결',
          stak: 'HTML, CSS, Javascript, Node.js, express.js, ejs, MySQL',
          github: 'https://github.com/walkingcabbage/KWA2'
        },
        {
          logo: require(`@/assets/imgs/seomunlogo.png`),
          tit: '서문시장 야시장',
          dis: `서문시장 야시장 웹사이트의 리뉴얼을 진행하였습니다.
매우 번잡한 콘텐츠 배치와 반응형 미지원을 고치는 데에 중점으로 하였습니다. `,
          devt: '2022 10월 초 ~ 11월 초 ',
          jobs: '1인 개발',
          cont: '100% / 디자인, 마크업, 동적요소, 서버 구축, 데이터베이스 연결',
          stak: 'HTML, CSS, Javascript, Node.js, express.js, ejs, MySQL',
          github: '준비중'
        },
        {
          logo: require(`@/assets/imgs/wonjulogo.png`),
          tit: '원주 곤충마을 박물관',
          dis: `원주 곤충마을 박물관 웹사이트의 리뉴얼을 진행하였습니다.
마찬가지로 구식 디자인, 테이블과 이미지의 무분별한 사용, 반응형 미적용 등
문제점이 많았습니다. 아예 새롭게 만들자는 생각으로 진행하였습니다.`,
          devt: '2022 11월 초 ~ 12월 말',
          jobs: '팀 프로젝트 / PM, 디자인, 퍼블리싱',
          cont: '50% / 메인페이지 마크업, 서브페이지 마크업, 동적요소, 서버구축, 데이터베이스 연결',
          stak: 'HTML, CSS, Javascript, Node.js, express.js, ejs, MySQL, git',
          github: 'https://github.com/walkingcabbage/wonju'
        },
        {
          logo: require(`@/assets/imgs/richmondlogo.png`),
          tit: '더 리치먼드',
          dis: `더 리치먼드 웹사이트 클론코딩을 진행하였습니다.
반응형, 적절한 동적요소, 웹 표준 등 제 능력에 도움이 될 수 있다고 생각하였습니다.`,
          devt: '2022 10월 초 ~ 10월 중순',
          jobs: '1인 개발',
          cont: '100% / 디자인, 마크업, 동적요소',
          stak: 'HTML, CSS, Javascript',
          github: '준비중'
        },
        {
          logo: require(`@/assets/imgs/shouselogo.png`),
          tit: '싱그러운 집',
          dis: `싱그러운 집 웹사이트 클론코딩을 진행하였습니다.
원본 웹사이트와는 다르게 flex를 이용하여 요소들을 배치하였고
swiper 라이브러리를 사용할 수 있는 경험이 되었습니다.`,
          devt: '2022 10월 중순 ~ 11월 초 ',
          jobs: '1인 개발',
          cont: '100% / 디자인, 마크업, 동적요소',
          stak: 'HTML, CSS, Javascript',
          github: '준비중'
        },

      ]

      onMounted(() => {

      })
      return {
        onSwiper,
        onSlideChange,
        projectDetails,
        modules: [Navigation],
      }
    }
  }
</script>
<style scoped>
  div.wrap {
    width: 100%;
    height: 100vh;
    min-height: 720px;
    background-color: #000;
  }

  .project-swiper-wrap {
    height: 100%;
  }

  .swiper {
    height: 100%;
  }

  .prev-btn {
    z-index: 3;
    position: absolute;
    color: #fff;
    font-size: 60px;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: font-size 0.3s;
  }

  .prev-btn:hover,
  .next-btn:hover {
    font-size: 70px;
  }

  .next-btn {
    z-index: 3;
    position: absolute;
    color: #fff;
    font-size: 60px;
    top: 50%;
    right: 1%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: font-size 0.3s;
  }
</style>