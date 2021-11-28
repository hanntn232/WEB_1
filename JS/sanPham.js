
//--------------TẠO SẢN PHẨM
//Bước 1: Tạo ID cho sản phẩm
function taoID() {
    var id = '';
    //Lấy miliseconds ở thời điểm hiện tại
    id = Math.random().toString().substring(2, 10) + "_" + String(new Date().getTime());
    return id;
}


//Bước 2: Tạo đối tượng sản phẩm
function taoDoiTuongSanPham(hinhAnh, ten, danhMuc, giaGoc, giaBan, linkChiTietSanPham, id) {
    //Tạo đối tượng sản phẩm
    var sanPham = new Object();
    if (id == null) {
        sanPham.id = taoID();
    }
    else {
        sanPham.id = id;
    }
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.danhMuc = danhMuc;
    sanPham.giaGoc = giaGoc;
    sanPham.giaBan = giaBan;
    sanPham.linkChiTietSanPham = linkChiTietSanPham;

    // //Chuyển đối tượng sanPham thành JSON
    // sanPham.toJson = function () {
    //     var json = JSON.stringify(this);
    //     return json;
    // }

    // //Chuyển đối tượng JSON thành sanPham
    // sanPham.fromJson = function (json) {
    //     var sanPhamTraVe = JSON.parse(json);
    //     var sanPhamDayDu = taoDoiTuongSanPham(sanPhamTraVe.id, sanPhamTraVe.hinhAnh, sanPhamTraVe.ten, sanPhamTraVe.danhMuc, sanPhamTraVe.giaGoc, sanPhamTraVe.giaBan, sanPhamTraVe.moTa, sanPham.linkChiTietSanPham)
    //     return sanPhamTraVe;
    // }
    return sanPham;
}






//--------------HIỂN THỊ SẢN PHẨM LÊN TRANG SẢN PHẨM

//Bước 1: Chuyển đối tượng sản phẩm sang HTML
function chuyenDoiTuongSanPhamSangHTML(sanPham) {
    var html = '';
    html += '<div class="col l-2-4 m-4 c-6">\n'
    html += '<!-- Product item -->\n'
    html += '<a class="home-product-item" href="' + sanPham.linkChiTietSanPham + '" target="_self">\n'
    html += '<div class="home-product-item__img" style="background-image: url(' + sanPham.hinhAnh + ');">\n'
    html += '</div>\n'
    html += '<h4 class="home-product-item__name">' + sanPham.ten + '</h4>\n'
    html += '<div class="home-product-item__price">\n'
    html += '<span class="home-product-item__price-curent">' + sanPham.giaBan / 1000 + '.000đ</span>\n'
    html += '<span class="home-product-item__price-old">' + sanPham.giaGoc / 1000 + '.000đ</span>\n'
    html += '</div>\n'
    html += '</a>\n'
    html += '</div>';
    return html;
}

//Bước 2: Chuyển danh sách sản phẩm sang html
function chuyenDanhSachSanPhamSangHTML(danhSachSanPham) {
    var htmlTong = '';
    for (var i = 0; i < danhSachSanPham.length; i++) {
        htmlTong += chuyenDoiTuongSanPhamSangHTML(danhSachSanPham[i]);
    }
    return htmlTong;
}

//------------------------CHUYỂN TRANG SẢN PHẨM------------------------
//Hàm hiển thị sản phẩm trong từng trang
function hienThiSanPhamTheoTrang(trang, danhSachSanPham) {
    var htmlTong = '';
    var danhSachSanPham_Trang = new Array();
    var startNumber = (trang - 1) * 15;
    var endNumber = startNumber + 14;
    for (var i = startNumber; i <= endNumber; i++) {
        if (danhSachSanPham[i] != null) {
            danhSachSanPham_Trang.push(danhSachSanPham[i]);
        }
    }
    htmlTong = chuyenDanhSachSanPhamSangHTML(danhSachSanPham_Trang);
    for (i = 1; i <= 3; i++) {
        if (i != trang) {
            document.getElementById('page-' + i).style.background = '#fff';
        }
    }
    document.getElementById('page-' + trang).style.background = '#FFC700';
    return htmlTong;
}



//Hàm tạo mảng danh sách sản phẩm theo danh mục
function danhSachSanPhamTheoDanhMuc(danhMuc) {
    danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPhamTam'));
    var dsSanPhamTheoDanhMuc = new Array();
    for (var i = 0; i < danhSachSanPham.length; i++) {
        if (danhSachSanPham[i].danhMuc == danhMuc) {
            dsSanPhamTheoDanhMuc.push(danhSachSanPham[i]);
        }
    }
    return dsSanPhamTheoDanhMuc;
}

//Sắp xếp sản phẩm giá tăng dần
function sapXepGiaTangDan(danhSachSanPham) {
    var danhSachSanPhamGiaTangDan = new Array();
    var mangGiaTangDan = new Array();
    for (var i = 0; i < danhSachSanPham.length; i++) {
        mangGiaTangDan.push(danhSachSanPham[i].giaBan);
    }
    mangGiaTangDan.sort(function (a, b) { return a - b });
    for (var i = 0; i < mangGiaTangDan.length; i++) {
        for (var j = 0; j < mangGiaTangDan.length; j++) {
            if (danhSachSanPham[j] != null) {
                if (danhSachSanPham[j].giaBan == mangGiaTangDan[i]) {
                    danhSachSanPhamGiaTangDan.push(danhSachSanPham[j]);
                    danhSachSanPham.splice(j, 1);
                    break;
                }
            }
        }
    }
    return danhSachSanPhamGiaTangDan;
}

//Sắp xếp sản phẩm giá giảm dần
function sapXepGiaGiamDan(danhSachSanPham) {
    var danhSachSanPhamGiaGiamDan = new Array();
    var mangGiaGiamDan = new Array();
    for (var i = 0; i < danhSachSanPham.length; i++) {
        mangGiaGiamDan.push(danhSachSanPham[i].giaBan);
    }
    mangGiaGiamDan.sort(function (a, b) { return b - a });
    for (var i = 0; i < mangGiaGiamDan.length; i++) {
        for (var j = 0; j < mangGiaGiamDan.length; j++) {
            if (danhSachSanPham[j] != null) {
                if (danhSachSanPham[j].giaBan == mangGiaGiamDan[i]) {
                    danhSachSanPhamGiaGiamDan.push(danhSachSanPham[j]);
                    danhSachSanPham.splice(j, 1);
                    break;
                }
            }
        }
    }
    return danhSachSanPhamGiaGiamDan;
}



//-----------CHUYỂN TRANG MOBILE
//Hàm đếm số lần lặp lại của chuỗi home-product-item__name trong html (cho biết có bao nhiêu sản phẩm hiện đang hiển thị)
function demSoSanPhamHienThi(chuoiHTML) {
    var soLanXuatHien = (chuoiHTML.match(/home-product-item__name/g)).length;
    return soLanXuatHien;
}

function xemThem() {
    var htmlDanhSachSanPham = document.getElementById('dsSanPham2').innerHTML;
    var soLanXuatHien = demSoSanPhamHienThi(htmlDanhSachSanPham)
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPhamTam'));
    if (soLanXuatHien < danhSachSanPham.length) {
        var trangHienTai = Math.floor(soLanXuatHien / 15);
        htmlDanhSachSanPham += hienThiSanPhamTheoTrang(trangHienTai + 1, danhSachSanPham);
        document.getElementById('dsSanPham2').innerHTML = htmlDanhSachSanPham;
        if (Math.floor((danhSachSanPham.length - soLanXuatHien) / 15) <= 1) {
            document.getElementById('xemthem').style.display = "none";
        }
    }
    else {
        document.getElementById('xemthem').style.display = "none";
    }
}
function kiemTraXemThem(danhSachSanPham) {
    if (window.matchMedia('(max-device-width: 739px)').matches) {
        var htmlDanhSachSanPham = document.getElementById('dsSanPham2').innerHTML;
        var soLanXuatHien = demSoSanPhamHienThi(htmlDanhSachSanPham)
        if (soLanXuatHien == danhSachSanPham.length) {
            document.getElementById('xemthem').style.display = "none";
        }
        else {
            document.getElementById('xemthem').style.display = "block";
        }
    }
}


//-------------------CSS nav mobile-----------------
function removeChecked() {
    var nav_mobile_input = document.getElementById('nav-mobile-input');
    nav_mobile_input.checked = false;
};


