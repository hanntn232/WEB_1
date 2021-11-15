//LẤY ID GIỎ HÀNG CỦA KHÁCH HÀNG
/*Hướng thực hiện: 
- Khi khách hàng đăng nhập vào hệ thống thì trong local storage sẽ tạo thêm 1 biến phienDangNhap
- Biến phienDangNhap sẽ lấy tất cả thông tin khách hàng từ danhSachKhachHang
- Biến phienDangNhap sẽ được dùng để load các giao diện thuộc về chính khách hàng này
- Sau khi khách hàng bấm đăng xuất thì key phienDangNhap sẽ được xóa khỏi local storage
*/



/*Cần viết hàm taoPhienDangNhap tại js Đăng nhập
- Input: sđt hoặc email và mật khẩu
- Output: 1 object khách hàng được lưu trữ trong phiên đăng nhập */
function taoPhienDangNhap(taiKhoan, matKhau){
    var khachHang = new Object();
    khachHang.taiKhoan = taiKhoan;
    khachHang.matKhau = matKhau;
    var danhSachKhachHang = JSON.parse(localStorage.getItem('danhSachKhachHang'));
    for(var i=0;i < danhSachKhachHang.length; i++){
        if(khachHang.taiKhoan == danhSachKhachHang[i].taiKhoan && khachHang.matKhau == danhSachKhachHang[i].matKhau)
        {
            khachHang.ho = danhSachKhachHang[i].ho;
            khachHang.ten = danhSachKhachHang[i].ten;
            khachHang.diaChi = danhSachKhachHang[i].diaChi;
            khachHang.sdt = danhSachKhachHang[i].sdt;
            khachHang.email = danhSachKhachHang[i].email;
            khachHang.id = danhSachKhachHang[i].id;
            break;
        }
    }
    localStorage.setItem('phienDangNhap',khachHang);
}


function layIdGioHang(){
    var idGioHang;
    var  thongTinKhachHang = JSON.parse(localStorage.getItem('phienDangNhap'));
    idGioHang = thongTinKhachHang.id ; //id giỏ hàng = id khách hàng
    return idGioHang;
}



//--------------------------------
//TẠO ĐỐI TƯỢNG GIỎ HÀNG
//Bước 1: Tạo đối tượng item giỏ hàng
function taoDoiTuongItemGioHang(idGioHang,idSanPham,soLuong){
    var itemGioHang = new Object();
    itemGioHang.idGioHang = idGioHang;
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}


//Bước 2: Lấy danh sách item giỏ hàng từ local storage
function layDanhSachItemGioHang(idGioHang){
    var danhSachItemGioHang = new Array();
    var jsonDanhSachItemGioHang = localStorage.getItem('danhSachItemGioHang_'+idGioHang);
    if(jsonDanhSachItemGioHang != null){
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGioHang;
}

//Bước 3: Thêm sản phẩm vào giỏ hàng
function themSanPhamVaoGioHang(itemGioHang){
    //Lấy danh sách item giỏ hàng từ local storage
    var danhSachItemGioHang = layDanhSachItemGioHang(itemGioHang.idGioHang);

    //Xét xem item được thêm vào có tồn tại trong giỏ hàng hay chưa. Nếu có thì tăng số lượng, không có thì thêm item mới vào danhSachGioHang
    var coTonTaiTrongGioHang = false;
    for(var i=0; i<danhSachItemGioHang.length; i++){
        if(itemGioHang.idSanPham == danhSachItemGioHang[i].idSanPham){
            coTonTaiTrongGioHang = true;
            danhSachItemGioHang[i].soLuong += 1;
            break;
        }
    }
    if(coTonTaiTrongGioHang == false){
        danhSachItemGioHang.push(itemGioHang);
    }

    //Lưu danh sách item giỏ hàng vào local storage
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem('danhSachItemGioHang_'+itemGioHang.idGioHang,jsonDanhSachItemGioHang);
}




//----------HIỂN THỊ DANH SÁCH ITEM GIỎ HÀNG----------------
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
function hienThiDoiTuongItemGioHang_Desktop(itemGioHang){
    var thongTinSanPham = layThongTinSanPham(itemGioHang);
    var html = '';
    html += '<div class="giohang--item">\n'
    html += '<div class="giohang--anhsp col-2">\n'
    html += '<img src="' + thongTinSanPham.hinhAnh + '" alt="sanpham">\n'
    html += '</div>\n'
    html += '<div class="tensp col-3">\n'
    html += '<a href="'+ thongTinSanPham.linkChiTietSanPham + '">' + thongTinSanPham.ten + '</a><br>\n'
    html += '</div>\n'
    html += '<div class="giohang--dongia col-2">\n'
    html += '<p>\n'
    html += ''+ thongTinSanPham.giaBan/1000 +'<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '<div class="giohang--soluong col-2">\n'
    html += '\n'
    html += '<button class="fas fa-minus btn-giam" onclick="giamSoLuong('+ itemGioHang +')"></button>\n'
    html += '<span class="soluong">' + itemGioHang.soLuong + '</span>\n'
    html += '<button class="fas fa-plus btn-tang" onclick="tangSoLuong('+ itemGioHang +')"></button>\n'
    html += '</div>\n'
    html += '<div class="giohang--thanhtien col-2">\n'
    html += '<p>\n'
    html += ''+ (thongTinSanPham.giaBan*itemGioHang.soLuong)/1000 +'<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '<div class="giohang--xoa col-1">\n'
    html += '<button class="far fa-trash-alt btn-xoa" onclick="xoaItem('+ itemGioHang +')" ></button>\n'
    html += '</div>\n'
    html += '</div>';

    return html;
}

//Hiển thị trên mobile
function hienThiDoiTuongItemGioHang_Mobile(itemGioHang){
    var thongTinSanPham = layThongTinSanPham(itemGioHang);
    var html = '';
    html += '<div class="giohang--item">\n'
    html += '<div class="giohang--anhsp">\n'
    html += '<img src="'+ thongTinSanPham.hinhAnh +'" alt="sanpham">\n'
    html += '</div>\n'
    html += '<div class="item--group1">\n'
    html += '<div class="tensp">\n'
    html += '<a href="'+ thongTinSanPham.linkChiTietSanPham +'">'+ thongTinSanPham.ten +'</a>\n'
    html += '</div>\n'
    html += '<div class="giohang--dongia">\n'
    html += '<span style="float: left;">Giá:&nbsp;</span>\n'
    html += '<p>\n'
    html += ''+ thongTinSanPham.giaBan/1000 +'<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '</div>\n'
    html += '<div class="item--group2">\n'
    html += '<div class="giohang--soluong">\n'
    html += '<button class="fas fa-minus btn-giam" onclick="giamSoLuong('+ itemGioHang +')"></button>\n'
    html += '<span class="soluong">'+ itemGioHang.soLuong +'</span>\n'
    html += '<button class="fas fa-plus btn-tang" onclick="tangSoLuong('+ itemGioHang +')"></button>\n'
    html += '</div>\n'
    html += '<div class="giohang--thanhtien">\n'
    html += '<div>Thành tiền:</div>\n'
    html += '<p>\n'
    html += ''+ (thongTinSanPham.giaBan*itemGioHang.soLuong)/1000+'<span>.000 đ</span>\n'
    html += '</p>\n'
    html += '</div>\n'
    html += '<div class="giohang--xoa">\n'
    html += '<button class="btn-xoa" onclick="xoaItem('+ itemGioHang +')" >Xóa</button>\n'
    html += '</div>\n'
    html += '</div>\n'
    html += '</div>';

    return html;
}

//Bước 3: Hiển thị danh sách item giỏ hàng
//Hiển thị trên Desktop
function hienThiDanhSachItemGioHang_Desktop(idGioHang){
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_'+idGioHang));
    htmlTong = '';
    for(var i=0; i<danhSachItemGioHang.length; i++){
        html += hienThiDoiTuongItemGioHang_Desktop(danhSachItemGioHang[i]);
    }
    return htmlTong;
}
//Hiển thị trên Mobile
function hienThiDanhSachItemGioHang_Mobile(idGioHang){
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_'+idGioHang));
    htmlTong = '';
    for(var i=0; i<danhSachItemGioHang.length; i++){
        html += hienThiDoiTuongItemGioHang_Mobile(danhSachItemGioHang[i]);
    }
    return htmlTong;
}



//----------XÓA ITEM RA KHỎI GIỎ HÀNG----------------
function xoaItem(itemGioHang){
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_'+itemGioHang.idGioHang));
    for(var i=0; i<danhSachItemGioHang.length; i++){
        if(itemGioHang.idSanPham == danhSachItemGioHang[i].idSanPham)
        {
            danhSachItemGioHang.splice(i,1);
        }
    }
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    //Lưu lại danh sách Item sản phẩm xuống local storage
    localStorage.setItem('danhSachItemGioHang_'+ itemGioHang.idGioHang);
    document.getElementById('giohang1').innerHTML = hienThiDoiTuongItemGioHang_Desktop(itemGioHang);
    document.getElementById('giohang2').innerHTML = hienThiDoiTuongItemGioHang_Mobile(itemGioHang);
}


//-----------TĂNG SỐ LƯỢNG SẢN PHẨM ITEM TRONG GIỎ HÀNG
function tangSoLuong(itemGioHang){
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_'+itemGioHang.idGioHang));
    for(var i=0; i<danhSachItemGioHang.length; i++){
        if(itemGioHang.idSanPham == danhSachItemGioHang[i].idSanPham)
        {
            danhSachSanPham[i].soLuong++;
            break;
        }
    }
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    //Lưu lại danh sách Item sản phẩm xuống local storage
    localStorage.setItem('danhSachItemGioHang_'+ itemGioHang.idGioHang);
    document.getElementById('giohang1').innerHTML = hienThiDanhSachItemGioHang_Desktop(itemGioHang.idGioHang);
    document.getElementById('giohang2').innerHTML = hienThiDanhSachItemGioHang_Mobile(itemGioHang.idGioHang);
}



//-----------GIẢM SỐ LƯỢNG SẢN PHẨM ITEM TRONG GIỎ HÀNG
function giamSoLuong(itemGioHang){
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang_'+itemGioHang.idGioHang));
    for(var i=0; i<danhSachItemGioHang.length; i++){
        if(itemGioHang.idSanPham == danhSachItemGioHang[i].idSanPham)
        {
            danhSachSanPham[i].soLuong--;
            break;
        }
    }
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    //Lưu lại danh sách Item sản phẩm xuống local storage
    localStorage.setItem('danhSachItemGioHang_'+ itemGioHang.idGioHang);
    document.getElementById('giohang1').innerHTML = hienThiDanhSachItemGioHang_Desktop(itemGioHang.idGioHang);
    document.getElementById('giohang2').innerHTML = hienThiDanhSachItemGioHang_Mobile(itemGioHang.idGioHang);
}


//------------------TÍNH TỔNG GIÁ TRỊ ĐƠN HÀNG------------------
function tinhTongGiaTriDonHang(idGioHang){
    var danhSachItemGioHang = JSON.parse(localStorage.getItem('danhSachItemGioHang-'+idGioHang));
    var tongTien = 0;
    for(var i=0; i<danhSachItemGioHang.length; i++){
        tongTien+= danhSachItemGioHang[i].giaBan*danhSachItemGioHang[i]*soLuong;
    }
    return tongTien;
}






