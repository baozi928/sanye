<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
        <div>
            type: {{type}}
        </div>
    </Layout>
</template>

<script lang="ts">

    import Types from '@/components/Money/Types.vue';
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    @Component({
        components: {Tabs, Types},
    })
    export default class Statistics extends Vue {
        type = '-';
        typeList = [
            {text: '支出', value: '-'},
            {text: '收入', value: '+'},
        ];
    }
</script>

<style scoped lang="scss">
    ::v-deep .type-tabs-item {
        background: white;
        &.selected {
            background: #C4C4C4;
            &::after {
                display: none;
            }
        }
    }
</style>