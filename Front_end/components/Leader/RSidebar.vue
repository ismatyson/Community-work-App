<template>
<v-container>
  <div class="Sidebery hidden-sm-only">
      <v-row class="mt-10" no-gutters justify="center" align="center">
          <h5 style="font-family: 'Montserrat', sans-serif;">Payments and Bills <v-icon>mdi-arrow-down</v-icon></h5>
      </v-row>
      <v-row 
      class="mt-4 pa-5" 
      justify="center" 
      align="center"
      >
          <v-col cols="8" md="12">
            
           <h5 style="font-size: 30px;font-family: 'Montserrat', sans-serif;"><v-icon left large color="pink darken-3">mdi-tag</v-icon>3000.0 Rwf</h5>
           <h5 class="mt-4 ml-10">as of <v-icon left>mdi-arrow-right</v-icon>21st /june</h5>
          </v-col>
      </v-row>
      <v-row no-gutters justify="center" align="center">
          <v-btn outlined to="/Leader/Payments" class="mt-3" rounded color="pink darken-3">
           <h5 style="font-family: 'Montserrat', sans-serif;">View Details</h5>
          </v-btn>
      </v-row>
  </div>

  <div style="margin-top: 313px" class="members hidden-sm-only">
      <v-row class="mt-9" no-gutters justify="center" align="center">
          <h5 style="font-family: 'Montserrat', sans-serif;">Community Leaders<v-icon>mdi-arrow-down</v-icon></h5>
      </v-row>
      <v-row 
      class="mt-7 pa-1" 
      no-gutters 
      justify="center" 
      align="center"
      >
          <v-col cols="9" md="2">
            <v-avatar>
                <img
                 src="../../assets/images/man (1).png"
                />
            </v-avatar>
          </v-col>

          <v-col cols="7" md="7">
              <v-row justify="center" align="center">
              <h5 color="pink" style="font-family: 'Montserrat', sans-serif;">Eric Gordon</h5>
              </v-row> 
              <v-row justify="center">
                <v-chip color="amber" small>
                  <h6>Administrator</h6>
                </v-chip>
              </v-row>             
          </v-col>
      </v-row>
       <v-row 
      class="mt-7 pa-1" 
      no-gutters 
      justify="center" 
      align="center"
      >
          <v-col cols="9" md="2">
            <v-avatar>
                <img
                 src="../../assets/images/man.png"
                />
            </v-avatar>
          </v-col>

          <v-col cols="7" md="7">
              <v-row justify="center" align="center">
              <h5 color="pink" style="font-family: 'Montserrat', sans-serif;">James Madison</h5>
              </v-row>  
               <v-row justify="center">
                <v-chip color="amber" small>
                  <h6>Assistant</h6>
                </v-chip>
              </v-row>              
          </v-col>
      </v-row>
      
  </div>
</v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
 .Sidebery{
     border: 2px solid salmon;
     background-color: salmon;
     border-radius: 75px;
     height: 300px;
     width: 280px;
    position: fixed;
 }
 .members{
     border: 1px solid #ccc;
     background-color: thistle;
     border-radius: 75px;
     height: 300px;
     width: 290px;
    position: fixed;
    background-position-x: center;
 }
</style>