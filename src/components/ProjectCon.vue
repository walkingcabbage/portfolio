<template>
  <div class="project-con-wrapper">
    <div class="img-wrap">
      <img :src="logo" alt="">
    </div>
    <div class="con-wrap">
      <div class="disc-wrap">
        <h3>{{title}}</h3>
        <p>{{stak}}</p>
        
      </div>
      <div class="btns-wrap">
        <button @click="hrefF(demo)"><img src="@/assets/imgs/iconmonstr-home-6-48.png" alt=""></button>
        <button @click="hrefF(github)"><img src="@/assets/imgs/iconmonstr-github-1-48.png" alt=""></button>
        <!-- <button v-if="mockup"><img src="@/assets/imgs/iconmonstr-copy-filled-48.png" alt=""></button> -->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
props: {
    logo:String,
    title:String,
    stak:String,
    github:String,
    demo:String,
    mockup:Boolean
  },
  setup(){
    const hrefF = (url)=>{
      window.open(url,'_blank');
    }
    return {
      hrefF
    }
  }
  
  }
</script>
<style lang="css">
  .project-con-wrapper {
    width: calc(30% - 20px);
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
    /* margin-top: 40px;/ */
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
  @media (max-width:1400px) {
    .disc-wrap h3{
      font-size: 18px;
    }
    .disc-wrap p{
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media (max-width:768px){
    .renewal-con{
      flex-direction: column;
    }
    .project-con-wrapper{
      width: 100%;
      box-sizing: border-box;
      display: flex;
      
      align-items: center;
      padding: 10px 10px;
    }
    .img-wrap{
      width: 40%;
      margin-bottom: 0;
    }
    .con-wrap{
      width: 60%;
    }
    .project-con-wrapper:hover .con-wrap .btns-wrap{
    display: flex;
    justify-content: center;
  }
  .btns-wrap button{
    /* margin: 0; */
  }
  }
</style>