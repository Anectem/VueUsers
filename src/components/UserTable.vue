<template>
    <b-table :items=users :fields="fields" bordered fixed hover>
        <template v-slot:cell(name)="data">
            {{ data.item.name}}
        </template>
        <template v-slot:cell(edit)="data">
            <b-button-group vertical>
                <user-button name="Просмотреть" variant="success" type="button"
                             @button-click="detailsUser(data.item.id,'/user')"></user-button>
                <user-button name="Изменить" variant="info" type="button"
                             @button-click="detailsUser(data.item.id,'/editUser')"></user-button>
                <user-button name="Удалить" variant="danger" type="button"
                             @button-click="deleteUser(data.item.id)"></user-button>
            </b-button-group>
        </template>
    </b-table>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";
    import {IUser} from "@/types";
    import UserButton from "@/components/UserButton.vue";

    @Component({
        components: {UserButton}
    })

    export default class UserTable extends Vue {
        fields = [
            'id',
            {key: 'name', label: 'Имя'},
            'email',
            {key: 'edit', label: 'Редактирование'}
        ];
        @Prop() private users!: IUser [];

        @Emit() deleteUser (id: string) {};

        @Emit() detailsUser  (id: string, route: string) {}

    }
</script>
<style scoped lang="scss">
</style>
