//自己维护了data
const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
    //类似与枚举的联合类型
    create: (name: string) => 'success' | 'duplicated';//success 表示成功；duplicated表示内容重复
    save: () => void;
}
const tagListModel: TagListModel= {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') //强制类型声明
        return this.data;
    },
    create(name: string){
        //this.data = {{id:'1',name:'2'}}
        const  names = this.data.map(item => item.name)

        if(names.indexOf(name) >=0){return 'duplicated';}
        this.data.push({id:name,name:name});
        this.save();
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
};

export default tagListModel;