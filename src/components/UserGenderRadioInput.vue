<template>
    <b-form-group label="Пол пользователя">
        <b-form-radio-group
                v-model=gender
                :options=options
                required
                @input="radioInput"
                :disabled="disabled"
        ></b-form-radio-group>
    </b-form-group>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Emit} from "vue-property-decorator";

    @Component({})

    export default class UserGenderRadioInput extends Vue {
        @Prop() public param!: string;
        @Prop() public disabled!: boolean;
        @Prop() public value!: string;

        options = [
            {text: 'Мужской', value: 'm'},
            {text: 'Женский', value: 'f'},
        ];
        gender = this.value || null;

        @Emit()
        radioInput() {
            return [this.param, this.gender]
        }
    }

</script>
<style scoped lang="scss">
</style>

