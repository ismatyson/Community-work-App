<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs"
          v-on="on" medium rounded small color="amber" class="black--text">
          <h5 style="font-family: 'Montserrat', sans-serif;"><v-avatar size="30">
                <img
                  src="../../../assets/images/saturn.png"
                />
              </v-avatar> alter meet-up</h5>
        </v-btn>
      </template>
      <div class="dialogy">
        <v-col cols="12" md="12">
            <v-row no-gutters justify="center" align="center">
         <v-avatar size="30">
            <img
              src="../../../assets/images/saturn.png"
            />
          </v-avatar>
          <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">Update meet-up</h5>
            {{editedPost}}
            </v-row>
         
            <v-row class="mt-2" no-gutters justify="space-around">
              <v-col cols="12" md="3">
                <v-text-field rounded outlined v-model="editedPost.event" style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Event*" required></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  label="place*"
                  hint="a place of conduct"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                  v-model="editedPost.place"
                  rounded
                  outlined
                ></v-text-field>
              </v-col>

               <v-col cols="12" md="5">
                <v-autocomplete
                  :items="['Community work', 'Meeting']"
                  label="Purpose"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  v-model="editedPost.purpose"
                  rounded
                  outlined
                ></v-autocomplete>
              </v-col>
              
              <v-col cols="12" md="6">
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
      
                <v-col cols="12" md="5">
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
             
              <v-col cols="12" md="10">
                <v-text-field rounded outlined v-model="editedPost.brief" style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Brief description*" required></v-text-field>
              </v-col>
              
               <v-col cols="12" md="5">
               <v-combobox
                v-model="editedPost.invitees"
                :search-input.sync="search"
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
             
               
              <v-col cols="12" sm="5">
                <v-autocomplete
                  :items="['Hoe', 'Spade', 'Machette', 'Scissor', 'Wheelbarrow', 'helmet', 'pen', 'notebook', 'smartphone']"
                  label="Tools*"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  multiple
                  v-model="editedPost.tools"
                  required
                  rounded
                  outlined
                ></v-autocomplete>
              </v-col>
            </v-row>
          
          <small>*indicates required field</small>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn style="font-size: 14px;font-family: 'Montserrat', sans-serif;" color="pink darken-1" rounded @click="dialog = false">Cancel</v-btn>
          <v-btn style="font-size: 14px;font-family: 'Montserrat', sans-serif;" color="amber darken-1" rounded @click="onAlter">alter meet-up</v-btn>
        </v-card-actions>
        </v-col>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      post: {
          type: Object,
          required: true
      },
    },
    data () {
      return {
           posts: [],
          editedPost: this.post ? {...this.post } : {
              event: '',
              place: '',
              date: '',
              start: '',
              end: '',
              brief: '',
              invitees: [],
              purpose: '',
              tools: []
          },
           time: null,
           search: '',
        modal1: false,
        modal2: false,
        menu2: false,
      modal: false,
      dialog: false,
      start: null,
      data: false,
      end: null,
          
      }
  },
  mounted(){
     const posts= this.posts
     console.log(posts);
     if(this.posts){
         console.log('YESSSS!');
         this.data = true
     }
  },
  watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      },
    },
  methods:{
      onAlter(){
        console.log(this.editedPost);
        // this.$store.dispatch('UpdateMeeting', this.editedPost).then(()=>{
        //     this.$router.push('/Leader/calendar')
        // })
      }
  },
   async fetch() {
      this.posts = await this.$http.$get(
        `http://localhost:9000/community/meetings/${this.$route.params.Meetingid}`
      )
    },
  }
</script>
<style scoped>
.dialogy{
    border: 1px solid thistle;
    border-radius: 36px;
    background-color: thistle;
}
</style>