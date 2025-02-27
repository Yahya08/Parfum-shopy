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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/ManPerfumeGiftSet-01_2_eb660165-6da9-4e14-bdf0-fabd68113a00.jpg?v=1695204946&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Men",
        rating: 4.4,
        price: 549.00,
        strikedPrice: 849.00

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_6326984c-e89a-43ba-b560-e35d40faba70.jpg?v=1703835295&width=250",
        title: "PERFUME MINIS FOR ALL (SET OF 4)",
        name: "Luxury OUD Experience Set",
        rating: 4.8,
        price: 849.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WhiteOUD_b00b288c-016d-4071-b71c-f7e9a2cef50f.jpg?v=1698837551&width=300",
        title: "EAU DE PARFUM",
        name: "White Oud Unisex - 100ml",
        rating: 4.7,
        price: 565.00,
        strikedPrice: 999.00,

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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_f7918942-44ff-44ec-8f15-b61e4f30eaa5.jpg?v=1712925454&width=300",
        title: "EAU DE PARFUM",
        name: "CEO Man Luxury Perfume - 100ml",
        rating: 4.9,
        price: 489.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/LuxuryCollectionGiftSet-01.jpg?v=1705048050&width=250",
        title: "PERFUME MINIS FOR ALL (SET OF 4)",
        name: "White Oud Unisex - 100ml",
        rating: 4.6,
        price: 949.00,
        strikedPrice: 1199.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DATEWOMAN.jpg?v=1693290911&width=250",
        title: "EAU DE PARFUM FOR WOMEN",
        name: "Date Woman Perfume - 100ml",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Ocean-01_6cd0a2ed-3b3e-462a-a818-c2c2346b30c5.jpg?v=1717665492&width=300",
        title: "EAU DE PARFUM FOR WOMEN",
        name: "D.I.V.A. Woman - 100ml",
        rating: 4.9,
        price: 840.00,
        strikedPrice: 1099.00,

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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WomanPerfumeGiftSet_1.jpg?v=1695204304&width=250",
        title: "EAU DE PARFUM",
        name: "BLU Man - 100ml",
        rating: 4.9,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_882dadd1-43e2-4c85-a8a6-0da791b34d8f.jpg?v=1714548090&width=300",
        title: "EAU DE PARFUM",
        name: "CEO Woman Perfume - 100ml",
        rating: 4.7,
        price: 499.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/BestOfMenPerfumeCombo-100mlX3.jpg?v=1693932739&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "Best Of Men Perfume Combo - 100ml x 3",
        rating: 4.7,
        price: 1483.00,
        strikedPrice: 2697.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_3.jpg?v=1698055971&width=300",
        title: "SWAG STAR MAN",
        name: "SWAG STAR MAN PARFUME 100ml",
        rating: 4.8,
        price: 599.00,
        strikedPrice: 747.00,
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/KLUBMan.jpg?v=1693289090&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "Klub Man - 100ml",
        rating: 4.6,
        price: 575.00,
        strikedPrice: 799.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDParfum.jpg?v=1693289126&width=250",
        title: "PARFUM",
        name: "Oud Unisex Luxury Perfume - 100ml",
        rating: 4.7,
        price: 575.00,
        strikedPrice: 999.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_7123d0a0-0394-404c-88ce-1a9be9a12f17.jpg?v=1714549259&width=300",
        title: "EAU DE PARFUM",
        name: "Glam Woman Perfume - 100ml",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 999.00,
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_3.jpg?v=1698055971&width=300",
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DEOGiftSetPackof4.jpg?v=1693931505&width=300",
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
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_c00cb947-dade-475f-97a0-bb01a4c9b651.jpg?v=1700138007&width=250",
        title: "WHITE OUD SHOWER GEL 250 ML + WHITE OUD PERFUME 20 ML",
        name: "Win with White Combo",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 748.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_25f79680-b265-4423-b0c2-bdf6af78b69a.jpg?v=1700137801&width=250",
        title: "SKAI AQUATIC SHOWER GEL 250 ML + SKAI AQUATIC PERFUME 20ML",
        name: "Touch the SKAI Combo",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 698.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_937f4a4a-64b8-4031-811f-4e3de68048e5.jpg?v=1699960465&width=250",
        title: "CEO MAN SHOWER GEL 250 ML + CEO MAN PERFUME 20 ML",
        name: "Men in Black combo for Him",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 698.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_065f669b-8439-4b38-b779-050823e888ce.jpg?v=1700137831&width=250",
        title: "DATE WOMAN SHOWER GEL 250 ML + DATE WOMAN PERFUME 20 ML",
        name: "All Day Romance Combo for Her",
        rating: 4.9,
        price: 399.00,
        strikedPrice: 698.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/RcbLimitedEditionPerfumeGiftBox_1.jpg?v=1693996065&width=250",
        title: "PERFUME GIFT SET",
        name: "Rcb Limited Edition Perfume Gift Box - 4 x 20ml",
        rating: 4.8,
        price: 549.00,
        strikedPrice: 849.00,
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
        alert("Added to cart");
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
    alert("Added to cart");
    
    // Memperbarui total amount di halaman keranjang
    updateCartTotal();
}

// console.log(newArr)