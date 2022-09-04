<template>
    <div class="nav">
        <router-link to="/money" class="item" active-class="selected">
            <icon name="money"/>
            记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <icon name="label" />
            标签
        </router-link>
        <router-link to="/Statistics" class="item" active-class="selected">
            <icon name="tongji" />
            统计
        </router-link>
    </div>
</template>

<script lang="ts">
    let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try{
        importAll(require.context('../assets/icons',true,/\.svg$/))
    }catch(error){
        console.log(error);
    }
    export default {
        name:'Nav'
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/style/helper";
    .nav{
        display: flex;
        flex-direction: row;
        font-size: 12px;
        > .item{
            padding: 2px 0;
            width: 33.3333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .icon{
                width: 32px;
                height: 32px;
            }
        }
        > .item.selected{
            color: $color-highlight;
        }
    }


</style>