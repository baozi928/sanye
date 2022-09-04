<template>
    <div>
        <ul class="types">
            <li :class="{[classPrefix+'-item']: classPrefix, selected: value==='-'}" @click="selectType('-')">支出</li>
            <li :class="{[classPrefix+'-item']: classPrefix, selected: value==='+'}" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {

        @Prop(String) readonly value!: string;
        @Prop(String) classPrefix?: string;
        selectType(type: string) {
            if (type !== '-' && type !== '+') {
                throw new Error('type is unknown');
            }
            this.$emit('update:value',type)//当用户选择的是加或者减就触发事件更新value，值就是用户选中的值
        }
    }


</script>

<style lang="scss" scoped>
    .types {
        background: #eacfad;
        display: flex;
        text-align: center;
        font-size: 24px;

        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #666;
            }
        }
    }
</style>