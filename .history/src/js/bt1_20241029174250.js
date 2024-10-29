// Function for Quản Lý Tuyển Sinh

const layDiemUuTienKhuVuc = (khuVuc)=> {
    if(khuVuc === 'A') return 2;
    if(khuVuc === 'B') return 1;
    if(khuVuc === 'C') return 0.5;
    return 0;
}

const layDiemUuTienDoiTuong = (doiTuong)=>{
    if(doiTuong === '1') return 2.5;
    if(doiTuong === '2') return 1.5;
    if(doiTuong === '3') return 1;
    return 0;
}

const kiemTra = ()=>{
    const diemChuan = parseFloat(document.getElementById('diemChuan').value);
    const diemMon1 = parseFloat(document.getElementById('diemMon1').value);
    const diemMon2 = parseFloat(document.getElementById('diemMon2').value);
    const diemMon3 = parseFloat(document.getElementById('diemMon3').value);
    const khuVuc = document.getElementById('khuVuc').value;
    const doiTuong = document.getElementById('doiTuong').value;
    

    if(diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0){
        const diemLiet = document.getElementById('result').innerHTML = "Rớt do có môn 0 điểm."
        return diemLiet;
    }

    const diemUuTienKhuVuc = layDiemUuTienKhuVuc(khuVuc);
    const diemUuTienDoiTuong = layDiemUuTienDoiTuong(doiTuong);
    const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    if(tongDiem >= diemChuan){
        document.getElementById('result').innerHTML = `Đậu với tổng điểm:${tongDiem}`;
    }
    else{
        document.getElementById('result').innerHTML = `Rớt với tổng điểm: ${tongDiem}`;
    }
}

// end Quản Lý Tuyển Sinh

// Function for Tính Tiền Điện
const tinhTienDien = () => {
    const tenKhachHang = document.getElementById("tenKhachHang").value;
    const soKw = parseFloat(document.getElementById("soKw").value);

    let tongTien = 0;

    if (soKw <= 50) {
        tongTien = soKw * 500;
    } else if (soKw <= 100) {
        tongTien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    document.getElementById('electricityResult').innerHTML = `Khách hàng ${tenKhachHang} phải trả: ${tongTien.toLocaleString()} đồng.`;
}

//end Tính Tiền Điện


// Function for Tính Thuế Thu Nhập Cá Nhân
const tinhThueThuNhap = ()=>{
    const hoTen = document.getElementById("hoTen").value;
    const tongThuNhap = document.getElementById("tongThuNhap").value;
    const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value;

    const thuNhapChiuThue = tongThuNhap - 4 - (soNguoiPhuThuoc * 1.6);
    let thuePhaiTra = 0;

    if (thuNhapChiuThue <= 60) {
        thuePhaiTra = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thuePhaiTra = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
    } else if (thuNhapChiuThue <= 210) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
    } else if (thuNhapChiuThue <= 624) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.3;
    } else {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thuNhapChiuThue - 960) * 0.35;
    }

    document.getElementById('taxResult').innerHTML = `Họ tên: ${hoTen},`
}