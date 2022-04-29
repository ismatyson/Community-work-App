<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
      color="amber"
      top
    >      
          <h5  class="black--text" style="font-size: 14px;font-family: 'Montserrat', sans-serif;"><v-avatar size="30">
            <img
              src="../../assets/images/rocket (1).png"
            />
          </v-avatar>{{ message }}</h5>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          fab
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      text: 'Hello, I\'m a snackbar',
    }),
    props:{
        message:{
            type: String
        },
        snackbar:{
          type:Boolean
        }
    }
  }
</script>