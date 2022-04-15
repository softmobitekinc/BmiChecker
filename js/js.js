function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


var textMessage= " You are welcome to Bmi calculator..Know your Bmi status to avoid diet complications";

x = window.onload = alert(textMessage);
x.setTimeout(() => {
    timeout = 10000;
}, timeout);
function Calc(){
    const w = document.getElementById("weight").value;
    const h =document.getElementById("height").value;
    const metTosquare = (h*h);
    if(w && h  && metTosquare){
    const BMIscore = (w/metTosquare);
    const bmiTodp = BMIscore;
            if(BMIscore>=20 && BMIscore <=25){
            document.getElementById("showScore").textContent ="BMI SCORE: " + BMIscore+ "." + "<br/>"+ "Status : Normal ";
            }else if(BMIscore >25 && BMIscore <=30 ){
            document.getElementById("showScore").textContent ="BMI SCORE: " + BMIscore+ "." + "<br/>"+ "Status : Overweight ";
            }else if(BMIscore >30){
            document.getElementById("showScore").textContent ="BMI SCORE: " + BMIscore+ "." + "<br/>"+ "Status : Obese ";
            BMIscore.value.style.color=="red";
            }else if(BMIscore < 20){
            document.getElementById("showScore").textContent ="BMI SCORE: " + BMIscore+ "." + "<br/>"+ "Status : Overweight";
            BMIscore.value.style.color=="red";
            }else if(BMIscore="NaN" && w.value=="NaN "  && h.value =="NaN"){
            alert("OOPS there is something wrong enter a valid figure");
            } else if(BMIscore<=0){
            alert("insert a valid weight and height");
            }
        
            }else{
            alert("Please insert RIGHT FIGURE IN EITHER weight OR height INPUT field, NIETHER SHOULD YOU LEAVE THE FIELD EMPTY");
            }
            }
