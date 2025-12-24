// Khai báo các biến cần dùng
const myForm = document.querySelector('form');
const nameInput = document.getElementById('name');

// Xử lý sự kiện gửi Form
if (myForm) {
    myForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn trang web tải lại
        
        const khachHang = nameInput.value.trim();

        if (khachHang === "Uyên") {
            alert("Chào bà xã đại nhân! Chúc vợ một ngày tràn đầy hoa hồng! 🌹🌹🌹");
        } else if (khachHang !== "") {
            alert("Chào " + khachHang + "! Cảm ơn bạn đã gửi tin nhắn. Chúc bạn một ngày tốt lành nhé! 🌹");
        } else {
            alert("Bạn ơi, hãy nhập tên để Hòa biết ai đã ghé thăm nhé!");
        }
    });
}

// Hàm đổi màu nền ngẫu nhiên
function doiMauNen() {
    const mauNgauNhien = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = mauNgauNhien;
}