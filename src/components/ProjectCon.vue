<template>
  <div class="project-wrap">
    <div class="project-sec sec1">
        <div class="project-left">
          <div class="title-wrap">
            <h2>PROJECT</h2>
          </div>
          <div class="site-logo-wrap">
            <img class="site-logo" src="../assets/imgs/KWAlogo.png" alt="">
          </div>
        </div>
        <div class="project-right">
          <div class="project-right-top">
            <span class="pagenation"></span>
            <div class="project-title">
              <h3>한국 폐기물 협회</h3>
            </div>
          </div>
          <div class="project-right-bottom">
            <p>한국 폐기물협회 웹사이트의 리뉴얼을 진행했습니다. 
디자인에도 문제가 많고, 테이블을 사용하여 웹 사이트가 만들어진 것, 
반응형이 적용이 안 된 것을 보고 구조적으로도 문제가 많다고 생각했습니다. </p>
            <h4>개발기간</h4>
            <p>2022 11월 초 ~ 12월 중순</p>
            <h4>직무</h4>
            <p>1인 개발</p>
            <h4>기여도</h4>
            <p>100% / 디자인, 마크업, 동적요소, 서버 구축, 데이터베이스 연결</p>
            <h4>스택</h4>
            <p>HTML, CSS, Javascript, Node.js, express.js, ejs, MySQL</p>
            <h4>Github</h4>
            <a href="https://github.com/walkingcabbage/KWA2">https://github.com/walkingcabbage/KWA2</a>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  
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
  }
  .project-left{
    width: 45%;
  }
  .project-right{
    width: 55%;
  }
  .title-wrap{
    padding-left: 15.625%;
    padding-top: 100px;
  }
</style>