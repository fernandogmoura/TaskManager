<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app
    >
      <v-img
        max-height="193"
        src="@/assets/background.png"
      >
        <v-avatar
          height="100px"
          width="100px"
          class="avatar-edited"
        >
          <img
            src="@/assets/avatar.png"
          >
        </v-avatar>
        <div class="name-edited">
          <div class="text-subtitle-1 font-weight-bold">Fernando Moura</div>
          <div class="text-subtitle-2">fernandogmoura</div>
        </div>
      </v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      absolute
      app
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Task Manager</v-app-bar-title>

      <v-spacer></v-spacer>

      <search />

    </v-app-bar>

    <v-main>

      <router-view></router-view>

      <snackbar />
      
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Tasks', icon: 'mdi-format-list-checks', to:'/' },
          { title: 'About', icon: 'mdi-information-variant', to:'/about' },
        ],
      }),
    components: {
      'snackbar': require('@/components/Shared/Snackbar.vue').default,
      'search': require('@/components/Tools/Search.vue').default,
      
    }
  }
</script>

<style scoped>
.avatar-edited {
  margin-left: 76px;
  margin-top: 10px;
}

.name-edited {
  text-align: center;
  color: white;
  padding-top: 5px;
}

</style>