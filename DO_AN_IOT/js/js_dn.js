var testtdn = 0;
var valuemk,valuetdn;
var tendn;
//hàm ghi dữ liệu
function send1() {
    var arr = document.getElementsByTagName('input');
    var tdn = arr[0].value;
    var mk = arr[1].value;
    valuetdn =  firebase.database().ref('USER').child(tdn).child('accout');
    valuemk =  firebase.database().ref('USER').child(tdn).child('password');
    findDateToFirebasein(tdn,mk);
    
}
function findDateToFirebasein(tdn, mk) {
    
    
    valuetdn.on('value',snap =>{
        if(snap.val()==tdn){
        console.log("Bạn Đã Đăng Nhập Với Tài Khoản : "+tdn);
        setTimeout(alert("Tài khoản : "+tdn+" đã đăng nhập thành công!"),2000);
        tendn=tdn;
        }
        else
        {
            console.log("Bạn Đã Nhập sai Tên đăng Nhập");
        }
    });
    
    valuemk.on('value',snap =>{
        if(snap.val()==mk){
            console.log("Bạn Đã Đăng Nhập Thành Công");
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
    document.querySelector('.wrapper').innerHTML = "<H1> WELLCOM "+tendn+"  </H1"+
    '<div class="cart-item">'+
                '<img src="" alt="">'+
                '<div class="content">'+
                    '<h3></h3>'+
                    '<div class="p"></div>'+
                '</div>'+
            
            '<a href="https://tanautomationcontrol.github.io/DO_AN_IOT/TRANG_CHU.html" class="btn">Đăng Xuất !</a>';
}

