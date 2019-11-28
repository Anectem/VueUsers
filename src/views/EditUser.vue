<template>
    <b-container>
        <h3> Изменение данных пользователя </h3>
        <b-form @submit.prevent="onSubmit(form)">
            <user-input-group type="text" input-id="input-1" form-id="input-group-1" label="Имя пользователя:"
                              place-holder="Введите имя" :value="form.name" param='name' @group-input="onChange">
            </user-input-group>
            <user-input-group type="text" input-id="input-2" form-id="input-group-2" label="Фамилия пользователя:"
                              place-holder="Введите фамилию" :value="form.secondName" param='secondName'
                              @group-input="onChange">
            </user-input-group>
            <user-input-group type="text" input-id="input-3" form-id="input-group-3" label="Отчество пользователя:"
                              place-holder="Введите отчество" :value="form.lastName" param='lastName'
                              @group-input="onChange">
            </user-input-group>
            <user-input-group type="email" input-id="input-4" form-id="input-group-4 " label="Email пользователя:"
                              place-holder="Введите email" :value="form.email" param='email' @group-input="onChange">
            </user-input-group>
            <user-input-group type="text" input-id="input-5" form-id="input-group-5" label="Номер телефона пользователя:"
                              place-holder="Введите номер телефона" :value="form.phone" param='phone'
                              @group-input="onChange">
            </user-input-group>
            <user-input-group type="text" input-id="input-6" form-id="input-group-6" label="Адрес пользователя:"
                              place-holder="Введите адрес" :value="form.address" param='address'
                              @group-input="onChange">
            </user-input-group>
            <user-gender-radio-input param="gender" @radio-input="onChange" :value="form.gender">
            </user-gender-radio-input>
            <b-row align-h="between">
                <b-col lg="2" class="p-3" >
                    <user-button link="/" type="button" name="Отмена" variant="warning" :block=true>
                    </user-button>
                </b-col>
                <b-col lg="2"  class="p-3">
                    <user-button type="submit" name="Сохранить" variant="primary" :block=true>
                    </user-button>
                </b-col>
            </b-row>
        </b-form>
    </b-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import UserButton from "@/components/UserButton.vue";
    import UserInputGroup from "@/components/UserInputGroup.vue";
    import UserGenderRadioInput from "@/components/UserGenderRadioInput.vue";
    import {IUser} from "@/types";
    import router from '@/router';


    @Component({
        components: {
            UserButton,
            UserInputGroup,
            UserGenderRadioInput
        }
    })

    export default class EditUser extends Vue {
        userData = this.$store.getters.USER;
        form: IUser = {
            id: this.userData.id,
            name: this.userData.name,
            secondName: this.userData.secondName,
            lastName: this.userData.lastName,
            email: this.userData.email,
            phone: this.userData.phone,
            gender: this.userData.gender,
            address: this.userData.address
        };
        onChange(data: string[]) {
            (this.form as any)[data[0]] = data[1]
        }

        onSubmit(payload: IUser) {
            this.$store.dispatch('UPDATE_USER', payload)
                .then(() => router.push('/'));
        }
    }

</script>
