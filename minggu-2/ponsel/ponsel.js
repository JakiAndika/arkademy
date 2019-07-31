const ponsel = [
    {
        "nama":"Vivo",
        "gambar":"-",
        "harga":"2.999.000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Samsung",
        "gambar":"-",
        "harga":"2.000.000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Oppo F11",
        "gambar":"-",
        "harga":"3.699.000",
        "ram":"6GB",
        "storage":""
    },
    {
        "nama":"Oppo Reno",
        "gambar":"-",
        "harga":"7.000.000",
        "ram":"6GB",
        "storage":""
    },
    {
        "nama":"Oppo F9",
        "gambar":"-",
        "harga":"2.500.000",
        "ram":"4GB",
        "storage":""
    },
    {
        "nama":"Oppo F3",
        "gambar":"-",
        "harga":"2.399.000",
        "ram":"4GB",
        "storage":""
    },
    {
        "nama":"Iphone Xs MAX",
        "gambar":"-",
        "harga":"20.000.000",
        "ram":"6GB",
        "storage":""
    },
    {
        "nama":"Iphone 8 Plus",
        "gambar":"-",
        "harga":"15.000.000",
        "ram":"6GB",
        "storage":""
    },
    {
        "nama":"Oppo F5",
        "gambar":"-",
        "harga":"2,000",
        "ram":"4GB",
        "storage":""
    },
    {
        "nama":"Oppo A7",
        "gambar":"-",
        "harga":"1.566.000",
        "ram":"2GB",
        "storage":""
    },
];

let x;

for(x in ponsel){
    let namaPonsel = ponsel[x].nama 
    let gambarPonsel = ponsel[x].gambar
    let hargaPonsel = ponsel[x].harga
    let ramPonsel = ponsel[x].ram
    let storagePonsel = ponsel[x].storage
    let divider = "<div>\
    <span class='nama-ponsel'>"+namaPonsel+"</span>\
    <span class='gambar-ponsel'>"+gambarPonsel+"</span>\
    <span class='harga-ponsel'>"+hargaPonsel+"</span>\
    <span class='ram-ponsel'>"+ramPonsel+"</span>\
    <span class='storage-ponsel'>"+storagePonsel+"</span>\
    </div>";
    document.getElementById('ponsel-jaki').innerHTML += divider
}