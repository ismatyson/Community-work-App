<template>
  <v-app class="appy">
    <v-main>
      <v-content>
        <ToolBar/>
      <v-container style="margin-top: 60px">
        <nuxt />
      </v-container>
      
      </v-content>
       
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from '~/components/UI/ToolBar'
export default {
  
  components: {
    ToolBar
  }
}
</script>
<style scoped>
.appy{
   background-color: silver;
   font-family: 'Inter', sans-serif;
   /* font-family: 'Quicksand', sans-serif; */
}
</style>
