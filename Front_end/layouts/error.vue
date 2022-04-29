<template>
<v-container>
    <h1 style="font-family: 'Montserrat', sans-serif;" v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <v-btn outlined rounded to="/community">
    <h5>
      return home
    </h5>
    <v-icon right>
      mdi-arrow-right
    </v-icon>
    </v-btn>
</v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 80px;
}
</style>
