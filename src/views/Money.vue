<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <Types :value.sync="record.type"/>
            <div class="notes">
            <FormItem field-name="备注"
                   placeholder="在此处输入备注"
                   @update:value="onUpdateNotes"/>
            </div>
            <Tags/>
            <!-- 下面的YYY事件怎么拿到被选中的tag？ vue会自动把XXX事件的参数传给yyy作为第一个参数-->
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Tags from '@/components/Tags.vue';
    import FormItem from '@/components/FormItem.vue';
    import Types from '@/components/Types.vue';
    import NumberPad from '@/components/NumberPad.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import store from '@/store/index2';


    @Component({
        components: {NumberPad, Types, FormItem, Tags},
        computed: {
            recordList() {
                return this.$store.state.recordList;
            }
        }
    })
    export default class Money extends Vue {
        record: RecordItem = {
            tags: [], notes: '', type: '-', amount: 0
        };
        created(){
            this.$store.commit('fetchRecords')
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }
        saveRecord() {
            this.$store.commit('createRecord', this.record);
        }

    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
    .notes {
        padding: 12px 0;
    }

</style>