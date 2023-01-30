<template>
  <div class="header-wrap">
    <nav>
      <ul>
        <li @click="goSection" data-target='Intro' class="gotosec g1"><span>Intro<div></div></span></li>
        <li @click="goSection" data-target='About' class="gotosec g2"><span>About<div></div></span></li>
        <li @click="goSection" data-target='Edu' class="gotosec g3"><span>Education<div></div></span></li>
        <li @click="goSection" data-target='Skills' class="gotosec g4"><span>Skills<div></div></span></li>
        <li @click="goSection" data-target='Project' class="gotosec g5"><span>Project<div></div></span></li>
        <li @click="goSection" data-target='Contact' class="gotosec g6"><span>Contact<div></div></span></li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup() {

    onMounted(()=>{
      headerChanger()
      function changer(params,p1,p2) {
        for (let i = 0; i < p1.length; i++) {
          p1[i].classList.remove('on');
        }
        for (let i = 0; i < p2.length; i++) {
          p2[i].classList.remove('on');
        }
        p1[params].classList.add('on');
        p2[params].classList.add('on');
      }

      function headerChanger() {
        const introSec=document.querySelector('#Intro');
      const aboutSec=document.querySelector('#About');
      const eduSec=document.querySelector('#Edu');
      const skillsSec=document.querySelector('#Skills');
      const projectSec=document.querySelector('#Project');
      const contactSec=document.querySelector('#Contact');

      const navItemTxt=document.querySelectorAll('.gotosec>span');
      const navItem=document.querySelectorAll('.gotosec>span>div');

      const offsetY=window.pageYOffset;

      if (Math.round(offsetY)>=Math.round(introSec.offsetTop))  {
        changer(0,navItemTxt,navItem);
        if (Math.round(offsetY)>=Math.round(aboutSec.offsetTop)) {
          changer(1,navItemTxt,navItem);
          if (Math.round(offsetY)>=Math.round(eduSec.offsetTop)) {
            changer(2,navItemTxt,navItem);
            if (Math.round(offsetY)>=Math.round(skillsSec.offsetTop)) {
              changer(3,navItemTxt,navItem);
              if (Math.round(offsetY)>=Math.round(projectSec.offsetTop)) {
                changer(4,navItemTxt,navItem);
                if (Math.round(offsetY)>=Math.round(contactSec.offsetTop)) {
                  changer(5,navItemTxt,navItem);
          
        }
          
        }
              
        }
            
        }

        }
      }

      }
      
      window.addEventListener('scroll',headerChanger)
    })
  },
  methods: {
    goSection(e){
      if(!e.target.matches('.gotosec')) return;
      e.preventDefault();
      const sec=document.getElementById(e.target.dataset.target);
      if(sec){
        sec.scrollIntoView({behavior:'smooth'});
      }
    },
  },
}
</script>
<style scoped>
div.header-wrap{
  width: 100%;
    
  position: fixed;
  z-index: 2;
  color: #fff;
  padding: 13px 16px;
  mix-blend-mode: difference;
  box-sizing: border-box;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: none;
}
ul{
  display: flex;
  list-style: none;
}
li{
  height: 100%;
  padding: 0 40px;
  cursor: pointer;
}
li>span{

  display: inline-block;
  line-height: 40px;
  position: relative;
  z-index: -1;
  transition: font-weight 0.3s;
}
li>span>div{
  width: 0;
  height: 1px;
  background-color: #ccc;
  transition: width 0.3s;
}
li>span.on{
  font-weight: bold;
}
li>span>div.on{
  width: 100%;
}
li:hover span>div{
width: 100%;
}

@media (max-width:1400px) {
  li{
    padding: 0 25px;
    font-size: 16px;
  }

}
@media (max-width:768px) {
  ul{
    flex-wrap: wrap;
  }
  li{
    padding: 0 14px;
    font-size: 14px;
  }
}
</style>