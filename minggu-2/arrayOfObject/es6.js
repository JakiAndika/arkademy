const pertambahan = (num1,num2) =>{
    return num1+num2;
}

const perkalian = (num1,num2) =>{
    return num1*num2;
}

const perbagian = (num1,num2) =>{
    return num1/num2;
}

const luasAlasSegitiga = (a,t) =>{
    return 0.5*a*t;
}

const luasLingkaran = (d) =>{
    return 3.14*d;
}

const siswa = [
    {
    "nama": "Achmad Zulfikar",
    "kelas": "XI-RPL-1"
 },
   {
    "nama": "Muhammad Jaki Andika",
    "kelas": "XI-RPL-1"
 },
   {
    "nama": "Rizal Nurul",
    "kelas": "XI-RPL-1"
 },   
   {
    "nama": "Risma Julianti",
    "kelas": "XI-RPL-1"
 },
   {
    "nama": "Ananda Zidane",
    "kelas": "XI-RPL-1"
 },  
   {
    "nama": "Yusril Agisha",
    "kelas": "XI-RPL-1"
 },
   {
    "nama": "Hilmi",
    "kelas": "XI-RPL-1"
 }
];
document.getElementById('siswa_rpl').innerHTML = siswa;

let x;

for(x in siswa){
    let namaSiswa = siswa[x].nama
    let kelasSiswa = siswa[x].kelas
    let divider = "<div><span class='nama-siswa'>"+namaSiswa+"</span><span class='kelas-siswa'>"+kelasSiswa+"</span></div>";
    document.getElementById('siswa_rpl').innerHTML += divider
}