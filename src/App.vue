<template>
<div id="smooth-bar">

<Header/>
<Intro id="Intro"/>
<About id="About"/>
<!-- <h1>{{scrollbar}}</h1> -->
<Edu id="Edu"/>
<Skills id="Skills"/>
<Project id="Project"/>
<Contact id="Contact"/>
</div>
</template>

<script>

import Header from './components/HeaderSec.vue'
import Intro from './components/IntroSec.vue'
import About from './components/AboutSec.vue'
import Edu from './components/EduSec.vue'
import Skills from './components/SkillsSec.vue'
import Project from './components/ProjectSec.vue'
import Contact from './components/ContactSec.vue'

import Scrollbar from 'smooth-scrollbar';
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    Header,
    Intro,
    About,
    Edu,
    Skills,
    Project,
    Contact
  },
  setup() {
    onMounted(()=>{
      Scrollbar.init(document.querySelector('#smooth-bar'));
    }
    )
    return{
      }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#smooth-bar{
  width: 100vw;
  height: 100vh;
}
</style>
