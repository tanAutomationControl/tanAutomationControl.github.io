
var Ho,ten,mail1,dc,sdt,cauhoi;
function send() {
    var arr = document.getElementsByTagName('input');
    Ho = arr[0].value;
    ten= arr[1].value;
    mail1 = arr[2].value;
    dc = arr[3].value;
    sdt = arr[4].value;
    msg = arr[5].value;
            Email.send({
            Host : "smtp.elasticemail.com",
            Username : "tanb1912976@student.ctu.edu.vn",
            Password : "7885DC9F831E1B7625519917861ED5A94B47",
            To : 'tanb1912976@student.ctu.edu.vn',
            From : document.getElementById("email").value,
            Subject : "Contact Form",
            Body : "Khách Hàng:"+Ho+ten+"Số Điện Thoại :"+sdt+"Có Câu hỏi:"+msg
        }).then(
        message => alert(message)
        );
}
