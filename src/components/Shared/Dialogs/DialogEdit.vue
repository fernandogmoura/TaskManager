<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit Task
        </v-card-title>
        <v-card-text>

          Edit the Title of the task:
          <v-text-field 
            v-model="taskTitle"
            @keyup.enter="saveTask()"
          />

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="$emit('close')"
            color="black"
            text
          >
            Cancel
          </v-btn>
          <v-btn
            :disabled="taskTitleInvalid"
            @click="saveTask()"
            color="success"
            text
          >
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>


<script>
  export default {
    props: ['task'],
    data: () => ({
      taskTitle: null,
    }),
    methods: {
      saveTask(){
        if(!this.taskTitleInvalid){
          let payload = {
          id: this.task.id,
          title: this.taskTitle
          }
          this.$store.commit('updateTaskTitle', payload)
          this.$emit('close')
        }      
      }

    },
    computed: {
      taskTitleInvalid() {
        return !this.taskTitle || this.taskTitle === this.task.title
      }
    },
    mounted() {
      this.taskTitle = this.task.title
    }
  }
</script>

<style>

</style>