<template>
  <div class="wrap">
    <div class="holder">
      <div class="title-wrap">
        <h1>EDUCATION</h1>
      </div>
      <div class="content-wrap">
        <swiper :slides-per-view="4" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
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

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      }
    }
  }
</script>
<style scoped>
  div.wrap {
    width: 100%;
    height: 100vh;
    min-height: 720px;
    background-color: #FFF;
    position: relative;
  }

  .title-wrap {
    color: #fff;
    position: relative;
    padding-top: 137px;
  }
  .swiper{
    width: 100%;
    height: 300px;
  }
</style>