var questionBox = document.getElementById('questionBox');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var score = document.getElementById('scoreCard');

var app = {
    questions: [
                {q:'Which one of these is NOT a Javascript data type?',options:['A. Boolean','B. String','C. Function','D. Number'],answer:3},
                {q:'The statement a===b refers to?',options:['A. Both a and b are opposites','B. Both a and b are equal in value','C. Both a and b are equal in value and type','D. There is no such statement'],answer:3},
                {q:'What is the HTML tag under which one can write the JavaScript code?'
                ,options:['A. <javascript>','B. <scripted>','C. <script>','D. <js>'],answer:3},
            ],
            index:0,
        load:function(){
            questionBox.innerHTML= this.questions[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        
        },
        check:function(element) {
            var id = element.id.split('');
            // console.log(id);
            if (id[id.length -1 ]==this.questions[this.index].answer){
                console.log('correct');
            }
            else {
                console.log('not');
            }
        }
};
window.onload=app.load();

function button(element) {
    // alert(element.id);
    app.check(element);

}