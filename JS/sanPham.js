
//--------------TẠO SẢN PHẨM
//Bước 1: Tạo ID cho sản phẩm
function taoID(){
    var id = '';
    //Lấy miliseconds ở thời điểm hiện tại
    id = Math.random().toString().substring(2,10) +"_" + String(new Date().getTime());
    return id;
}


//Bước 2: Tạo đối tượng sản phẩm
function taoDoiTuongSanPham(hinhAnh, ten,danhMuc, giaGoc, giaBan,linkChiTietSanPham,id){
    //Tạo đối tượng sản phẩm
    var sanPham = new Object();
    if(id == null){
        sanPham.id = taoID();
    }
    else{
        sanPham.id = id;
    }
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.danhMuc = danhMuc;
    sanPham.giaGoc = giaGoc;
    sanPham.giaBan = giaBan;
    sanPham.linkChiTietSanPham = linkChiTietSanPham;

    //Chuyển đối tượng sanPham thành JSON
    sanPham.toJson = function(){
        var json = JSON.stringify(this);
        return json;
    }

    //Chuyển đối tượng JSON thành sanPham
    sanPham.fromJson = function(json){
        var sanPhamTraVe = JSON.parse(json);
        var sanPhamDayDu = taoDoiTuongSanPham(sanPhamTraVe.id, sanPhamTraVe.hinhAnh, sanPhamTraVe.ten, sanPhamTraVe.danhMuc,sanPhamTraVe.giaGoc, sanPhamTraVe.giaBan, sanPhamTraVe.moTa)       
        return sanPhamTraVe;
    }
    return sanPham;
}






 //--------------HIỂN THỊ SẢN PHẨM LÊN TRANG SẢN PHẨM

//Bước 1: Chuyển đối tượng sản phẩm sang HTML
function chuyenDoiTuongSanPhamSangHTML(sanPham){
    var html = '';
    html += '<div class="col l-2-4 m-4 c-6">\n'
    html += '<!-- Product item -->\n' 
    html += '<a class="home-product-item" href="' + sanPham.linkChiTietSanPham + '" target="_self">\n'
    html += '<div class="home-product-item__img" style="background-image: url(' + sanPham.hinhAnh + ');">\n'
    html += '</div>\n'
    html += '<h4 class="home-product-item__name">' + sanPham.ten + '</h4>\n'
    html += '<div class="home-product-item__price">\n'
    html += '<span class="home-product-item__price-curent">' + sanPham.giaBan/1000+ '.000đ</span>\n'
    html += '<span class="home-product-item__price-old">'+ sanPham.giaGoc/1000+'.000đ</span>\n'
    html += '</div>\n'
    html += '</a>\n'
    html += '</div>';
    return html;
}

//Bước 2: Chuyển danh sách sản phẩm sang html
function chuyenDanhSachSanPhamSangHTML(danhSachSanPham){
    var htmlTong = '';
    for(var i=0; i<danhSachSanPham.length; i++){
        htmlTong += chuyenDoiTuongSanPhamSangHTML(danhSachSanPham[i]);
    }
    return htmlTong;
}

