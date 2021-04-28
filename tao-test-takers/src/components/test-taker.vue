<template>
    <section class="all-cards">
        <div v-for = "dato in data" :key="dato.userId" class="card-user">
         <p class="user-data">{{dato.firstName}} {{dato.lastName}}</p>
         <!-- <p id="email">{{user.email}}</p> -->
        </div>
    </section>
</template>

<script>
// mport users from '../assets/data/testtakers.json'
export default {
  name: 'Test-taker',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    // asyncronus function that fetches the data from api, then sent to data and looped in v-for in template
    async getUsers () {
      const res = await fetch('https://hr.oat.taocloud.org/v1/users?limit=20&offset=0')
      const data = await res.json()
      console.log(data)
      this.data = data
    }
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
 padding: 0 3%;
box-shadow: 0.5px 9px 9px 4px rgba(0, 0, 0, 0.2);
 }
 .card-user:hover{
 justify-content: center;
 margin: 5%;
 padding: 0 3%;
box-shadow: 1px 18px 18px 8px rgba(0, 0, 0, 0.2);
 }
 .user-image {
 width:10%
 }
 .user-data {
 margin: 2%
 }
 .user-data:hover {
 color: #d77d81;
 }
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
