//自己维护了data
import createId from '@/lib/creatId';

const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    //类似与枚举的联合类型
    update: (id: string,name: string) => 'success' | 'not found' | 'duplicated';
    create: (name: string) => 'success' | 'duplicated';//success 表示成功；duplicated表示内容重复
    save: () => void;
    remove: (id: string) => boolean;
}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]'); //强制类型声明
        return this.data;
    },
    update(id: string, name: string) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            }else{
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name;
                tag.id = name;
                this.save();
                return 'success'
            }
        } else {
            return 'not found';
        }
    },
    create(name: string) {
        //this.data = {{id:'1',name:'2'}}
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        const id = createId().toString();
        this.data.push({id, name: name});
        this.save();
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    remove(id: string){
        let index = -1;
        for(let i = 0; i < this.data.length;i++){
            if(this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    }
};

export default tagListModel;