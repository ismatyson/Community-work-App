<template>
    
    <v-container class="mt-7">
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