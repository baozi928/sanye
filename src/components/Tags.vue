<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新增标签</button>
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
    import {mixins} from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';


    @Component({
        computed: {
            tagList(){
                 return this.$store.state.tagList;
            }
        }
    })
    export default class Tags extends mixins(TagHelper) {

    selectedTags:string[] = [];
     created() {
            this.$store.commit('fetchTags');
        }

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