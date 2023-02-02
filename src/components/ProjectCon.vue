<template>
  <div class="project-wrap">
    <div class="project-sec sec1">
        <div class="project-left">
          <div class="title-wrap">
            <h2>PROJECT</h2>
          </div>
          <div class="title-wrap clone">
            <h2>WEBCLONE</h2>
          </div>
          <div class="site-logo-wrap">
            <img class="site-logo" :src="logoUrl" alt="">
            <!-- ../assets/imgs/KWAlogo.png -->
          </div>
        </div>
        <div class="project-right">
          <div class="project-right-top">
            <span class="pagenation">{{current}}/{{total}}</span>
            <div class="project-title">
              <h3>{{title}}</h3>
            </div>
          </div>
          <div class="project-right-bottom">
            <p class="disc">{{disc}}</p>
            <div class="details">
              <h4>개발기간</h4>
              <p>{{devtime}}</p>
            </div>
            <div class="details">
              <h4>직무</h4>
            <p>{{job}}</p>
            </div>
            <div class="details">
              <h4>기여도</h4>
            <p>{{contr}}</p>
            </div>
            <div class="details">
              <h4>스택</h4>
            <p>{{stack}}</p>
            </div>
            <div class="details">
              <h4>기타</h4>
            <a target="_blank" :href='githubUrl'>Github</a>
            <a v-if="demoUrl" target="_blank" :href='demoUrl'>Demo</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  props:{
    logoUrl:String,
    title:String,
    disc:String,
    devtime:String,
    job:String,
    contr:String,
    stack:String,
    githubUrl:String,
    demoUrl:String,
    total:Number,
    current:Number,
  },
  setup(){
    onMounted(()=>{
    })
  }
}
</script>
<style scoped>
  .project-wrap{
    width: 100%;
    height: 100%;
    color: #fff;
  }
  .project-sec{
    display: flex;
    height: 100%;
    width: 100%;
  }
  .project-left{
    width: 45%;
    border-right: 1px solid #fff;
  }
  .project-right{
    width: 55%;
    border-right: 1px solid #fff;
  }
  .project-right-top{
    position: relative;
    border-bottom: 1px solid #fff;
  }
  .title-wrap{
    padding-left: 15.625%;
    padding-top: 100px;
  }
  .project-title{
    font-size: 48px;
    font-weight: bold;
    padding-top: 100px;
    padding-bottom: 40px;
    text-align: center;
  }
  .pagenation{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .project-right-bottom{
    padding: 70px 15.625%;
    /* height: 100%; */
    font-family: 'Noto Sans KR', sans-serif;
  }
  .site-logo-wrap{
    text-align: center;
    padding-top: 200px;
  }
  .site-logo{
    width: 60%;
  }
  .disc{
    margin-bottom: 40px;
    line-height: 20px;
  }
  .details{
    margin-bottom: 20px;

  }
  .details>a:nth-child(3){
    padding-left: 10px;
  }
    .details:last-child{
    overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
  .details>h4{
    color: #FF9128;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .details>a{
    color: #fff;
    text-decoration: underline;
  }
  .swiper-slide:nth-child(4) .title-wrap,.swiper-slide:nth-child(5) .title-wrap{
    display: none;
  }
  .clone{
    display: none;
    padding-left: 15.625%;
    padding-top: 100px;
  }
  .swiper-slide:nth-child(4) .clone,.swiper-slide:nth-child(5) .clone{
    display: block;
  }
  .details>p,.details>a{
    line-height: 20px;
  }
  @media (max-width:1400px) {
    .project-sec{
      flex-direction: column;
      border-right: 0px solid #fff;
    }
    .title-wrap{
      padding-left: 10%;
    }
    .project-left{
      width: 100%;
      padding-bottom: 40px;
      border-bottom: 1px solid #fff;
      border-right: 0;
    }
    .project-right{
      width: 100%;
    }
    .site-logo-wrap{
      padding-top: 50px;
      padding-left: 10%;
      text-align: left;
    }
    .project-right-top{
      position: absolute;
      top: 0;
      right: 0;
      border: 0;
      width: 100%;
    }
    .site-logo{
      width: 30%;
      min-width: 165px;
    }
    .project-title{
      padding-bottom: 0;
      padding-top: 210px;
      padding-right: 10%;
      font-size: 36px;
      text-align: right;
      box-sizing: border-box;
    }
    .project-right{
      border: 0;
      word-break: keep-all;
    }
    .project-right-bottom{
      padding: 40px 10%;
    }
  }
  @media (max-width:768px) {
    .site-logo-wrap{
      text-align: center;
      padding-left: 0;
    }
    .title-wrap{
      padding-left: 0;
      padding-top: 70px;
    }
    .project-left{
      padding-bottom: 120px;
    }
    .project-right-top{
    }

    .project-title{
      padding: 0;
      text-align: center;
      padding-top: 255px;
      font-size: 20px;
    }
    .project-right-bottom{
      font-size: 14px;
    }
    .details>h4{
      font-size: 16px;
    }
  }
</style>