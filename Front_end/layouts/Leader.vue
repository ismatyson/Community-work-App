<template>
  <v-app class="appy">
    <v-main>
      <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
      
      </v-content>
       
    </v-main>
  </v-app>
</template>

<script>
export default {
  
}
</script>
<style scoped>
.appy{
   background-color: silver;
   font-family: 'Inter', sans-serif;
}
.pics{
  background-image: url('../assets/images/arabica-554.png');
  background-position-x: center;
}
</style>
