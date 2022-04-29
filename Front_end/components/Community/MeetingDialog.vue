<template>
  <v-row justify="center">
    <v-btn
      color="pink lighten-3"
      rounded
      small
      fab
      @click.stop="dialog = true"
    >
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      class="dialogy"
    >
      <div >
        <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-export</v-icon> Meet-up info</h5>
        <v-chip class="ml-3" small color="red lighten-3">
                <h5 style="font-family: 'Montserrat', sans-serif;">15th/07/2020</h5>
        </v-chip>
        <v-row no-gutters justify="left" align="left">
            <v-col cols="12" md="12">
                <v-card-text>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </v-card-text>
            </v-col>
        </v-row>

        <v-divider/>

        <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-spade</v-icon>Tools</h5>
        
        <v-row no-gutters justify="left" align="left">
            <v-col class="ml-5" cols="12" md="3">
            <v-chip small color="red lighten-2">
                <h5 style="font-family: 'Montserrat', sans-serif;">spade</h5>
            </v-chip>
            </v-col>
        </v-row>
        <v-divider class="mt-4"/>
           <h5 class="pa-4" style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-compass-outline</v-icon>Location</h5>
         <v-row no-gutters justify="left" align="left">
               <v-col cols="12" md="8">
                <v-subheader style="font-family: 'Montserrat', sans-serif;"><v-icon left color="black">mdi-arrow-right</v-icon>Kimironko 12:30pm</v-subheader>
               </v-col>
        </v-row>   

         <v-row  class="mt-4" no-gutters justify="center" align="center">     
        <v-card-actions>
           <v-btn
            color="red lighten-2"
            small
            rounded
            @click="dialog = false"
          >
            <h5 style="font-family: 'Montserrat', sans-serif;"><v-icon left> mdi-arrow-right-bold-circle-outline</v-icon>Join Meeting</h5>
          </v-btn>
          <v-spacer></v-spacer>
          
        </v-card-actions>
         </v-row>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
<style scoped>
.dialogy{
    border: 1px solid thistle;
    border-radius: 12px;
    background-color: thistle;
    width: 400px;
}
</style>