<template>
  <v-app-bar color="transparent" flat dense>
      <v-btn color="pink" outlined rounded>
          <v-icon color="pink">mdi-mail</v-icon>
      </v-btn>
      <v-spacer/>
       <form>
       <v-text-field
        solo-inverted
        flat
        dense
        hide-details
        label="find a meeting..."
        prepend-inner-icon="mdi-watch"
        validate-on-blur
        v-model="search"
      >
      </v-text-field>
    </form>
    <v-spacer/>
    <v-app-bar-nav-icon/>
  </v-app-bar>
</template>

<script>
export default {
  data() {
      return{
          search: ''
      }
  }
}
</script>

<style>

</style>