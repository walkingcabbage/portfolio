<template>
  <div class="wrap" ref="wrap">
    <h1>project sec</h1>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const wrap=ref(null)
    
    onMounted(()=>{
      
    })
    return{
      wrap
    }
  }
}
</script>
<style scoped>
    div{
    width: 100%;
    height: 800px;
    background-color: lightgreen;
  }
</style>