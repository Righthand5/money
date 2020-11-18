type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
}
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

interface Window{
    tagList: Tag[];
}