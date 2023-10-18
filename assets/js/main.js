const houses = [
    {
        id: 1,
        img: "house.png",
        title: " خانه ویلایی محمودآباد",
        price: "20000000",
        description: "ویلایی دربست - بدون سرایدار/نگهبان 1 تخت (1 تخت دو‌نفره).1 اتاق.70 متر users 2 نفر ظرفیت استاندارد + 2 نفر اضافه هزینه هر نفر اضافه به ازای هر شب 250,000 تومان key حداقل مدت اقامت 2 شب ورود از 14:00 تا 00:00 - خروج 12:00 flash رزرو آنی رزرو سریع اقامتگاه، بدون نیاز به تایید میزبان medal مهمان نواز اقامتگاه‌هایی با میزان رضایت‌‌مندی بالای مهمانان درباره این ویلا گزارش مغایرت آگهی ✅ اینبار تجربه آسان بدست می آید با سفری زیارتی و گردشی، آسایش و رفاه منزل شخصیتان را با ما... نمایش بیشتر اطلاعات ساختمان تیپ سازههم‌سطح تعداد طبقات2 طبقه طبقه این واحد1 متراژ زمین95 متر متراژ بنا70 متر تعداد پله هاکمتر از 5",
        count: "1"
    },
    {
        id: 2,
        img: "house.png",
        title: " خانه ویلایی کردان",
                price: "50000000",
        description: "ویلایی دربست - بدون سرایدار/نگهبان 1 تخت (1 تخت دو‌نفره).1 اتاق.70 متر users 2 نفر ظرفیت استاندارد + 2 نفر اضافه هزینه هر نفر اضافه به ازای هر شب 250,000 تومان key حداقل مدت اقامت 2 شب ورود از 14:00 تا 00:00 - خروج 12:00 flash رزرو آنی رزرو سریع اقامتگاه، بدون نیاز به تایید میزبان medal مهمان نواز اقامتگاه‌هایی با میزان رضایت‌‌مندی بالای مهمانان درباره این ویلا گزارش مغایرت آگهی ✅ اینبار تجربه آسان بدست می آید با سفری زیارتی و گردشی، آسایش و رفاه منزل شخصیتان را با ما... نمایش بیشتر اطلاعات ساختمان تیپ سازههم‌سطح تعداد طبقات2 طبقه طبقه این واحد1 متراژ زمین95 متر متراژ بنا70 متر تعداد پله هاکمتر از 5",
        count: "1"
    },
    {
        id: 3,
        img: "house.png",
        title: " خانه ویلایی قشم",
        price: "15000000",
        description: "ویلایی دربست - بدون سرایدار/نگهبان 1 تخت (1 تخت دو‌نفره).1 اتاق.70 متر users 2 نفر ظرفیت استاندارد + 2 نفر اضافه هزینه هر نفر اضافه به ازای هر شب 250,000 تومان key حداقل مدت اقامت 2 شب ورود از 14:00 تا 00:00 - خروج 12:00 flash رزرو آنی رزرو سریع اقامتگاه، بدون نیاز به تایید میزبان medal مهمان نواز اقامتگاه‌هایی با میزان رضایت‌‌مندی بالای مهمانان درباره این ویلا گزارش مغایرت آگهی ✅ اینبار تجربه آسان بدست می آید با سفری زیارتی و گردشی، آسایش و رفاه منزل شخصیتان را با ما... نمایش بیشتر اطلاعات ساختمان تیپ سازههم‌سطح تعداد طبقات2 طبقه طبقه این واحد1 متراژ زمین95 متر متراژ بنا70 متر تعداد پله هاکمتر از 5",
        count: "1"
    },
    {
        id: 4,
        img: "house.png",
        title: " خانه ویلایی تهران",
        price: "60000000",
        description: "ویلایی دربست - بدون سرایدار/نگهبان 1 تخت (1 تخت دو‌نفره).1 اتاق.70 متر users 2 نفر ظرفیت استاندارد + 2 نفر اضافه هزینه هر نفر اضافه به ازای هر شب 250,000 تومان key حداقل مدت اقامت 2 شب ورود از 14:00 تا 00:00 - خروج 12:00 flash رزرو آنی رزرو سریع اقامتگاه، بدون نیاز به تایید میزبان medal مهمان نواز اقامتگاه‌هایی با میزان رضایت‌‌مندی بالای مهمانان درباره این ویلا گزارش مغایرت آگهی ✅ اینبار تجربه آسان بدست می آید با سفری زیارتی و گردشی، آسایش و رفاه منزل شخصیتان را با ما... نمایش بیشتر اطلاعات ساختمان تیپ سازههم‌سطح تعداد طبقات2 طبقه طبقه این واحد1 متراژ زمین95 متر متراژ بنا70 متر تعداد پله هاکمتر از 5",
        count: "1"
    }

]

    
let singlePageProduct = [];
let sideNaveProduct = [];

//Header Home Page
let headerDiv = document.getElementById("headerHomePage");

// header Title
const headerTitle = document.createElement("h1");
headerTitle.setAttribute("class", "headerTitle");
headerTitle.textContent = "مقصدتان برای سفر کجاست؟";
headerDiv.appendChild(headerTitle);

// header inputs div
const headerInputs = document.createElement("div");
headerInputs.setAttribute("class", "inputsSearch");
headerDiv.appendChild(headerInputs);

// header input
const inputCity = document.createElement("input");
inputCity.setAttribute("type", "search");
inputCity.setAttribute("placeholder", "کجا سفر میکنید؟");
inputCity.setAttribute("id", "searchCity");
headerInputs.appendChild(inputCity);

const inputDate = document.createElement("input");
inputDate.setAttribute("type", "date");
inputDate.setAttribute("value", "2023-10-11");
inputDate.setAttribute("id", "searchDate");
headerInputs.appendChild(inputDate);

const inputNum = document.createElement("input");
inputNum.setAttribute("type", "tel");
inputNum.setAttribute("placeholder", "تعداد نفرات؟");
inputNum.setAttribute("id", "searchPerson");
headerInputs.appendChild(inputNum);

const inputBtn = document.createElement("input");
inputBtn.setAttribute("type", "submit");
inputBtn.setAttribute("value", "جستجو");
inputBtn.setAttribute("id", "btnSearch");
headerInputs.appendChild(inputBtn);



// Create product box
document.getElementById("contact").style.display = "none";
let productDiv = document.getElementById("products");

houses.forEach(product => {

    const productItem = document.createElement('div');
    productItem.setAttribute("class", "cardHouse");

    if (product.img) {
        const ProductImage = document.createElement('img');
        ProductImage.setAttribute("src", `assets/img/${product.img}`)
        productItem.appendChild(ProductImage)
    }

    const productContent = document.createElement('div');
    productContent.setAttribute("class", "cardContent");
    productItem.appendChild(productContent);

    const productTitle = document.createElement('h3');
    productTitle.setAttribute("class", "cardTitle");
    productTitle.textContent = product.title;
    productContent.appendChild(productTitle);

    const productDes = document.createElement('p');
    productDes.setAttribute("class", "shortDescription");
    productDes.textContent = product.description;
    productContent.appendChild(productDes);

    const productFooter = document.createElement('div');
    productFooter.setAttribute("class", "cardPrice");
    productItem.appendChild(productFooter);

    const productDay = document.createElement('p');
    productDay.setAttribute("class", "everyNight");
    productDay.textContent = "هرشب";
    productFooter.appendChild(productDay);

    const productPrice = document.createElement('p');
    productPrice.setAttribute("class", "everyNightPrice");
    productPrice.textContent = product.price;
    productFooter.appendChild(productPrice);

    const currency = document.createElement('p');
    currency.setAttribute("class", "currency");
    currency.textContent = "ریال";
    productFooter.appendChild(currency);

    productDiv.appendChild(productItem);


    productItem.onclick = () => {
        const home = document.getElementById("container");
        home.style.display = "none";
        document.getElementById("singleProductContent").innerHTML="";
        document.getElementById("singleProductGallery").innerHTML="";
        document.getElementById("containerSingleProduct").style.display="flex";
        // singlePageProduct.push(product);
        //single product Page
        const singleProductGallery = document.getElementById("singleProductGallery");

        const mainSingleProductImage = document.createElement("div");
        mainSingleProductImage.setAttribute("class", "mainSingleProductImage");
        singleProductGallery.appendChild(mainSingleProductImage);

        const activeImage = document.createElement("img");
        activeImage.setAttribute("class", "activeImage");
        activeImage.setAttribute("src", `assets/img/${product.img}`);
        mainSingleProductImage.appendChild(activeImage);

        const singleProductImages = document.createElement("div");
        singleProductImages.setAttribute("class", "singleProductImages");
        singleProductGallery.appendChild(singleProductImages);

        const itemImage1 = document.createElement("img");
        itemImage1.setAttribute("class", "itemImage");
        itemImage1.setAttribute("src", `assets/img/${product.img}`);
        singleProductImages.appendChild(itemImage1);

        const itemImage2 = document.createElement("img");
        itemImage2.setAttribute("class", "itemImage");
        itemImage2.setAttribute("src", `assets/img/${product.img}`);
        singleProductImages.appendChild(itemImage2);

        const itemImage3 = document.createElement("img");
        itemImage3.setAttribute("class", "itemImage");
        itemImage3.setAttribute("src", `assets/img/${product.img}`);
        singleProductImages.appendChild(itemImage3);




        const singleProductContent = document.getElementById("singleProductContent");

        const headerContentSingleProduct = document.createElement("div");
        headerContentSingleProduct.setAttribute("class", "headerContentSingleProduct");
        singleProductContent.appendChild(headerContentSingleProduct);

        const titleContentSingleProduct = document.createElement("h3");
        titleContentSingleProduct.setAttribute("class", "titleContentSingleProduct");
        titleContentSingleProduct.textContent = product.title;
        headerContentSingleProduct.appendChild(titleContentSingleProduct);

        const priceContentSingleProduct = document.createElement("h4");
        priceContentSingleProduct.setAttribute("class", "priceContentSingleProduct");
        priceContentSingleProduct.textContent = product.price;
        headerContentSingleProduct.appendChild(priceContentSingleProduct);

        const currency = document.createElement('span');
        currency.setAttribute("class", "currency");
        currency.textContent = "ریال";
        priceContentSingleProduct.appendChild(currency);

        const containerContentSingleProduct = document.createElement("div");
        containerContentSingleProduct.setAttribute("class", "containerContentSingleProduct");
        singleProductContent.appendChild(containerContentSingleProduct);

        const ContentSingleProduct = document.createElement("p");
        ContentSingleProduct.setAttribute("class", "ContentSingleProduct");
        ContentSingleProduct.textContent = product.description;
        containerContentSingleProduct.appendChild(ContentSingleProduct);

        const footerContentSingleProduct = document.createElement("div");
        footerContentSingleProduct.setAttribute("class", "footerContentSingleProduct");
        singleProductContent.appendChild(footerContentSingleProduct);

        const inputsSingleProduct = document.createElement("div");
        inputsSingleProduct.setAttribute("class", "inputsSingleProduct");
        footerContentSingleProduct.appendChild(inputsSingleProduct);

        const inputdating = document.createElement("input");
        inputdating.setAttribute("type", "date");
        inputdating.setAttribute("class", "dateSingleProduct");
        inputsSingleProduct.appendChild(inputdating);

        const inputNums = document.createElement("input");
        inputNums.setAttribute("type", "number");
        inputNums.setAttribute("class", "NumberSingleProduct");
        inputsSingleProduct.appendChild(inputNums);

        const addToCardSingle = document.createElement("button");
        addToCardSingle.setAttribute("class", "addToCardSingle");
        addToCardSingle.setAttribute("id", `${product.id}`);
        addToCardSingle.textContent = "افزودن به سبد خرید"
        footerContentSingleProduct.appendChild(addToCardSingle);

        addToCardSingle.onclick = () => {

            openNav();
            

                     
            creatShopItems(product, 'add');


        }
        

    }


});



function creatShopItems(product, mode) {
    let hasProduct = {};
    if (mode == 'add') {
        hasProduct = sideNaveProduct.find(o => {
            return o.id == product.id
        })
        if (hasProduct === undefined) {
            sideNaveProduct.push(product);
        }
        else {
            hasProduct.count = Number(hasProduct.count) + 1
        }

    }
    if (mode == 'delete') {
        sideNaveProduct = sideNaveProduct.filter(j => {
            return j.id != product.id;
        })
    }

    if (mode == "minus") {
        hasProduct = sideNaveProduct.find(o => {
            return o.id = product.id;
        })
        if (hasProduct.count == 1) {
            sideNaveProduct = sideNaveProduct.filter(j => {
                return j.id != product.id;
            })
        }
        if (hasProduct.count > 1) {
            hasProduct.count = Number(hasProduct.count) - 1
        }
    }
    const shopItems = document.getElementById("shopItems");
    shopItems.innerHTML = "";

    sideNaveProduct.forEach(product => {
        const shopItem = document.createElement("div");
        shopItem.setAttribute("class", "shopItem");
        shopItems.appendChild(shopItem);


        const imageShop = document.createElement("img");
        imageShop.setAttribute("src", `assets/img/${product.img}`);
        imageShop.setAttribute("class", "imageShop");
        shopItem.appendChild(imageShop);

        const contentShop = document.createElement("div");
        contentShop.setAttribute("class", "contentShop");
        shopItem.appendChild(contentShop);

        const houseTitle = document.createElement("p");
        houseTitle.setAttribute("class", "houseTitle");
        houseTitle.textContent = product.title;
        contentShop.appendChild(houseTitle);

        const housePrice = document.createElement("p");
        housePrice.setAttribute("class", "housePrice");
        housePrice.textContent = product.price;
        contentShop.appendChild(housePrice);

        const currency = document.createElement('span');
        currency.setAttribute("class", "currency");
        currency.textContent = "ریال";
        housePrice.appendChild(currency);

        const houseNum = document.createElement("span");
        houseNum.setAttribute("class", "houseNum");
        houseNum.setAttribute("id", `houseNum_${product.id}`);
        houseNum.textContent = product.count;
        shopItem.appendChild(houseNum);

        const boxMaxMin = document.createElement("span");
        boxMaxMin.setAttribute("class", "boxMaxMin");
        shopItem.appendChild(boxMaxMin);

        const iconMax = document.createElement("div");
        iconMax.setAttribute("class", "iconMax");
        iconMax.textContent = "+";
        boxMaxMin.appendChild(iconMax);
        iconMax.onclick = () => {
            creatShopItems(product, "add")
        }




        const iconMin = document.createElement("div");
        iconMin.setAttribute("class", "iconMin");
        iconMin.textContent = "-";
        boxMaxMin.appendChild(iconMin);
        iconMin.onclick = () => {
            creatShopItems(product, "minus")
        }

        const trashIcon = document.createElement("i");
        trashIcon.setAttribute("class", "houseDelete fa fa-trash-o");
        shopItem.appendChild(trashIcon);
        trashIcon.onclick = () => {
            creatShopItems(product, "delete");
        }


    })


    badgeCount();
    cartFooter(sideNaveProduct);

}


function cartFooter(arr) {
    const shopFooter = document.getElementById("shopFooter");
    shopFooter.innerHTML = "";

    let total = 0;
    let VAT = 0;
    let product = arr[0];
    arr.forEach(product => {
        total += Number(product.price * Number(product.count));
    })
    VAT += total * 0.09;
    const totalPrice = document.createElement("div");
    totalPrice.setAttribute("class", "totalPrice");
    shopFooter.appendChild(totalPrice);

    const mainPrice = document.createElement("div");
    mainPrice.setAttribute("class", "mainPrice");
    mainPrice.textContent = total;
    totalPrice.appendChild(mainPrice);

    const currencyTotal = document.createElement('span');
    currencyTotal.setAttribute("class", "currency");
    currencyTotal.textContent = "ریال";
    mainPrice.appendChild(currencyTotal);

    const tax = document.createElement("div");
    tax.setAttribute("class", "tax");
    totalPrice.appendChild(tax);


    const taxText = document.createElement("span");
    taxText.textContent = "9% مالیات:";
    tax.appendChild(taxText);

    const taxcalculate = document.createElement("span");
    taxcalculate.textContent = VAT;
    tax.appendChild(taxcalculate);

    const currencyTax = document.createElement('span');
    currencyTax.setAttribute("class", "currency");
    currencyTax.textContent = "ریال";
    tax.appendChild(currencyTax);

    const totalCart = document.createElement('p');
    totalCart.setAttribute("class", "currency");
    totalCart.textContent = "جمع کل:"
    totalPrice.appendChild(totalCart);

    const totalPriceCart = document.createElement("span");
    totalPriceCart.textContent = total + VAT;
    totalCart.appendChild(totalPriceCart);


    const currencyTotalCart = document.createElement('span');
    currencyTotalCart.setAttribute("class", "currency");
    currencyTotalCart.textContent = "ریال";
    totalCart.appendChild(currencyTotalCart);

    const purchase = document.createElement("button");
    purchase.setAttribute("class", "purchase");
    purchase.textContent = "تسویه حساب";
    shopFooter.appendChild(purchase);
}





function home() {
    document.getElementById("containerSingleProduct").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("container").style.display = "block";
}


function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function contact() {
    document.getElementById("container").style.display = "none";
    document.getElementById("containerSingleProduct").style.display = "none";
    document.getElementById("contact").style.display = "flex";
}

function badgeCount(){
   if(sideNaveProduct.length>0){
   let newBadge=document.getElementById("notifyBadge");
   newBadge.textContent=sideNaveProduct.length;
   document.getElementById("notifyBadge").style.display="block"
   }
   if(sideNaveProduct.length==0){
    document.getElementById("notifyBadge").style.display="none"
   }

}


//Single Page Products


// function singlePageProduct() {


//     const singleProductContainer = document.getElementById("containerSingleProduct");

// houses.find(function(product, index){
//     if (index[0] == index[product]) {
//         const home = document.getElementById("container");
//         home.style.display = "none"

//         const singleProductContent = document.getElementById("singleProductContent");
//         singleProductContent.setAttribute("class", "singleProductContent");

//     }
// });

