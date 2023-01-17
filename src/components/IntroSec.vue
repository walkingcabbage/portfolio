<template>
  <div class="wrap">
    <div class="fbox">
      <div class="left-con">
        <div class="l-txtbox">
          <h1 class="bold100">MINWOO's</h1>
          <h1 class="bold100">Portfolio <strong class="orange">2023</strong></h1>
        </div>
      </div>
      <div class="right-con">
        <div class="right-top-con">
          <div class="rt-txtbox">
            <h2 class="bold60">Front-end</h2>
            <h2 class="bold60">Developer</h2>
          </div>
        </div>
        <div class="right-bottom-con">
          <div class="rb-txtbox">
            <div>
              <span class="gh">Github</span>
              <a class="wc" href="https://github.com/walkingcabbage" target='_blank'>https://github.com/walkingcabbage</a>
            </div>
            <div>
              <span class="em">Email</span>
              <span class="ag">aksdn1513@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
  }
</script>
<style scoped>
  .wrap {
    width: 100%;
    height: 100vh;
        min-height: 720px;
    background-color: #000;
  }

  .fbox {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .left-con {
    width: 70%;
    color: #fff;
    border-right: 1px solid #fff;
    position: relative;
  }

  .right-con {
    width: 30%;
    color: #fff;

  }

  .right-top-con {
    height: 50%;
    border-bottom: 1px solid #fff;
    position: relative;
  }

  .rt-txtbox{
    position: absolute;
    left: 0;
    bottom: 0;
    margin-left: 32px;
    margin-bottom: 32px;
  }
  .right-bottom-con{
    position: relative;
    height: 50%;
  }
  .rb-txtbox{
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 46px;
    margin-right: 19px;
  }
    .rb-txtbox div:first-child{
      margin-bottom: 20px;
    }
    .rb-txtbox div span{
      margin-right: 39px;
    }
  .rb-txtbox div a{
    color: #fff;
  }
  .l-txtbox {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
  }

  .bold100 {
    font-weight: bold;
    font-size: 100px;
  }
  .orange{
    color: #FF9128;
  }
  .bold60{
    font-weight: bold;
    font-size: 60px;
  }
  .wc{
    text-decoration: underline;
  }
</style>