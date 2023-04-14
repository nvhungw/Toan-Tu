// bai tap ve bien
// bai tap ve toan tu
// bai tap ve cac ham co ban
// bai tap nhap thong tin vaf hien thi ra man hinh
// alert, prompt, confirm;
// cac dat ten cac bien
// nguyen tac dat ten
// hang so
// kieu du lieu
// toan tu
// ' " `

// let age = 24; // ô nhớ: địa chỉ: abc, value= 24
// console.log(age); // chương trình sẽ vào địa chỉ abc => lấy
// // tinh chu vi hinh tron nhap chu vi tu ban phim
// // chu vi =  2 * R * PI

// const PI = 3.14; //Khai báo Hằng
// // let radius = prompt('Nhap ban kinh hinh tron');
// console.log(radius);
// let c = 2 * radius * PI;
// console.log(c);

// let c = 2
// let mess = `Chu vi la ${c} m`;
// console.log(mess);

// - Số lượt chơi
// - Số lượt chơi còn lại
// - Số điểm
// - Chiều dài bắt đầu
// - Chiều dài tối đa
// - Chiều dài khi ăn 1 điểm
// - Kích thước của màn hình chơi
// - Vị trí bắt đầu
// - Vị trí tọa độ điểm ăn
// - Các nút di chuyển (4 nút có dữ liệu dưới dạng số)

// const BEGIN_NUMBER = 5;
// let playNumber = BEGIN_NUMBER - 1;
// let scores = 0;
// const BEGIN_LENGTH = 3;
// const END_LENGTH = 30;
// let length = BEGIN_LENGTH;
// length = length + 1;
// const SIZE = 50;
// const POSITIONSNAKEX = 100;
// const POSITIONSNAKEY = 100;
// let scoresPositionX = 200;
// let scoresPositionY = 200;
// const LEFT = 4;
// const RIGHT = 6;
// const UP = 8;
// const DOWN = 2;


// const ONE_HUNDRED_PERCENT = 100;
// let bankName = prompt('Nhap ten ngan hang:');
// let bankPercent = prompt('Nhap lai suat:');

// let year = prompt('Nhap so nam:');
// let money = prompt('Nhap so tien:');

// let moneyInOneYear = money * (bankPercent / ONE_HUNDRED_PERCENT);
// let interestMoney = year * moneyInOneYear;
// let total = Number(money) + Number(interestMoney);
// let message = `
// <h1>Ung Dung Tinh Lai suat cua ngan hang: ${bankName}</h1>
// <pre>
// So Nam Gui: ${year}
// Lai suat:${bankPercent} %
// Sau ${year} nam tien lai: ${interestMoney}
// So tien goc va lai sau ${year} nam: ${total}
// </pre>
// `;
// document.write(message);





//tính diện tích chu vi hình chữ nhật
//

let length = prompt('Nhập Chiều Dài');
let width = prompt('Nhập Chiều Rộng');
const TWO = 2;
let perimeter = (Number(length) + Number(width)) * TWO;
let acreage = Number(length) * Number(width);
let mess = `
<pre>
Chieu dai la: ${length}
Chieu rong la: ${width}
Chu vi la: ${perimeter}
Dien tich la: ${acreage}
</pre>
`
document.write(mess);

