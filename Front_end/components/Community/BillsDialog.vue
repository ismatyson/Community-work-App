<template>
  <v-row justify="center">
    <v-btn
      color="pink darken-3"
      rounded
      small
      fab
      @click.stop="dialog = true"
    >
      <v-icon color="amber">mdi-arrow-right</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="420"
    >
      <div class="dialogy">
        <v-row class="mt-3" justify="center" align="center" no-gutters>
         <v-col cols="10" md="10">         
                <v-card-title style="font-family: 'Montserrat', sans-serif;" class="pa-3 ml-3"><v-icon left>mdi-checkbox-multiple-marked</v-icon>
                 Bills Payment
                </v-card-title>
         </v-col>
        </v-row>
       
         <v-row class="mt-3" justify="center" align="center" no-gutters>
              <v-col cols="10" md="10">
                <v-text-field
                          label="Amount to pay"
                          dense
                          hint="amount should not be less than 100.0"
                          prepend-icon="mdi-tag-multiple"
                          type="number"
                          rounded 
                          v-model.number="amount"
                          outlined
                          color="pink"
                      ></v-text-field>
              </v-col>
            </v-row>
       

         <v-row justify="center" align="center" no-gutters>
         <v-col cols="10" md="10">
           <v-card-subtitle><b>Note:</b> By clicking on the pay button you also agree to give value to community work and its activities in future.</v-card-subtitle>
         </v-col>
         </v-row>

        <v-card-actions>
          <v-btn
            text
            rounded
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          
            <form action="#" @submit.prevent="makePayment">
              
              <v-btn
              color="pink darken-1"
              rounded
              type="submit"
              :disabled="(amount<100.0)"
              @click="dialog = false"
            >
              Pay
            </v-btn>
            
          </form>
        </v-card-actions>
      
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        dialog: false,
        amount: ''
      }
    },
    computed: {
    ...mapGetters(['isAuthenticated','loggedInUser'])
    },
     methods: {
      makePayment() {
         const userInfo = {
          user: this.loggedInUser,
          Bill: this.amount
        }

        this.$launchFlutterwave({
          tx_ref: Date.now(),
          amount: this.amount,
          currency: 'RWF',
          payment_options: 'card,mobilemoney,ussd',
          customer: {
            email: this.loggedInUser.email,
            phonenumber: this.loggedInUser.phone,
            name: this.loggedInUser.name
          },
          callback: function(data) {
            // specified callback function
            alert(data)
          },
          customizations: {
            title: 'Umuganda',
            description: 'Paying bills for Missing in umuganda',
            logo: 'https://assets.piedpiper.com/logo.png'
          }
      })
        this.$store.dispatch('makePayment', userInfo)
      
     }
  }
  }
</script>
<style scoped>
.dialogy{
    border: 1px solid thistle;
    border-radius: 12px;
    background-color: thistle;
}
</style>