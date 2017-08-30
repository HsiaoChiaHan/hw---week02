//第一題
function random(m){
    return Math.floor(Math.random()*m+1);
}


//第二題
function max(a,b){
//    console.log(a>b);
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}


//第四題
function squares(a,b){
    return Math.pow(a,2)+ Math.pow(b,2);
}

//第五題:是否為閏年,
//西元年被4整除且不被100整除，或被400整除者即為閏年
function leapYear(y){
//    console.log(y%4===0);
//    console.log(y%100!=0);
//    console.log(y%400===0);
//    
//    console.log(y%100!=0 || y%400===0);
    
    var yy = y%100!=0 || y%400===0;
//    console.log(y%4===0 && yy);
    
    if(y%4===0 && (y%100!=0 || y%400===0)){
        return "yes";
    }
    else{
        return "no";
    }
}