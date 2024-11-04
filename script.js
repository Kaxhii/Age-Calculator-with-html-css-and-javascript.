let userInput=document.getElementById("date");
 let result=document.getElementById("result");
//  userInput.max= new Date('04-09-2004').toISOString().split("T")[0];   can add max date here
userInput.max= new Date().toISOString().split("T")[0]; 
 function calculateAge(){
    let birthDate=new Date(userInput.value);
    let d1= birthDate.getDate();
    let m1= birthDate.getMonth()+1;
    let y1= birthDate.getFullYear();
    let today=new Date();
    let d2= today.getDate();
    let m2= today.getMonth()+1;
    let y2= today.getFullYear();
    let d3,m3,y3;
    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
}
else{
    y3--;
    m3=12+m2-m1;
}
 if(d2 >= d1){
    d3 = d2 - d1;
 }
 else{
    m3--;
    d3 = getDaysInMonth(y2, m1) + d2 - d1;
 }
 if(m3<0){
    m3=11;
    y3--;
    }
if(isNaN(m3) && isNaN(y3) && isNaN(d3)){
    result.innerHTML=`Please Enter Valid Date`;
}
else{
    result.innerHTML=`<span>${y3}</span> Years <span>${m3}</span> Months <span>${d3}</span> Days Old`;
}
}
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}



// let userInput = document.getElementById('date');
// userInput.max = new Date('').toISOString().split("T")[0];


// function calculateAge() {

//     let birthDate = new Date(userInput.value);

//     let d1 = birthDate.getDate();
//     let m1 = birthDate.getMonth() + 1;
//     let y1 = birthDate.getFullYear();

//     let today = new Date();

//     let d2 = today.getDate();
//     let m2 = today.getMonth() + 1;
//     let y2 = today.getFullYear();

//     let d3,m3,y3;
//     y3 = y2 - y1;
//     if (m2 >= m1) {
//         m3 = m2 - m1;
//     }else{
//         y3--;
//         m3 = 12 + m2 - m1;
//     }
   
// }