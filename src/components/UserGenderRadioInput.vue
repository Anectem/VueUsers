<template>
    <b-form-group label="Пол пользователя">
        <b-form-radio-group
                v-model=gender
                :options=options
                required
                @input="emitData"
                :disabled="disabled"
        ></b-form-radio-group>
    </b-form-group>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({})

    export default class UserGenderRadioInput extends Vue {
        @Prop() public param!: string;
        @Prop() public disabled!: boolean;

        options = [
            {text: 'Мужской', value: 'm'},
            {text: 'Женский', value: 'f'},
        ];
        gender = '';

        emitData() {
            this.$emit('radioInput', [this.param, this.gender])
        }
    }

</script>
<style scoped lang="scss">
</style>

