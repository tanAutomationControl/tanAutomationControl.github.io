var mk;
//hàm ghi dữ liệu
function send() {
    var arr = document.getElementsByTagName('input');
    var tdn = arr[0].value;
    valuemk =  firebase.database().ref('USER').child(tdn).child('password');
    findDateToFirebase(tdn);
}
function back(){
    window.location.href="https://tanautomationcontrol.github.io/DO_AN_IOT/HOME.html";
}
function findDateToFirebase(tdn) {
    valuemk.on('value',snap =>{
        alert("MẬT KHẨU CỦA BẠN LÀ: "+snap.val());
        
    });
}


