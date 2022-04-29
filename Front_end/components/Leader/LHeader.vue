<template>
  <div class="Headery">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="10" md="12">
      <form>
       <v-text-field
        solo-inverted
        flat
        rounded
        dense
        hide-details
        label="Search for something..."
        prepend-inner-icon="mdi-rocket"
        validate-on-blur
        v-model="search"
      >
      </v-text-field>
    </form>
    </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search: ''
    }
  }
}
</script>

<style scoped>
 .Headery{
     border: none;
     background-color: transparent;
     border-radius: 56px;
     position: fixed;
     width: 390px;
 }
</style>