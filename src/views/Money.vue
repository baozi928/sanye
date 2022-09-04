<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <Tabs :data-source="recordTypeList"
                  :value.sync="record.type"/>
            <div class="notes">
                <FormItem field-name="备注"
                          placeholder="在此处输入备注"
                          :value.sync="record.notes"/>
            </div>
            <Tags @update:value="record.tags = $event"/>
            <!-- 下面的YYY事件怎么拿到被选中的tag？ vue会自动把XXX事件的参数传给yyy作为第一个参数-->
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Tags from '@/components/Money/Tags.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constant/recordTypeList';


    @Component({
        components: {Tabs, NumberPad, FormItem, Tags},
    })
    export default class Money extends Vue {
        get recordList() {
            return this.$store.state.recordList;
        }

        recordTypeList = recordTypeList;
        record: RecordItem = {
            tags: [], notes: '', type: '-', amount: 0
        };

        created() {
            this.$store.commit('fetchRecords');
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveRecord() {
            if (!this.record.tags || this.record.tags.length === 0) {
                return window.alert('请至少选择一个标签');
            }
            this.$store.commit('createRecord', this.record);
            if (this.$store.state.createRecordError === null) {
                window.alert('已保存');
                this.record.notes = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        padding: 12px 0;
    }

</style>