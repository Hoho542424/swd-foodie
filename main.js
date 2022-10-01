import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";
import "waypoints/lib/noframework.waypoints";
import * as bootstrap from 'bootstrap';

// Typed.Js သုံးထားတာ

let options = {
    strings: ['Food...', 'Drink...'],
    typeSpeed: 300,
    loop: true,
    backSpeed: 200,
    backDelay: 1000,
};

let typed = new Typed('.element', options);


// ScrollReveal သုံးထားတာ
let toDown = {
    distance: '150px',
    origin: 'top',
    interval: 500,
    duration: 1000,

};

ScrollReveal().reveal('.to-down', toDown);

let toRight = {
    distance: '200px',
    origin: 'left',
    interval: 500,
    duration: 1500,

};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
    distance: '200px',
    origin: 'right',
    interval: 500,
    duration: 1500,

};

ScrollReveal().reveal('.to-left', toLeft);

// waypoint သုံးထားတာ



 new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {

        let oldNavLink = document.querySelector(".nav-link.active")
        if(oldNavLink != null) {
            oldNavLink.classList.remove("active")
        }
        let currentNavLink = document.querySelector(`[href="#home"]`)
        currentNavLink.classList.add("active",);
        // if (currentNavLink.classList.contains(active))

    },
    offset: "10%"
})

let sections = ['about' , 'services' , 'menus'];

sections.forEach(function(section) {
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink = document.querySelector(".nav-link.active")
            oldNavLink.classList.remove("active")
            let currentNavLink = document.querySelector(`[href="#${section}"]`)
            currentNavLink.classList.add("active");



        },
        offset: "40%"
    })
});


new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".nav-link.active")
        oldNavLink.classList.remove("active")
        let currentNavLink = document.querySelector(`[href="#contact"]`)
        currentNavLink.classList.add("active");



    },
    offset: "70%"
})



let menuLists = [
    {
        id:1,
        img : "public/img/plate1.png",
        title: "Barbecue Salad",
        description : "Special Delicious DIsh",
        currency : "$",
        price : 22.4,
    } ,

    {
        id:2,
        img : "public/img/plate2.png",
        title: "Salad With Fish",
        description : "Special Delicious DIsh",
        currency : "$",
        price : 30.4,
    } ,

    {
        id:3,
        img : "public/img/plate3.png",
        title: "Spanish Salad",
        description : "Special Delicious DIsh",
        currency : "$",
        price : 32.4,
    },
];

let menuRow = document.getElementById("menuRow");

menuLists.forEach(function (menuList) {
    let div = document.createElement('div')
    div.classList.add("col-8", "col-md-4" , "col-lg-2");
    div.innerHTML = `
        <div class="card plate-card mb-5">
            <img src="${menuList.img}" class="w-75 mx-auto d-block my-4" alt="">
            <div class="card-body">
                <p class="fw-bold">${menuList.title}</p>
                <p class="text-black-50 fw-semibold small">${menuList.description}/p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="mb-0 fw-semibold">${menuList.currency} ${menuList.price}</p>
                    <button class="btn btn-primary">
                        <i class="bi bi-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    menuRow.append(div);

})