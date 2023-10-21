//javascript for navbar

const body = document.querySelector("body");
const openMenu = document.querySelector(".bx-menu");
const closeMenu = document.querySelector(".close");
const links = document.querySelector(".links");
const account = document.querySelector(".account");
const navbar = document.querySelector(".header");
const scrollUp= document.querySelector(".scroll-up");


// ---------------------- NAVBAR --------------------

openMenu.onclick = ()=>{
    links.classList.add("active");
    account.classList.add("active");
    closeMenu.classList.add("active");
    search.classList.remove("active");
    body.classList.add("disabledScroll");
}

closeMenu.onclick = ()=>{
    links.classList.remove("active");
    account.classList.remove("active");
    closeMenu.classList.remove("active");
    body.classList.remove("disabledScroll");
}

//scrollUp
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 150){
        scrollUp.classList.add("active");
    }else {
        scrollUp.classList.remove("active");
    }
});



// ------------------- SEARCH BAR ---------------------
const searchbtn = document.querySelector(".srchbtn");
const srchbtn = document.querySelector(".find");
const closeBtn = document.querySelector(".close-search");
const search = document.querySelector(".searching");


closeBtn.onclick = ()=>{
    search.classList.remove("active");
}

searchbtn.onclick = ()=>{
    search.classList.add("active");
    cart.classList.remove("active");
    loginForm.classList.remove("active");
}

srchbtn.onclick = ()=>{
    search.classList.add("active");
    cart.classList.remove("active");
    loginForm.classList.remove("active");
}



// ------------------- SHOPPING CART ---------------------
const showCart = document.querySelector(".showCart");
const closeCart = document.querySelector(".closeCart");
const cart = document.querySelector(".addToCart");

showCart.onclick = ()=>{
    cart.classList.add("active");
    loginForm.classList.remove("active");
    links.classList.remove("active");
    account.classList.remove("active");
    closeMenu.classList.remove("active");
    search.classList.remove("active");
}

closeCart.onclick = ()=>{
    cart.classList.remove("active");
}



// ------------------- LOGIN FORM ---------------------
const showForm = document.querySelector(".showForm");
const closeForm = document.querySelector(".closeForm");
const loginForm = document.querySelector(".login");
let viewPass = document.getElementById("eye");
let pass = document.getElementById("pass");

showForm.onclick = ()=>{
    loginForm.classList.add("active");
    cart.classList.remove("active");
    links.classList.remove("active");
    account.classList.remove("active");
    closeMenu.classList.remove("active");
    search.classList.remove("active");
}

closeForm.onclick = ()=>{
    loginForm.classList.remove("active");
}

viewPass.onclick = () => {
    if(pass.type == "password"){
        pass.type = "text";
    }else {
        pass.type = "password";
    }
}

// ---------------------NEW ARRIVAL---------------------
let cards = document.querySelector('.slider');
let listCart = document.querySelector('.list');
let cartQuantity = document.querySelector('.cartNotif');
let totalPrice = document.querySelector('.total');


let products = [
    {
        id: 1,
        name: 'Bed 1',
        image: 'bed1.jpg',
        category: 'bedroom',
        sub: '',
        title: 'Bed',
        new: 1,
        price: 20000
    },
    {
        id: 2,
        name: 'Bed 2',
        image: 'bed2.jpg',
        category: 'bedroom',
        sub: '',
        title: 'Bed',
        new: 0,
        price: 22000
    },
    {
        id: 3,
        name: 'Bed 3',
        image: 'bed3.jpg',
        category: 'bedroom',
        sub: '',
        title: 'Bed',
        new: 0,
        price: 22000
    },
    {
        id: 4,
        name: 'Bed 4',
        image: 'bed4.jpg',
        category: 'bedroom',
        sub: '',
        title: 'Bed',
        new: 0,
        price: 22000
    },
    {
        id: 5,
        name: 'Femininitē Mirror',
        image: 'femininitē mirror.jpg',
        category: 'bedroom',
        sub: 'accessories',
        title: 'Mirror',
        new: 0,
        price: 1000
    },
    {
        id: 6,
        name: 'Bedside Table',
        image: 'Bedside Tables.jpg',
        category: 'bedroom',
        sub: '',
        title: 'Table',
        new: 0,
        price: 2500
    },
    {
        id: 7,
        name: 'Wooden Nightstand',
        image: 'Wooden Nightstand.jpg',
        category: 'bedroom',
        sub: '',
        title: 'Table',
        new: 0,
        price: 2500
    },
    {
        id: 8,
        name: 'Leibal Clock',
        image: 'Leibal clock.jpg',
        category: 'accessories',
        sub: 'livingroom',
        title: 'Clock',
        new: 0,
        price: 300
    },
    {
        id: 9,
        name: 'Wall Clock',
        image: 'Anglepoise Original 1227 Brass Wall Light.jpg',
        category: 'accessories',
        sub: 'livingroom',
        title: 'Clock',
        new: 1,
        price: 500
    },
    {
        id: 10,
        name: 'Black Wall Clock',
        image: 'clock.jpg',
        category: 'accessories',
        sub: 'livingroom',
        title: 'Clock',
        new: 0,
        price: 500
    },
    {
        id: 11,
        name: 'Cute Penguin Rattan Basket',
        image: 'Cute Penguin Rattan Basket.jpg',
        category: 'accessories',
        sub: 'bedroom livingroom',
        title: 'Basket',
        new: 1,
        price: 299
    },
    {
        id: 12,
        name: 'Cute Dinosaur Rattan Basket',
        image: 'Dino.jpg',
        category: 'accessories',
        sub: 'bedroom livingroom',
        title: 'Basket',
        new: 0,
        price: 299
    },
    {
        id: 13,
        name: 'Cute Cat Rattan Basket',
        image: 'Woven Cat-Shaped Storage Basket.jpg',
        category: 'accessories',
        sub: 'bedroom livingroom',
        title: 'Basket',
        new: 0,
        price: 299
    },
    {
        id: 14,
        name: 'Woven Rattan Basket',
        image: 'Rattan Basket.jpg',
        category: 'accessories',
        sub: 'bedroom livingroom',
        title: 'Basket',
        new: 0,
        price: 299
    },
    {
        id: 15,
        name: 'Circular Shelves',
        image: 'Circular Shelves.jpg',
        category: 'accessories',
        sub: 'bedroom livingroom',
        title: 'Shelves',
        new: 0,
        price: 499
    },
    {
        id: 16,
        name: 'Shelves',
        image: 'shelves.jpg',
        category: 'accessories',
        sub: 'bedroom livingroom',
        title: 'Shelves',
        new: 0,
        price: 449
    },
    {
        id: 17,
        name: 'Modern Wall Shelves',
        image: 'Modern Wall Shelves.jpg',
        category: 'accessories',
        sub: 'bedroom livingroom',
        title: 'Shelves',
        new: 0,
        price: 499
    },
    {
        id: 18,
        name: 'Mirror',
        image: 'mirror.jpg',
        category: 'restroom',
        sub: 'accessories',
        title: 'Mirror',
        new: 0,
        price: 699
    },
    {
        id: 19,
        name: 'Bathroom Cabinet with Round Mirror',
        image: 'Bathroom Cabinet with Round Mirror.jpg',
        category: 'restroom',
        sub: 'accessories',
        title: 'Mirror',
        new: 0,
        price: 899
    },
    {
        id: 20,
        name: 'Wooden Roller Towel',
        image: 'roller towel.jpg',
        category: 'restroom',
        sub: 'accessories',
        title: 'Roller Towel',
        new: 0,
        price: 149
    },
    {
        id: 21,
        name: 'Swivel Chair',
        image: 'Swivel Chair Chairs.jpg',
        category: 'livingroom',
        sub: 'accessories',
        title: 'Chair',
        new: 0,
        price: 2599
    },
    {
        id: 22,
        name: 'Boucle Chair',
        image: 'mini chair.jpg',
        category: 'livingroom',
        sub: 'accessories',
        title: 'Chair',
        new: 0,
        price: 2599
    },
    {
        id: 23,
        name: 'Holden Lounge Chair',
        image: 'Holden Lounge Chair.jpg',
        category: 'livingroom',
        sub: 'accessories',
        title: 'Chair',
        new: 0,
        price: 2799
    },
    {
        id: 24,
        name: 'Lounge Chair',
        image: 'chair.jpg',
        category: 'livingroom',
        sub: 'accessories',
        title: 'Chair',
        new: 0,
        price: 2999
    },
    {
        id: 25,
        name: 'Sofatisch',
        image: 'livemaster.jpg',
        category: 'livingroom',
        sub: 'accessories',
        title: 'Table',
        new: 0,
        price: 999
    },
    {
        id: 26,
        name: 'Tambor Sofatisch',
        image: 'Tambor Sofatisch.jpg',
        category: 'livingroom',
        sub: 'accessories',
        title: 'Table',
        new: 0,
        price: 1199
    },
    {
        id: 27,
        name: 'Isobel Bookshelf',
        image: 'Living Room Cabinets.jpg',
        category: 'livingroom',
        sub: 'accessories',
        title: 'Bookshelf',
        new: 1,
        price: 1499
    },
    {
        id: 28,
        name: 'Primordial bookcase',
        image: 'Primordial bookcase.jpg',
        category: 'livingroom',
        sub: 'accessories',
        title: 'Bookshelf',
        new: 1,
        price: 1499
    },
    {
        id: 29,
        name: 'White Plant Pot',
        image: 'planter.jpg',
        category: 'accessories',
        sub: '',
        title: 'Plant Pot',
        new: 0,
        price: 199
    },
    {
        id: 30,
        name: 'White Plant Pot',
        image: 'pot.jpg',
        category: 'accessories',
        sub: '',
        title: 'Plant Pot',
        new: 0,
        price: 199
    },
    {
        id: 31,
        name: 'White Plant Pot',
        image: 'pot2.jpg',
        category: 'accessories',
        sub: '',
        title: 'Plant Pot',
        new: 0,
        price: 199
    },
    {
        id: 32,
        name: 'Ballymena Bamboo Bread Box',
        image: 'Ballymena Bamboo Bread Box.jpg',
        category: 'kitchen',
        sub: 'accessories',
        title: 'Bread Box',
        new: 1,
        price: 799
    },
    {
        id: 33,
        name: 'Modern Fruit Baskets',
        image: 'Modern Fruit Baskets.jpg',
        category: 'kitchen',
        sub: 'accessories',
        title: 'Basket',
        new: 0,
        price: 299
    },
    {
        id: 34,
        name: 'Kitchen Shelf Organizers',
        image: 'Kitchen furniture.jpg',
        category: 'kitchen',
        sub: 'accessories',
        title: 'Organizers',
        new: 0,
        price: 299
    },
    {
        id: 35,
        name: 'Hammered Glass Storage Jar Set',
        image: 'Hammered Glass Storage Jar Set.jpg',
        category: 'kitchen',
        sub: 'accessories',
        title: 'Jar',
        new: 0,
        price: 299
    },
    {
        id: 36,
        name: 'Knife Sets with Crate & Barrel',
        image: 'Knife Sets_ Wusthof, Shun and Global _ Crate & Barrel.jpg',
        category: 'kitchen',
        sub: 'accessories',
        title: 'Knife w/ Barrel',
        new: 0,
        price: 1000
    },

];

const listItems = [];
// const listItems = [JSON.parse(localStorage.getItem('shop'))];

function initApp(){
    products.forEach((value, key)=>{
        if(value.new > 0) {
            let newArrival = document.createElement('div');
            newArrival.classList.add('col-md-4');
            newArrival.classList.add(value.category);
            newArrival.innerHTML = `
                <div class="card justify-center items-center w-full border-2 border-solid border-black rounded-[16px] my-0 mx-[auto] relative">
                    <div class="card-image w-full h-full  relative">
                        <img src="images/${value.image}" alt="" class="card-img rounded-t-[14px] object-cover w-full h-[370px] relative">

                        <div class="category absolute top-0 left-0 p-[15px]">
                            <h2 class="text-[14px] font-[600] text-white bg-black py-[5px] px-[12px] rounded-[20px] uppercase">${value.category}</h2>
                        </div>
                    </div>


                    <div class="card-content w-full flex justify-between items-center gap-2 px-3 pt-3 pb-4">
                        <div class="desc">
                            <h1 class="text-[18px] font-[600] text-black">${value.name}</h1>
                            <p class="text-[14px] text-[#7d7d7d] leading-[9px]">${value.name}</p>
                            <h2 class="text-[16px] font-[700] text-black">$${value.price.toLocaleString()}</h2>
                        </div>

                        <button class="addcart-btn text-white hover:text-black text-[24px] bg-black hover:bg-white border-2 border-solid border-black py-[5px] px-[6px] rounded-[50%] cursor-pointer flex justify-center items-center gap-2" onclick="addCart(${key});" id="addcart-btn">
                            <i class='bx bx-cart-alt' title="Add to Cart"></i>
                        </button>
                        
                    </div>
                </div>
            
            `;
            cards.appendChild(newArrival);
        }


    });
}

initApp();


function addCart(key){
    if(listItems[key] == null){
        listItems[key] = JSON.parse(JSON.stringify(products[key]));
        listItems[key].quantity = 1;
    }
    
    // localStorage.setItem('shop', JSON.stringify(listItems[key]));


    reloadItems()
}


function reloadItems(){
    listCart.innerHTML = '';
    let count = 0;
    let total = 0;
    listItems.forEach((value, key)=>{
        total = total + value.price;
        count = count + value.quantity; 

        if(value != null){
            let lists = document.createElement('div');
            lists.classList.add('lists');
            lists.innerHTML = `
                <div class="w-full max-w-[70px] h-[70px] object-cover">
                    <img src="images/${value.image}" alt="" class="w-full h-full">
                </div>

                <div class="w-full flex flex-col justify-center gap-2">
                    <div class="w-full flex flex-row justify-between items-center">
                        <h1 class="text-[14px] text-black">${value.name}</h1>
                        <i class='bx bx-trash text-[18px] cursor-pointer bg-white hover:bg-black text-black hover:text-white py-[5px] px-[5px] rounded-[20px]' title="Remove"  onclick="del(${key})"></i>
                    </div>

                    <div class="w-full flex flex-row justify-between items-center">
                        <div class="flex flex-row justify-center items-center">
                            <button class="flex justify-center items-center border-2 border-r-0 border-solid border-gray-400  rounded-l-[20px] hover:bg-black hover:text-white cursor-pointer" onclick="changeQuantity(${key}, ${value.quantity - 1})">
                                <i class='bx bx-minus px-[2px] py-[4px]'></i>
                            </button>
                            
                            <div class="flex justify-center items-center border-2 border-solid border-gray-400 px-2.5">
                                <p>${value.quantity}</p>
                            </div>

                            <button class="flex justify-center items-center border-2 border-l-0  border-solid border-gray-400 rounded-r-[20px] hover:bg-black hover:text-white cursor-pointer" onclick="changeQuantity(${key}, ${value.quantity + 1})">
                                <i class='bx bx-plus px-[2px] py-[4px]' ></i>
                            </button>

                        </div>

                        <h1 class="text-black text-[14px]">$${value.price.toLocaleString()}</h1>
                    </div>

                </div>
            `;
            listCart.appendChild(lists);
        }


    })
    totalPrice.innerHTML = '$' + total.toLocaleString();
    cartQuantity.innerHTML = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listItems[key];


    }else{
        listItems[key].quantity = quantity;
        listItems[key].price = quantity * products[key].price;

        // localStorage.setItem('shop', JSON.stringify(listItems[key]));
    }

    

    reloadItems()
}

function del(key){
    delete listItems[key];


    reloadItems()
}





