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
            <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
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
    import recordListModel from '@/models/recordListModel';


    const recordList = recordListModel.fetch();//初始化数据 把数据从数据库里拿出来，这样才能把当前数据和之前数据保存到一起

    @Component({
        components: {NumberPad, Types, FormItem, Tags},
    })
    export default class Money extends Vue {
        tags = window.tagList;
        record: RecordItem = {
            tags: [], notes: '', type: '-', amount: 0
        };
        recordList = window.recordList;
        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }
        onUpdateNotes(value: string) {
            this.record.notes = value;
        }
        saveRecord() {
           window.createRecord(this.record);
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