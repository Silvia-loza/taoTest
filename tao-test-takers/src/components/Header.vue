<template>
  <header class="header">
   <img id=logoHeader alt="Tao Testing logo" src="../assets/TAOTesting.png">
    <ul>
      <li>Product</li>
      <li>Solutions</li>
      <li>Services</li>
      <li>Support</li>
      <li>About Us</li>
      <li>Resources</li>
      <li>Blog</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
color: var(--rojo-corpo);
margin: 0 auto;
box-sizing: border-box;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#logoHeader{
justify-content: flex-start;
width:10%;
margin-top: 2%;
margin-bottom: 2%;
}

.header {
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0.5px 9px 9px 4px rgba(0, 0, 0, 0.2);
   }
   ul {
   width:60%;
   margin-bottom:-5%;
   margin-right: -5%;
  }
   li {
    margin: 0 2%;
    font-size: 120%;
   }
</style>
