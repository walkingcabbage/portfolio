<template>
  <div class="wrap" >
    <div class="project-swiper-wrap">
      <project-con/>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";

import ProjectCon from './ProjectCon.vue';
export default {
  components: {
  ProjectCon
  },
  setup() {
    ProjectCon
    
    onMounted(()=>{
      
    })
    return{
    }
  }
}
</script>
<style scoped>
    div{
    width: 100%;
    height: 100vh;
    min-height: 720px;
    background-color: #000;
  }
</style>