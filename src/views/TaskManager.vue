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
        v-if="tasks.length"
        subheader
        flat
      >    
      <v-list-item-group
          v-for="task in tasks"
          :key="task.id"
          multiple      
        >
          <v-list-item
            @click="doneTask(task.id)"
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
                  @click.stop="deleteTask(task.id)"
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
      tasks: [
        {
        id: 1, 
        title: 'Wake Up!',
        done: false
        },
        {
        id: 2, 
        title: 'Take a Shower!',
        done: false
        },
        {
        id: 3, 
        title: 'Eat Breakfast!',
        done: false
        }
      ]
    }),
    methods: {
      doneTask(id){
        let task = this.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
      }, 
      deleteTask(id){
        this.tasks = this.tasks.filter(task => task.id !== id)
      },
      addTask(){
        let newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          done: false
        }
        this.tasks.push(newTask)
        this.newTaskTitle = ''
      }
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
