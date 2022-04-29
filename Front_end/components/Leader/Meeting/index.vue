<template>
<v-container fluid>
  
  <div class="events">
    <v-row no-gutters justify="center" align="center">
        <v-col cols="8" md="6">
        <v-row no-gutters justify="center" align="center">
         <h5 style="font-size: 35px;font-family: 'Montserrat', sans-serif;">Event Schedule</h5>
         <h6 style="font-family: 'Montserrat', sans-serif;">upcoming event countdown <v-icon small right>mdi-arrow-down</v-icon></h6>
        </v-row>

        <v-row justify="space-between" align="center">
            <v-col cols="4" md="4">
              <div class="count">
                <v-col cols="12" md="12">
                <v-row justify="center" align="center">
                    <h6 style="font-family: 'Montserrat', sans-serif;">days <v-icon small>mdi-arrow-down</v-icon></h6>
                </v-row>
                <v-row class="mt-1" justify="center" align="center">
                    <h5 style="font-size: 20px;font-family: 'Montserrat', sans-serif;">0</h5>
                </v-row>
                 </v-col>
              </div>
            </v-col>

            <v-col cols="4" md="4">
              <div class="count">
                <v-col cols="12" md="12">
                <v-row justify="center" align="center">
                    <h6 style="font-family: 'Montserrat', sans-serif;">hrs <v-icon small>mdi-arrow-down</v-icon></h6>
                </v-row>
                <v-row class="mt-1" justify="center" align="center">
                    <h5 style="font-size: 20px;font-family: 'Montserrat', sans-serif;">0</h5>
                </v-row>
                 </v-col>
              </div>
            </v-col>

            <v-col cols="4" md="4">
              <div class="count">
                <v-col cols="12" md="12">
                <v-row justify="center" align="center">
                    <h6 style="font-family: 'Montserrat', sans-serif;">mns <v-icon small>mdi-arrow-down</v-icon></h6>
                </v-row>
                <v-row class="mt-1" justify="center" align="center">
                    <h5 style="font-size: 20px;font-family: 'Montserrat', sans-serif;">0</h5>
                </v-row>
                 </v-col>
              </div>
            </v-col>
        </v-row>
          
          <v-row no-gutters>
            <v-btn :to="`/Leader/Meeting/`+ this.$route.params.Meetingid +`/attendants/`" style="font-family: 'Montserrat', sans-serif;" small rounded color="rgb(194, 159, 194)">
                View attendants
            </v-btn>
          </v-row>
          
       </v-col>

          <v-col cols="8" md="4">
            <img
            src="../../../assets/images/cherry-coming-soon.png"
            width="320"
            />
          </v-col>
    </v-row>
    
  </div>
 
 <h5 class="mt-3" style="font-size: 14px;font-family: 'Montserrat', sans-serif;">create or update event <v-icon>mdi-arrow-down</v-icon></h5>     
        <v-col cols="12" md="12">    
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <v-text-field dense prepend-icon="mdi-clipboard-text" rounded outlined v-model="editedPost.event" style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Event title*" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="place*"
                  dense
                  prepend-icon="mdi-compass"
                  hint="a place of conduct"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  v-model="editedPost.place"
                  outlined
                  rounded
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="editedPost.date"
                        label="Pick a date"
                        dense
                        prepend-icon="mdi-calendar"
                        style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        rounded
                        outlined
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="editedPost.date" @input="menu2 = false"></v-date-picker>
                </v-menu>
                </v-col>

           <v-col cols="12" md="7">
            <v-dialog
                ref="dialog"
                v-model="modal1"
                :return-value.sync="time"
                persistent
                width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="editedPost.start"
                    label="start time"
                    dense
                    prepend-icon="mdi-alarm"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    rounded
                    style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                    outlined
                ></v-text-field>
                </template>
                <v-time-picker
                v-if="modal1"
                v-model="editedPost.start"
                color="pink"
                >
                <v-spacer></v-spacer>
                <v-btn text color="pink" @click="modal1 = false">Ok</v-btn>
                </v-time-picker>
            </v-dialog>
            
            </v-col>

            <v-col cols="12" md="5">
            <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="editedPost.end"
                    label="end time"
                    dense
                    prepend-icon="mdi-alarm"
                    style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    rounded
                    outlined
                ></v-text-field>
                </template>
                <v-time-picker
                v-if="modal2"
                v-model="editedPost.end"
                full-width
                color="pink"
                >
                <v-spacer></v-spacer>
                <v-btn text color="pink" @click="modal2 = false">Ok</v-btn>
                </v-time-picker>
            </v-dialog>

            </v-col>
             
              <v-col cols="12">
               <v-combobox
                v-model="editedPost.invitees"
                :search-input.sync="search"
                dense
                hide-selected
                hint="Maximum of 5 tags"
                label="Add some invitees"
                style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                multiple
                persistent-hint
                small-chips
                deletable-chips
                rounded
                outlined
                >
                <template v-slot:no-data>
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                          Press <kbd>enter</kbd> to create a new one
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </template>
                </v-combobox>  
              </v-col>
             
                <v-col cols="12" md="7">
                <v-autocomplete
                  :items="['Community work', 'Meeting']"
                  label="Purpose"
                  dense
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  v-model="editedPost.purpose"
                  outlined rounded
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="5">
                <v-autocomplete
                  :items="['Hoe', 'Spade', 'Machette', 'Scissor', 'Wheelbarrow', 'helmet', 'pen', 'notebook', 'smartphone']"
                  label="Tools*"
                  dense
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  multiple
                  v-model="editedPost.tools"
                  required
                  outlined rounded
                ></v-autocomplete>
              </v-col>
            </v-row>
          
          <small>*indicates required field</small>
        <v-card-actions>
          
          <v-btn small outlined color="black" fab @click="onReturn"><v-icon left large>mdi-chevron-left</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="post" small style="font-size: 14px;font-family: 'Montserrat', sans-serif;" color="amber darken-3" rounded @click.once="onAlter"><v-icon left>mdi-pen</v-icon>alter</v-btn>
          <v-btn v-if="!post" small style="font-size: 14px;font-family: 'Montserrat', sans-serif;" color="green darken-1" rounded @click.once="onSave"><v-icon left>mdi-pen</v-icon> Save</v-btn>
          <Postpone v-if="post" :id="post._id" @click.once="onPostpone"/>
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
    computed:{
      ...mapGetters(['loggedInUser'])
    },
    data(){
      return{
         time: null,
        modal1: false,
        modal2: false,
        menu2: false,
      modal: false,
      search: null,
       editedPost: this.post ? {...this.post } : {
              event: '',
              place: '',
              date: '',
              start: '',
              end: '',
              invitees: [],
              purpose: '',
              tools: []
          },
      }
    },
  
    methods:{
        onReturn(){
          this.$router.push('/Leader/calendar')
        },
        onSave() {
            const meetup = {
               post: this.editedPost,
              isiboId: this.loggedInUser.isibo._id,
            }
            this.$store.dispatch("addMeeting", meetup).then((e)=> {
            this.$router.push('/Leader/calendar')
            })
            .catch(e => alert(e.response.data))
        },
        onPostpone(){
           alert('Postponed')
        },
         onAlter(){
        this.$store.dispatch('UpdateMeeting', this.editedPost).then(()=>{
            this.$router.push('/Leader/calendar')
        })
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
.events{
     border: 1px solid rgb(212, 177, 212);;
   background-color: rgb(212, 177, 212);
     border-radius: 25px;
     height: auto;
     width: fluid;
 }
 .count{
  border: 1px solid rgb(196, 160, 196);
  border-radius: 23px;
  background-color: rgb(194, 159, 194);
  height: auto;
}
</style>