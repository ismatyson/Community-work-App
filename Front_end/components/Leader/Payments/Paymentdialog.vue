<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs"
          v-on="on" medium rounded small color="rgb(212, 177, 212)">
          <v-chip style="font-family: 'Montserrat', sans-serif;" color="rgb(204, 152, 204)" small>
            Unpaid
          </v-chip>
          <v-icon small left>mdi-arrow-right</v-icon>
         <h3 style="font-family: 'Montserrat', sans-serif;">{{post.charges}} Rwf</h3>
        </v-btn>
      </template>
      <div class="dialogy">
        <v-col cols="12" md="12">
            <v-row no-gutters justify="left" align="left">
            <v-icon left>mdi-export</v-icon>
          <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">Citizen Payment</h5>
            </v-row>
         
              <v-col class="mt-3" cols="12" md="12">
                <v-text-field
                  disabled
                  label="Citizen"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  prepend-icon="mdi-account"
                  v-model="post.name"
                  rounded
                  dense
                  outlined
                ></v-text-field>
              </v-col>

               <v-col cols="12" md="12">
                <v-text-field
                  label="Enter amount to pay"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  prepend-icon="mdi-tag"
                  v-model="amount"
                  rounded
                  outlined
                  dense
                ></v-text-field>
              </v-col>

        
          
          
          <small>*By clicking on save you agree on terms and conditions of isibo-app</small>
        
        <v-card-actions class="mt-3">
          <v-spacer></v-spacer>
          <v-btn small style="font-size: 14px;font-family: 'Montserrat', sans-serif;" text rounded @click="dialog = false">Cancel</v-btn>
          <v-btn small style="font-size: 14px;font-family: 'Montserrat', sans-serif;" text rounded @click="onPay">Pay Bill</v-btn>
        </v-card-actions>
        </v-col>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
      props:{
         post: {
             type: Object,
             required: true
         }
      }, 
      computed:{
     ...mapGetters(['loggedInUser'])
    },
    data () {
      return {
        dialog: false,
        amount: 0,    
      }
  },

  methods:{
      async onPay(){
         const amount = {
             bill: this.amount,
             user: this.post.NationalId
         }
        await this.$store.dispatch('makePayment', amount).then(
            this.$router.push(`/Leader/citizens/${this.loggedInUser.isibo._id}`),
        )
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