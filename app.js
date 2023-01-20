//@ts-check
import { AddQuiz } from "./components/AddQuiz.js";
import { ListData } from "./components/listData.js";
import { questions } from "./data/dataDirect.js";

const renderPage=(quiz, list)=>{
  if(quiz.isEnded()){
    list.showScore(quiz.score)
  }else{
    list.showQuestion(quiz.getQuestion().question)
    list.showProgress(quiz.index + 1, 10 )
    list.showChoices(quiz.getQuestion().choices, (select)=>{
        quiz.guess(select)
        renderPage(quiz,list)
    })
  }
}

function main(){
    const quiz = new AddQuiz(questions);
    const list = new ListData()
    
    renderPage(quiz, list)
}

main()