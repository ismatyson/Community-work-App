<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs"
          v-on="on" medium rounded color="pink">
          <h5 style="font-family: 'Montserrat', sans-serif;"><v-icon left>mdi-key</v-icon>Edit</h5>
        </v-btn>
      </template>
      <div class="dialogy">
        <v-col cols="12" md="12">
            <v-row no-gutters justify="left" align="left">
            <v-icon left>mdi-export</v-icon>
          <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">user-info</h5>
            </v-row>
         
              <v-col class="mt-3" cols="12" md="12">
                <v-text-field
                  label="set a new username"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  prepend-icon="mdi-account"
                  v-model="editedUser.name"
                  rounded
                  dense
                  outlined
                ></v-text-field>
              </v-col>

               <v-col cols="12" md="12">
                <v-text-field
                  label="set a new email"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  prepend-icon="mdi-email"
                  v-model="editedUser.email"
                  rounded
                  outlined
                  dense
                ></v-text-field>
              </v-col>

        
          
          
          <small>*By clicking on save you agree on terms and conditions of isibo-app</small>
        
        <v-card-actions class="mt-3">
          <v-spacer></v-spacer>
          <v-btn small style="font-size: 14px;font-family: 'Montserrat', sans-serif;" text color="pink darken-1" rounded @click="dialog = false">Cancel</v-btn>
          <v-btn small style="font-size: 14px;font-family: 'Montserrat', sans-serif;" text color="green darken-1" rounded @click="onAlter">Save</v-btn>
        </v-card-actions>
        </v-col>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
      props:{
         user: Object,
         required: true
      }, 
    data () {
      return {
        dialog: false,
          editedUser: this.user ? {...this.user } : {
              name: '',
              email: '' ,
          },     
      }
  },

  methods:{
     async onAlter(){
        //  const Newuser = this.isAuthenticated ? {... this.loggedInUser} : {
        //      id: this.loggedInUser.NationalId,
        //      name: this.username,
        //      email: this.email
        //  }
        // this.$store.dispatch('editUser', Newuser)
        alert(this.editedUser);
        // await this.$auth.logout();
        // this.$router.push('/')
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