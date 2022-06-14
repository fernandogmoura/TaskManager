<template>
  <v-list
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
            
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </v-list-item-group>
    </v-list>
</template>

<script>
  export default {
    data: () => ({
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
      }
    }
  }
</script>
