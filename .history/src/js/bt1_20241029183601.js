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
const tinhThueThuNhap = () => {
    const hoTen = document.getElementById("hoTen").value;
    const tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
    const soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuoc").value);

    // Calculate taxable income
    const thuNhapChiuThue = tongThuNhap - 4e+6 - (soNguoiPhuThuoc * 1.6e+6);
    let thuePhaiTra = 0;

    // Progressive tax calculation based on brackets
    if (thuNhapChiuThue > 0) {
        if (thuNhapChiuThue <= 60e+6) {
            thuePhaiTra = thuNhapChiuThue * 0.05;
        } else if (thuNhapChiuThue <= 120e+6) {
            thuePhaiTra = 60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1;
        } else if (thuNhapChiuThue <= 210e+6) {
            thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + (thuNhapChiuThue - 120e+6) * 0.15;
        } else if (thuNhapChiuThue <= 384e+6) {
            thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (thuNhapChiuThue - 210e+6) * 0.2;
        } else if (thuNhapChiuThue <= 624e+6) {
            thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (thuNhapChiuThue - 384e+6) * 0.25;
        } else if (thuNhapChiuThue <= 960e+6) {
            thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapChiuThue - 624e+6) * 0.3;
        } else {
            thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapChiuThue - 960e+6) * 0.35;
        }
    }

    // Format output with NumberFormat
    const formattedThuePhaiTra = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thuePhaiTra);

    document.getElementById('taxResult').innerHTML = `Họ tên: ${hoTen}, Thuế thu nhập cá nhân phải trả: ${formattedThuePhaiTra}.`;
}

//end Tính Thuế Thu Nhập Cá Nhân


// Function for Tính Tiền Cáp
const toggleConnections = () => {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const soKetNoiContainer = document.getElementById("soKetNoiContainer");

    if (loaiKhachHang === 'business') {
        soKetNoiContainer.style.display = "block"; // Show for business customers
    } else {
        soKetNoiContainer.style.display = "none"; // Hide for residential customers
    }
}

const tinhHoaDon = () => {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value) || 0;
    const soKetNoi = loaiKhachHang === "business" ? (parseInt(document.getElementById("soKetNoi").value) || 0) : 0;

    let bill = 0;
    if (loaiKhachHang === "residential") {
        const phiXuLyHoaDon = 4.5;
        const phiDichVuCoBan = 20.5;
        const phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
        bill = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
    } else if (loaiKhachHang === "business") {
        const phiXuLyHoaDon = 15;
        const phiDichVuCoBan = 75; // for up to 10 connections
        const phiThueKenhCaoCap = 50 * soKenhCaoCap;

        // If connections are less than 10, charge the basic fee only
        let phiKetNoi;
        if(soKetNoi > 10){
            phiKetNoi = (soKetNoi - 10) * 5; // Tính phí cho các kết nối vượt mức
        }
        else{
            phiKetNoi = 0;// Không có phí cho kết nối nếu <= 10
        }
        // Tính tổng hóa đơn
        bill = phiXuLyHoaDon + phiDichVuCoBan + phiKetNoi + phiThueKenhCaoCap;
    }

    document.getElementById("cableResult").innerHTML = `Tổng Hóa Đơn: $${bill.toFixed(2)}`;
}

// Gọi toggleConnections khi trang được tải để ẩn ô kết nối nếu cần
document.addEventListener("DOMContentLoaded", () => {
    toggleConnections();
});