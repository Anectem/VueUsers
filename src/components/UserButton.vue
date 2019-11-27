<template>
    <b-button :to=link :variant=variant :type=type class="border" :block="block" >
        {{name}}
    </b-button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component

    export default class UserButton extends Vue {
        @Prop() private link!: string;
        @Prop() private name!: string;
        @Prop() private variant!: string;
        @Prop() private type !: 'button' | 'submit' | 'reset';
        @Prop() private block !: boolean;

    }

</script>
