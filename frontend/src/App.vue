<template>
  <div id="app">
    <Resume/>
  </div>
</template>

<script>
import Resume from '@/components/resume.vue'
export default {
  components: {
    Resume
  },
  data: function(){
    return {
      a: 1
    }
  },
  mounted() {
    this.a = "mounted完成"
    this.axios.get('/users').catch(()=>{
      this.a = '请求服务器失败'
    })
  }
}
</script>

<style lang="less">
body{
	margin: 0; 
	padding: 0;
	border: 0;
}
body a {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
</style>
