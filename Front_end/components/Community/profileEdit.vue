<template>
<v-container>
 <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">update your profile <v-icon>mdi-arrow-down</v-icon></h5>     
        <v-col cols="12" md="12">   
          <v-row no-gutters justify="center" align="center">
              <v-col cols="12" md="12">
                <v-text-field
                  label="alter NationalId"
                  dense
                  prepend-icon="mdi-card"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  v-model="editedUser.NationalId"
                  outlined
                  rounded
                ></v-text-field>
              </v-col>
            </v-row> 
            <v-row no-gutters justify="center" align="center">
              <v-col cols="12" md="12">
                <v-text-field
                  label="set a new username"
                  dense
                  prepend-icon="mdi-card"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  v-model="editedUser.name"
                  outlined
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters justify="center" align="center">
              <v-col cols="12" md="12">
                <v-text-field
                  label="set a new email"
                  dense
                  prepend-icon="mdi-email"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  v-model="editedUser.email"
                  outlined
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>
              
 <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">change your community <v-icon>mdi-arrow-down</v-icon></h5>     
          <v-row class="mt-4" justify="center" align="center">
           <div class="join">
            <v-row 
             justify="center"
             align="center"
             no-gutters
            >
               <v-col 
                cols="7"
                md="8"
                >
               <v-btn outlined to="/Community/JoinaCommunity/" color="pink darken-3" small rounded>
              <h5 style="font-family: 'Montserrat', sans-serif;">change community</h5>
               </v-btn>
               </v-col>
               <v-col 
                cols="2"
                md="2"
                >
                <v-icon x-large color="black">mdi-arrow-left</v-icon>
               </v-col>
            </v-row>
           </div>
       </v-row>
        <v-card-actions class="mt-8">
          
          <v-btn outlined color="pink" fab @click="onReturn"><v-icon x-large>mdi-chevron-left</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn fab style="font-size: 14px;font-family: 'Montserrat', sans-serif;" color="pink darken-3" rounded @click.once="onAlter"><v-icon color="amber" large>mdi-pen</v-icon></v-btn>
        </v-card-actions>
        </v-col>
</v-container>
</template>

<script>
import Postpone from '~/components/Leader/Meeting/Postpone'
import {mapGetters} from 'vuex'
  export default {
    props: {
      post: {
          type: Object,
          required: false
      },
  },
  components:{
   Postpone
  },
    data(){
      return{
         time: null,
        modal1: false,
        modal2: false,
        menu2: false,
      modal: false,
      search: null,
       editedUser: this.post ? {...this.post } : {
              NationalId: '',
              name: '',
              email: ''
          },
      }
    },
  
    methods:{
        onReturn(){
          this.$router.push('/community/profile')
        },
        async onAlter(){
          this.$store.dispatch('editUser', this.editedUser)
          await this.$auth.logout();
          this.$router.push('/')
      }
    },
    watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      },
    },
  }
</script>
<style scoped>
.join {
  border: 1px solid rgb(214, 172, 214);
  border-radius: 15px;
  box-shadow: 0 1px 1px #ccc;
  width: 540px;
  height: auto;
  background-color: rgb(214, 172, 214);
}
</style>