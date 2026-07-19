document.addEventListener("DOMContentLoaded", function () {

    console.log("House of Coco website loaded");


    /* =========================
       LANGUAGE SYSTEM
    ========================== */

    let currentLanguage = "en";


    const translations = {

        en: {

            brandSubtitle: "Homemade meals for busy people",

            navMenu: "This Week's Menu",

            navHow: "How It Works",

            orderNow: "Order Now",

            eyebrow: "WEEKLY HOMEMADE MEALS",

            heroTitle: "A proper meal.<br>Without the cooking.",

            heroDescription:
                "Homemade food prepared for busy people who want something comforting, convenient, and delicious.",

            viewMenu: "View This Week's Menu →",

            learnMore: "How It Works",

            heroNote: "Fresh menus updated weekly",

            featuredThisWeek: "FEATURED THIS WEEK",

            available: "AVAILABLE",

            homemadeMeal: "HOMEMADE MEAL",

            menuEyebrow: "CURRENT MENU",

            menuTitle: "This week's menu.",

            menuDescription:
                "Choose what you'd like, tell us where to deliver, and we'll take care of the rest.",

            weekOf: "WEEK OF",

            orderEyebrow: "YOUR ORDER",

            orderTitle: "Almost there.",

            orderDescription:
                "Tell us what you would like and where you would like it delivered.",

            nameLabel: "Your Name",

            namePlaceholder: "e.g. Sarah",

            phoneLabel: "WhatsApp Number",

            phonePlaceholder: "e.g. 012 345 6789",

            addressLabel: "Delivery Address",

            addressPlaceholder: "Enter your delivery address",

            deliveryEstimate: "Estimated delivery fee",

            deliveryNote:
                "Final delivery fee may vary depending on the actual Lalamove quotation.",

            summaryTitle: "Your order",

            clearOrder: "Clear",

            emptyOrder:
                "Select something from the menu to get started.",

            estimatedTotal: "Estimated Total",

            submitOrder: "Continue to WhatsApp →",

            howEyebrow: "HOW IT WORKS",

            howTitle: "Simple from craving<br>to delivery.",

            stepOneTitle: "Choose your meal",

            stepOneDescription:
                "Browse this week's homemade menu and select what you would like.",

            stepTwoTitle: "Tell us where",

            stepTwoDescription:
                "Enter your delivery address and receive an estimated delivery fee.",

            stepThreeTitle: "We prepare the rest",

            stepThreeDescription:
                "Confirm your order and we will prepare your meal for delivery.",

            footerText: "Homemade meals for busy people.",

            footerOrder: "Order This Week's Menu"

        },


        zh: {

            brandSubtitle: "为忙碌生活准备的家常美食",

            navMenu: "本周菜单",

            navHow: "如何运作",

            orderNow: "立即订购",

            eyebrow: "每周家常美食",

            heroTitle: "想吃一顿好的。<br>不用自己煮。",

            heroDescription:
                "为忙碌的人准备的家常美食。方便、温暖，也好吃。",

            viewMenu: "查看本周菜单 →",

            learnMore: "如何运作",

            heroNote: "每周更新菜单",

            featuredThisWeek: "本周精选",

            available: "可订购",

            homemadeMeal: "家常美食",

            menuEyebrow: "当前菜单",

            menuTitle: "本周菜单。",

            menuDescription:
                "选择你想吃的食物，告诉我们送到哪里，剩下的交给我们。",

            weekOf: "本周",

            orderEyebrow: "你的订单",

            orderTitle: "快完成了。",

            orderDescription:
                "告诉我们你想吃什么，以及需要送到哪里。",

            nameLabel: "你的名字",

            namePlaceholder: "例如：Sarah",

            phoneLabel: "WhatsApp号码",

            phonePlaceholder: "例如：012 345 6789",

            addressLabel: "配送地址",

            addressPlaceholder: "输入你的配送地址",

            deliveryEstimate: "预计配送费",

            deliveryNote:
                "最终配送费用可能会根据实际 Lalamove 报价而有所不同。",

            summaryTitle: "你的订单",

            clearOrder: "清除",

            emptyOrder:
                "从菜单选择食物开始。",

            estimatedTotal: "预计总额",

            submitOrder: "继续前往 WhatsApp →",

            howEyebrow: "如何运作",

            howTitle: "从想吃什么<br>到送到家。",

            stepOneTitle: "选择你的食物",

            stepOneDescription:
                "浏览本周家常菜单并选择你想吃的食物。",

            stepTwoTitle: "告诉我们地址",

            stepTwoDescription:
                "输入配送地址并查看预计配送费用。",

            stepThreeTitle: "我们准备好一切",

            stepThreeDescription:
                "确认订单，我们会准备你的食物并安排配送。",

            footerText: "为忙碌生活准备的家常美食。",

            footerOrder: "订购本周菜单"

        }

    };


    function updateLanguage() {

        const elements = document.querySelectorAll("[data-i18n]");

        elements.forEach(function (element) {

            const key = element.getAttribute("data-i18n");

            if (translations[currentLanguage][key]) {

                element.innerHTML =
                    translations[currentLanguage][key];

            }

        });


        const placeholders =
            document.querySelectorAll("[data-i18n-placeholder]");

        placeholders.forEach(function (element) {

            const key =
                element.getAttribute("data-i18n-placeholder");

            if (translations[currentLanguage][key]) {

                element.placeholder =
                    translations[currentLanguage][key];

            }

        });


        document.getElementById("languageLabel").textContent =
            currentLanguage === "en" ? "EN" : "中";

    }


    document
        .getElementById("languageToggle")
        .addEventListener("click", function () {

            currentLanguage =
                currentLanguage === "en" ? "zh" : "en";

            updateLanguage();

        });


    /* =========================
       DARK MODE
    ========================== */

    const themeToggle =
        document.getElementById("themeToggle");


    const savedTheme =
        localStorage.getItem("houseOfCocoTheme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeToggle.textContent = "☀";

    }


    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        const isDark =
            document.body.classList.contains("dark-mode");


        themeToggle.textContent =
            isDark ? "☀" : "☾";


        localStorage.setItem(
            "houseOfCocoTheme",
            isDark ? "dark" : "light"
        );

    });


    /* =========================
       MENU DATA
    ========================== */

    const menus = {

        week1: {

            week: "20 JUL — 26 JUL 2026",

            featured: {

                name: "Chicken Bento Set",

                price: 12.00,

                image: "images/featured-meal.jpg"

            },

            items: [

                {

                    id: 1,

                    name: "Chicken Bento Set",

                    category: "HOMEMADE MEAL",

                    description:
                        "A comforting homemade meal prepared fresh for the week.",

                    price: 12.00,

                    image: "images/chicken-bento.jpg"

                },

                {

                    id: 2,

                    name: "Sushi Bake",

                    category: "SPECIAL MENU",

                    description:
                        "Creamy, savoury and perfect for sharing.",

                    price: 25.00,

                    image: "images/sushi-bake.jpg"

                },

                {

                    id: 3,

                    name: "Family Meal Set",

                    category: "FAMILY SET",

                    description:
                        "A larger homemade meal for the whole family.",

                    price: 38.00,

                    image: "images/family-meal.jpg"

                }

            ]

        },


        week2: {

            week: "27 JUL — 2 AUG 2026",

            featured: {

                name: "Teriyaki Chicken Set",

                price: 13.00,

                image: "images/teriyaki-chicken.jpg"

            },

            items: [

                {

                    id: 4,

                    name: "Teriyaki Chicken Set",

                    category: "HOMEMADE MEAL",

                    description:
                        "Tender chicken with a rich homemade teriyaki glaze.",

                    price: 13.00,

                    image: "images/teriyaki-chicken.jpg"

                },

                {

                    id: 5,

                    name: "Creamy Pasta Set",

                    category: "COMFORT FOOD",

                    description:
                        "Creamy homemade pasta made for a satisfying meal.",

                    price: 15.00,

                    image: "images/creamy-pasta.jpg"

                },

                {

                    id: 6,

                    name: "Weekend Sharing Set",

                    category: "FAMILY SET",

                    description:
                        "Perfect for a relaxed weekend meal at home.",

                    price: 42.00,

                    image: "images/weekend-set.jpg"

                }

            ]

        },


        week3: {

            week: "3 AUG — 9 AUG 2026",

            featured: {

                name: "Korean Chicken Set",

                price: 14.00,

                image: "images/korean-chicken.jpg"

            },

            items: [

                {

                    id: 7,

                    name: "Korean Chicken Set",

                    category: "HOMEMADE MEAL",

                    description:
                        "Sweet, savoury and comforting homemade Korean-style chicken.",

                    price: 14.00,

                    image: "images/korean-chicken.jpg"

                },

                {

                    id: 8,

                    name: "Baked Rice Set",

                    category: "COMFORT FOOD",

                    description:
                        "A warm baked rice meal for a satisfying lunch or dinner.",

                    price: 16.00,

                    image: "images/baked-rice.jpg"

                },

                {

                    id: 9,

                    name: "Coco Family Feast",

                    category: "FAMILY SET",

                    description:
                        "A generous set designed for sharing at home.",

                    price: 45.00,

                    image: "images/family-feast.jpg"

                }

            ]

        }

    };


    /* =========================
       ORDER STATE
    ========================== */

    let currentMenu = "week1";

    let order = [];


    /* =========================
       RENDER MENU
    ========================== */

    function renderMenu(menuKey) {

        const menu =
            menus[menuKey];


        currentMenu =
            menuKey;


        document.getElementById("menuWeek").textContent =
            menu.week;


        document.getElementById("featuredMealName").textContent =
            menu.featured.name;


        document.getElementById("featuredMealPrice").textContent =
            "RM " + menu.featured.price.toFixed(2);


        const featuredImage =
            document.querySelector(".hero-food-image img");


        featuredImage.src =
            menu.featured.image;


        const menuGrid =
            document.getElementById("menuGrid");


        menuGrid.innerHTML = "";


        menu.items.forEach(function (item) {

            const card =
                document.createElement("article");


            card.className =
                "menu-card";


            card.innerHTML = `

                <div class="menu-card-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="menu-card-content">

                    <span class="menu-card-category">

                        ${item.category}

                    </span>


                    <h3>

                        ${item.name}

                    </h3>


                    <p class="menu-card-description">

                        ${item.description}

                    </p>


                    <div class="menu-card-bottom">

                        <strong class="menu-card-price">

                            RM ${item.price.toFixed(2)}

                        </strong>


                        <button

                            class="add-button"

                            data-id="${item.id}"

                        >

                            Add +

                        </button>

                    </div>

                </div>

            `;


            menuGrid.appendChild(card);

        });


        document
            .querySelectorAll(".add-button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    const itemId =
                        Number(this.dataset.id);


                    addToOrder(itemId);

                });

            });


        updateAdminStatus(menuKey);

    }


    /* =========================
       ADD TO ORDER
    ========================== */

    function addToOrder(itemId) {

        const item =
            Object.values(menus)
                .flatMap(menu => menu.items)
                .find(item => item.id === itemId);


        const existingItem =
            order.find(orderItem => orderItem.id === itemId);


        if (existingItem) {

            existingItem.quantity += 1;

        } else {

            order.push({

                ...item,

                quantity: 1

            });

        }


        renderOrder();

        document
            .getElementById("order")
            .scrollIntoView({

                behavior: "smooth"

            });

    }


    /* =========================
       RENDER ORDER
    ========================== */

    function renderOrder() {

        const orderItems =
            document.getElementById("orderItems");


        const orderTotal =
            document.getElementById("orderTotal");


        if (order.length === 0) {

            orderItems.innerHTML = `

                <p class="empty-order">

                    Select something from the menu to get started.

                </p>

            `;


            orderTotal.textContent =
                "RM 0.00";


            return;

        }


        orderItems.innerHTML = "";


        let total = 0;


        order.forEach(function (item) {

            const itemTotal =
                item.price * item.quantity;


            total += itemTotal;


            const orderLine =
                document.createElement("div");


            orderLine.className =
                "order-line";


            orderLine.innerHTML = `

                <div class="order-line-name">

                    <strong>

                        ${item.name}

                    </strong>


                    <span>

                        RM ${item.price.toFixed(2)} each

                    </span>

                </div>


                <div class="quantity-controls">

                    <button data-action="decrease">

                        −

                    </button>


                    <span>

                        ${item.quantity}

                    </span>


                    <button data-action="increase">

                        +

                    </button>

                </div>

            `;


            orderLine
                .querySelector('[data-action="decrease"]')
                .addEventListener("click", function () {

                    item.quantity -= 1;


                    if (item.quantity <= 0) {

                        order =
                            order.filter(
                                orderItem =>
                                    orderItem.id !== item.id
                            );

                    }


                    renderOrder();

                });


            orderLine
                .querySelector('[data-action="increase"]')
                .addEventListener("click", function () {

                    item.quantity += 1;

                    renderOrder();

                });


            orderItems.appendChild(orderLine);

        });


        orderTotal.textContent =
            "RM " + total.toFixed(2);

    }


    /* =========================
       CLEAR ORDER
    ========================== */

    document
        .getElementById("clearOrder")
        .addEventListener("click", function () {

            order = [];

            renderOrder();

        });


    /* =========================
       DELIVERY ESTIMATE
    ========================== */

    const addressInput =
        document.getElementById("deliveryAddress");


    addressInput.addEventListener("input", function () {

        const address =
            this.value.trim();


        const deliveryFee =
            document.getElementById("deliveryFee");


        if (address.length < 8) {

            deliveryFee.textContent =
                "Enter your address";


            return;

        }


        /*
        =========================================

        DEMO DELIVERY ESTIMATION

        This is intentionally only a DEMO.

        Later this can be replaced with:

        1. Google Maps / Places API

        2. Lalamove quotation API

        3. Google Apps Script

        4. A free distance calculation system

        =========================================
        */


        const lowerAddress =
            address.toLowerCase();


        let estimatedFee =
            8;


        if (

            lowerAddress.includes("seremban") ||

            lowerAddress.includes("s2") ||

            lowerAddress.includes("seremban 2")

        ) {

            estimatedFee =
                8;

        }


        else if (

            lowerAddress.includes("nilai")

        ) {

            estimatedFee =
                15;

        }


        else if (

            lowerAddress.includes("kuala lumpur") ||

            lowerAddress.includes("kl")

        ) {

            estimatedFee =
                30;

        }


        else {

            estimatedFee =
                12;

        }


        deliveryFee.textContent =
            "From RM " + estimatedFee.toFixed(2);

    });


    /* =========================
       ADMIN MENU SWITCHER
    ========================== */

    document
        .querySelectorAll(".menu-switch-button")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const selectedMenu =
                    this.dataset.menu;


                document
                    .querySelectorAll(".menu-switch-button")
                    .forEach(function (btn) {

                        btn.classList.remove("active");

                    });


                this.classList.add("active");


                order = [];


                renderMenu(selectedMenu);

                renderOrder();

            });

        });


    function updateAdminStatus(menuKey) {

        const status =
            document.getElementById("adminStatusText");


        const weekNumber =
            menuKey.replace("week", "");


        status.textContent =
            "Week " + weekNumber + " menu is currently live";

    }


    /* =========================
       ORDER FORM
    ========================== */

    document
        .getElementById("orderForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();


            if (order.length === 0) {

                alert(
                    "Please select at least one item from the menu."
                );


                return;

            }


            const name =
                document
                    .getElementById("customerName")
                    .value;


            const phone =
                document
                    .getElementById("customerPhone")
                    .value;


            const address =
                document
                    .getElementById("deliveryAddress")
                    .value;


            let message =
                "Hello House of Coco!%0A%0A";


            message +=
                "I would like to place an order.%0A%0A";


            message +=
                "Name: " + name + "%0A";


            message +=
                "WhatsApp: " + phone + "%0A";


            message +=
                "Delivery Address: " + address + "%0A%0A";


            message +=
                "ORDER:%0A";


            order.forEach(function (item) {

                message +=

                    item.name +

                    " x " +

                    item.quantity +

                    " - RM " +

                    (

                        item.price *

                        item.quantity

                    ).toFixed(2) +

                    "%0A";

            });


            const whatsappNumber =
                "60123456789";


            const whatsappURL =
                "https://wa.me/" +

                whatsappNumber +

                "?text=" +

                message;


            window.open(
                whatsappURL,
                "_blank"
            );

        });


    /* =========================
       INITIALISE
    ========================== */

    renderMenu("week1");

    renderOrder();

    updateLanguage();


});
