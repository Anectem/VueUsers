<template>
    <b-container>
        <h3> Информация о пользователе </h3>
        <b-form>
            <user-input-group type="text" input-id="input-1" form-id="input-group-1" label="Имя пользователя:"
                              place-holder="Введите имя" :value="userData.name" :disabled=true>
            </user-input-group>
            <user-input-group type="text" input-id="input-2" form-id="input-group-2" label="Фамилия пользователя:"
                              place-holder="Введите фамилию" :value="userData.secondName" :disabled=true>
            </user-input-group>
            <user-input-group type="text" input-id="input-3" form-id="input-group-3" label="Отчество пользователя:"
                              place-holder="Введите отчество" :value="userData.lastName" :disabled=true>
            </user-input-group>
            <user-input-group type="email" input-id="input-4" form-id="input-group-4 " label="Email пользователя:"
                              place-holder="Введите email" :value="userData.email" :disabled=true>
            </user-input-group>
            <user-input-group type="text" input-id="input-5" form-id="input-group-5" label="Номер телефона пользователя:"
                              place-holder="Введите номер телефона" :value="userData.phone" :disabled=true>
            </user-input-group>
            <user-input-group type="text" input-id="input-6" form-id="input-group-6" label="Адрес пользователя:"
                              place-holder="Введите адрес" :value="userData.address" :disabled=true>
            </user-input-group>
            <user-gender-radio-input param="gender" :disabled=true :value="userData.gender">
            </user-gender-radio-input>
            <b-row align-h="between">
                <b-col lg="2" class="p-3" >
                    <user-button link="/" type="button" name="Назад" variant="warning" :block=true>
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

    @Component({
        components: {
            UserButton,
            UserInputGroup,
            UserGenderRadioInput
        }
    })

    export default class UserDetails extends Vue {
        userData = this.$store.getters.USER
    }

</script>
