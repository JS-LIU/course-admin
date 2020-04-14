class ComputerLessonClassify {
    constructor() {
        this.typeList =  [{name:"scratch",id:1},{name:"python",id:2}];
    }
    findTypeById(id){
        return this.typeList.find((typeItem,index)=>{
            return typeItem.id === id;
        })
    }

}

export const computerLessonClassify = new ComputerLessonClassify();