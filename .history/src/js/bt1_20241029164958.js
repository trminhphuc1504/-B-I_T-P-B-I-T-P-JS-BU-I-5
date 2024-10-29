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
}