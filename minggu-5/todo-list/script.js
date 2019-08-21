let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali."
    },
    {
        title:"Ayam bakar",
        description:"Ayam bakar adalah sebuah hidangan Asia Tenggara Maritim, terutama hidangan Indonesia atau Malaysia, dari ayam yang dipanggang di atas arang."
    },
    {
        title:"Bebek Bakar",
        description:"Bebek goreng adalah daging bebek yang digoreng dan dihidangkan dengan lalapan. Bebek goreng dapat ditemui di warung-warung kaki lima sampai di restoran dan hotel mewah. "
    },
    {
        title:"Nasi goreng",
        description:"Nasi goreng adalah sebuah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bumbu-bumbu lainnya, seperti telur, ayam, dan kerupuk."
    },
    {
        title:"Soto Betawi",
        description:"Soto Betawi merupakan soto yang populer di daerah Jakarta. Seperti halnya soto Madura dan soto sulung, soto Betawi juga menggunakan jeroan. Selain jeroan, seringkali organ-organ lain juga disertakan, seperti mata, terpedo, dan juga hati. Daging sapi juga menjadi bahan campuran dalam soto Betawi."
    }
]

class TodoList{
    item = document.getElementById('todo-list')
    conntent = document.getElementById('todo-description')

    listItem = ()=>{
    for(let x in todo){
        this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>' 
    }
  }
  setDisplay = (n=0)=>{
    this.conntent.innerHTML = '<div class="title">'+todo[n].title+'</div>\
    <div class="container">'+todo[n].description+'</div>'
  }
}

const todoList = new TodoList()