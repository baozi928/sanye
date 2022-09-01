<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
            @click="toggle(tag)"
            :class="{selected:selectedTags.indexOf(tag)>=0}"
            >{{tag.name}}</li>
        </ul>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';
    import store from '@/store/index2';

    @Component
    export default class Tags extends Vue {
    tagList = store.fetchTags();

    selectedTags:string[] = []

    toggle(tag:string){
        const index =this.selectedTags.indexOf(tag)
        if (index >= 0){
            this.selectedTags.splice(index,1)
        } else {
            this.selectedTags.push(tag)
        }
        this.$emit('update:value',this.selectedTags)
        //用户选中或者取消选中标签之后就会触发这个事件，然后把选中的标签传出去，外部监听这个事件就可以获得这个数据
    }

    create(){
        const name = window.prompt('请输入标签名')
        if (!name) { return window.alert('标签名不能为空'); }
        store.createTag(name);
        }
    }

</script>

<style lang="scss" scoped>
    .tags {
        background: #efdcbc;
        font-size: 14px;
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;
        flex-grow: 1;

        > .current {
            display: flex;
            flex-wrap: wrap;
            > li {
                $bg: #eebd67;
                background: $bg;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
                &.selected{
                    background: darken($bg,20%);
                }
            }

        }

        > .new {
            padding-top: 16px;

            button {
                color: #c7a170;
                background: transparent;
                border: none;
                border-bottom: 1px solid;
                padding: 0 3px;
            }
        }
    }
</style>