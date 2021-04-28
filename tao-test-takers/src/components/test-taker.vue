<template>
    <section class="all-cards">
        <div v-for="(user, index) in usuarios" :key="index" class="card-user">
         <img class="user-image" :src="user.picture" alt="user">
         <p>{{user.title}} {{user.firstname}} {{user.lastname}}</p>
         <p id="email">{{user.email}}</p>
        </div>
    </section>
</template>

<script>
import users from '../assets/data/testtakers.json'
export default {
  name: 'Test-taker',
  data () {
    return {
      data: []
    }
  },
  computed: {
    usuarios () {
      return users.map((user) => {
        return user
      })
    }
  }
//   created () {
//     this.getUsers()
//   },
//   methods: {
//     getUsers () {
//       fetch('./testtakers.json')
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//     }
//   }
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
 padding: 0 3%;
box-shadow: 0.5px 9px 9px 4px rgba(0, 0, 0, 0.2);
 }
 .user-image {
 width:10%}
 #email {
 color: #d77d81;
 font-size: 120%;
 margin: 1%
 }

 p {
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 font-size: 3em;
 }
</style>
