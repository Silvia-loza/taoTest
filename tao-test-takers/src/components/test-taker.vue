<template>
    <section class="all-cards">
        <div class="card-user">
         <img class="user-image" src="../assets/user.png" alt="user">
         <p> Nombre usuario </p>
        </div>
        <div class="card-user">
         <img class="user-image" src="../assets/user.png" alt="user">
         <p> Nombre usuario </p>
        </div>
        <div class="card-user">
         <img class="user-image" src="../assets/user.png" alt="user">
         <p> Nombre usuario </p>
        </div>
        <div class="card-user">
         <img class="user-image" src="../assets/user.png" alt="user">
         <p> Nombre usuario </p>
        </div>
        <div class="card-user">
         <img class="user-image" src="../assets/user.png" alt="user">
         <p> Nombre usuario </p>
        </div>
    </section>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
export default {
  name: 'Test-taker',
  props: {
  }
}
</script>

<style scoped>
*{
 margin: 0 auto;
 box-sizing: border-box;
 }
 .all-cards {
   display:grid;
   grid-column: 1fr, 1fr;
 }
 .card-user{
 justify-content: center;
 margin: 5%;
 pading: 0 3%;
box-shadow: 0.5px 9px 9px 4px rgba(0, 0, 0, 0.2);
 }
 .user-image {
 width:10%}

 p {
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 font-size: 3em;
 }
</style>
