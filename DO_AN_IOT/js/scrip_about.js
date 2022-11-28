var thanhvien1 ={
    name:'ĐÂY LÀ PHẦN GIỚI THIỆU VỀ THÔNG TIN NHÓM 7',
};
var thanhvien2 ={
    id: 1,
    name:'VÕ NGỌC TÂN',
    date:'02 - 02 -2001',
    gt:'Nam',
    quequan:'Bến Tre',
    nganh:'KTDK - TDH',
    khoa:'Đại Học Bách Khóa',
    sothich:'Đọc Sách, Xem Phim, Code Dạo, Khám Phá'

};
var thanhvien3 ={
    id: 2,
    name:'NGUYỄN THỊ NGỌC GIÀU',
    date:'31 - 05 - 2002',
    gt:'Nữ',
    quequan:'An Giang',
    nganh:'Quản Lí Công Nghiệp',
    khoa:'Đại Học Bách Khoa',
    sothich:'Làm Bánh Kem'

};
var thanhvien4 ={
    id: 1,
    name:'ĐOÀN VŨ HUYỀN MY',
    date:'20 - 03 - 2001',
    gt:'Nữ',
    quequan:'Kiên Giang',
    nganh:'Quản Lí Công Nghiệp',
    khoa:'Đại Học Bách Khoa',
    sothich:'Xem Phim Hàn Quốc'

};
var thanhvien5 ={
    id: 1,
    name:'LÊ THỊ TUYẾT HOA',
    date:'27 - 6 - 2001',
    gt:'Nữ',
    quequan:'Kiên Giang',
    nganh:'Quản Lí Công Nghiệp',
    khoa:'Đại Học Bách Khoa',
    sothich:'Xem Phim Hàn Quốc'

};
var thanhvien =[thanhvien1,thanhvien2,thanhvien3,thanhvien4,thanhvien5];
var text = document.querySelector('.box');
var a 
function ifm(a){
    if(a==0){ text.innerHTML = '<h3 >'+thanhvien[a].name+'</h3>'}
    else{
    text.innerHTML = '<h3 >'+thanhvien[a].name+'</h3>'
    +'<p>Ngày Sinh: '+thanhvien[a].date+'</p>'
    +'<p>Giới Tính: '+thanhvien[a].gt+'</p>'
    +'<p>Quê Quán: '+thanhvien[a].quequan+'</p>'
    +'<p>Ngành Học: '+thanhvien[a].nganh+'</p>'
    +'<p>Trường: '+thanhvien[a].khoa+'</p>'
    +'<p>Sở Thích: '+thanhvien[a].sothich+'</p>'
    +'<a href="'+thanhvien[a].id+'" class="btn" style="border-radius: 10px;">more</a>';
    }
}


