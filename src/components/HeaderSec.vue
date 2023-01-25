<template>
  <div>
    <nav>
      <ul>
        <li @click="goSection" data-target='Intro' class="gotosec">Intro</li>
        <li @click="goSection" data-target='About' class="gotosec">About</li>
        <li @click="goSection" data-target='Edu' class="gotosec">Education</li>
        <li @click="goSection" data-target='Skills' class="gotosec">Skills</li>
        <li @click="goSection" data-target='Project' class="gotosec">Project</li>
        <li @click="goSection" data-target='Contact' class="gotosec">Contact</li>
      </ul>
    </nav>
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar';
export default {
  setup() {
  },
  methods: {
    goSection(e){
      if(!e.target.matches('.gotosec')) return;
      e.preventDefault();
      const sec=document.getElementById(e.target.dataset.target);
      if(sec){
        Scrollbar.init
      }
    },
  },
}
</script>
<style scoped>
div{
  position: fixed;
  z-index: 2;
  color: #ccc;
  margin-top: 24px;
  margin-left: 16px;
}
ul{
  display: flex;
  list-style: none;
}
li{
  padding: 10px 40px;
  cursor: pointer;
}
</style>