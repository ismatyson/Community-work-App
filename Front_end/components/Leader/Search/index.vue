<template>
  <v-container>
      <v-row no-gutters justify="center" align="center">
          <v-col cols="12" md="12">
          <v-card-title>Search results for - <b>{{this.$route.params.SearchId}}</b></v-card-title>
          <v-card-subtitle>filtered</v-card-subtitle>
         {{filteredCourses}}
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {mapGetters,mapState} from 'vuex'
export default {
  props:{
      // post: {
      //     type: Object,
      //     required: true
      // },
      // word: {
      //   type: String,
      //   required: true
      // }
  },
  computed: {
        ...mapGetters(['getFilteredMeetups','getSearchWord']),
    //     searchWord: {
    //   get () {
    //     return this.$store.state.searchWord
    //   },
    //   set (value) {
    //     this.$store.dispatch('FILTERED_COURSES', value)
    //   }
    // },
    filteredCourses () {
      try {
        let a = (this.$store.getters.getFilteredMeetups || this.$store.getters.meetings)
        console.log(a)
        return a
      } catch (e) {
        console.log(e)
      }
    },
    
    // filteredList() {
    //     const mlist = this.postList
    //     mlist.forEach(post => {
    //        return mlist.filter(posty => {
    //          return posty.event.toLowerCase().includes(this.id.toLowerCase())
    //       })
    //     })
    // }
  }
}
</script>

<style>

</style>