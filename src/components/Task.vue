<template>
  <div>
        <v-list-item
            @click="$store.dispatch('doneTask', task.id)"
            :class="{'cyan lighten-5' : task.done}"
            :ripple="false"
            class="white"
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

                <v-list-item-action v-if="task.dueDate">
                    
                    <v-list-item-action-text>
                        <v-icon small>mdi-calendar</v-icon>
                        <span>{{ task.dueDate }}</span>
                    </v-list-item-action-text>

                </v-list-item-action>

                <v-list-item-action>
                    
                    <task-menu 
                        :task="task"
                    />

                </v-list-item-action>

                <v-list-item-action
                    v-if="$store.state.sorting"
                >  
                    <v-btn
                        color="black"
                        class="handle"
                        icon
                    >
                        <v-icon>mdi-drag-horizontal-variant</v-icon>
                    </v-btn>

                </v-list-item-action>
                
            </template>
            </v-list-item>
        <v-divider></v-divider>

        
        
        </div>
</template>

<script>
export default {

    props: ['task'],
    components: {
        'dialog-delete': require('@/components/Shared/Dialogs/DialogDelete.vue').default,
        'task-menu': require('@/components/TaskMenu.vue').default
    }
    
}
</script>

<style scoped>
.sortable-ghost {
    opacity: 0;
}

.sortable-drag {
    color: black;
}

</style>