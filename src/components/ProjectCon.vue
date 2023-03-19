<template>
  <div class="project-con-wrapper">
    <div class="img-wrap">
      <img src="@/assets/imgs/kwa-tit.png" alt="">
    </div>
    <div class="con-wrap">
      <div class="disc-wrap">
        <h3>한국 폐기물 협회</h3>
        <p>HTML, CSS, JS, Node.js, Express.js, MySQL</p>
      </div>
      <div class="btns-wrap">
        <button><img src="@/assets/imgs/iconmonstr-home-6-48.png" alt=""></button>
        <button><img src="@/assets/imgs/iconmonstr-github-1-48.png" alt=""></button>
        <button><img src="@/assets/imgs/iconmonstr-copy-filled-48.png" alt=""></button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="css">
  .project-con-wrapper {
    width: calc(25% - 20px);
    box-shadow: 0px 0px 6px gray;
    padding: 30px 10px;
    padding-top: 10px;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .img-wrap {
    width: 100%;
    margin-bottom: 20px;
  }

  .img-wrap img {
    width: 100%;
  }
  .con-wrap{
    text-align: center;
  }
  .disc-wrap {
    text-align: center;
  }

  .disc-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Noto Sans KR', sans-serif;

  }
  .disc-wrap p{
    line-height: 22px;
  }

  .btns-wrap {
    text-align: center;
    margin-top: 40px;
    display: none;
    transition: all 0.3s;
  }

  .btns-wrap button {
    outline: none;
    border: 0;
    background-color: #fff;
    margin-right: 30px;
    cursor: pointer;
  }

  .btns-wrap button:last-child {
    margin: 0;
  }

  .btns-wrap button img {
    width: 30px;
  }
  .project-con-wrapper:hover{
    transform: translateY(-5px);
    box-shadow: 0px 0px 10px rgb(93, 93, 93);
  }
  .project-con-wrapper:hover .con-wrap .disc-wrap{
    display: none;
  }
  .project-con-wrapper:hover .con-wrap .btns-wrap{
    display: block;
  }
</style>