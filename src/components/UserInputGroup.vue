<template>
    <b-form-group
            :id=formId
            :label=label
            :label-for=inputId
    >
        <b-form-input @input="emitData"
                      :id=inputId
                      v-model=inputValue
                      :type=type
                      required
                      :placeholder=placeHolder
                      :disabled="disabled"
        ></b-form-input>
    </b-form-group>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({})

    export default class UserInputGroup extends Vue {
        @Prop() public label!: string;
        @Prop() public inputId!: string;
        @Prop() public formId!: string;
        @Prop() public value!: any;
        @Prop() public placeHolder!: string;
        @Prop() public type!: string;
        @Prop() public param!: string;
        @Prop() public disabled!: boolean;

        inputValue = '';

        emitData() {
            this.$emit('input', [this.param, this.inputValue])
        }
    }
</script>
<style scoped lang="scss">
</style>

