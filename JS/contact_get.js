//khai báo key
var nhanPhanHoi = localStorage.getItem('nhanPhanHoi');
if (nhanPhanHoi == null) {
	jsonThongTin = new Array();
}
else {
    var jsonThongTin = JSON.parse(nhanPhanHoi);
}
var btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click',layThongTin);
function layThongTin() {
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
	localStorage.setItem('nhanPhanHoi',JSON.stringify(jsonThongTin));
    alert('Gửi thông tin thành công!');
}






// function saveInfo(){
//     let name = document.getElementById('name');
//     let phone = document.getElementById('phone');
//     let email = document.getElementById('email');
//     let content = document.getElementById('content');
//     let thongTin = localStorage.getItem('thongTin');
//     thongTin.push({
//         name: name,
//         phone:phone,
//         email:email,
//         content:content,
//     });
//     localStorage.setItem('thongTin', JSON.stringify('thongTin'));
//     this.getInfo();
// }

// function getInfo(){
//     let thongTin = localStorage.getItem('thongTin');
//     let listTable = `<tr>
//     <td>${name}</td>
//     <td>${phone}</td>
//     <td>${email}</td>
//     <td>${content}</td>
// </tr>`;
// }




// // function getContact(){
// //     const info = new URLSearchParams(window.location.search);
// //     return info;
// // }
// // var name = getContact().get("hoten");
// // var phonenum = getContact().get("phonenumber");
// // var gmail= getContact().get("mail");
// // var nd= getContact().get("noidung");

// function submitForm(e) {
//     e.preventDefault();
//     //get input values
//     let name = document.querySelector(".name").value;
//     let email = document.querySelector(".mail").value;
//     let message = document.querySelector(".noidung").value;

//     saveContactInfo(name, email, message);

//     document.querySelector(".Contact").reset();
//     sendEmail(name, email, message);
// }
// function saveContactInfo(name, email, message){
//     let newContactInfo = contactinfo.push();
//     newContactInfo.set({
//         name: name,
//         email: email,
//         message: noidung,
//     });
//     retrieveInfos();
// }
// // Retrieve Infos
// function retrieveInfos(){
//     let ref = firebase.database().ref("infos");
//     ref.on("value", gotData);
// }
// function gotData(data){
//     let info = data.val();
//     let keys = Objects.keys(info);
//     for (let i =0; i< keys.length; i++){
//         let infoData = keys[i];
//         let name = info[infoData].name;
//         let email = info[infoData].email;
//         let message = info[infoData].message;
//         console.log(name, email, message);
//         let infoResults = document.querySelector(".infoResults");
//         infoResults.innerHTML += `<div>
//         <p><strong>Name: <strong/>${name} <br>
//         <a><strong>Email: <strong/>${email}</a> <br>
//         <a><strong>Message: <strong/>${message}</a>
//         </p>
//         </div>`;
//     }
//     retrieveInfos();
// }

// //send email info
// function sendEmail(name, email, message){
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: 'sunpet1511@gmail.com',
//         Password: "123456",
//         To: 'sunpet1511@gmail.com',
//         From: 'sunpet1511@gmail.com',
//         Subject: `${name} sent you a message`,
//         Body: `Name: ${name} <br> Email: ${gmail} <br> Message: ${nd}`,
//     }).then((message) => alert("successfullyj"))
// }