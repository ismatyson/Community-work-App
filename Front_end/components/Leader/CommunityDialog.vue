<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs"
          v-on="on" medium color="orange">
          <v-avatar size="30">
            <img
              src="../../assets/images/rocket (1).png"
            />
          </v-avatar>
          <h5  class="black--text" style="font-size: 14px;font-family: 'Montserrat', sans-serif;">Create a community</h5>
        </v-btn>
      </template>
      <div class="dialogy">
        <v-row no-gutters class="mt-3" justify="center" align="center">
              <v-col cols="10" md="9">
                <h5 style="font-size: 24px;font-family: 'Montserrat', sans-serif;"><v-icon left>mdi-arrow-right</v-icon> Create a community</h5>
              </v-col>
        </v-row>
        <v-row no-gutters justify="center" align="center">
           <v-col cols="10" md="10">
            <v-subheader>Give your community a personality with a name and its location. you can always change it later.</v-subheader>
           </v-col>
        </v-row>
      
     
          <v-col cols="12" md="12">
            
              
              <v-row no-gutters justify="center" align="center">
              <v-text-field  outlined dense v-model="name" style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Community name*" required></v-text-field>
              </v-row>
              
               
                <v-row no-gutters justify="center" align="center">
                <v-autocomplete
                  :items="['Kigali city', 'Nothern','Southern','Eastern','Western']"
                  label="Province"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  v-model="province"
                  outlined
                  dense
                ></v-autocomplete>
                </v-row>
               

              
                  <v-row no-gutters justify="center" align="center">
                 <v-autocomplete
                  :items="['Nyarugenge', 'Remera', 'Kicukiro','Gasabo']"
                  label="District"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  v-model="district"
                  outlined
                  dense
                ></v-autocomplete>
                  </v-row>
    

                    <v-row no-gutters justify="center" align="center">
                      <v-text-field dense outlined v-model="village" style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Village" required></v-text-field>
                    </v-row>
                 
    

               
                  <v-row no-gutters justify="center" align="center">
                    <v-text-field dense outlined v-model="NumberofPeople" style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Number of People" required></v-text-field>
                  </v-row>
                
        
          <small>By creating a community you aggree to our community guidelines.</small>
          </v-col>

        <v-card-actions>
          <v-btn style="font-family: 'Montserrat', sans-serif;" text rounded @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn style="font-size: 14px;font-family: 'Montserrat', sans-serif;" color="lime" @click="onSave">Create</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
    <Snackbar :message="text" :snackbar="snackbar"/>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import communityVue from '../../layouts/community.vue'
import Snackbar from '~/components/UI/Snackbar'
  export default {
    components:{
       Snackbar
    },
    data: () => ({
      snackbar: false,
      text: 'Hello, I\'m a snackbar',
      dialog: false,
       enabled: false,
       name: '',
       province: '',
       district: '',
       village: '',
       NumberofPeople: undefined,
    }),
     computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
       async onSave(){
          const communityData = {
              NationalId: this.loggedInUser.NationalId,
              name: this.name,
              province: this.province,
              district: this.district,
              village: this.village,
              NumberofPeople: this.NumberofPeople
          }
           this.$store.dispatch('addCommunity',communityData).then(
             this.dialog= false,
           ).catch(e=>{
             this.text = e
           })
        }
    },

  }
</script>
<style scoped>
.dialogy{
    border: 1px solid thistle;
    border-radius: 16px;
    background-color: thistle;
}
</style>