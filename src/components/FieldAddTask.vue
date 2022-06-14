<template>
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
</template>

<script>
export default {

  data: () => ({
    newTaskTitle: '',
  }),
  methods: {
    addTask(){
        this.$store.dispatch('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      },
  }

}
</script>

<style>

</style>