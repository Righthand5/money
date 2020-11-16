const localStorageKeyName = 'recordList';
const model = {
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];//强制类型声明
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem('recordList', JSON.stringify(data));
    },
};

export default model;