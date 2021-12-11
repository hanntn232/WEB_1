function hienThiThongTin(){
    var phienDangNhap = JSON.parse(localStorage.getItem('phienDangNhap'));
    document.getElementById('ho').value = phienDangNhap.ho;
    document.getElementById('ten').value = phienDangNhap.ten;
    document.getElementById('sdt').value = phienDangNhap.sdt;
    document.getElementById('diachi').value = phienDangNhap.diaChi;
}

function thayDoiThongTin(){
    var phienDangNhap = JSON.parse(localStorage.getItem('phienDangNhap'));
    var ho = document.getElementById('ho').value;
    var ten = document.getElementById('ten').value;
    var sdt = document.getElementById('sdt').value;
    var diaChi = document.getElementById('diachi').value;
    var id = phienDangNhap.id;
    var danhSachKhachHang = JSON.parse(localStorage.getItem('danhSachKhachHang'));
    phienDangNhap.ho = ho;
    phienDangNhap.ten = ten;
    phienDangNhap.sdt = sdt;
    phienDangNhap.diaChi = diaChi;
    localStorage.setItem('phienDangNhap',JSON.stringify(phienDangNhap));
    for(var i=0; i<danhSachKhachHang.length; i++){
        if(id = danhSachKhachHang[i].id){
            danhSachKhachHang[i].ho = ho;
            danhSachKhachHang[i].ten = ten;
            danhSachKhachHang[i].sdt = sdt;
            danhSachKhachHang[i].diaChi = diaChi;
            break;
        }
    }
    localStorage.setItem('danhSachKhachHang',JSON.stringify(danhSachKhachHang));
    alert('Thay đổi thông tin thành công!');
    window.location.reload();
}