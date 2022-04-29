<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs"
          v-on="on" medium rounded small color="pink" class="black--text">
          <v-avatar size="30">
            <img
              src="../../assets/images/rocket (1).png"
            />
          </v-avatar>
          <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">create a meet-up</h5>
        </v-btn>
      </template>
      <div class="dialogy">
        <v-card-title>
         <v-avatar size="30">
            <img
              src="../../assets/images/rocket (1).png"
            />
          </v-avatar>
          <h5 style="font-size: 14px;font-family: 'Montserrat', sans-serif;">create an event</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Event title*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Leader" hint="Someone in charge of the meeting"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Location*"
                  hint="enter a village nearby"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Brief*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field style="font-size: 14px;font-family: 'Montserrat', sans-serif;" label="Date*" required></v-text-field>
              </v-col>
                <v-col cols="12" sm="5">
                <v-autocomplete
                  :items="['Community work', 'other']"
                  label="Meeting type"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Hoe', 'Spade', 'Machette', 'Scissor', 'Wheelbarrow', 'helmet']"
                  label="Tools"
                  style="font-size: 14px;font-family: 'Montserrat', sans-serif;"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn style="font-size: 14px;font-family: 'Montserrat', sans-serif;" color="pink darken-1" rounded @click="dialog = false">Close</v-btn>
          <v-btn style="font-size: 14px;font-family: 'Montserrat', sans-serif;" color="amber darken-1" rounded @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>
<style scoped>
.dialogy{
    border: 1px solid thistle;
    border-radius: 36px;
    background-color: thistle;
}
</style>