<template>
    <v-list
        subheader
        flat
    >    
        <task 
            v-for="task in $store.getters.tasksFiltered"
            :key="task.id"
            :task="task"
        />
    
    </v-list> 
</template>

<script>
export default {
    components: {
        'task': require('@/components/Task.vue').default
    }
}
</script>

<style>


</style>