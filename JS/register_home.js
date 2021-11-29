//khai báo key
var nhanThongTinQuaEmail = localStorage.getItem('nhanThongTinQuaEmail');
if (nhanThongTinQuaEmail == null) {
	jsonNhanThongTin = new Array();
}
else {
	var jsonNhanThongTin = JSON.parse(nhanThongTinQuaEmail);
}
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



