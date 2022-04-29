<template>
       <v-row
        no-gutters
        justify="left"
        align="left"
       >
        <v-col
         cols="4"
         md="3"
        >
            <LSidebar class="hidden-md-and-down"/>
        </v-col>

        <v-col
         cols="12"
         md="6"
        >
           <v-row no-gutters justify="center" align="center">
             <v-col
              cols="12"
              md="12"
             >
             <LHeader/>
             </v-col>
           </v-row>
          
           <v-row justify="left" align="left">
               <v-col
                cols="10"
                md="10"
               >
               
               <nuxt-child/>

               </v-col>

           </v-row>
          
        </v-col>
        <v-col>
             <RSidebar class="mt-3 hidden-sm-and-down"/>
        </v-col>
       </v-row>
</template>

<script>
import LHeader from '~/components/Leader/LHeader'
import LSidebar from '~/components/Leader/LSidebar'
import RSidebar from '~/components/Leader/RSidebar'
export default {
 layout: 'community',
 middleware: ['auth'],
 components: {
     LHeader,
     RSidebar,
     LSidebar,
 }
}
</script>

<style scoped>
</style>