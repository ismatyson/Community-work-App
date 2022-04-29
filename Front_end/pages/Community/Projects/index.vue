<template>
    
    <v-container>
      <Projects/>
       <v-divider/>
       <Upcoming/>
    </v-container>
 
</template>

<script>
import Projects from '~/components/projects/Projects'
import Upcoming from '~/components/projects/Upcoming'
export default {
  components: {
    Projects,
   Upcoming
 }
}
</script>

<style>

</style>