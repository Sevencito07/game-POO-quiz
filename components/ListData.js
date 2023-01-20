export class ListData{
    constructor(){}
    /**
   *
   * @param {sting} text
   */
    showQuestion(text){
        const res = document.getElementById('question')
        res.innerHTML= text
    }
     /**
   *
   * @param {string[]} choices
   */
    showChoices(choices, callback){
        const res = document.getElementById('choices')
        res.innerHTML=""

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.addEventListener("click", () => callback(choices[i]));
            button.className = "buttons";
            button.innerText = choices[i];
      
            res.append(button);
          }
    }

    showScore(score){
      const bad = 10 - score;
      const gameOver = `
      <h1>Game Over</h1>
      <h2>final Score : ${score}  </h2>
      <h2>wrong answer:  ${bad} </h2>
      `
      const res = document.getElementById('quiz');
      res.innerHTML=gameOver;
    }

    showProgress(number, total){
     const res = document.getElementById('progress')
     res.innerHTML=`question ${number} of ${total}`
    }
}