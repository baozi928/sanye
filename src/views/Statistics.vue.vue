<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
        <div>
            type: {{type}}
        </div>
    </Layout>
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constant/recordTypeList';

    @Component({
        components: {Tabs},
    })
    export default class Statistics extends Vue {
        type = '-';
        recordTypeList = recordTypeList
    }
</script>

<style scoped lang="scss">
    ::v-deep .type-tabs-item {
        background: #efdcbb;
        &.selected {
            background: #ecc6a5;
            &::after {
                display: none;
            }
        }
    }
    ::v-deep .interval-tabs-item {
        height: 48px;
    }
</style>