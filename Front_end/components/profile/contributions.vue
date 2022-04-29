<template>
              <v-row 
              align="center"
              justify="center"
              no-gutters
             >
            

             <v-col
              cols="8"
              md="7"
             >
             
              <div class="cardy">   
              <v-row
               justify="center"
               align="center"
              >
                <v-col
                cols="4"
                sm="4"
                md="3"
               >
                <v-chip
                  class="black--text"
                  small
                  rounded
                  outlined
                  color="black"
                >
                  <b>Security</b>
                </v-chip>
               </v-col>

               <v-col
                cols="3"
                sm="5"
                md="3"
               >
                 <h2 style="font-family: 'Montserrat', sans-serif;">June</h2>
               </v-col>
               
               <v-col
                cols="3"
                md="4"
               >
                <h2 style="font-family: 'Montserrat', sans-serif;">3000 Rwf</h2>
               </v-col>

               <v-col>
                <v-btn fab small color="pink">
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
               </v-col>

              </v-row>
               </div>
             </v-col>
            </v-row>

</template>

<script>
export default {

}
</script>

<style scoped>
.cardy{
  border: 1px solid rgb(189, 181, 181);
  background-color: rgb(185, 182, 182);
}
</style>