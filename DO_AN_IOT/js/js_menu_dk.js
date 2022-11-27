const popupScreendn = document.querySelector(".popup-screen.ppdn");
const popupScreen = document.querySelector(".popup-screen");
const popupScreen1 = document.querySelector(".popup-screen.pp1");
const popupScreen2 = document.querySelector(".popup-screen.pp2");
const popupScreen3 = document.querySelector(".popup-screennavbar.ppnavbar");
const popupScreen4 = document.querySelector(".popup-screen.ppnavbar1");
const popupbox = document.querySelector(".popup-box");
const closeBtndn = document.querySelector(".close-btnpopupdn");
const closeBtn = document.querySelector(".close-btnpopup");
const closeBtn1 = document.querySelector(".close-btnpopup1");
const closeBtn2 = document.querySelector(".close-btnpopup2");
const closeBtn3 = document.querySelector(".close-btnpopupnavbar");
const closeBtn4 = document.querySelector(".close-btnpopupnavbar1");
var firebaseConfig = {
    apiKey: "AIzaSyBCmk3r6cdX7yZACmcGQyNR7vp9P2Wu0qM",
    authDomain: "testputgethtml.firebaseapp.com",
    databaseURL: "https://testputgethtml-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testputgethtml",
    storageBucket: "testputgethtml.appspot.com",
    messagingSenderId: "1027337300110",
    appId: "1:1027337300110:web:91743d365245cc062541df",
    measurementId: "G-M6KM6V14CD"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var testtdn = 0;
var valuemk,valuetdn,valuename,valuenamebt,valuenametemp;
var tendn='admin',valbt,valtemp;
var checkten, checkdn=0;
var tdn,mk;
var dbRef1
var dbRef2
var dbRef3
console.log(checkten);
function btnclick() {
    console.log(tdn);
    if(checkdn==0){alert("bạn chưa đăng nhập mời bạn đăng nhập ở mục navbar !")}
    else{popupScreen.classList.add("active");}
    
}
function btnclick1() {
    if(checkdn==0){alert("bạn chưa đăng nhập mời bạn đăng nhập ở mục navbar !")}
    else{popupScreen1.classList.add("active");}
}
function btnclick2() {
    if(checkdn==0){alert("bạn chưa đăng nhập mời bạn đăng nhập ở mục navbar !")}
    else{popupScreen2.classList.add("active");}
}
function btnclick3(div1) {
    popupScreen3.classList.add("active");
    document.querySelector('.imgpopup').innerHTML ='<img src="https://tanautomationcontrol.github.io/DO_AN_IOT/images/button.PNG" alt="" style="width: 25%;height: 25%;" onclick="addft1('+div1+')">'+
                                                    '<img src="https://tanautomationcontrol.github.io/DO_AN_IOT/images/range.PNG" alt="" style="width: 25%;height: 25%;" onclick="addft2('+div1+')">';

}

function btnclick4(div2) {
    popupScreen4.classList.add("active");
    document.querySelector('.infobuttonpopup').innerHTML =
                    '<div class="raspberryset">'+
                        '<input type="text" id ="input'+div2+'" value=""'+
                    '</div>'+
                    '<div class="raspberryset">'+
                        '<input type="text" id ="input'+div2+1+'" value="">'+
                    '</div>'+
                    '<button type="submit" onclick="sendinfofunction('+div2+')">Cập Nhật</button>';

}
closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active");
    popupScreen3.classList.remove("active");
    popupScreen4.classList.remove("active");
});
closeBtn1.addEventListener("click", () => {
    popupScreen1.classList.remove("active");
    popupScreen3.classList.remove("active");
    popupScreen4.classList.remove("active");
});
closeBtn2.addEventListener("click", () => {
    popupScreen2.classList.remove("active");
    popupScreen3.classList.remove("active");
    popupScreen4.classList.remove("active");
});
closeBtn3.addEventListener("click", () => {
    popupScreen3.classList.remove("active");
});
closeBtn4.addEventListener("click", () => {
    popupScreen4.classList.remove("active");
});     
var a = 0, b = 0 ;
function addft2(div) {
    b++;
    document.querySelector('.functioniot' + div).insertAdjacentHTML('afterend','<div class="boxrange '+' dummyrange'+b +'" style="float:right;margin-left:20px;margin-right:20px ;">'+
    '<i class="fas fa-times close-btnpopup11 " onclick="removefunction2(' + b +','+div+')" style="font-size:15px;margin-left: 100%;"></i>' +
    '<div class="sliderrange slider'+b+'">'+
                '<input class="valrang'+b+'" type="range" min="0" max="100" value="20" oninput="sendvaluer('+b+','+div+')"/>'+
            '</div>'+
            '<div class="valuerange valuerange'+b+'">100</div>'+
            '<input id="checkrange'+b+'" placeholder="HÃY ĐẶT TÊN CHO RANGE NÀY" class="nameRANGE'+b+'" type="text" style="font-size:15px;margin-top: 10px;margin-bottom:10px; border:2px solid #000000;border-radius:10px;text-align: center;" onchange="checknamerange('+b+','+div+')"/>'+
        '</div>'
        );
}
function sendvaluer(b,div){
    var valunamebtn=document.getElementById('checkrange'+b).placeholder;
if(valunamebtn == "HÃY ĐẶT TÊN CHO RANGE NÀY"){ alert("bạn chưa đặt tên cho Range");}
    else{
    var sliderrange = document.querySelector(".valrang"+b);
    var valuerange = document.querySelector(".valuerange"+b);
    valuerange.textContent = sliderrange.value;
    console.log(sliderrange.value);
    var childname='';
    if(div==0){childname='PK';}
    if(div==1){childname='PB';}
    if(div==2){childname='PN';}
    firebase.database().ref().child('USER').child(tdn).child(childname).child(valunamebtn).set(
        sliderrange.value
    );
    }
}
function checknamerange(a,b){
    var valunamerange= document.getElementById('checkrange'+a).value;
    document.getElementById('checkrange'+a).placeholder=valunamerange;
    console.log(valunamerange);
    var childname='';
    if(b==0){childname='PK';}
    if(b==1){childname='PB';}
    if(b==2){childname='PN';}
    firebase.database().ref().child('USER').child(tdn).child(childname).child(valunamerange).set(
            0
    );
}

function addft1(div) {
    a++;
    
    var floatset ='';
    if(a%4){floatset='right';}else{floatset='left';}
    document.querySelector('.functioniot' + div).insertAdjacentHTML('afterend', '<div style="'+floatset+':right;margin-left:20px;margin-right:20px ;" class="dummybutton' + a + '">' +
        '<i class="fas fa-times close-btnpopup11 " onclick="removefunction1(' + a +','+div+')" style="font-size:15px;margin-left: 100%;"></i>' +
        
        '<label class="skeuo switch">' +
        '<input type="checkbox" id ="my-checkbox'+a+'"class="skeuo input" onclick="infofunction(' + a +','+div+')">' +
        '<div class="skeuo rail">' +
        '<span class="skeuo circle"></span>' +
        '</div>' +
        '<span class="skeuo indicator"></span>' +
        '</label>' +
        '<input id="checkbtn'+a+'" placeholder="HÃY ĐẶT TÊN CHO BUTTON NÀY" class="nameBT'+a+'" type="text" style="font-size:15px;margin-top: 10px;margin-bottom:10px; border:2px solid #000000;border-radius:10px;text-align: center;" onchange="checknamebtn('+a+','+div+')"/>'+
        '<div class="nameBT'+a+'"></div>'+
        '</div>');
}
function checknamebtn(a,b){
    var valunamebtn= document.getElementById('checkbtn'+a).value;
    document.getElementById('checkbtn'+a).placeholder=valunamebtn;
    console.log(valunamebtn);
    var childname='';
    if(b==0){childname='PK';}
    if(b==1){childname='PB';}
    if(b==2){childname='PN';}
    firebase.database().ref().child('USER').child(tdn).child(childname).child(valunamebtn).set(
            false 
    );
}
function removefunction1(rmv,b) {
    var valunamebtn= document.getElementById('checkbtn'+rmv).value;
    console.log(valunamebtn);
    var childname='';
    if(b==0){childname='PK';}
    if(b==1){childname='PB';}
    if(b==2){childname='PN';}
    var elem = document.querySelector('.dummybutton'+ rmv);
    elem.remove(elem);
    firebase.database().ref().child('USER').child(tdn).child(childname).child(valunamebtn).set(null);
}
function removefunction2(rmv,b) {
    var valunamebtn= document.getElementById('checkrange'+rmv).value;
    var childname='';
    if(b==0){childname='PK';}
    if(b==1){childname='PB';}
    if(b==2){childname='PN';}
    var elem2 = document.querySelector('.dummyrange'+ rmv);
    elem2.remove(elem2);
    firebase.database().ref().child('USER').child(tdn).child(childname).child(valunamebtn).set(null);
}
function infofunction(inf,b){
    var valunamebtn= document.getElementById('checkbtn'+a).placeholder;
    if(valunamebtn=="HÃY ĐẶT TÊN CHO BUTTON NÀY"){alert("Bạn Chưa Đặt Tên Cho Button Này!")}
    else{
    var childname='';
    if(b==0){childname='PK';}
    if(b==1){childname='PB';}
    if(b==2){childname='PN';}
    console.log(childname);
    if(document.getElementById("my-checkbox"+inf).checked){
        firebase.database().ref().child('USER').child(tdn).child(childname).child(valunamebtn).set(true);
    }
    else{
        firebase.database().ref().child('USER').child(tdn).child(childname).child(valunamebtn).set(false);
    }
}
}

function sendinfofunction(a) {
    var namebutton = document.getElementById('input'+a).value;
    var portrasspberry = document.getElementById('input'+a+1).value;
    wiriteData(a,namebutton,portrasspberry)
    document.querySelector('.nameBT' + a).innerHTML='<p>'+findDateToFirebase(a,"namebutton")+'</p>';

}
function wiriteData(vt,namebutton,portrasspberry) {
    
        firebase.database().ref().child('USER').child(tdn).child('button'+vt).update(
            {
                portrasspberry:portrasspberry,
                namebutton:namebutton
            }
        );
    
     
}

// phần đăng nhập

//hàm ghi dữ liệu
function send1() {
    var arr = document.getElementsByTagName('input');
    tdn = arr[0].value;
    mk = arr[1].value;
    valuetdn =  firebase.database().ref('USER').child(tdn).child('accout');
    valuemk =  firebase.database().ref('USER').child(tdn).child('password');
    valuename =  firebase.database().ref('USER').child(tdn).child('name');
    dbRef1 = firebase.database().ref().child('USER').child(tdn).child('temp0');
    dbRef2 = firebase.database().ref().child('USER').child(tdn).child('temp1');
    dbRef3 = firebase.database().ref().child('USER').child(tdn).child('temp2');
    var temp0 = document.getElementById('temp0');
    dbRef1.on('value', snap => temp0.innerText =snap.val());
    var temp1 = document.getElementById('temp1');
    dbRef2.on('value', snap => temp1.innerText =snap.val());
    var temp2 = document.getElementById('temp2');
    dbRef3.on('value', snap => temp2.innerText =snap.val());
    valuename.on('value',snap =>{
        tendn=snap.val();
    });
    findDateToFirebasein(tdn,mk);
    
}
function findDateToFirebasein(tdn, mk) {
    
    
    valuetdn.on('value',snap =>{
        if(snap.val()==tdn){
        console.log("Bạn Đã Đăng Nhập Với Tài Khoản : "+tdn);
        checkten=tdn;
        }
        else
        {
            console.log("Bạn Đã Nhập sai Tên đăng Nhập");
        }
    });
    
    valuemk.on('value',snap =>{
        if(snap.val()==mk){
            console.log("Bạn Đã Đăng Nhập Thành Công");
            setTimeout(alert("Tài khoản : "+checkten+" đã đăng nhập thành công!"),2000);
            setTimeout(setdatain(),1000); 
        }
        else
        {
            console.log("Bạn Đã Nhập sai Mật Khẩu của Mình!");
            alert("bạn đã nhập sai tên đăng nhập hoặc mật khẩu !");
        }
    });

    
    
}
function setdatain(){
    checkdn=1;
    document.querySelector('.wrapper').innerHTML = "<H1> HELLO "+tendn+" !</H1"+
    '<div class="cart-item">'+
                '<img src="" alt="">'+
                '<div class="content">'+
                    '<h3></h3>'+
                    '<div class="p"></div>'+
                '</div>'+
            
            '<a href="https://tanautomationcontrol.github.io/DO_AN_IOT/HOME.html" class="btn">Đăng Xuất !</a>';
}





