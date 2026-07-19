document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       TRANSLATIONS
    ========================== */

    const translations = {

        en: {

            brandSubtitle: "Homemade meals for busy people",

            navMenu: "This Week's Menu",

            navHow: "How It Works",

            orderNow: "Order Now",

            eyebrow: "WEEKLY HOMEMADE MEALS",

            heroTitle: "A proper meal.<br>Without the cooking.",

            heroDescription: "Homemade food prepared for busy people who want something comforting, convenient, and delicious.",

            viewMenu: "View This Week's Menu →",

            learnMore: "How It Works",

            heroNote: "Fresh menus updated weekly",

            featuredThisWeek: "FEATURED THIS WEEK",

            available: "AVAILABLE",

            homemadeMeal: "HOMEMADE MEAL",

            menuEyebrow: "CURRENT MENU",

            menuTitle: "This week's menu.",

            menuDescription: "Choose what you'd like, tell us where to deliver, and we'll take care of the rest.",

            weekOf: "WEEK OF",

            orderEyebrow: "YOUR ORDER",

            orderTitle: "Almost there.",

            orderDescription: "Tell us what you would like and where you would like it delivered.",

            nameLabel: "Your Name",

            phoneLabel: "WhatsApp Number",

            addressLabel: "Delivery Address",

            deliveryEstimate: "Estimated delivery fee",

            deliveryNote: "Final delivery fee may vary depending on the actual Lalamove quotation.",

            getEstimate: "Get Lalamove Delivery Estimate",

            summaryTitle: "Your order",

            clearOrder: "Clear",

            emptyOrder: "Select something from the menu to get started.",

            estimatedTotal: "Estimated Total",

            submitOrder: "Continue to WhatsApp →",

            howEyebrow: "HOW IT WORKS",

            howTitle: "Simple from craving<br>to delivery.",

            stepOneTitle: "Choose your meal",

            stepOneDescription: "Browse this week's homemade menu and select what you would like.",

            stepTwoTitle: "Tell us where",

            stepTwoDescription: "Enter your delivery address and receive an estimated delivery fee.",

            stepThreeTitle: "We prepare the rest",

            stepThreeDescription: "Confirm your order and we will prepare your meal for delivery.",

            footerText: "Homemade meals for busy people.",

            footerOrder: "Order This Week's Menu"

        },


        zh: {

            brandSubtitle: "为忙碌生活准备的家常美食",

            navMenu: "本周菜单",

            navHow: "如何运作",

            orderNow: "立即订购",

            eyebrow: "每周家常美食",

            heroTitle: "好好吃一顿饭。<br>不用自己煮。",

            heroDescription: "为忙碌的人准备的家常美食，方便、温暖又美味。",

            viewMenu: "查看本周菜单 →",

            learnMore: "如何运作",

            heroNote: "菜单每周更新",

            featuredThisWeek: "本周精选",

            available: "可订购",

            homemadeMeal: "家常美食",

            menuEyebrow: "当前菜单",

            menuTitle: "本周菜单。",

            menuDescription: "选择您想吃的餐点，告诉我们配送地址，剩下的交给我们。",

            weekOf: "本周",

            orderEyebrow: "您的订单",

            orderTitle: "快完成了。",

            orderDescription: "告诉我们您想吃什么，以及需要配送到哪里。",

            nameLabel: "您的姓名",

            phoneLabel: "WhatsApp号码",

            addressLabel: "配送地址",

            deliveryEstimate: "预计配送费",

            deliveryNote: "最终配送费用可能会根据实际 Lalamove 报价而有所不同。",

            getEstimate: "获取 Lalamove 配送估价",

            summaryTitle: "您的订单",

            clearOrder: "清除",

            emptyOrder: "请从菜单选择餐点开始。",

            estimatedTotal: "预计总额",

            submitOrder: "继续前往 WhatsApp →",

            howEyebrow: "如何运作",

            howTitle: "从想吃到送到家。<br>简单完成。",

            stepOneTitle: "选择您的餐点",

            stepOneDescription: "浏览本周家常菜单并选择您想吃的餐点。",

            stepTwoTitle: "告诉我们地址",

            stepTwoDescription: "输入配送地址并获取预计配送费用。",

            stepThreeTitle: "我们准备剩下的",

            stepThreeDescription: "确认订单后，我们会准备您的餐点并安排配送。",

            footerText: "为忙碌生活准备的家常美食。",

            footerOrder: "订购本周菜单"

        }

    };


    let currentLanguage = "en";


    /* =========================
       MENU DATA
    ========================== */

    const menus = {


        week20: {

            weekText: "20 JUL — 24 JUL 2026",

            featured: {

                name: "Mongolian Chicken",

                nameZh: "蒙古鸡",

                price: 12,

                image: "images/menu-20-7.jpg"

            },

            items: [

                {

                    id: "20-mon",

                    day: "MONDAY",

                    dayZh: "星期一",

                    name: "Mongolian Chicken",

                    nameZh: "蒙古鸡",

                    description: "Tender chicken cooked in a rich savoury sauce.",

                    descriptionZh: "嫩鸡肉搭配浓郁咸香的酱汁。",

                    price: 12,

                    image: "images/menu-20-7.jpg"

                },

                {

                    id: "20-tue",

                    day: "TUESDAY",

                    dayZh: "星期二",

                    name: "Sweet & Sour Pork",

                    nameZh: "咕噜肉",

                    description: "Crispy pork with a sweet and tangy sauce.",

                    descriptionZh: "酥脆猪肉搭配酸甜酱汁。",

                    price: 12,

                    image: "images/menu-21-7.jpg"

                },

                {

                    id: "20-wed",

                    day: "WEDNESDAY",

                    dayZh: "星期三",

                    name: "Homemade Chicken",

                    nameZh: "家常鸡肉",

                    description: "A comforting homemade meal prepared fresh.",

                    descriptionZh: "新鲜制作的温暖家常餐。",

                    price: 12,

                    image: "images/menu-22-7.jpg"

                },

                {

                    id: "20-thu",

                    day: "THURSDAY",

                    dayZh: "星期四",

                    name: "House Special",

                    nameZh: "家常特色菜",

                    description: "A delicious homemade special for the week.",

                    descriptionZh: "本周美味家常特色菜。",

                    price: 12,

                    image: "images/menu-23-7.jpg"

                },

                {

                    id: "20-fri",

                    day: "FRIDAY",

                    dayZh: "星期五",

                    name: "Weekly Special",

                    nameZh: "每周特色菜",

                    description: "End the week with something delicious.",

                    descriptionZh: "用美味的家常菜结束这一周。",

                    price: 12,

                    image: "images/menu-24-7.jpg"

                }

            ]

        },


        week13: {

            weekText: "13 JUL — 17 JUL 2026",

            featured: {

                name: "Weekly Special",

                nameZh: "每周特色菜",

                price: 12,

                image: "images/menu-13-7.jpg"

            },

            items: [

                {

                    id: "13-mon",

                    day: "MONDAY",

                    dayZh: "星期一",

                    name: "Weekly Homemade Meal",

                    nameZh: "每周家常餐",

                    description: "Freshly prepared homemade food.",

                    descriptionZh: "新鲜准备的家常美食。",

                    price: 12,

                    image: "images/menu-13-7.jpg"

                },

                {

                    id: "13-tue",

                    day: "TUESDAY",

                    dayZh: "星期二",

                    name: "Homemade Special",

                    nameZh: "家常特色菜",

                    description: "Comforting food made for busy days.",

                    descriptionZh: "为忙碌日子准备的温暖美食。",

                    price: 12,

                    image: "images/menu-14-7.jpg"

                },

                {

                    id: "13-wed",

                    day: "WEDNESDAY",

                    dayZh: "星期三",

                    name: "House Favourite",

                    nameZh: "家常人气菜",

                    description: "A delicious meal prepared with care.",

                    descriptionZh: "用心准备的美味餐点。",

                    price: 12,

                    image: "images/menu-15-7.jpg"

                }

            ]

        },


        week6: {

            weekText: "6 JUL — 10 JUL 2026",

            featured: {

                name: "House Favourite",

                nameZh: "家常人气菜",

                price: 12,

                image: "images/menu-6-7.jpg"

            },

            items: [

                {

                    id: "6-mon",

                    day: "MONDAY",

                    dayZh: "星期一",

                    name: "Homemade Meal",

                    nameZh: "家常餐",

                    description: "Simple, comforting and delicious.",

                    descriptionZh: "简单、温暖又美味。",

                    price: 12,

                    image: "images/menu-6-7.jpg"

                },

                {

                    id: "6-tue",

                    day: "TUESDAY",

                    dayZh: "星期二",

                    name: "Daily Special",

                    nameZh: "每日特色菜",

                    description: "Fresh food made for your busy day.",

                    descriptionZh: "为忙碌的一天准备的新鲜美食。",

                    price: 12,

                    image: "images/menu-7-7.jpg"

                }

            ]

        }

    };


    let currentMenuKey = "week20";

    let currentMenu = menus[currentMenuKey];

    let order = [];

    let deliveryEstimate = null;


    /* =========================
       ELEMENTS
    ========================== */

    const menuGrid =
        document.getElementById("menuGrid");

    const orderItems =
        document.getElementById("orderItems");

    const orderTotal =
        document.getElementById("orderTotal");

    const deliveryFee =
        document.getElementById("deliveryFee");

    const deliveryMessage =
        document.getElementById("deliveryMessage");

    const featuredMealName =
        document.getElementById("featuredMealName");

    const featuredMealPrice =
        document.getElementById("featuredMealPrice");

    const featuredMealImage =
        document.getElementById("featuredMealImage");

    const menuWeek =
        document.getElementById("menuWeek");


    /* =========================
       RENDER MENU
    ========================== */

    function renderMenu() {

        menuGrid.innerHTML = "";

        currentMenu.items.forEach(function (item) {

            const name =
                currentLanguage === "en"
                    ? item.name
                    : item.nameZh;

            const description =
                currentLanguage === "en"
                    ? item.description
                    : item.descriptionZh;

            const day =
                currentLanguage === "en"
                    ? item.day
                    : item.dayZh;


            const card =
                document.createElement("article");


            card.className =
                "menu-card";


            card.innerHTML = `

                <img
                    class="menu-card-image"
                    src="${item.image}"
                    alt="${name}"
                    onerror="this.src='images/menu-20-7.jpg'"
                >


                <div class="menu-card-content">

                    <div class="menu-card-day">
                        ${day}
                    </div>


                    <h3>
                        ${name}
                    </h3>


                    <p class="menu-card-description">
                        ${description}
                    </p>


                    <div class="menu-card-bottom">

                        <span class="menu-card-price">
                            RM ${item.price.toFixed(2)}
                        </span>


                        <button
                            class="add-to-order-button"
                            data-id="${item.id}"
                        >
                            +
                        </button>

                    </div>

                </div>

            `;


            menuGrid.appendChild(card);

        });


        document
            .querySelectorAll(".add-to-order-button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    addToOrder(button.dataset.id);

                    document
                        .getElementById("order")
                        .scrollIntoView({

                            behavior: "smooth"

                        });

                });

            });

    }


    /* =========================
       FEATURED MEAL
    ========================== */

    function updateFeaturedMeal() {

        const featured =
            currentMenu.featured;


        featuredMealName.textContent =

            currentLanguage === "en"

                ? featured.name

                : featured.nameZh;


        featuredMealPrice.textContent =

            `RM ${featured.price.toFixed(2)}`;


        featuredMealImage.src =
            featured.image;


        menuWeek.textContent =
            currentMenu.weekText;

    }


    /* =========================
       ADD TO ORDER
    ========================== */

    function addToOrder(itemId) {

        const item =
            currentMenu.items.find(function (menuItem) {

                return menuItem.id === itemId;

            });


        if (!item) return;


        const existing =
            order.find(function (orderItem) {

                return orderItem.id === itemId;

            });


        if (existing) {

            existing.quantity++;

        } else {

            order.push({

                ...item,

                quantity: 1

            });

        }


        deliveryEstimate = null;

        updateOrder();

    }


    /* =========================
       CHANGE QUANTITY
    ========================== */

    function changeQuantity(itemId, change) {

        const item =
            order.find(function (orderItem) {

                return orderItem.id === itemId;

            });


        if (!item) return;


        item.quantity += change;


        if (item.quantity <= 0) {

            order =
                order.filter(function (orderItem) {

                    return orderItem.id !== itemId;

                });

        }


        deliveryEstimate = null;

        updateOrder();

    }


    /* =========================
       CALCULATE SUBTOTAL
    ========================== */

    function calculateSubtotal() {

        return order.reduce(function (total, item) {

            return total + (

                item.price * item.quantity

            );

        }, 0);

    }


    /* =========================
       RENDER ORDER
    ========================== */

    function updateOrder() {

        orderItems.innerHTML = "";


        if (order.length === 0) {

            orderItems.innerHTML = `

                <p class="empty-order">

                    ${
                        currentLanguage === "en"

                            ? "Select something from the menu to get started."

                            : "请从菜单选择餐点开始。"

                    }

                </p>

            `;


            orderTotal.textContent =
                "RM 0.00";


            return;

        }


        order.forEach(function (item) {

            const name =

                currentLanguage === "en"

                    ? item.name

                    : item.nameZh;


            const itemElement =
                document.createElement("div");


            itemElement.className =
                "order-item";


            itemElement.innerHTML = `

                <div>

                    <div class="order-item-name">
                        ${name}
                    </div>


                    <div class="order-item-price">

                        RM ${item.price.toFixed(2)}
                        × ${item.quantity}

                    </div>

                </div>


                <div class="quantity-controls">

                    <button
                        data-id="${item.id}"
                        class="decrease-button"
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        data-id="${item.id}"
                        class="increase-button"
                    >
                        +
                    </button>

                </div>

            `;


            orderItems.appendChild(itemElement);

        });


        document
            .querySelectorAll(".decrease-button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    changeQuantity(

                        button.dataset.id,

                        -1

                    );

                });

            });


        document
            .querySelectorAll(".increase-button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    changeQuantity(

                        button.dataset.id,

                        1

                    );

                });

            });


        updateTotal();

    }


    /* =========================
       TOTAL
    ========================== */

    function updateTotal() {

        const subtotal =
            calculateSubtotal();


        if (deliveryEstimate !== null) {

            orderTotal.textContent =

                `RM ${(subtotal + deliveryEstimate).toFixed(2)}`;

        } else {

            orderTotal.textContent =

                `RM ${subtotal.toFixed(2)}`;

        }

    }


    /* =========================
       DELIVERY ESTIMATE
    ========================== */

    document
        .getElementById("getDeliveryEstimate")
        .addEventListener("click", function () {


            const address =
                document
                    .getElementById("deliveryAddress")
                    .value
                    .trim();


            if (order.length === 0) {

                deliveryMessage.textContent =

                    currentLanguage === "en"

                        ? "Please select a meal first."

                        : "请先选择餐点。";

                return;

            }


            if (!address) {

                deliveryMessage.textContent =

                    currentLanguage === "en"

                        ? "Please enter your delivery address first."

                        : "请先输入配送地址。";

                return;

            }


            const button = this;


            button.disabled = true;


            button.textContent =

                currentLanguage === "en"

                    ? "Preparing quotation..."

                    : "正在准备报价...";


            deliveryMessage.textContent =

                currentLanguage === "en"

                    ? "The secure Lalamove quotation system will calculate the real delivery fee here."

                    : "连接安全的 Lalamove 系统后，这里将计算真实配送费用。";


            /*
            ======================================
            FUTURE LALAMOVE BACKEND CONNECTION
            ======================================

            PICKUP:

            Jalan TBK 2/3,
            Taman Bukit Kepayang,
            Seremban 2,
            Negeri Sembilan

            CUSTOMER:

            deliveryAddress

            FUTURE FLOW:

            WEBSITE
                ↓
            GOOGLE APPS SCRIPT
                ↓
            LALAMOVE API
                ↓
            REAL QUOTATION
                ↓
            WEBSITE

            API KEYS MUST NEVER BE STORED HERE.
            */


            setTimeout(function () {


                button.disabled = false;


                button.textContent =

                    currentLanguage === "en"

                        ? "Get Lalamove Delivery Estimate"

                        : "获取 Lalamove 配送估价";


                deliveryFee.textContent =

                    currentLanguage === "en"

                        ? "Pending quotation"

                        : "等待报价";


                deliveryMessage.textContent =

                    currentLanguage === "en"

                        ? "Real Lalamove pricing will appear here once the secure backend is connected."

                        : "连接安全后台后，这里将显示真实的 Lalamove 配送价格。";


            }, 1000);

        });


    /* =========================
       CLEAR ORDER
    ========================== */

    document
        .getElementById("clearOrder")
        .addEventListener("click", function () {

            order = [];

            deliveryEstimate = null;

            deliveryFee.textContent =

                currentLanguage === "en"

                    ? "Enter your address"

                    : "输入您的地址";


            deliveryMessage.textContent = "";


            updateOrder();

        });


    /* =========================
       WHATSAPP ORDER
    ========================== */

    document
        .getElementById("orderForm")
        .addEventListener("submit", function (event) {


            event.preventDefault();


            if (order.length === 0) {

                alert(

                    currentLanguage === "en"

                        ? "Please select something from the menu first."

                        : "请先选择餐点。"

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


            const subtotal =
                calculateSubtotal();


            let message =

                "Hello House of Coco!%0A%0A";


            message +=

                "I would like to place an order:%0A%0A";


            order.forEach(function (item) {

                message +=

                    `${item.name} x ${item.quantity} - RM ${(item.price * item.quantity).toFixed(2)}%0A`;

            });


            message +=

                `%0AFood subtotal: RM ${subtotal.toFixed(2)}`;


            message +=

                `%0A%0AName: ${name}`;


            message +=

                `%0AWhatsApp: ${phone}`;


            message +=

                `%0AAddress: ${address}`;


            if (deliveryEstimate !== null) {

                message +=

                    `%0AEstimated delivery: RM ${deliveryEstimate.toFixed(2)}`;

            } else {

                message +=

                    `%0ADelivery fee: To be confirmed`;

            }


            /*
                Replace the number below
                with the client's actual WhatsApp number.

                Malaysia format:

                601XXXXXXXXX
            */


            const whatsappNumber =
                "60123456789";


            window.open(

                `https://wa.me/${whatsappNumber}?text=${message}`,

                "_blank"

            );

        });


    /* =========================
       MENU SWITCHER
    ========================== */

    document
        .querySelectorAll(".menu-switch-button")
        .forEach(function (button) {


            button.addEventListener("click", function () {


                document
                    .querySelectorAll(".menu-switch-button")
                    .forEach(function (btn) {

                        btn.classList.remove("active");

                    });


                this.classList.add("active");


                currentMenuKey =
                    this.dataset.menu;


                currentMenu =
                    menus[currentMenuKey];


                order = [];

                deliveryEstimate = null;


                renderMenu();

                updateFeaturedMeal();

                updateOrder();


                const statusText =
                    document.getElementById("adminStatusText");


                statusText.textContent =

                    currentLanguage === "en"

                        ? `${currentMenu.weekText} menu is currently live`

                        : `${currentMenu.weekText} 菜单目前正在使用`;

            });

        });


    /* =========================
       LANGUAGE TOGGLE
    ========================== */

    document
        .getElementById("languageToggle")
        .addEventListener("click", function () {


            currentLanguage =

                currentLanguage === "en"

                    ? "zh"

                    : "en";


            document
                .getElementById("languageLabel")
                .textContent =

                currentLanguage === "en"

                    ? "EN"

                    : "中文";


            document
                .querySelectorAll("[data-i18n]")
                .forEach(function (element) {


                    const key =
                        element.dataset.i18n;


                    if (

                        translations[currentLanguage][key]

                    ) {

                        element.innerHTML =

                            translations[currentLanguage][key];

                    }

                });


            renderMenu();

            updateFeaturedMeal();

            updateOrder();

        });


    /* =========================
       DARK MODE
    ========================== */

    document
        .getElementById("themeToggle")
        .addEventListener("click", function () {


            document
                .body
                .classList
                .toggle("dark-mode");


            const darkMode =

                document
                    .body
                    .classList
                    .contains("dark-mode");


            this.textContent =

                darkMode

                    ? "☀"

                    : "☾";


            localStorage.setItem(

                "houseOfCocoDarkMode",

                darkMode

            );

        });


    /* =========================
       LOAD DARK MODE
    ========================== */

    if (

        localStorage
            .getItem("houseOfCocoDarkMode")

            === "true"

    ) {

        document
            .body
            .classList
            .add("dark-mode");


        document
            .getElementById("themeToggle")
            .textContent = "☀";

    }


    /* =========================
       INITIAL LOAD
    ========================== */

    renderMenu();

    updateFeaturedMeal();

    updateOrder();


});
