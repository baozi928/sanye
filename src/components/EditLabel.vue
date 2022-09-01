<template>
    <Layout>
        <div class="navBar">
           <router-link to="/labels"><Icon name="left"></Icon></router-link>
            <span class="title">编辑标签</span>
            <Icon class="rightIcon"/>
        </div>
        <div class="form-wrapper">
            <FormItem
                    :value="tag.name"
                    @update:value="update"
                    field-name="标签名"
                    placeholder="请输入标签名"></FormItem>
        </div>
        <div class="button-wrapper">
        <Button  @click="remove">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';
    import FormItem from '@/components/FormItem.vue';
    import Button from '@/components/Button.vue';
    @Component({
        components: {Button, FormItem}
    })
    export default class EditLabel extends Vue {
        tag?:{id:string,name:string} = undefined
        //created之后才能赋值
        created() {
            //获取页面url的id
            const id = this.$route.params.id; //路由信息放在route里面 路由器相关的信息就放在router里面，params可以拿到所有参数
            tagListModel.fetch();
            const tags = tagListModel.data;
            //通过id在所有的tags里找到id对应的tag
            const tag = tags.filter(t=>t.id === id)[0]
            if(tag){
                //把对应tag赋值给这个tag
                this.tag = tag;
            }else {
                this.$router.replace('/404') //路由器跳转
            }
        }

        update(name:string){
            if (this.tag) {//判断tag是否为空
                tagListModel.update(this.tag.id, name)
            }
        }
        remove(){
            if (this.tag) { //判断tag是否存在，不判断会报错
                if (tagListModel.remove(this.tag.id)) {
                    this.$router.back();
                } else {
                    window.alert('删除失败');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding: 12px 16px;
        background:#f1ddcc;
        > .title {
        }
        > .leftIcon {
            width: 24px;
            height: 24px;
        }
        > .rightIcon {
            width: 24px;
            height: 24px;
        }
    }
    .form-wrapper{
        background: white;
        margin-top: 8px;
    }
    .button-wrapper{
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>