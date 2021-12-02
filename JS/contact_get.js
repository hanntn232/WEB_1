
// =============local storage==============
//khai báo key
var nhanPhanHoi = localStorage.getItem('nhanPhanHoi');
if (nhanPhanHoi == null) {
	jsonThongTin = new Array();
}
else {
    var jsonThongTin = JSON.parse(nhanPhanHoi);
}
function layThongTin() {
    if (validateForm(name,content) == false){
        if (kiemTraEmail(email) == true){
            if (kiemTraSDT(phone) == true) {
                //get value
                var name = document.getElementById('name');
                var newHoTen = name.value;
                jsonThongTin.push(newHoTen);
                var phone = document.getElementById('phone');
                var newPhone = phone.value;
                jsonThongTin.push(newPhone);
                var email = document.getElementById('email');
                var newEmail = email.value;
                jsonThongTin.push(newEmail);
                var content = document.getElementById('content');
                var newContent = content.value;
                jsonThongTin.push(newContent);
                name.value = '';
                phone.value = '';
                email.value = '';
                content.value = '';
                //lấy thông tin lưu xuống localstorage
                localStorage.setItem('nhanPhanHoi', JSON.stringify(jsonThongTin));
                alert('Gửi thông tin thành công!')
            }
            else{
                alert('Số điện thoại không đúng định dạng!');
                return false;
            }
        } 
        else{
            alert('Email không đúng định dạng!');
            return false;
        }
    }
    else{
        alert('Bạn chưa nhập đầy đủ thông tin!');
        return false;
    }
}
//kiểm tra số điện toại
function kiemTraSDT(phone) {
    var phone = document.getElementById('phone').value;
    var dinhdang = false;
    if (phone.length == 10) {
        dinhdang = true;
    }
    return dinhdang;
};
//kiểm tra email
function kiemTraEmail(email) {
    var email = document.getElementById('email').value;
    var dinhdang = false;
    if (email.includes(".")){
        dinhdang = true;
    }
    return dinhdang;
}
//==============validateForm==============
function validateForm(name,content){
    var dinhdang = false;
    var name = document.getElementById('name').value;
    var content = document.getElementById('content').value;
    if (name && !name.trim() || content && !content.trim()) {
        dinhdang = true;
    }
    return dinhdang;
}