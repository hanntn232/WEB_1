 function taoDanhSachSanPham(){

 //Tạo danh sách sản phẩm
danhSachSanPham = localStorage.getItem('danhSachSanPham');
 if(danhSachSanPham == null){
    danhSachSanPham = new Array();
     //Tạo đối tượng sản phẩm 1
 var sanPham1 = taoDoiTuongSanPham(
    'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/sua-bot-cho-meo-dr-kyan-precaten-anh.jpg?v=1626752115000',
    'Sữa bột cho mèo 110g Dr.Kyan Precaten',
    'Thức ăn cho mèo',
    590000,
    500000,'../HTML_Chitiet_sanpham/Detail1.html','29755420_1636817383654')

//Thêm sản phẩm 1 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham1);

// ----------------------------------
//Tạo đối tượng sản phẩm 2
var sanPham2 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/71.png?v=1626751368000',
   'Nước rửa khóe mắt chó mèo Precaten',
   'Phụ kiện cho mèo',
   230000,
   190000,'../HTML_Chitiet_sanpham/Detail2.html','74442428_1636817383654')

//Thêm sản phẩm 2 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham2);

// ----------------------------------
//Tạo đối tượng sản phẩm 3
var sanPham3 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/66.png?v=1626751038000',
   'Canxi Phốt Pho - hỗ trợ điều trị cho thú cưng',
   'Thức ăn cho chó',
   399000,
   276000,'../HTML_Chitiet_sanpham/Detail3.html','31158122_1636817383654')

//Thêm sản phẩm 3 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham3);

// ----------------------------------
//Tạo đối tượng sản phẩm 4
var sanPham4 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/e5a3a39b1cb341d617e54a6ae733a9e8.jpg?v=1626748714000',
   'Bát inox chống trượt cho chó mèo',
   'Phụ kiện cho chó',
   99000,
   50000,'../HTML_Chitiet_sanpham/Detail4.html','40656836_1636817383654')

//Thêm sản phẩm 4 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham4);

// ----------------------------------
//Tạo đối tượng sản phẩm 5
var sanPham5 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/bat-an-doi-khuc-xuong-4-min-050c28df86f94f10b0cb0bd446a7ce81.jpg?v=1626748007000',
   'Bát Ăn Đôi Nhựa Hình Xương Cho Thú Cưng',
   'Phụ kiện cho mèo',
   69000,
   39000,'../HTML_Chitiet_sanpham/Detail5.html','94558606_1636817383654')

//Thêm sản phẩm 5 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham5);

// ----------------------------------
//Tạo đối tượng sản phẩm 6
var sanPham6 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/62.png?v=1626747381000',
   'Bình trữ thức ăn tự động cho thú cưng 1,6L',
   'Phụ kiện cho mèo',
   210000,
   110000,'../HTML_Chitiet_sanpham/Detail6.html','53540755_1636817383654')

//Thêm sản phẩm 6 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham6);

// ----------------------------------
//Tạo đối tượng sản phẩm 7
var sanPham7 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/4760-bnhtreochungvt500ml2.jpg?v=1626746921000',
   'Bình treo chuồng vát Catchy 500ml',
   'Phụ kiện cho mèo',
   169000,
   119000,'../HTML_Chitiet_sanpham/Detail7.html','75666066_1636817383654')

//Thêm sản phẩm 7 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham7);

// ----------------------------------
//Tạo đối tượng sản phẩm 8
var sanPham8 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/tb2iokzgaowbunjssppxxxpgpxa-829197117.jpg?v=1626745922000',
   'Balo vận chuyển chó mèo Phi hành',
   'Phụ kiện cho chó',
   579000,
   390000,'../HTML_Chitiet_sanpham/Detail8.html','63540922_1636817383654')

//Thêm sản phẩm 8 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham8);

// ----------------------------------
//Tạo đối tượng sản phẩm 9
var sanPham9 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/57.png?v=1626745352000',
   'Gel sạch răng Tropiclean FB Clean Teeth Gel',
   'Phụ kiện cho chó',
   70000,
   55000,'../HTML_Chitiet_sanpham/Detail9.html','19042984_1636817383654')

//Thêm sản phẩm 9 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham9);

// ----------------------------------
//Tạo đối tượng sản phẩm 10
var sanPham10 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/52.png?v=1626693016000',
   'Sữa tắm cho chó lông trắng SPIRIT White Dog',
   'Phụ kiện cho chó',
   200000,
   150000,'../HTML_Chitiet_sanpham/Detail10.html','41808104_1636817383654')

//Thêm sản phẩm 10 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham10);

// ----------------------------------
//Tạo đối tượng sản phẩm 11
var sanPham11 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/5abd36eb09d04459b9d76a6cf928691b.jpg?v=1626691738000',
   'Đồ chơi cho mèo PAW Happy Pet Circle 3 tầng',
   'Phụ kiện cho mèo',
   200000,
   160000,'../HTML_Chitiet_sanpham/Detail11.html','24157075_1636817383654')

//Thêm sản phẩm 11 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham11);

// ----------------------------------
//Tạo đối tượng sản phẩm 12
var sanPham12 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/47.png?v=1626690187000',
   'Đồ chơi bóng chuông cao su Bobo',
   'Phụ kiện cho mèo',
   80000,
   49000,'../HTML_Chitiet_sanpham/Detail12.html','89552100_1636817383654')

//Thêm sản phẩm 12 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham12);

// ----------------------------------
//Tạo đối tượng sản phẩm 13
var sanPham13 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/05583270-b388ea5bc900484dacba780e87b5346b-33ccbdf4da8945aeaab4acdc49b46ba6-master.jpg?v=1626689257000',
   'Xương gặm tự nhiên vị gà Ferplast Goodbite',
   'Thức ăn cho chó',
   90000,
   63000,'../HTML_Chitiet_sanpham/Detail13.html','45741375_1636817383654')

//Thêm sản phẩm 13 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham13);

// ----------------------------------
//Tạo đối tượng sản phẩm 14
var sanPham14 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/sua-bot-cho-cho-dr-kyan-predogen-anh.jpg?v=1626688425000',
   'Sữa bột cho chó Dr.Kyan Predogen',
   'Thức ăn cho chó',
   349000,
   250000,'../HTML_Chitiet_sanpham/Detail14.html','91502243_1636817383654')

//Thêm sản phẩm 14 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham14);

// ----------------------------------
//Tạo đối tượng sản phẩm 15
var sanPham15 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/40.png?v=1626498176000',
   'Thức ăn cho mèo Royal Canin Hairball Care',
   'Thức ăn cho mèo',
   599000,
   500000,'../HTML_Chitiet_sanpham/Detail15.html','99312894_1636817383654')

//Thêm sản phẩm 15 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham15);

// ----------------------------------
//Tạo đối tượng sản phẩm 16
var sanPham16 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/34.png?v=1626497121000',
   'Thức ăn hạt khô cho mèo MININO',
   'Thức ăn cho mèo',
   229000,
   179000,'../HTML_Chitiet_sanpham/Detail16.html','22307660_1636817383654')

//Thêm sản phẩm 16 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham16);

// ----------------------------------
//Tạo đối tượng sản phẩm 17
var sanPham17 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/28.png?v=1626494522000',
   'Thức ăn cao cấp dành cho chó FIBs',
   'Thức ăn cho chó',
   299000,
   199000,'../HTML_Chitiet_sanpham/Detail17.html','40098126_1636817383654')

//Thêm sản phẩm 17 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham17);

// ----------------------------------
//Tạo đối tượng sản phẩm 18
var sanPham18 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/27.png?v=1626491817000',
   'Thức ăn cho chó mọi lứa tuổi Freshtrino Doca Dog',
   'Thức ăn cho chó',
   249000,
   169000,'../HTML_Chitiet_sanpham/Detail18.html','67408775_1636817383655')

//Thêm sản phẩm 18 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham18);

// ----------------------------------
//Tạo đối tượng sản phẩm 19
var sanPham19 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/26.png?v=1626490790000',
   'Thức ăn hạt dành cho mèo Whiskat',
   'Thức ăn cho mèo',
   319000,
   189000,'../HTML_Chitiet_sanpham/Detail19.html','19929766_1636817383655')

//Thêm sản phẩm 19 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham19);

// ----------------------------------
//Tạo đối tượng sản phẩm 20
var sanPham20 = taoDoiTuongSanPham(
   'https://bizweb.dktcdn.net/thumb/large/100/432/370/products/18.png?v=1626488836000',
   'Thức Ăn Khô Cho Chó Con Smart Heart Gold',
   'Thức ăn cho chó',
   399000,
   310000,'../HTML_Chitiet_sanpham/Detail20.html','24962015_1636817383655')

//Thêm sản phẩm 20 vào danh sách sản phẩm trước đó
danhSachSanPham.push(sanPham20);

// ------------------------------------------------------------------------
//Cập nhật sản phẩm xuống local storage
var jsonDanhSachSanPham = JSON.stringify(danhSachSanPham);
localStorage.setItem('danhSachSanPham',jsonDanhSachSanPham)
 }
}