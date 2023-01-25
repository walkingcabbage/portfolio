<template>
  <div class="wrap">
    <div class="holder">
      <div class="title-wrap">
        <h1>SKILLS</h1>
      </div>
        <ul class="skills-wrap">
          <li class="skills-row">
            <div class="skills-tit">
              <p>Front</p>
            </div>
            <div class="skills-icons">
              <img src="../assets/imgs/htmllogo.png" alt="">
              <img src="../assets/imgs/csslogo.png" alt="">
              <img src="../assets/imgs/jslogo.png" alt="">
            </div>
          </li>
          <li class="skills-row">
            <div class="skills-tit">
              <p>Back</p>
            </div>
            <div class="skills-icons">
              <img src="../assets/imgs/nodejslogo.png" alt="">
              <img src="../assets/imgs/expresslogo.png" alt="">
            </div>
          </li>
          <li class="skills-row">
            <div class="skills-tit">
              <p>Database</p>
            </div>
            <div class="skills-icons">
              <img src="../assets/imgs/mysqllogo.png" alt="">
            </div>
          </li>
          <li class="skills-row">
            <div class="skills-tit">
              <p>Framework</p>
            </div>
            <div class="skills-icons">
              <img src="../assets/imgs/vuelogo.png" alt="">
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    
  }
}
</script>
<style scoped>
    div.wrap{
    width: 100%;
    height: 100vh;
    min-height: 720px;
    background-color: #fff;
  }
  .holder{
    height: 100%;
  }
  .title-wrap{
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .skills-tit{
    width: 20%;
    font-size: 20px;
    font-weight: bold;
  }
  .skills-row{
    height: 100px;
        display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .skills-icons{
    width: 70%;
    height: 100%;
    
    border-bottom: 1px solid #EEEEEE;
  }
    .skills-row:last-child>.skills-icons{
border: 0;
    }
  .skills-icons>img{
    height: 80%;
    filter: grayscale(1);
    transition: filter 0.3s;
  }
  .skills-icons>img:hover{
    filter: grayscale(0);
  }
  .skills-icons>img:first-child{
    margin-left: 30px;
  }
  .skills-icons>img:not(:last-child){
margin-right: 10px;
  }
  .skills-icons>img:nth-child(2){
    margin-right: 30px;
  }

</style>