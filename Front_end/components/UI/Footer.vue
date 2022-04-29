<template>
   <v-footer
              padless
              shaped
            >
              <v-card
                rounded
                flat
                class="grey lighten-2 white--text text-center"
              >
                <v-row>
           
                   <v-col
                    cols="6"
                    md="6"
                    sm="3"
                   >
                         <img
                         src="../../assets/images/kingdom-2.png"
                         width="120"
                         />
                    
                   </v-col>
                   <v-divider vertical/>
                    <v-col
                     cols="4"
                     md="3"
                     sm="4"
                    > 
                        
                        <h5 class="black--text" style="font-family: 'Montserrat', sans-serif;">About</h5>
                        <v-card-text class="black--text mt-5">
                        Orci varius natoque penatibus et mnascetur ridiculus mus.
                        </v-card-text>
                    </v-col>
                   
                 

                    <v-card-text>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 black--text"
                    color="red"
                    icon
                  >
                    <v-icon size="24px">{{ icon }}</v-icon>
                  </v-btn>
                </v-card-text>
                </v-row>
              </v-card>
            </v-footer>
</template>

<script>
export default {
   data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style>

</style>