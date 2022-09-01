<template>
    <div>
        <label class="notes">
            <span class="name">{{this.fieldName}}</span>
            <input type="text"
                   :value="value"
                   @input="onValueChanged($event.target.value)"
                   :placeholder="this.placeholder">
<!--            把外部数据value传给input，当用户在input进行变更的时候，不会对value进行
变更，只是把value的值通过这个函数回传给上面这个组件-->
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue {
        @Prop({default:''}) readonly value!:string;

        @Prop({required:true}) fieldName! :string;
        @Prop() placeholder?:string;

        @Watch('value') //val变化后触发update事件
        onValueChanged(value:string){
            this.$emit('update:value',value)
        }
    }

</script>

<style lang="scss" scoped>
    .notes {
        font-size: 14px;
        background: #f1ddcc;
        padding-left: 16px;
        display: flex;
        align-items: center;
        > .name {
            padding-right: 16px;
        }
        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 32px;

        }
    }
</style>