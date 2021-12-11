//-----------HIỂN THỊ THÔNG TIN KHÁCH HÀNG--------------
//Bước 1: Lấy thông tin khách hàng
function layThongTinKhachHang() {
    var khachHang = new Object();
    khachHang = JSON.parse(localStorage.getItem('phienDangNhap'));
    return khachHang;
}

//Bước 2: hiển thị thông tin khách hàng
//Hiển thị trên desktop
function hienThiThongTinKhachHang_Desktop(khachHang) {
    var html = '';
    html += '<div class="col-9">\n'
    html += '<div>Họ tên: <span  id="hoten1">' + khachHang.ho + ' ' + khachHang.ten + '</span></div>\n'
    html += '<div >Số điện thoại: <span id="sdt1">' + khachHang.sdt + '</span></div>\n'
    html += '<div >Địa chỉ: <span id="diachi1">' + khachHang.diaChi + '</span></div>\n'
    html += '<div >Phương thức thanh toán: <span id="pttt1">Thanh toán khi giao hàng</span></div>\n'
    html += '</div>\n'
    html += '<div class="col-3 btn--thaydoi">\n'
    html += '<div class="col-12">\n'
    html += '<button onclick="hienThiFormThayDoi()" >Thay đổi</button>\n'
    html += '</div>\n'
    html += '</div>';

    return html;
}


//Hiển thị trên mobile
function hienThiThongTinKhachHang_Mobile(khachHang) {
    var html = '';
    html += '<div class="col-12">\n'
    html += '<div >Họ tên: <span id="hoten2">' + khachHang.ho + ' ' + khachHang.ten + '</span></div>\n'
    html += '<div >Số điện thoại: <span id="sdt2">' + khachHang.sdt + '</span></div>\n'
    html += '<div >Địa chỉ: <span id="diachi2">' + khachHang.diaChi + '</span></div>\n'
    html += '<div id="pttt">Phương thức thanh toán: <span>Thanh toán khi giao hàng</span></div>\n'
    html += '</div>\n'
    html += '<div class="col-12 btn--thaydoi">\n'
    html += '<div class="col-12">\n'
    html += '<button onclick="hienThiFormThayDoi()">Thay đổi</button>\n'
    html += '</div>\n'
    html += '</div>';

    return html;
}


//Lấy id giỏ hàng
function layIdGioHang() {
    var idGioHang;
    var thongTinKhachHang = JSON.parse(localStorage.getItem('phienDangNhap'));
    idGioHang = thongTinKhachHang.id; //id giỏ hàng = id khách hàng
    return idGioHang;
}


//----------------HIỂN THỊ THÔNG TIN GIỎ HÀNG-------------------
//Bước 1: Tạo chức năng lấy thông tin sản phẩm từ idSanPham của itemGioHang
function layThongTinSanPham(itemGioHang) {
    var thongTinSanPham = new Object();
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
    for (var i = 0; i < danhSachSanPham.length; i++) {
        if (itemGioHang.idSanPham == danhSachSanPham[i].id) {
            thongTinSanPham.danhMuc = danhSachSanPham[i].danhMuc;
            thongTinSanPham.giaGoc = danhSachSanPham[i].giaGoc;
            thongTinSanPham.giaBan = danhSachSanPham[i].giaBan;
            thongTinSanPham.hinhAnh = danhSachSanPham[i].hinhAnh;
            thongTinSanPham.linkChiTietSanPham = danhSachSanPham[i].linkChiTietSanPham;
            thongTinSanPham.ten = danhSachSanPham[i].ten;
            thongTinSanPham.idSanPham = danhSachSanPham[i].id
            break;
        }
    }
    return thongTinSanPham;
}
//Bước 2: Hiển thị 1 item giỏ hàng
//Hiển thị trên Desktop
function hienThiDoiTuongItemDatHang_Desktop(itemGioHang) {
    var thongTinSanPham = layThongTinSanPham(itemGioHang);
    var html = '';
    html += '<div class="giohang--item">\n'
    html += '<div class="giohang--anhsp col-2">\n'
    html += '<img src="' + thongTinSanPham.hinhAnh + '" alt="sanpham">\n'
    html += '</div>\n'
    html += '<div class="tensp col-4">\n'
    html += '<a href="' + thongTinSanPham.linkChiTietSanPham + '">' + thongTinSanPham.ten + '</a><br>\n'
    html += '</div>\n'
    html += '<div class="giohang--dongia col-2">\n'
    html += '<p>\n'
    html += '' + dinhDangTienTe((thongTinSanPham.giaBan/1000).toString()) + '<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '<div class="giohang--soluong col-2">\n'
    html += '\n'
    html += '<span class="soluong">' + itemGioHang.soLuong + '</span>\n'
    html += '</div>\n'
    html += '<div class="giohang--thanhtien col-2">\n'
    html += '<p>\n'
    html += '' + dinhDangTienTe(((thongTinSanPham.giaBan * itemGioHang.soLuong)/1000).toString()) + '<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '</div>';

    return html;
}

//Hiển thị trên mobile
function hienThiDoiTuongItemDatHang_Mobile(itemGioHang) {
    var thongTinSanPham = layThongTinSanPham(itemGioHang);
    var html = '';
    html += '<div class="giohang--item">\n'
    html += '<div class="giohang--anhsp">\n'
    html += '<img src="' + thongTinSanPham.hinhAnh + '" alt="sanpham">\n'
    html += '</div>\n'
    html += '<div class="item--group1">\n'
    html += '<div class="tensp">\n'
    html += '<a href="' + thongTinSanPham.linkChiTietSanPham + '">Thức ăn hạt mềm cho chó Zenith</a>\n'
    html += '</div>\n'
    html += '<div class="giohang--dongia">\n'
    html += '<span style="float: left;">Giá:&nbsp;</span>\n'
    html += '<p>\n'
    html += '' + dinhDangTienTe((thongTinSanPham.giaBan/1000).toString()) + '<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '</div>\n'
    html += '<div class="item--group2">\n'
    html += '<div class="giohang--soluong">\n'
    html += '<span class="soluong">' + itemGioHang.soLuong + '</span>\n'
    html += '</div>\n'
    html += '<div class="giohang--thanhtien">\n'
    html += '<div>Thành tiền:</div>\n'
    html += '<p>\n'
    html += '' + dinhDangTienTe(((thongTinSanPham.giaBan * itemGioHang.soLuong)/1000).toString()) + '<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '</div>\n'
    html += '</div>';

    return html;
}

//Bước 3: Hiển thị danh sách item giỏ hàng
//Hiển thị trên Desktop
function hienThiDanhSachItemDatHang_Desktop(idGioHang) {
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_' + idGioHang));
    htmlTong = '';
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        htmlTong += hienThiDoiTuongItemDatHang_Desktop(danhSachItemGioHang[i]);
    }
    return htmlTong;
}
//Hiển thị trên Mobile
function hienThiDanhSachItemDatHang_Mobile(idGioHang) {
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_' + idGioHang));
    htmlTong = '';
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        htmlTong += hienThiDoiTuongItemDatHang_Mobile(danhSachItemGioHang[i]);
    }
    return htmlTong;
}

//--------TÍNH TỔNG GIÁ TRỊ ĐƠN HÀNG
function tinhTongGiaTriDonHang(idGioHang) {
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_' + idGioHang));
    var tongTien = 0;
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var thongTinSanPham = layThongTinSanPham(danhSachItemGioHang[i]);
        tongTien += eval(thongTinSanPham.giaBan) * eval(danhSachItemGioHang[i].soLuong);
    }
    return tongTien;
}



//Còn thiếu: form và js thay đổi thông tin đặt hàng. Lưu dữ liệu khi tiến hành đặt hàng.
//Hàm hiển thị form thay đổi thông tin đặt hàng
function hienThiFormThayDoi() {
    document.getElementById('pop-up').style.display = "block";
    var khachHang = layThongTinKhachHang();
    document.getElementById('change-hoten').value = khachHang.ho.trim() + ' ' + khachHang.ten.trim();
    document.getElementById('change-sdt').value = khachHang.sdt;
    document.getElementById('change-diachi').value = khachHang.diaChi;
}

//Hàm ẩn form thay đổi thông tin đặt hàng
function anFormThayDoi() {
    document.getElementById('pop-up').style.display = "none";
}

function thayDoiThongTinDatHang(khachHang) {
    var hoTen = document.getElementById('change-hoten').value;
    var sdt = document.getElementById('change-sdt').value;
    var diaChi = document.getElementById('change-diachi').value;



    if (kiemTraNoiDungRong(hoTen) == false && kiemTraNoiDungRong(sdt) == false && kiemTraNoiDungRong(diaChi) == false) {
        if (kiemTraSoDienThoai(sdt) == true) {
            //Desktop
            document.getElementById('hoten1').innerText = hoTen;
            document.getElementById('sdt1').innerText = sdt;
            document.getElementById('diachi1').innerText = diaChi;

            //Mobile
            document.getElementById('hoten2').innerText = hoTen;
            document.getElementById('sdt2').innerText = sdt;
            document.getElementById('diachi2').innerText = diaChi;
            anFormThayDoi();
        }
        else {
            alert('Số điện thoại bạn nhập không đúng. Vui lòng nhập lại!')
        }
    }
    else {
        alert('Bạn phải nhập đầy đủ thông tin!');
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
//Kiểm tra số điện thoại có đúng định dạng không
function kiemTraSoDienThoai(sdt) {
    var traVe = false;
    if (sdt.length == 10) {
        if (isNaN(sdt) == false) {
            traVe = true;
        }
    }
    return traVe;
}

//-------------TẠO THÔNG TIN ĐẶT HÀNG ĐƠN HÀNG-------------
function taoDonHang(idGioHang) {
    var hoTen = document.getElementById('hoten1').innerText;
    var sdt = document.getElementById('sdt1').innerText;
    var diaChi = document.getElementById('diachi1').innerText;
    var pttt = 'Thanh toán khi giao hàng';
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_' + idGioHang));
    var donHang = new Object();
    donHang.hoTen = hoTen;
    donHang.sdt = sdt;
    donHang.diaChi = diaChi;
    donHang.pttt = pttt;
    donHang.danhSachItemGioHang = danhSachItemGioHang;
    donHang.id = taoIdDonHang();

    return donHang;
}

function taoDanhSachDonHang(donHang) {
    var danhSachDonHang = JSON.parse(localStorage.getItem('danhSachDonHang'));
    if (danhSachDonHang == null) {
        danhSachDonHang = new Array();
    }
    danhSachDonHang.push(donHang);

    //Lưu danh sách đơn hàng xuống lại local storage
    localStorage.setItem('danhSachDonHang', JSON.stringify(danhSachDonHang));

}
//Xóa danh sách item trong giỏ hàng khi đã đặt hàng thành công
function xoaGioHang(idGioHang) {
    var danhSachItemGioHang = new Array();
    localStorage.setItem('danhSachItemGioHang_'+idGioHang,JSON.stringify(danhSachItemGioHang));
}


//Tạo ID đơn hàng
function taoIdDonHang() {
    var id = new Date();
    id = id.getTime();
    id = Math.random().toString().substring(3, 7) + '_' + id.toString();
    console.log(id);
    return id;
}


//Hàm định dạng tiền tệ
function dinhDangTienTe(tien){
    tien = tien.split('');
    tien = tien.reverse();
    var soDauCham;
    var dai = tien.length;
    var tienDinhDang = '';
    if(dai%3 == 0){
        soDauCham = Math.floor(dai/3) - 1;
    }
    else{
        soDauCham = Math.floor(dai/3);
    }
    for(var i= 0; i<tien.length; i++){
        if((i+1)%3 == 0 && soDauCham != 0){
            tienDinhDang += tien[i] + '.' ;
            soDauCham--;
        }
        else{
            tienDinhDang += tien[i];
        }
    }
    tienDinhDang = tienDinhDang.split('');
    tienDinhDang = tienDinhDang.reverse();
    tienDinhDang = tienDinhDang.join('');
    return tienDinhDang;
}
