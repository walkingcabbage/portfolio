<template>
  <div class="wrapper">
    <div class="holder">
      <div class="wrap">
        <div class="title-wrap">
          
          <h1>CONTACT</h1>
        </div>
        <div class="con-wrap">
          <div class="contact-left">
            <img src="@/assets/imgs/leeminwoo.png" alt="">
          </div>
          <div class="contact-right">
            <div class="email">
              <h3>Email</h3>
              <p>aksdn1513@gmail.com</p>
            </div>
            <div class="katalk">
              <h3>Phone</h3>
              <p>010-6343-1174</p>
            </div>
            <div class="github">
              <h3>Github</h3>
              <a href="https://github.com/walkingcabbage">https://github.com/walkingcabbage</a>
            </div>
            <div class="btn-wrap">
            <a href="files/lee.pdf" download="이민우 이력서.pdf" class="download-btn">이력서<img src="@/assets/imgs/iconmonstr-download-19-32.png" alt=""></a>
            <a href="files/producelee.pdf" download="이민우 자기소개서.pdf" class="download-btn">자기소개서<img src="@/assets/imgs/iconmonstr-download-19-32.png" alt=""></a>
            </div>
          </div>
        </div>
        
      </div>

      <div class="copyright">
        <p>©2023 LEEMINWOO. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup(){
   
    return{
    }
  },
}
</script>
<style scoped>
  div.wrapper{
    width: 100%;
    height: 100vh;
    min-height: 600px;
    background-color: #fff;
    overflow: hidden;
  }
  .title-wrap{
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .holder{
    position: relative;
    height: 100%;
  }
  .con-wrap{
    display: flex;
    justify-content: space-around;
  }

  .contact-right>div{
    margin-top: 40px;
  }
  .contact-right>div>h3{
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 11px;
  }
  .contact-right>div>a{
    font-weight: bold;
    text-decoration: underline;
  }
  .svg-wrap{
    position: absolute;
    bottom: -50px;
    left:-50px;
  }
  .copyright{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .svg-wrap.mt{
    display: none;
  }
  .btn-wrap{
    display: flex;
    justify-content: space-around;
  }
  .download-btn{
    border: 0;
    background-color: #000;
    color: #fff;
    padding: 8px 12px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none !important;
    
  }
  .download-btn > img{
    margin-left: 5px;
    height: 16px;
  }
  @media (max-width:1400px) {
    .contact-right>div{
      margin-top: 30px;
    }
    .contact-left{
      width: 30%;
      max-width: 210px;
    }
    .contact-left>img{
      width: 100%;
    }
    .svg-wrap{
          display: none;
        }
        .svg-wrap.mt{
          display: block;
          position: absolute;
          bottom: -60px;
          background-image: url('@/assets/imgs/THANKYOU.png');
          background-repeat: no-repeat;
          /* background-size: cover; */
          background-position: center;
          width: 100%;
          height: 183px;
          left: -10%;
        }
  }
      @media (max-width:768px) {
        .holder{
          height: 100%;
        }
        .title-wrap{
          padding: 50px 0;
        }
        .con-wrap{
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
          margin-top: 10%;
        }
        .contact-right>div{
          font-size: 14px;
        }
        .contact-right>div>h3{
          font-size: 16px;
        }
        .contact-right{
          width: 100%;
        }
        .github{
          overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
        }
        .svg-wrap.mt{
          bottom: 32px;
          background-size: cover;
          height: 33px;
          left: 31px;
        }
        .copyright{
          font-size: 12px;
        }
        .download-btn{
          font-size: 12px;
        }
      }
</style>