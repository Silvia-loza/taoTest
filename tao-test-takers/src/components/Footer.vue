<template>
    <footer class="footer">
    <ul>
    <li>Products</li>
    <li>Solutions</li>
    <li>Services</li>
    <li>Support</li>
    <li>Company</li>
    </ul>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {}
}
</script>

<style scoped>

.footer{
display:flex;
align-items: center;
justify-content: space-between;
background-color:#263e4e ;
color: white;
height: 30vh;
font-size: 3em
}

</style>
