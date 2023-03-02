var firt_name, last_name,Gmail, TDN, PASSWORD, PREPASSWORD, CHECK ;
var kt;
function wiriteData(Gmail,firt_name,last_name,PASSWORD,TDN) {
    
    firebase.database().ref('USER').child(TDN).set(
        {   
            gamil:Gmail,
            name:firt_name +' '+last_name,
            accout: TDN,
            password: PASSWORD,
            temp0:34,
            temp1:33,
            temp2:35
        }
    );
 
}
function checkpass(){
    var passwwordck= document.getElementById('floatingPassword').value;
    if(passwwordck.length<8)
    {document.getElementById('floatingPassword').style.borderColor="red";}
    else{document.getElementById('floatingPassword').style.borderColor="blue";}
    
    var passwwordck1= document.getElementById('floatingPassword1').value;
    if((passwwordck1.length<8))
    {document.getElementById('floatingPassword1').style.borderColor="red";}
    if(passwwordck!=passwwordck1){document.getElementById('floatingPassword1').style.borderColor="red";}
    else{document.getElementById('floatingPassword1').style.borderColor="blue";}
}
function findDateToFirebase(tdn) {
    var valuetdn = firebase.database().ref('USER').child(tdn);
    valuetdn.on('value', snap => {
        if (snap.val() == null) {
            console.log("BẠN ĐÃ TẠO THÀNH CÔNG TÀI KHOẢN");
            alert("BẠN ĐÃ TẠO THÀNH CÔNG TÀI KHOẢN");
            setTimeout(wiriteData(Gmail,firt_name,last_name,PASSWORD,TDN),1000);
        }
        else 
        {
            console.log("Tài Khoản "+TDN+" Đã Được Tạo");
            alert("Tài Khoản "+TDN+" Đã Được Tạo");
        }
    });

}
function send() {
    var arr = document.getElementsByTagName('input');
    firt_name = arr[0].value;
    last_name = arr[1].value;
    Gmail = arr[2].value;
    TDN = arr[3].value;
    PASSWORD = arr[4].value;
    PREPASSWORD = arr[5].value;
    CHECK = arr[6].checked;
    findDateToFirebase(TDN);
}

