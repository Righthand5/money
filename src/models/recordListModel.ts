const localStorageKeyName = 'recordList';
const recordListModel = {
    data:[] as RecordItem[],
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        this.data =JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];//强制类型声明
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
};

export default recordListModel