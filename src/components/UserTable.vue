<template>
    <b-table :items=users :fields="fields" bordered fixed hover>
        <template v-slot:cell(name)="data">
            {{ data.item.name}}
        </template>
        <template v-slot:cell(edit)="data">
            <b-button-group vertical>
                <user-button link="/user" name="Просмотреть" variant="success" type="button"></user-button>
                <user-button link="/editUser" name="Изменить" variant="info" type="button"></user-button>
                <user-button name="Удалить" variant="danger" type="button"></user-button>
            </b-button-group>
        </template>
    </b-table>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {IUser} from "@/types";
    import UserButton from "@/components/UserButton.vue";

    @Component({
        components: {UserButton}
    })

    export default class UserTable extends Vue {
        @Prop() private users!: IUser [];

        fields = [
            'id',
            {key: 'name', label: 'Имя'},
            'email',
            {key: 'edit', label: 'Редактирование'}
        ];
    }
</script>
<style scoped lang="scss">
</style>

