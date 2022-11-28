a=[0,0,0,0,0,0,0,0,0,0,0,0,0]
function setsend(){
    firebase.database().ref().update({'13':1});
    firebase.database().ref().update({'TRAFFIC_LIGHT':a});
    setTimeout(reset,500);
}
function reset(){
    firebase.database().ref().update({'13':0});
}
function up(up){
a[up]++;
if(a[up] == 10){a[up]=0;}
document.querySelector('.number'+up).innerHTML='<H1>'+a[up]+'</H1>';
if(up==2||up==3||up==4||up==5){
    tong=a[2]*10+a[3]+a[4]*10+a[5]
    //console.log(a[2]*10+a[3]+a[4]*10+a[5]);
    a[6]=Math.floor(tong/10);
    console.log(a[6]);
    document.querySelector('.number1').innerHTML='<H1>'+a[6]+'</H1>';
    a[7]=tong-(Math.floor(tong/10)*10);
    document.querySelector('.number0').innerHTML='<H1>'+a[7]+'</H1>';
}
if(up==8||up==9||up==10||up==11){
    tong=a[8]*10+a[9]+a[10]*10+a[11]
    //console.log(a[2]*10+a[3]+a[4]*10+a[5]);
    a[0]=Math.floor(tong/10);
    console.log(a[0]);
    document.querySelector('.number6').innerHTML='<H1>'+a[0]+'</H1>';
    a[1]=tong-(Math.floor(tong/10)*10);
    document.querySelector('.number7').innerHTML='<H1>'+a[1]+'</H1>';
}
}
function down(down){
a[down]--; 
if(a[down] == -1){a[down]=9;}
document.querySelector('.number'+down).innerHTML='<H1>'+a[down]+'</H1>';
if(down==2||down==3||down==4||down==5){
    tong=a[2]*10+a[3]+a[4]*10+a[5]
    console.log(a[2]*10+a[3]+a[4]*10+a[5]);
    a[6]=Math.floor(tong/10);
    console.log(a[6]);
    document.querySelector('.number1').innerHTML='<H1>'+a[6]+'</H1>';
    a[7]=tong-(Math.floor(tong/10)*10);
    document.querySelector('.number0').innerHTML='<H1>'+a[7]+'</H1>';
}
if(down==8||down==9||down==10||down==11){
    tong=a[8]*10+a[9]+a[10]*10+a[11]
    //console.log(a[2]*10+a[3]+a[4]*10+a[5]);
    a[0]=Math.floor(tong/10);
    console.log(a[0]);
    document.querySelector('.number6').innerHTML='<H1>'+a[0]+'</H1>';
    a[1]=tong-(Math.floor(tong/10)*10);
    document.querySelector('.number7').innerHTML='<H1>'+a[1]+'</H1>';
}
}
function info(){
    if(document.getElementById("my-checkbox").checked){
        firebase.database().ref().child('TRAFFIC_LIGHT').update({'12':1});
    console.log(" đã đc bật");
    }
    else{
        firebase.database().ref().child('TRAFFIC_LIGHT').update({'12':0});
        console.log(" đã đc tắt");
    }
    
    firebase.database().ref().update({'13':1});
    setTimeout(reset,500);
}