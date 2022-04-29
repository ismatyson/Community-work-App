<template>
  <v-row justify="center">
    <v-btn
       color="rgb(212, 177, 212)"
       small
       rounded
      @click.stop="dialog = true"
    >
        <h5 style="font-family: 'Montserrat', sans-serif;"><v-icon left color="pink"> mdi-cancel</v-icon>Remove this citizen from the village</h5>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="390"
      class="removal"
    >
      <v-card class="removal">
        <v-card-title style="font-family: 'Montserrat', sans-serif;" class="headline">Confirm removal</v-card-title>

        <v-card-text>
          You are about to remove <b>{{citizen}}</b> from your village list, are you sure!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="pink darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            text
            @click="onConfirm"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
      props:{
        citizen: {
            type: String,
            required: true
        }
      },
       computed:{
     ...mapGetters(['loggedInUser'])
    },
    data () {
      return {
        dialog: false,
        userId: this.$route.params.Citizenid
      }
    },
    methods:{
        onConfirm(){
             this.$store.dispatch('removeUser', this.userId).then(
                 this.$router.push(`/Leader/citizens/${this.loggedInUser.isibo._id}`)
             )
        }
    }
  }
</script>
<style scoped>
.removal{
    border: 1px solid thistle;
    background-color: thistle;
    border-radius: 24px;
}
</style>