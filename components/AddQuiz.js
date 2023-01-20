import { Question } from "./Question.js";

export class AddQuiz{
    score = 0;
    index = 0;
      /**
   *
   * @param {Question[]} questions
   */
    constructor(question){
        this.question = question;
    }
     /**
   *
   * @returns {Question} the question found
   */
    getQuestion(){
        return this.question[this.index]
    }
    
    
    isEnded(){
        return this.question.length === this.index;
    }

   guess(answer){
    if(this.getQuestion().correctAnswer(answer)){
        this.score++
    }
    this.index++
   }
}