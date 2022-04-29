<template>
   <v-speed-dial
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-app-bar-nav-icon x-large />
      </template>

     <v-tooltip v-for="item in items" :key="item.text">

          <template v-slot:activator="{ on }">
            
                <v-btn
                v-on="on"
                fab
                dark
                medium
                :style="{ 'color': item.color }"
                router
                :to="item.route"
              >
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>

          </template>

          <span>{{ item.text }}</span>

     </v-tooltip>

    </v-speed-dial>
</template>
<script>
export default {
  data() {
    return {
      direction: 'right',
      hover: true,
      left: true,
      fab: false,
      transition: 'slide-y-reverse-transition',
      items: [
        { icon: 'mdi-home' , text: 'Murugo' , route: '/community/' , color: 'white' },
        { icon: 'mdi-mail' , text: 'Ubutumwa' , route: '/community/inbox' , color: 'violet'},
        { icon: 'mdi-account' , text: 'profile' , route: '/community/profile' , color: 'red'},
        { icon: 'mdi-folder' , text: 'projects' , route: '/community/projects' , color: 'pink'}
      ]
    }
  }
}
</script>

<style>
</style>