function myValue(x,y){
    let a=x+y;
    return a;
}
console.log(myValue(4,5));

function myValue1(x=5,y=10){
    let a=x+y;
    return a;
}
console.log(myValue1());

function myValue2(x=12,y=24){
    let a=x+y;
    return a;
}
console.log(myValue2(22,22));

function myValue3(x,y){
    let a=x*y;
    return a;
}
console.log(myValue3(4,5));

function myValue4(x,y){
    let a=x/y;
    return a;
}
console.log(myValue4(20,5));

function myValue9(x,y){
    let a=x%y;
    return a;
}
console.log(myValue9(32,5));

function myValue5(x,y){
    let a=x-y;
    return a;
}
console.log(myValue5(-20,5));

function myValue6(x,y){
    let a=x+y*10;
    return a;
}
console.log(myValue6(2,5));

function myValue7(x,y){
    let a=x+y-y+x;
    return a;
}
console.log(myValue7(4,12));

function myValue8(x,y){
    let a=x+y%10;
    return a;
}
console.log(myValue8(4,5));