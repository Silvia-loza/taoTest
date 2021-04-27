<template>
  <div>
   <Header/>
   <TestTaker/>
   <Footer/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import TestTaker from './components/test-taker'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    TestTaker
  }
}
</script>
<style>
*{
margin: 0 auto;
box-sizing: border-box;}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
