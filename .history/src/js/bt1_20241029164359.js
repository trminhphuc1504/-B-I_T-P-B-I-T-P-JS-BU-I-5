const layDiemUuTienKhuVuc = (khuVuc)=> {
    if(khuVuc === 'A') return 2;
    if(khuVuc === 'B') return 1;
    if(khuVuc === 'C') return 0.5;
    return 0;
}

const layDiemUuTienDoiTuong = (doiTuong)=>{
    if(doiTuong === '') return 2.5;
    if