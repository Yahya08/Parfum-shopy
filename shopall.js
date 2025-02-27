let loginBtn = document.querySelector("#login");
console.log(loginBtn);
let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if(isAuth !== "Authenticated"){
    window.location.href ="./login.html";
}else{
    loginBtn.innerText = "Logout";
    loginBtn.addEventListener("click",function(){
        localStorage.setItem("isAuth", "Not Authenticated");
        window.location.reload();
    })
}

let arrData = [
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_6326984c-e89a-43ba-b560-e35d40faba70.jpg?v=1703835295&width=250",
        title: "PERFUME MINIS FOR ALL (SET OF 4)",
        name: "Luxury OUD Experience Set",
        rating: 5.0,
        price: 849.00,
        strikedPrice: 1099.00

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/ManPerfumeGiftSet-01_2_eb660165-6da9-4e14-bdf0-fabd68113a00.jpg?v=1695204946&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Men - 4 x 20mls",
        rating: 4.4,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDGold-01.jpg?v=1698055234&width=250",
        title: "EAU DE PARFUM FOR ALL",
        name: "OUD GOLD - 100ml",
        rating: 5.0,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/UnisexPerfumeGiftSet_1.jpg?v=1695204331&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Unisex Perfume Gift Set - 4 x 20mls",
        rating: 4.6,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/LuxuryCollectionGiftSet-01.jpg?v=1705048050&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Women - 4 x 20mls",
        rating: 4.9,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/LuxuryCollectionGiftSet-01.jpg?v=1705048050&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Women - 4 x 20mls",
        rating: 4.9,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WhiteOUD_b00b288c-016d-4071-b71c-f7e9a2cef50f.jpg?v=1698837551&width=250",
        title: "EAU DE PARFUM",
        name: "White Oud Unisex - 100ml",
        rating: 4.7,
        price: 565.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Skai_2e0d54be-3ab0-458b-a2af-47d666c93e0e.jpg?v=1693289226&width=250",
        title: "EAU DE COLOGNE",
        name: "Skai Aquatic Unisex Perfume - 100ml",
        rating: 4.9,
        price: 489.00,
        strikedPrice: 699.00,

    },
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1_f9f52a24-5489-4e32-b8b4-d8ebc3d08b14_360x.jpg?v=1714549395?v=1703835295&width=300",
        title: "EAU DE TOILETTE",
        name: "Fresh Unisex Perfume - 100ml",
        rating: 4.9,
        price: 515.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OCEANMan.jpg?v=1693289108&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "Ocean Man - 100ml",
        rating: 4.9,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/HoneyOUD_68b92490-5598-445c-a661-4a2d978e9893.jpg?v=1693289057&width=250",
        title: "PARFUM",
        name: "Honey Oud Unisex Perfume - 100ml",
        rating: 4.6,
        price: 575.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/KLUBMan.jpg?v=1693289090&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "Klub Man - 100ml",
        rating: 4.6,
        price: 575.00,
        strikedPrice: 799.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/SENORITA_239a3020-2072-4cdb-93da-8d2519b69f39.jpg?v=1693289176&width=250",
        title: "EAU DE PARFUM",
        name: "Senorita Woman Perfume - 100ml",
        rating: 4.8,
        price: 515.00,
        strikedPrice: 899.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDGold-01.jpg?v=1698055234&width=250",
        title: "EAU DE PARFUM FOR ALL",
        name: "OUD GOLD - 100ml",
        rating: 4.9,
        price: 840.00,
        strikedPrice: 1099.00,
    },
    
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/HoneyOUD_68b92490-5598-445c-a661-4a2d978e9893.jpg?v=1693289057&width=250",
        title: "PARFUM",
        name: "Honey Oud Unisex Perfume - 100ml",
        rating: 4.6,
        price: 575.00,
        strikedPrice: 999.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Skai_2e0d54be-3ab0-458b-a2af-47d666c93e0e.jpg?v=1693289226&width=250",
        title: "EAU DE COLOGNE",
        name: "Skai Aquatic Unisex Perfume - 100ml",
        rating: 4.9,
        price: 489.00,
        strikedPrice: 699.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_3.jpg?v=1698055971&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "SWAG STAR - 100ml",
        rating: 4.9,
        price: 390.00,
        strikedPrice: 499.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/GOAT.jpg?v=1693288981&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "G.O.A.T. Man - 100ml",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 799.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/IMPACT.jpg?v=1693289075&width=250",
        title: "EAU DE COLOGNE",
        name: "Impact Man Perfume - 100ml",
        rating: 4.7,
        price: 515.00,
        strikedPrice: 899.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Sin_DonDeoCombo.jpg?v=1693930645&width=250",
        title: "UNISEX AND MAN BODY DEODORANTS",
        name: "Sin And Don Deo Combo - 2 x 150ml",
        rating: 4.4,
        price: 299.00,
        strikedPrice: 598.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DEOGiftSetPackof4.jpg?v=1693931505&width=250",
        title: "SET OF 4 BODY DEOS FOR MEN",
        name: "Deo Gift Set - Stud, Fyre, Fresh And Game Pack Of 4 x 150ml",
        rating: 4.2,
        price: 499.00,
        strikedPrice: 1196.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Perfume-Trial-Pack-_10-5ml.jpg?v=1693930900&width=250",
        title: "PACK OF 10 X 5ML PERFUMES.",
        name: "Luxury Perfume Trial Pack",
        rating: 4.8,
        price: 349.00,
        strikedPrice: 399.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/EverreadyWomenCombo.jpg?v=1693931485&width=250",
        title: "5 PREMIUM FEMININE SCENTS",
        name: "Everready Women Combo",
        rating: 4.5,
        price: 2249.00,
        strikedPrice: 4695.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/RefreshingYouCombo.jpg?v=1693930765&width=250",
        title: "FAMILY COMBO",
        name: "Refreshing You Combo",
        rating: 4.5,
        price: 2249.00,
        strikedPrice: 4595.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Taaj-00.jpg?v=1712321132&width=300",
        title: "TAAJ GOLD OUD",
        name: "TAAJ GOLD OUD",
        rating: 4.3,
        price: 349.00,
        strikedPrice: 398.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/GOAT.jpg?v=1693288981&width=250",
        title: "G.O.A.T. Man - 100ml",
        name: "EAU DE PARFUM FOR MEN",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 799.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/EverreadyWomenCombo.jpg?v=1693931485&width=300",
        title: "EVERYDAY WOMEN PARFUM",
        name: "EVERYDAY WOMEN PARFUM",
        rating: 4.5,
        price: 249.00,
        strikedPrice: 449.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Dategiftset-01.jpg?v=1705563221&width=250",
        title: "DATE Woman Premium Gift Set",
        name: "BATH AND BODY GIFT SET FOR WOMEN",
        rating: 5.0,
        price: 1329.00,
        strikedPrice: 1699.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/BestOfMenPerfumeCombo-100mlX3.jpg?v=1693932739&width=300",
        title: "BEST OF MEN PARFUM",
        name: "BEST OF MEN PARFUM",
        rating: 4.4,
        price: 149.00,
        strikedPrice: 299.00,
    },
];


let container = document.querySelector("#content");
let productNumber = document.querySelector("#productNumber");
productNumber.innerText = `${arrData.length} products`;


function appendData(arrData){
    container.innerHTML = "";
arrData.forEach(function(el){
    // console.log(el);
    let productDiv = document.createElement("div");
    let img = document.createElement("img")
    img.src=el.imageUrl;
    img.style.cursor = "pointer";
    img.addEventListener("click",function(){
        showProduct(el);
        // console.log(el);
    })
    let p1 = document.createElement("p")
    p1.innerText = el.title
    let h4 = document.createElement("h4");
    h4.innerText = el.name;
    h4.setAttribute("class","hide-text")
    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class","rating")
    let ratingP = document.createElement("p");
    ratingP.setAttribute("class","material-icons")
    ratingP.innerText = "star"
    let p2 = document.createElement("p");
    p2.innerText = el.rating;
    let span1 = document.createElement("span");
    span1.innerText = `Rp${el.price}`
    let span2 = document.createElement("span");
    span2.innerText = `Rp${el.strikedPrice}`;
    span2.style.textDecoration = "line-through";
    let btn = document.createElement("button")
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click",function(){
        alert("✅Added to cart");
        addToCart(el);
    })  

    ratingDiv.append(ratingP,p2)
    productDiv.append(img,p1,h4,ratingDiv,span1,span2,btn);
    container.append(productDiv);
})

}
appendData(arrData)

let select = document.querySelector("#sort");
select.addEventListener("change",function(){
    arrData.sort(function(a,b){
        if(select.value == "lowToHigh"){
            return(a.price - b.price)
        }
        else if(select.value == "highToLow"){
            return(b.price - a.price);
        }
    })
    appendData(arrData);
})


function showProduct(el){
    localStorage.setItem("showProduct",JSON.stringify(el));
    window.location.href = "./showProduct.html";
}
function addToCart(el) {
    // Ambil data keranjang yang ada di localStorage, jika tidak ada, inisialisasi array kosong
    let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Cek apakah produk sudah ada di keranjang
    let existingProduct = cartArr.find(function(item) {
        return item.imageUrl === el.imageUrl;  // Bandingkan berdasarkan imageUrl atau ID produk
    });

    if (existingProduct) {
        // Jika produk sudah ada, update quantity
        existingProduct.quantity += 1;  // Tambah quantity
    } else {
        // Jika produk belum ada, tambahkan produk baru ke keranjang
        el.quantity = 1;  // Inisialisasi quantity produk pertama kali
        cartArr.push(el);
    }

    // Simpan keranjang yang telah diperbarui ke localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    
    // Menampilkan alert bahwa produk sudah ditambahkan ke keranjang
    // alert("Added to cart");
    
    // Memperbarui total amount di halaman keranjang
    updateCartTotal();
}