<template>
  <div class="wrapper">
    <div class="holder">
      <div class="title-wrap">
        <h1>PROJECT</h1>
      </div>
      <div class=" project-wrap renewal-project-wrap">
        <h2>renewal</h2>
        <div class="renewal-con">
          <project-con/>  
          <project-con/>  
          <project-con/>  
        </div>
      </div>
      <div class=" project-wrap clone-wrap">
        <h2>web clone</h2>
        <div class="renewal-con">
          <project-con/>  
          <project-con/>  
        </div>
      </div>
      <div class=" project-wrap toy-project-wrap">
        <h2>toy project</h2>
        <div class="renewal-con">
          <project-con/>  
          <project-con/>  
          <project-con/>  
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import ProjectCon from './ProjectCon.vue';
export default {
  components: { ProjectCon },
  
}
const projectDetails = [{
          logo: require(`@/assets/imgs/kwa-tit.png`),
          tit: '한국 폐기물 협회',
          stak: 'HTML, CSS, Javascript, Node.js, express.js, ejs, MySQL',
          github: 'https://github.com/walkingcabbage/KWA2',
          demo: 'https://kwa-walkingcabbage.koyeb.app/',
          mockup: true,
        },
        {
          logo: require(`@/assets/imgs/seomun-tit.png`),
          tit: '서문시장 야시장',
          stak: 'HTML, CSS, Javascript, Node.js, express.js, ejs, MySQL',
          github: 'https://github.com/walkingcabbage/seomun',
          demo: 'https://seomun-walkingcabbage.koyeb.app/',
          mockup: true,
        },
        {
          logo: require(`@/assets/imgs/wonju-tit.png`),
          tit: '원주 곤충마을 박물관',
          stak: 'HTML, CSS, Javascript, Node.js, express.js, ejs, MySQL, git',
          github: 'https://github.com/walkingcabbage/wonju',
          demo: 'https://wonju-walkingcabbage.koyeb.app/',
          mockup: true,
        },
        

      ]

const cloneDetails = [
        {
          logo: require(`@/assets/imgs/richmond-tit.png`),
          tit: '더 리치먼드',
          stak: 'HTML, CSS, Javascript',
          github: 'https://github.com/walkingcabbage/therichmond_clone',
          demo: 'https://walkingcabbage.github.io/therichmond_clone/',
          mockup: false
        },
        {
          logo: require(`@/assets/imgs/shouse-tit.png`),
          tit: '싱그러운 집',
          stak: 'HTML, CSS, Javascript',
          github: 'https://github.com/walkingcabbage/shouse_clone',
          demo: 'https://walkingcabbage.github.io/shouse_clone/',
          mockup: false,
        },

      ]
const toyDetails = [
        {
          logo: require(`@/assets/imgs/goodsleep-tit.png`),
          tit: 'Good Sleep',
          stak: 'HTML, CSS, Javascript, React.js, TypeScript',
          github: 'https://github.com/walkingcabbage/sleepy-calc',
          demo: 'https://walkingcabbage.github.io/sleepy-calc/',
          mockup: false
        },
        {
          logo: require(`@/assets/imgs/khstype-tit.png`),
          tit: '장규한의 취향은',
          stak: 'HTML, CSS, Javascript, React.js',
          github: 'https://github.com/walkingcabbage/khs-type',
          demo: 'https://walkingcabbage.github.io/khs-type/',
          mockup: false,
        },
        {
          logo: require(`@/assets/imgs/howmanydays-tit.png`),
          tit: '얼마나 지났을까',
          stak: 'HTML, CSS, Javascript, React.js',
          github: 'https://github.com/walkingcabbage/how-many-days',
          demo: 'https://walkingcabbage.github.io/how-many-days/',
          mockup: false,
        },

      ]
</script>

<style lang="css">
  .wrapper{
    padding: 30px 0;
    background-color: #fff;
  }
  .title-wrap{
    padding-bottom: 50px;
  }
  .project-wrap{
    margin-bottom: 40px;
  }
  .project-wrap >h2{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .renewal-con{
    display: flex;
    justify-content: center;
    gap: 20px;
  }
</style>