<template>
  <v-app class="appy">
    <v-main>
      <v-content>
        <ToolBar/>
           <v-breadcrumbs :items="items">
            <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                :href="item.href"
                :disabled="item.disabled"
            >
                <h5>{{ item.text.toUpperCase() }}</h5>
            </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
      <v-container>
        <nuxt />
      </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from '~/components/UI/ToolBar'

export default {
  components: {
    ToolBar
  },
   data: () => ({
      items: [
        {
          text: 'community',
          disabled: false,
          href: '/community',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
}
</script>

<style scoped>
.appy{
   background-color: lightgray;
   font-family: 'Inter', sans-serif;
}
</style>