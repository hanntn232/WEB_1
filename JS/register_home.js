//khai báo key
var nhanThongTinQuaEmail = localStorage.getItem('nhanThongTinQuaEmail');
var jsonNhanThongTin = [];
//
var btnRegister = document.getElementById('btnRegister');
btnRegister.addEventListener('click',getEmail);
function getEmail() {
	//get value
	var input = document.getElementById('email');
	var newInput = input.value;
	jsonNhanThongTin.push(newInput);
	input.value = '';
	//lấy thông tin lưu xuống localstorage
	localStorage.setItem('nhanThongTinQuaEmail',JSON.stringify(jsonNhanThongTin));
	alert('Đăng ký nhận thông tin thành công!');
}



//--------------TÌM KIẾM TRÊN THANH NAVBAR---------------
function timKiemSanPham(){
    var noiDungTimKiem = document.getElementById('search').value;
    noiDungTimKiem = noiDungTimKiem.trim();
    var danhSachTrungKhop = new Array();
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPhamTam'));
    if(kiemTraNoiDungRong(noiDungTimKiem) ==  false){
        for(var i=0; i<danhSachSanPham.length; i++){
            if(danhSachSanPham[i].ten.toLowerCase().includes(noiDungTimKiem.toLowerCase())==true){
                danhSachTrungKhop.push(danhSachSanPham[i]);
            }
        }
        localStorage.setItem('danhSachSanPhamTam',JSON.stringify(danhSachTrungKhop));
        window.open('Product.html','_self');
    }
    else{
        alert('Bạn chưa nhập thông tin tìm kiếm!');
    }
}

//Kiểm tra nội dung khách hàng nhập có rỗng không
function kiemTraNoiDungRong(chuoi) {
    var traVe = false;
    chuoi = chuoi.replace(/ /gi, '');
    if (chuoi.length == 0) {
        traVe = true;
    }
    return traVe;
}



