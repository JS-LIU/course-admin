import {computerLessonClassify} from "../entity/LessonClassify/ComputerLessonClassify";

export class LessonClassService{
    findLessonClassifyById(lessonClassifyId){
        return computerLessonClassify.findTypeById(lessonClassifyId);
    }
}
export const lessonClassService = new LessonClassService();