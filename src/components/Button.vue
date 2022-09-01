<template>
<!--    小button被点击 触发Button的点击事件-->
    <button class="button"
            @click="$emit('click', $event)">
        <slot/>
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {

    }
</script>

<style lang="scss" scoped>
    .button {
        background: #fcf5de;
        border-radius: 4px;
        height: 40px;
        border: none;
        padding: 0 16px;
        &-wrapper{
            text-align: center;
            padding: 16px;
            margin-top: 28px;
        }
    }
</style>