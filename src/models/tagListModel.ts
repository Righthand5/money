//自己维护了data
const localStorageKeyName = 'tagList';
type TagListModel={
    data: string[];
    fetch: () => string[];
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
        if(this.data.indexOf(name) >=0){return 'duplicated';}
        this.data.push(name);
        this.save();
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
};

export default tagListModel;