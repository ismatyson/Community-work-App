<template> 
 <v-app-bar dense flat class="my-4" color="transparent" fixed>
      
      <NavBar></NavBar>

   <v-layout row wrap>
     <v-flex xs8>
      <form>
       <v-text-field
        solo-inverted
        class="ml-12"
        flat
        rounded
        dense
        hide-details
        label="Search for something..."
        prepend-inner-icon="mdi-run"
        validate-on-blur
        v-model="search"
      >
      </v-text-field>
    </form>
     </v-flex>
   </v-layout>

      <v-spacer></v-spacer>
     
     
      <v-btn icon>
         <Signin></Signin>
      </v-btn>

 </v-app-bar>
</template>

<script>
import NavBar from '~/components/UI/NavBar'
import Signin from '~/components/other/Signin'
export default {
  components: {
    NavBar,
    Signin
  },
  data () {
      return {
        dialog: false,
      }
    },
}
</script>

<style>

</style>