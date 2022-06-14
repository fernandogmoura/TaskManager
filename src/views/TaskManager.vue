<template>
  
  <header>

    <field-add-task></field-add-task>

    <list-tasks
      v-if="$store.state.tasks.length"
    />

    <no-task 
      v-else
    />
    
  </header>
</template>

<script>
  export default {
    components: {
      'field-add-task': require('@/components/FieldAddTask.vue').default,
      'list-tasks': require('@/components/ListTasks.vue').default,
      'no-task': require('@/components/NoTask.vue').default
    }
  }
</script>

<style scoped>


</style>
