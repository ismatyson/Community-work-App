<template>
  <v-row justify="center">
    <v-btn
       color="pink darken-1"
       small
       rounded
      @click.stop="dialog = true"
      style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
    >
        <v-icon left> mdi-minus-circle</v-icon>Postpone
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
      class="removal"
    >
      <v-card class="removal">
        <v-card-title style="font-family: 'Montserrat', sans-serif;" class="pa-3 ml-3">Postpone</v-card-title>
        <v-divider/>
        <v-card-text class="mt-2" style="font-family: 'Montserrat', sans-serif;">
          Are you sure you want to postpone this meeting?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="pink darken-1"
            rounded
            @click="dialog = false"
          >
            cancel
          </v-btn>

          <v-btn
            color="pink darken-1"
            text
            @click="onConfirm"
          >
            Postpone
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
      props:{
        id: String,
        required: true
      },
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
        onConfirm(){
             this.$store.dispatch('postponeMeeting', this.id).then(
                this.$router.push('/Leader/Calendar/')
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