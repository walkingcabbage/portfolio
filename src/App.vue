<template>
<div>
<Header/>
<Intro id="Intro"/>
<About id="About"/>
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
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
