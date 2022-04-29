<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    > 
            <v-layout row wrap justify-center>
               
              <v-flex xs12 md10 lg10>
                 
                      <v-row class="pa-6">
                        <div class="display-4">
                        
                          <h1 style="font-size: 90px;font-family: 'Montserrat', sans-serif;">Your ideas and strength matter.</h1>
                          <v-btn color="pink" rounded>
                            <img
                            src="../../assets/images/solar-system.png"
                            />
                            <h3 style="font-family: 'Montserrat', sans-serif;">Learn More</h3> <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                          
                        </div>
                      </v-row>
                      
               </v-flex>
               
            </v-layout>


            <v-divider style="margin-top: 190px"></v-divider>
            
            <v-layout row wrap justify-center>
              <v-flex xs12 md5 lg5>
                <h5><v-icon color="pink" left>mdi-arrow-right-bold-circle</v-icon>Always wondered ..</h5>
              </v-flex> 
            </v-layout> 
           
            <v-layout row wrap justify-center style="margin-top: 25px">
               <v-flex xs12 md6 lg6>
              
                  <div style="margin-right:143px">
                   <img src="../../assets/images/plant-growth-success-1.png" height="396">
                  </div>
                
              </v-flex>
              
              <v-flex xs12 md5 lg5>
                    <h3 style="font-size: 40px;width: 459px;font-family: 'Montserrat', sans-serif;">what activity to be performed on community work ?</h3>
                    <p class="mt-4" style="width: 380px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores illo, id, qui tenetur natus dolores sed odit nihil voluptas minima culpa numquam? Quas molestiae corporis voluptas consectetur vero vitae quasi.</p>
              </v-flex>

            </v-layout>
              

            <v-divider style="margin-top: 90px"></v-divider>
             
            <v-layout row wrap justify-center>
              <v-flex xs12 md3 lg3>
                <h5 class="pa-3"><v-icon color="pink" left>mdi-arrow-right-bold-circle</v-icon>ohh wait ...</h5>
              </v-flex> 
            </v-layout> 

            <v-layout row wrap justify-center style="margin-top: 25px">

               <v-flex xs12 md6 lg6>
            
                    <h3 style="font-size: 40px;width: 390px;font-family: 'Montserrat', sans-serif;">the location and tools aren't well known at times?</h3>
                    <p class="mt-4" style="width: 380px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores illo, id, qui tenetur natus dolores sed odit nihil voluptas minima culpa numquam? Quas molestiae corporis voluptas consectetur vero vitae quasi.</p>
               
              </v-flex>

               <v-flex xs12 md5 lg5>
              
                  <div style="margin-right:143px">
                   <img src="../../assets/images/pluto-bad-gateway-1.png" height="396">
                  </div>
                
              </v-flex>
              

            </v-layout>


            <v-divider style="margin-top: 25px"></v-divider>
        

            <v-layout row wrap justify-center>
              <v-flex xs12 md3 lg3>
                <h5 class="pa-5">you will get to know</h5>
              </v-flex> 
            </v-layout>
            
            <v-layout row wrap justify-space-around class="pa-2">
              <v-flex xs12 md3 lg3>  
                 <img style="border-radius: 70%" src="../../assets/images/arrow.svg" width="150"/>
                 <h3 style="font-family: 'Montserrat', sans-serif;">Monthly Goals</h3>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </v-flex>

              <v-flex xs12 md3 lg3> 
                 <img style="border-radius: 70%" src="../../assets/images/employee.svg"  width="150"/>
                 <h3 style="font-family: 'Montserrat', sans-serif;">Discussions and Meetings</h3>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </v-flex>

              <v-flex xs12 md3 lg3>
                 <img style="border-radius: 70%" src="../../assets/images/megaphone.svg"  width="150"/>
                 <h3 style="font-family: 'Montserrat', sans-serif;">Important updates</h3>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </v-flex>
              
            </v-layout>
    </v-flex>
      <Footer style="margin-top: 223px"/>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Footer from '~/components/UI/Footer'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Footer
  },
}
</script>
