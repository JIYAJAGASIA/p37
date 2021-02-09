class Question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Submit');
      //this.greeting = createElement('h2');
    }
    hide(){
     // this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      this.title.html("MY QUIZ GAME");
      this.title.position(350, 0);
      this.question.html("Question-what starts and ends with the letter 'E', but has only 1 letter?");
      this.question.position(150,80);
      this.option1.html("1: Everyone ");
      this.option1.position(150,100);
      this.option2.html("1: Envelope");
      this.option2.position(150,120);
      this.option3.html("1: Estimate ");
      this.option3.position(150,140);
      this.option4.html("1: Example ");
      this.option4.position(150,160);
      this.input.position(130, 160);
      this.button.position(250, 200);
      
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      //  this.greeting.html("Hello " + player.name)
        //this.greeting.position(130, 100);
      });
  
    }
  }
  