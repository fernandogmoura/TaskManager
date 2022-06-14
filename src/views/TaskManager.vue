<template>
  
  <header>
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask()"
      @keyup.enter="addTask()"
      class="pa-3 pb-0"
      clearable
      hide-details
      outlined
      label="New Task"
      append-icon="mdi-plus"
    ></v-text-field>

    <v-list
        v-if="$store.state.tasks.length"
        subheader
        flat
      >    
      <v-list-item-group
          v-for="task in $store.state.tasks"
          :key="task.id"
          multiple      
        >
          <v-list-item
            @click="$store.commit('doneTask', task.id)"
            :class="{'cyan lighten-5' : task.done}"
          >
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value="task.done"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content
                :class="{'text-decoration-line-through' : task.done}"
              >
                <v-list-item-title>{{ task.title }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon
                  @click.stop="$store.commit('deleteTask', task.id)"
                >
                  <v-icon color="black">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
              
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-item-group>
      </v-list>
      <div v-else
        class="text-h5 no-tasks"
      >
        <v-icon
          color="teal accent-2"
          size=150>mdi-check-all</v-icon
        >

        <div class="teal--text">
          All Tasks are done!
        </div>

      </div>
  </header>
</template>

<script>
  export default {
    data: () => ({
      newTaskTitle: '',
     
    }),
    methods: {
      addTask(){
        this.$store.commit('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      },
    }
  }
</script>

<style scoped>
.no-tasks {
  position: absolute;
  left: 53%;
  top: 35%;
  transform: translate(-50%, -50%);
}

</style>
