<template>
    <div>
        <v-menu
            bottom
            left
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="black"
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    @click="handleclick(index)"
                >
                    <v-list-item-icon>
                        <v-icon 
                            v-text="item.icon"
                            color="black"
                        >
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>

        </v-menu>

        <dialog-delete
          v-if="dialogs.delete"
          :task="task"
          @close="dialogs.delete = false"
        />

        <dialog-edit
          v-if="dialogs.edit"
          :task="task"
          @close="dialogs.edit = false"
        />

        <dialog-due-date
          v-if="dialogs.dueDate"
          :task="task"
          @close="dialogs.dueDate = false"
        />
    </div>
</template>

<script>
  export default {
    props: ['task'],
    data: () => ({
        items: [
        { 
            title: 'Edit',
            icon: 'mdi-pencil',
            click() {
                this.dialogs.edit = true
            },
        },
        { 
            title: 'Due Date',
            icon: 'mdi-calendar',
            click() {
                this.dialogs.dueDate = true
            } 
        },
        { 
            title: 'Delete',
            icon: 'mdi-delete',
            click() {
                this.dialogs.delete = true
            }, 
        },
        { 
            title: 'Sort',
            icon: 'mdi-drag-horizontal-variant',
            click() {
                this.$store.commit('toggleSorting')
            }, 
        },
        ],
        dialogs: {
            delete: false,
            edit: false,
            dueDate: false,
        }
    }),
    methods: {
        handleclick(index){
            this.items[index].click.call(this)
        }
    },
    components: {
        'dialog-delete': require('@/components/Shared/Dialogs/DialogDelete.vue').default,
        'dialog-edit': require('@/components/Shared/Dialogs/DialogEdit.vue').default,
        'dialog-due-date': require('@/components/Shared/Dialogs/DialogDueDate.vue').default,
    },

  }
</script>

<style>

</style>