document.addEventListener("DOMContentLoaded", function () {


    console.log("House of Coco V1.2 loaded");


    /* =========================
       LANGUAGE SYSTEM
    ========================== */


    let currentLanguage = "en";


    const translations = {


        en: {


            brandSubtitle:
                "Homemade meals for busy people",


            navMenu:
                "This Week's Menu",


            navHow:
                "How It Works",


            orderNow:
                "Order Now",


            eyebrow:
                "WEEKLY HOMEMADE MEALS",


            heroTitle:
                "A proper meal.<br>Without the cooking.",


            heroDescription:
                "Homemade food prepared for busy people who want something comforting, convenient, and delicious.",


            viewMenu:
                "View This Week's Menu →",


            learnMore:
                "How It Works",


            heroNote:
                "Fresh menus updated weekly",


            featuredThisWeek:
                "FEATURED THIS WEEK",


            available:
                "AVAILABLE",


            homemadeMeal:
                "HOMEMADE MEAL",


            menuEyebrow:
                "CURRENT MENU",


            menuTitle:
                "This week's menu.",


            menuDescription:
                "Choose what you'd like, tell us where to deliver, and we'll take care of the rest.",


            weekOf:
                "WEEK OF",


            orderEyebrow:
                "YOUR ORDER",


            orderTitle:
                "Almost there.",


            orderDescription:
                "Tell us what you would like and where you would like it delivered.",


            nameLabel:
                "Your Name",


            namePlaceholder:
                "e.g. Sarah",


            phoneLabel:
                "WhatsApp Number",


            phonePlaceholder:
                "e.g. 012 345 6789",


            addressLabel:
                "Delivery Address",


            addressPlaceholder:
                "Enter your delivery address",


            deliveryEstimate:
                "Estimated delivery fee",


            deliveryNote:
                "Final delivery fee may vary depending on the actual Lalamove quotation.",


            summaryTitle:
                "Your order",


            clearOrder:
                "Clear",


            emptyOrder:
                "Select something from the menu to get started.",


            estimatedTotal:
                "Estimated Total",


            submitOrder:
                "Continue to WhatsApp →",


            howEyebrow:
                "HOW IT WORKS",


            howTitle:
                "Simple from craving<br>to delivery.",


            stepOneTitle:
                "Choose your meal",


            stepOneDescription:
                "Browse this week's homemade menu and select what you would like.",


            stepTwoTitle:
                "Tell us where",


            stepTwoDescription:
                "Enter your delivery address and receive an estimated delivery fee.",


            stepThreeTitle:
                "We prepare the rest",


            stepThreeDescription:
                "Confirm your order and we will prepare your meal for delivery.",


            footerText:
                "Homemade meals for busy people.",


            footerOrder:
                "Order This Week's Menu"


        },


        zh: {


            brandSubtitle:
                "为忙碌生活准备的家常美食",


            navMenu:
                "本周菜单",


            navHow:
                "如何运作",


            orderNow:
                "立即订购",


            eyebrow:
                "每周家常美食",


            heroTitle:
                "想吃一顿好的。<br>不用自己煮。",


            heroDescription:
                "为忙碌的人准备的家常美食。方便、温暖，也好吃。",


            viewMenu:
                "查看本周菜单 →",


            learnMore:
                "如何运作",


            heroNote:
                "每周更新菜单",


            featuredThisWeek:
                "本周精选",


            available:
                "可订购",


            homemadeMeal:
                "家常美食",


            menuEyebrow:
                "当前菜单",


            menuTitle:
                "本周菜单。",


            menuDescription:
                "选择你想吃的食物，告诉我们送到哪里，剩下的交给我们。",


            weekOf:
                "本周",


            orderEyebrow:
                "你的订单",


            orderTitle:
                "快完成了。",


            orderDescription:
                "告诉我们你想吃什么，以及需要送到哪里。",


            nameLabel:
                "你的名字",


            namePlaceholder:
                "例如：Sarah",


            phoneLabel:
                "WhatsApp号码",


            phonePlaceholder:
                "例如：012 345 6789",


            addressLabel:
                "配送地址",


            addressPlaceholder:
                "输入你的配送地址",


            deliveryEstimate:
                "预计配送费",


            deliveryNote:
                "最终配送费用可能会根据实际 Lalamove 报价有所不同。",


            summaryTitle:
                "你的订单",


            clearOrder:
                "清除",


            emptyOrder:
                "从菜单选择食物开始。",


            estimatedTotal:
                "预计总额",


            submitOrder:
                "继续前往 WhatsApp →",


            howEyebrow:
                "如何运作",


            howTitle:
                "从想吃什么<br>到送到家。",


            stepOneTitle:
                "选择你的食物",


            stepOneDescription:
                "浏览本周家常菜单并选择你想吃的食物。",


            stepTwoTitle:
                "告诉我们地址",


            stepTwoDescription:
                "输入配送地址并查看预计配送费用。",


            stepThreeTitle:
                "我们准备好一切",


            stepThreeDescription:
                "确认订单，我们会准备你的食物并安排配送。",


            footerText:
                "为忙碌生活准备的家常美食。",


            footerOrder:
                "订购本周菜单"


        }


    };


    function updateLanguage() {


        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {


                const key =
                    element.getAttribute("data-i18n");


                if (translations[currentLanguage][key]) {


                    element.innerHTML =
                        translations[currentLanguage][key];


                }


            });


        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(function (element) {


                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );


                if (translations[currentLanguage][key]) {


                    element.placeholder =
                        translations[currentLanguage][key];


                }


            });


        document
            .getElementById("languageLabel")
            .textContent =
                currentLanguage === "en"
                    ? "EN"
                    : "中";


    }


    document
        .getElementById("languageToggle")
        .addEventListener("click", function () {


            currentLanguage =
                currentLanguage === "en"
                    ? "zh"
                    : "en";


            updateLanguage();


            renderMenu(currentMenu);


            renderOrder();


        });


    /* =========================
       DARK MODE
    ========================== */


    const themeToggle =
        document.getElementById("themeToggle");


    const savedTheme =
        localStorage.getItem(
            "houseOfCocoTheme"
        );


    if (savedTheme === "dark") {


        document.body.classList.add(
            "dark-mode"
        );


        themeToggle.textContent =
            "☀";


    }


    themeToggle.addEventListener(
        "click",
        function () {


            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            themeToggle.textContent =
                isDark
                    ? "☀"
                    : "☾";


            localStorage.setItem(
                "houseOfCocoTheme",
                isDark
                    ? "dark"
                    : "light"
            );


        }
    );


    /* =========================
       MENU DATA
    ========================== */


    const menus = {


        week20: {


            week:
                "20 JUL — 24 JUL 2026",


            featured: {


                name:
                    "Mongolian Chicken",


                nameChinese:
                    "蒙古鸡",


                price:
                    12.00,


                image:
                    "images/menu-20-7.jpg"


            },


            items: [


                {


                    id:
                        201,


                    day:
                        "MON",


                    dayChinese:
                        "星期一",


                    name:
                        "Mongolian Chicken",


                    nameChinese:
                        "蒙古鸡",


                    category:
                        "MONDAY MENU",


                    description:
                        "Tomato Scrambled Egg • Daily Seasonal Vegetables • Barley Water (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-20-7.jpg"


                },


                {


                    id:
                        202,


                    day:
                        "TUE",


                    dayChinese:
                        "星期二",


                    name:
                        "Sweet and Sour Pork",


                    nameChinese:
                        "咕佬肉",


                    category:
                        "TUESDAY MENU",


                    description:
                        "Dried Radish Tofu • Daily Seasonal Vegetables • Old Cucumber Soup (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-20-7.jpg"


                },


                {


                    id:
                        203,


                    day:
                        "WED",


                    dayChinese:
                        "星期三",


                    name:
                        "Braised Chicken with Beancurd Stick",


                    nameChinese:
                        "腐竹焖鸡",


                    category:
                        "WEDNESDAY MENU",


                    description:
                        "Scallion Omelette • Daily Seasonal Vegetables • Luo Han Guo Drink (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-20-7.jpg"


                },


                {


                    id:
                        204,


                    day:
                        "THU",


                    dayChinese:
                        "星期四",


                    name:
                        "Thai Basil Pork",


                    nameChinese:
                        "打抛猪肉",


                    category:
                        "THURSDAY MENU",


                    description:
                        "Fried Egg • Daily Seasonal Vegetables • Radish Soup (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-20-7.jpg"


                },


                {


                    id:
                        205,


                    day:
                        "FRI",


                    dayChinese:
                        "星期五",


                    name:
                        "Curry Chicken",


                    nameChinese:
                        "咖喱鸡",


                    category:
                        "FRIDAY MENU",


                    description:
                        "Radish Shredded Omelette • Daily Seasonal Vegetables • Green Bean Dessert (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-20-7.jpg"


                }


            ]


        },


        week13: {


            week:
                "13 JUL — 17 JUL 2026",


            featured: {


                name:
                    "Garlic Honey Fried Chicken",


                nameChinese:
                    "蒜香蜂蜜炸鸡",


                price:
                    12.00,


                image:
                    "images/menu-13-7.jpg"


            },


            items: [


                {


                    id:
                        131,


                    day:
                        "MON",


                    dayChinese:
                        "星期一",


                    name:
                        "Garlic Honey Fried Chicken",


                    nameChinese:
                        "蒜香蜂蜜炸鸡",


                    category:
                        "MONDAY MENU",


                    description:
                        "Mapo Tofu • Daily Seasonal Vegetables • Seaweed Egg Drop Soup (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-13-7.jpg"


                },


                {


                    id:
                        132,


                    day:
                        "TUE",


                    dayChinese:
                        "星期二",


                    name:
                        "Japanese Style Onion Chicken",


                    nameChinese:
                        "日式洋葱鸡",


                    category:
                        "TUESDAY MENU",


                    description:
                        "Korean Glass Noodle Salad • Daily Seasonal Vegetables • Chrysanthemum Tea (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-13-7.jpg"


                },


                {


                    id:
                        133,


                    day:
                        "WED",


                    dayChinese:
                        "星期三",


                    name:
                        "Braised Pork Ribs with Doubanjiang",


                    nameChinese:
                        "豆瓣酱焖排骨",


                    category:
                        "WEDNESDAY MENU",


                    description:
                        "Fried Egg • Daily Seasonal Vegetables • Barley Water (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-13-7.jpg"


                },


                {


                    id:
                        134,


                    day:
                        "THU",


                    dayChinese:
                        "星期四",


                    name:
                        "Stir-Fried Pork with Ginger & Scallion",


                    nameChinese:
                        "姜葱猪肉",


                    category:
                        "THURSDAY MENU",


                    description:
                        "Yu Xiang Style Scrambled Egg • Daily Seasonal Vegetables • Lotus Root Soup (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-13-7.jpg"


                },


                {


                    id:
                        135,


                    day:
                        "FRI",


                    dayChinese:
                        "星期五",


                    name:
                        "Braised Chicken with Mushroom",


                    nameChinese:
                        "蘑菇焖鸡",


                    category:
                        "FRIDAY MENU",


                    description:
                        "Stir-Fried Green Beans with Egg • Daily Seasonal Vegetables • Red Bean Dessert (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-13-7.jpg"


                }


            ]


        },


        week6: {


            week:
                "6 JUL — 10 JUL 2026",


            featured: {


                name:
                    "Creamy Butter Chicken",


                nameChinese:
                    "金丝奶油鸡",


                price:
                    12.00,


                image:
                    "images/menu-6-7.jpg"


            },


            items: [


                {


                    id:
                        61,


                    day:
                        "MON",


                    dayChinese:
                        "星期一",


                    name:
                        "Creamy Butter Chicken",


                    nameChinese:
                        "金丝奶油鸡",


                    category:
                        "MONDAY MENU",


                    description:
                        "Soybean Scrambled Egg • Daily Seasonal Vegetables • Cabbage Fish Ball Soup (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-6-7.jpg"


                },


                {


                    id:
                        62,


                    day:
                        "TUE",


                    dayChinese:
                        "星期二",


                    name:
                        "Salt & Pepper Stir-Fried Pork Slices",


                    nameChinese:
                        "椒盐炒猪肉片",


                    category:
                        "TUESDAY MENU",


                    description:
                        "Scallion Oil Tofu • Daily Seasonal Vegetables • Old Cucumber Soup (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-6-7.jpg"


                },


                {


                    id:
                        63,


                    day:
                        "WED",


                    dayChinese:
                        "星期三",


                    name:
                        "Japanese Style Curry Chicken",


                    nameChinese:
                        "日式咖喱鸡",


                    category:
                        "WEDNESDAY MENU",


                    description:
                        "Fried Egg • Daily Seasonal Vegetables • Chrysanthemum Tea (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-6-7.jpg"


                },


                {


                    id:
                        64,


                    day:
                        "THU",


                    dayChinese:
                        "星期四",


                    name:
                        "Braised Chicken with White Radish",


                    nameChinese:
                        "白萝卜焖鸡",


                    category:
                        "THURSDAY MENU",


                    description:
                        "Onion Omelette • Daily Seasonal Vegetables • Green Bean Dessert (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-6-7.jpg"


                },


                {


                    id:
                        65,


                    day:
                        "FRI",


                    dayChinese:
                        "星期五",


                    name:
                        "Taro Stewed Pork",


                    nameChinese:
                        "芋头炖猪肉",


                    category:
                        "FRIDAY MENU",


                    description:
                        "Dried Radish Omelette • Daily Seasonal Vegetables • Luo Han Guo Drink (FREE)",


                    price:
                        12.00,


                    image:
                        "images/menu-6-7.jpg"


                }


            ]


        }


    };


    /* =========================
       ORDER STATE
    ========================== */


    let currentMenu =
        "week20";


    let order =
        [];


    /* =========================
       RENDER MENU
    ========================== */


    function renderMenu(menuKey) {


        const menu =
            menus[menuKey];


        currentMenu =
            menuKey;


        document
            .getElementById("menuWeek")
            .textContent =
                menu.week;


        document
            .getElementById("featuredMealName")
            .textContent =
                currentLanguage === "zh"
                    ? menu.featured.nameChinese
                    : menu.featured.name;


        document
            .getElementById("featuredMealPrice")
            .textContent =
                "RM " +
                menu.featured.price.toFixed(2);


        document
            .getElementById("featuredMealImage")
            .src =
                menu.featured.image;


        const menuGrid =
            document.getElementById(
                "menuGrid"
            );


        menuGrid.innerHTML =
            "";


        menu.items.forEach(function (item) {


            const card =
                document.createElement(
                    "article"
                );


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


                    <div class="menu-day">


                        <strong>

                            ${item.day}

                        </strong>


                        <span>

                            ${item.dayChinese}

                        </span>


                    </div>


                    <span class="menu-card-category">


                        ${item.category}


                    </span>


                    <h3>


                        ${
                            currentLanguage === "zh"

                                ? item.nameChinese

                                : item.name

                        }


                    </h3>


                    <p class="menu-name-chinese">


                        ${
                            currentLanguage === "zh"

                                ? item.name

                                : item.nameChinese

                        }


                    </p>


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


                            ${

                                currentLanguage === "zh"

                                    ? "添加 +"

                                    : "Add +"

                            }


                        </button>


                    </div>


                </div>


            `;


            menuGrid.appendChild(card);


        });


        document
            .querySelectorAll(".add-button")
            .forEach(function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const itemId =
                            Number(
                                this.dataset.id
                            );


                        addToOrder(itemId);


                    }
                );


            });


        updateAdminStatus(
            menuKey
        );


    }


    /* =========================
       ADD TO ORDER
    ========================== */


    function addToOrder(itemId) {


        const item =
            Object
                .values(menus)
                .flatMap(
                    menu =>
                        menu.items
                )
                .find(
                    item =>
                        item.id === itemId
                );


        const existingItem =
            order.find(
                orderItem =>
                    orderItem.id === itemId
            );


        if (existingItem) {


            existingItem.quantity += 1;


        } else {


            order.push({


                ...item,


                quantity:
                    1


            });


        }


        renderOrder();


        document
            .getElementById("order")
            .scrollIntoView({


                behavior:
                    "smooth"


            });


    }


    /* =========================
       RENDER ORDER
    ========================== */


    function renderOrder() {


        const orderItems =
            document
                .getElementById(
                    "orderItems"
                );


        const orderTotal =
            document
                .getElementById(
                    "orderTotal"
                );


        if (
            order.length === 0
        ) {


            orderItems.innerHTML = `


                <p class="empty-order">


                    ${
                        currentLanguage === "zh"

                            ? "从菜单选择食物开始。"

                            : "Select something from the menu to get started."

                    }


                </p>


            `;


            orderTotal.textContent =
                "RM 0.00";


            return;


        }


        orderItems.innerHTML =
            "";


        let total =
            0;


        order.forEach(function (item) {


            const itemTotal =
                item.price *
                item.quantity;


            total +=
                itemTotal;


            const orderLine =
                document.createElement(
                    "div"
                );


            orderLine.className =
                "order-line";


            orderLine.innerHTML = `


                <div class="order-line-name">


                    <strong>


                        ${

                            currentLanguage === "zh"

                                ? item.nameChinese

                                : item.name

                        }


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
                .querySelector(
                    '[data-action="decrease"]'
                )
                .addEventListener(
                    "click",
                    function () {


                        item.quantity -=
                            1;


                        if (
                            item.quantity <=
                            0
                        ) {


                            order =
                                order.filter(
                                    orderItem =>
                                        orderItem.id !==
                                        item.id
                                );


                        }


                        renderOrder();


                    }
                );


            orderLine
                .querySelector(
                    '[data-action="increase"]'
                )
                .addEventListener(
                    "click",
                    function () {


                        item.quantity +=
                            1;


                        renderOrder();


                    }
                );


            orderItems.appendChild(
                orderLine
            );


        });


        orderTotal.textContent =
            "RM " +
            total.toFixed(2);


    }


    /* =========================
       CLEAR ORDER
    ========================== */


    document
        .getElementById(
            "clearOrder"
        )
        .addEventListener(
            "click",
            function () {


                order =
                    [];


                renderOrder();


            }
        );


    /* =========================
       DELIVERY ESTIMATION
    ========================== */


    const addressInput =
        document
            .getElementById(
                "deliveryAddress"
            );


    addressInput
        .addEventListener(
            "input",
            function () {


                const address =
                    this.value
                        .trim()
                        .toLowerCase();


                const deliveryFee =
                    document
                        .getElementById(
                            "deliveryFee"
                        );


                if (
                    address.length <
                    8
                ) {


                    deliveryFee.textContent =
                        currentLanguage === "zh"

                            ? "请输入地址"

                            : "Enter your address";


                    return;


                }


                let estimatedFee =
                    12;


                if (


                    address.includes(
                        "seremban"
                    )


                    ||


                    address.includes(
                        "seremban 2"
                    )


                    ||


                    address.includes(
                        "s2"
                    )


                ) {


                    estimatedFee =
                        8;


                }


                else if (


                    address.includes(
                        "nilai"
                    )


                ) {


                    estimatedFee =
                        15;


                }


                else if (


                    address.includes(
                        "kuala lumpur"
                    )


                    ||


                    address.includes(
                        "kl"
                    )


                ) {


                    estimatedFee =
                        30;


                }


                deliveryFee.textContent =


                    currentLanguage === "zh"


                        ? "预计 RM " +
                          estimatedFee.toFixed(2)


                        : "From RM " +
                          estimatedFee.toFixed(2);


            }
        );


    /* =========================
       MENU SWITCHER
    ========================== */


    document
        .querySelectorAll(
            ".menu-switch-button"
        )
        .forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const selectedMenu =
                            this.dataset.menu;


                        document
                            .querySelectorAll(
                                ".menu-switch-button"
                            )
                            .forEach(
                                function (
                                    btn
                                ) {


                                    btn.classList
                                        .remove(
                                            "active"
                                        );


                                }
                            );


                        this.classList.add(
                            "active"
                        );


                        order =
                            [];


                        renderMenu(
                            selectedMenu
                        );


                        renderOrder();


                    }
                );


            }
        );


    function updateAdminStatus(
        menuKey
    ) {


        const status =
            document
                .getElementById(
                    "adminStatusText"
                );


        const menu =
            menus[menuKey];


        status.textContent =


            currentLanguage === "zh"


                ? menu.week +
                  " 菜单目前正在使用"


                : menu.week +
                  " menu is currently live";


    }


    /* =========================
       ORDER FORM
    ========================== */


    document
        .getElementById(
            "orderForm"
        )
        .addEventListener(
            "submit",
            function (event) {


                event.preventDefault();


                if (
                    order.length ===
                    0
                ) {


                    alert(


                        currentLanguage === "zh"


                            ? "请至少选择一项菜单。"


                            : "Please select at least one item from the menu."


                    );


                    return;


                }


                const name =
                    document
                        .getElementById(
                            "customerName"
                        )
                        .value;


                const phone =
                    document
                        .getElementById(
                            "customerPhone"
                        )
                        .value;


                const address =
                    document
                        .getElementById(
                            "deliveryAddress"
                        )
                        .value;


                let message =


                    "Hello House of Coco!%0A%0A";


                message +=


                    "I would like to place an order.%0A%0A";


                message +=


                    "Name: " +
                    name +
                    "%0A";


                message +=


                    "WhatsApp: " +
                    phone +
                    "%0A";


                message +=


                    "Delivery Address: " +
                    address +
                    "%0A%0A";


                message +=


                    "ORDER:%0A";


                order.forEach(
                    function (item) {


                        message +=


                            item.name +
                            " x " +
                            item.quantity +
                            " - RM " +
                            (
                                item.price *
                                item.quantity
                            ).toFixed(
                                2
                            ) +
                            "%0A";


                    }
                );


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


            }
        );


    /* =========================
       INITIALISE
    ========================== */


    renderMenu(
        "week20"
    );


    renderOrder();


    updateLanguage();


});
