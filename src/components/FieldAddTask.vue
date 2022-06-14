<template>
  <v-text-field
    v-model="newTaskTitle"   
    @keyup.enter="addTask()"
    class="pa-3 pb-0"
    label="New Task"
    clearable
    hide-details
    outlined
    persistent
  >
    <template v-slot:append>
      <v-icon
        @click:append="addTask()"
        color="primary"
        :disabled="addTaskInvalid"
      >mdi-plus</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {

  data: () => ({
    newTaskTitle: '',
  }),
  methods: {
    addTask(){
        if(!this.addTaskInvalid){
          this.$store.dispatch('addTask', this.newTaskTitle)
          this.newTaskTitle = ''
        } 
      },
  },
  computed: {
    addTaskInvalid(){
      return !this.newTaskTitle
    }
  }

}
</script>

<style>

</style>