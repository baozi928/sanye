let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;
//获取id最大值 也就是基于上次的最新id或者0开始 逐次加一  id是字符串要转化为整数
function createId() {
    id++;
    return id;
}

export default createId;