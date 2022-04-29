<template>
       <v-row
              align="center"
              class="spacer"
              justify="center"
              no-gutters
            >
              <v-col
                cols="5"
                md="4"
              >
              <v-layout wrap>
                <v-flex xs3 md2 lg2>
                <v-icon class="mt-3" color="pink">mdi-face</v-icon>
                </v-flex>
                <v-subheader>{{loggedInUser.name}}</v-subheader>
              </v-layout>
              </v-col>
                <v-divider vertical/>
              <v-col
                cols="6"
                md="5"
                class="ml-5"
              >
                 <v-layout wrap>
                <v-flex xs3 md2 lg2>
                <v-icon class="mt-3" color="purple">mdi-mail</v-icon>
                </v-flex>
                <v-subheader>{{loggedInUser.email}}</v-subheader>
              </v-layout>
              </v-col>

                <v-divider vertical/>

              <v-col
                cols="5"
                sm="5"
                md="5"
                class="ml-5"
              >
                 <v-layout wrap>
                <v-flex xs3 md2 lg2>
                <v-icon class="mt-3" color="green">mdi-card</v-icon>
                </v-flex>
                <v-subheader>{{loggedInUser.NationalId}}</v-subheader>
              </v-layout>
              </v-col>

              
            </v-row>
       
</template>

<script>
import { mapGetters } from 'vuex'
export default {
      computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
   data: () => ({
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify.js!',
          excerpt: 'Thank you for joining our community...',
        },
        {
          color: 'red',
          icon: 'mdi-twitter',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter',
          excerpt: 'Thank you for joining our community...',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
    }),
}
</script>

<style>

</style>