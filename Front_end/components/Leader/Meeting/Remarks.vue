<template>
  <v-row justify="center">
    <v-btn
       :disabled="(!missed.length && !attended.length)"
       color="pink darken-1"
       small
       rounded
        @click.stop="dialog = true"
      style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
    >
        <h5 style="font-size: 15px;font-family: 'Montserrat', sans-serif;">End meetup<v-icon right>mdi-checkbox-multiple-marked</v-icon></h5>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="420"
      class="removal"
    >
      <v-card class="removal">
        <v-card-title style="font-family: 'Montserrat', sans-serif;" class="pa-3 ml-3"><v-icon left>mdi-checkbox-multiple-marked</v-icon>End Meetup</v-card-title>
        <v-divider/>
        <v-row no-gutters justify="center" align="center">
            <v-col cols="3" md="3">
            <h5 style="font-size: 12px">MeetingId<v-icon right small>mdi-arrow-right</v-icon></h5>
            </v-col>
            <v-col cols="7" md="7">
            <h5 style="font-size: 12px;font-family: 'Montserrat', sans-serif;">{{meetingId}}</h5>
            </v-col>
        </v-row>
        
        <v-row no-gutters justify="center" align="center">
            <v-col cols="3" md="3">
            <h5 style="font-size: 12px">Attended<v-icon right small>mdi-arrow-right</v-icon></h5>
            </v-col>
            <v-col cols="7" md="7">
            <h5 style="font-size: 12px;font-family: 'Montserrat', sans-serif;">{{attended.length}}</h5>
            </v-col>
        </v-row>
        <v-row no-gutters justify="center" align="center">
            <v-col cols="3" md="3">
            <h5 style="font-size: 12px">Missed<v-icon right small>mdi-arrow-right</v-icon></h5>
            </v-col>
            <v-col cols="7" md="7">
            <h5 style="font-size: 12px;font-family: 'Montserrat', sans-serif;">{{missed.length}}</h5>
            </v-col>
        </v-row>

        <v-row class="mt-3" no-gutters justify="center" align="center">
            <v-col cols="7" md="7">
              <h5 style="font-size: 12px;font-family: 'Montserrat', sans-serif;"><v-icon color="pink" small>mdi-note</v-icon> Closing Remarks <v-icon small>mdi-arrow-down</v-icon></h5>
            </v-col>
        </v-row>
        <v-row  no-gutters justify="center" align="center">
            <v-col cols="10">
                <v-textarea dense outlined rounded v-model="Remarks" style="font-size: 12px;font-family: 'Montserrat', sans-serif;" hint="Brief remarks drawn from the meeting" required></v-textarea>
            </v-col>
        </v-row>
        
    <v-divider/>
          

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="pink darken-1"
            text
            @click="dialog = false"
          >
            cancel
          </v-btn>

          <v-btn
            color="pink darken-1"
            rounded
            @click.once="onEnd"
          >
            End
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
        required: true,
        meetingId: {
          type: String,
          required: true
        },
        missed: {
          type: Array,
          required: true
        },
        attended:{
            type: Array,
            required: true
        }
      },
    data () {
      return {
        dialog: false,
        Remarks: ''
      }
    },
    methods:{
        onEnd(){
            this.dialog = false
        const arrivals = {
          Remarks: this.Remarks,
          meetingId: this.meetingId,
          missed: this.missed,
          attended: this.attended
        }
        this.$store.dispatch('makeAttendance', arrivals).then(
          this.end = true,
          this.$router.push('/Leader/calendar/', this.end)
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