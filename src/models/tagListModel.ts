import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';
type Tag = {
    id: string,
    name: string
}
type TagListModel = {
    data: Tag[],
    fetch: () => Tag[],
    create: (name: string) => 'success' | 'duplicated'
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean,
    save: () => void
};
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    create(name) {
        //this.data = [{id:'1',name:'1'},{id:'2',name:'2'}]
        //新建name的时候要获取的是data里所有的name进行查找，看name是否已存在
        const names = this.data.map(item => item.name);//map：对data里面的每一项（组）用item表示，获取item的name
        if (names.indexOf(name) >= 0) {return 'duplicated';}
        const id = createId().toString();
        this.data.push({id, name: name});
        this.save();
        return 'success';
    },
    update(id, name) {
        const idList = this.data.map(item => item.id);//获取所有的id
        if (idList.indexOf(id) >= 0) {//查看id是否已经存在
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.data.filter(item => item.id === id)[0]; //在所有data里面找这个id 就等于传进来的id,，取第0项
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) { //用for循环 查找id对应的索引
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1); //删除index
        this.save(); //删除后保存
        return true;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};
export default tagListModel;