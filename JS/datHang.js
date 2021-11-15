//-----------HIỂN THỊ THÔNG TIN KHÁCH HÀNG--------------
//Bước 1: Lấy thông tin khách hàng
function layThongTinKhachHang(){
    var khachHang = new Object();
    khachHang = JSON.parse(localStorage.getItem('phienDangNhap'));
    return khachHang;
}

//Bước 2: hiển thị thông tin khách hàng
//Hiển thị trên desktop
function hienThiThongTinKhachHang_Desktop(khachHang){
    var html = '';
    html += '<div class="col-9">\n'
    html += '<div id="hoten">Họ tên: <span>'+ khachHang.ho +' '+ khachHang.ten +'</span></div>\n'
    html += '<div id="sdt">Số điện thoại: <span>'+ khachHang.sdt +'</span></div>\n'
    html += '<div id="diachi">Địa chỉ: <span>'+ khachHang.diaChi +'</span></div>\n'
    html += '<div id="pttt">Phương thức thanh toán: <span>Thanh toán khi giao hàng</span></div>\n'
    html += '</div>\n'
    html += '<div class="col-3 btn--thaydoi">\n'
    html += '<div class="col-12">\n'
    html += '<button>Thay đổi</button>\n'
    html += '</div>\n'
    html += '</div>';
    return html;
}
//Hiển thị trên mobile
function hienThiThongTinKhachHang_Mobile(khachHang){
    var html = '';
    html += '<div class="col-12">\n'
    html += '<div id="hoten">'+ khachHang.ho +' '+ khachHang.ten +'</span></div>\n'
    html += '<div id="sdt">Số điện thoại: <span>'+ khachHang.sdt +'</span></div>\n'
    html += '<div id="diachi">Địa chỉ: <span>'+ khachHang.diaChi +'</span></div>\n'
    html += '<div id="pttt">Phương thức thanh toán: <span>Thanh toán khi giao hàng</span></div>\n'
    html += '</div>\n'
    html += '<div class="col-12 btn--thaydoi">\n'
    html += '<div class="col-12">\n'
    html += '<button>Thay đổi</button>\n'
    html += '</div>\n'
    html += '</div>';
}


//----------------HIỂN THỊ THÔNG TIN GIỎ HÀNG-------------------
//Bước 1: Tạo chức năng lấy thông tin sản phẩm từ idSanPham của itemGioHang
function layThongTinSanPham(itemGioHang){
    var thongTinSanPham = new Object();
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));
    for(var i=0; i<danhSachSanPham.length; i++){
        if(itemGioHang.idSanPham == danhSachSanPham[i].id){
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
function hienThiDoiTuongItemDatHang_Desktop(itemGioHang){
    var thongTinSanPham = layThongTinSanPham(itemGioHang);
    var html = '';
    html += '<div class="giohang--anhsp col-2">\n'
    html += '<img src="'+ thongTinSanPham.hinhAnh +'" alt="sanpham">\n'
    html += '</div>\n'
    html += '<div class="tensp col-4">\n'
    html += '<a href="' + thongTinSanPham.linkChiTietSanPham + '">' + thongTinSanPham.ten + '</a><br>\n'
    html += '</div>\n'
    html += '<div class="giohang--dongia col-2">\n'
    html += '<p>\n'
    html += ''+ thongTinSanPham.giaBan/1000 + '<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '<div class="giohang--soluong col-2">\n'
    html += '\n'
    html += '<span class="soluong">'+ itemGioHang.soLuong +'</span>\n'
    html += '</div>\n'
    html += '<div class="giohang--thanhtien col-2">\n'
    html += '<p>\n'
    html += ''+ (thongTinSanPham.giaBan*itemGioHang.soLuong)/1000 +'<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>';

    return html;
}

//Hiển thị trên mobile
function hienThiDoiTuongItemDatHang_Mobile(itemGioHang){
    var thongTinSanPham = layThongTinSanPham(itemGioHang);
    var html = '';
    html += '<div class="giohang--anhsp">\n'
    html += '<img src="'+ thongTinSanPham.hinhAnh +'" alt="sanpham">\n'
    html += '</div>\n'
    html += '<div class="item--group1">\n'
    html += '<div class="tensp">\n'
    html += '<a href="'+ thongTinSanPham.linkChiTietSanPham + '">Thức ăn hạt mềm cho chó Zenith</a>\n'
    html += '</div>\n'
    html += '<div class="giohang--dongia">\n'
    html += '<span style="float: left;">Giá:&nbsp;</span>\n'
    html += '<p>\n'
    html += '' + thongTinSanPham.giaBan/1000 + '<span>.000 đ</span>\n'
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
    html += ''+(thongTinSanPham.giaBan*itemGioHang.soLuong)/1000+'<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '</div>';

    return html;
}

//Bước 3: Hiển thị danh sách item giỏ hàng
//Hiển thị trên Desktop
function hienThiDanhSachItemDatHang_Desktop(idGioHang){
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_'+idGioHang));
    htmlTong = '';
    for(var i=0; i<danhSachItemGioHang.length; i++){
        html += hienThiDoiTuongItemDatHang_Desktop(danhSachItemGioHang[i]);
    }
    return htmlTong;
}
//Hiển thị trên Mobile
function hienThiDanhSachItemDatHang_Mobile(idGioHang){
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_'+idGioHang));
    htmlTong = '';
    for(var i=0; i<danhSachItemGioHang.length; i++){
        html += hienThiDoiTuongItemDatHang_Mobile(danhSachItemGioHang[i]);
    }
    return htmlTong;
}

//Còn thiếu: form và js thay đổi thông tin đặt hàng. Lưu dữ liệu khi tiến hành đặt hàng.