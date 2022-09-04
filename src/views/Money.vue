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
    import Tags from '@/components/Money/Tags.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import Types from '@/components/Money/Types.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import {Component, Watch} from 'vue-property-decorator';


    @Component({
        components: {NumberPad, Types, FormItem, Tags},
    })
    export default class Money extends Vue {
        get recordList() {
            return this.$store.state.recordList;
        }
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