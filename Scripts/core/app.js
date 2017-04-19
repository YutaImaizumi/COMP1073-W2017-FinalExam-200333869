// This is my portional original JavaScript data (Final Exam on COMP1073). 
// The Dice Roller
// File name : app.ts
// Author's name : Yuta Imaizumi #200333869
// Web site name : Intro To CreateJS
// (function(){
// document.getElementById('btn').addEventListener('click',function(){
// var r1 = Math.floor(Math.random() * 6) + 1; 
// console.log(r1);
// });
(function (window) {
    function OnButtonClick() {
        var r1 = Math.floor(Math.random() * 6) + 1;
        var r2 = Math.floor(Math.random() * 6) + 1;
    }
    var cj = createjs, bitmap, text;
    function init() {
        stage = new cj.Stage('canvas');
        bitmap1 = new cj.Bitmap('http://yuta-pf.azurewebsites.net/COMP1073-W2017-FinalExam-200333869/Assets/images/' + r1 + '.png');
        bitmap1.y = 100;
        bitmap1.x = 100;
        stage.addChild(bitmap1);
        stage.update();
        bitmap2 = new cj.Bitmap('http://yuta-pf.azurewebsites.net/COMP1073-W2017-FinalExam-200333869/Assets/images/' + r2 + '.png');
        bitmap2.y = 100;
        bitmap2.x = 400;
        stage.addChild(bitmap2);
        stage.update();
        var t = new cj.Text(r1, "24px sans-serif", "black");
        t.textAlign = "start";
        t.y = 350;
        t.x = 150;
        stage.addChild(t);
        stage.update();
        var t2 = new cj.Text(r2, "24px sans-serif", "black");
        t2.textAlign = "start";
        t2.y = 350;
        t2.x = 450;
        stage.addChild(t2);
        stage.update();
    }
    window.addEventListener('load', function () {
        window.removeEventListener('load', arguments.callee);
        init();
    }, false);
}(window));
// function OnButtonClick() {
//   var r1 = Math.floor(Math.random() * 6) + 1; 
//   var r2 = Math.floor(Math.random() * 6) + 1; 
// }
// console.log(r1);
//# sourceMappingURL=app.js.map