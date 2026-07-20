document.addEventListener("DOMContentLoaded", function () {

    console.log("House of Coco V1.6 loaded");


    /* =========================
       CONFIGURATION
    ========================== */

    const WHATSAPP_NUMBER = "60123456789";

    const BACKEND_URL =
        "https://script.google.com/macros/s/AKfycbyt_OqXTRX_Di0zyfhDYXwSpot8r5P5quKfjLzj11bQb3nzW22Nw4R7G_m5FIrole0oRg/exec";


    /* =========================
       WEEKLY MENUS
    ========================== */

    const menus = {

        week13: {

            weekLabel: "13 JUL — 17 JUL 2026",

            featuredImage: "images/menu-13-7.jpg",

            days: [

                {
                    date: "2026-07-13",
                    day: "MONDAY",
                    shortDay: "MON",
                    displayDate: "13 JUL",
                    name: "Garlic Honey Fried Chicken",
                    chineseName: "蒜香蜂蜜炸鸡",
                    side: "Seaweed Egg Drop Soup",
                    price: 12
                },

                {
                    date: "2026-07-14",
                    day: "TUESDAY",
                    shortDay: "TUE",
                    displayDate: "14 JUL",
                    name: "Japanese Style Onion Chicken",
                    chineseName: "日式洋葱鸡",
                    side: "Chrysanthemum Tea",
                    price: 12
                },

                {
                    date: "2026-07-15",
                    day: "WEDNESDAY",
                    shortDay: "WED",
                    displayDate: "15 JUL",
                    name: "Braised Pork Ribs with Doubanjiang",
                    chineseName: "豆瓣酱焖排骨",
                    side: "Barley Water",
                    price: 12
                },

                {
                    date: "2026-07-16",
                    day: "THURSDAY",
                    shortDay: "THU",
                    displayDate: "16 JUL",
                    name: "Stir-Fried Pork with Ginger & Scallion",
                    chineseName: "姜葱猪肉",
                    side: "Lotus Root Soup",
                    price: 12
                },

                {
                    date: "2026-07-17",
                    day: "FRIDAY",
                    shortDay: "FRI",
                    displayDate: "17 JUL",
                    name: "Braised Chicken with Mushroom",
                    chineseName: "蘑菇焖鸡",
                    side: "Red Bean Dessert",
                    price: 12
                }

            ]

        },


        week6: {

            weekLabel: "6 JUL — 10 JUL 2026",

            featuredImage: "images/menu-6-7.jpg",

            days: [

                {
                    date: "2026-07-06",
                    day: "MONDAY",
                    shortDay: "MON",
                    displayDate: "6 JUL",
                    name: "Creamy Butter Chicken",
                    chineseName: "金丝奶油鸡",
                    side: "Cabbage Fish Ball Soup",
                    price: 12
                },

                {
                    date: "2026-07-07",
                    day: "TUESDAY",
                    shortDay: "TUE",
                    displayDate: "7 JUL",
                    name: "Salt & Pepper Stir-Fried Pork Slices",
                    chineseName: "椒盐炒猪肉片",
                    side: "Old Cucumber Soup",
                    price: 12
                },

                {
                    date: "2026-07-08",
                    day: "WEDNESDAY",
                    shortDay: "WED",
                    displayDate: "8 JUL",
                    name: "Japanese Style Curry Chicken",
                    chineseName: "日式咖喱鸡",
                    side: "Chrysanthemum Tea",
                    price: 12
                },

                {
                    date: "2026-07-09",
                    day: "THURSDAY",
                    shortDay: "THU",
                    displayDate: "9 JUL",
                    name: "Braised Chicken with White Radish",
                    chineseName: "白萝卜焖鸡",
                    side: "Green Bean Dessert",
                    price: 12
                },

                {
                    date: "2026-07-10",
                    day: "FRIDAY",
                    shortDay: "FRI",
                    displayDate: "10 JUL",
                    name: "Taro Stewed Pork",
                    chineseName: "芋头炖猪肉",
                    side: "Luo Han Guo Drink",
                    price: 12
                }

            ]

        }

    };


    /* =========================
       STATE
    ========================== */

    let currentMenu = "week13";

    let currentLanguage = "en";

    let order = {};


    /* =========================
       ELEMENTS
    ========================== */

    const menuGrid =
        document.getElementById("menuGrid");

    const menuWeek =
        document.getElementById("menuWeek");

    const featuredMealImage =
        document.getElementById("featuredMealImage");

    const featuredMealName =
        document.getElementById("featuredMealName");

    const featuredMealPrice =
        document.getElementById("featuredMealPrice");

    const orderItems =
        document.getElementById("orderItems");

    const foodTotal =
        document.getElementById("foodTotal");

    const deliveryFee =
        document.getElementById("deliveryFee");

    const summaryDeliveryFee =
        document.getElementById("summaryDeliveryFee");

    const orderTotal =
        document.getElementById("orderTotal");


    /* =========================
       RENDER MENU
    ========================== */

    function renderMenu() {

        const menu =
            menus[currentMenu];


        menuGrid.innerHTML =
            "";


        menuWeek.textContent =
            menu.weekLabel;


        featuredMealImage.src =
            menu.featuredImage;


        featuredMealName.textContent =
            currentLanguage === "en"
                ? menu.days[0].name
                : menu.days[0].chineseName;


        featuredMealPrice.textContent =
            `RM ${menu.days[0].price.toFixed(2)}`;


        menu.days.forEach((meal) => {


            const quantity =
                order[meal.date] || 0;


            const card =
                document.createElement("div");


            card.className =
                quantity > 0
                    ? "menu-card selected"
                    : "menu-card";


            card.innerHTML = `

                <div class="menu-day">
                    ${meal.shortDay}
                </div>

                <div class="menu-date">
                    ${meal.displayDate}
                </div>

                <h3>
                    ${
                        currentLanguage === "en"
                            ? meal.name
                            : meal.chineseName
                    }
                </h3>

                <p>
                    ${meal.side}
                </p>

                <div class="menu-price">
                    RM ${meal.price.toFixed(2)}
                </div>

                <div class="quantity-control">

                    <button
                        type="button"
                        class="minus-button"
                        data-date="${meal.date}"
                    >
                        −
                    </button>

                    <span class="quantity-value">
                        ${quantity}
                    </span>

                    <button
                        type="button"
                        class="plus-button"
                        data-date="${meal.date}"
                    >
                        +
                    </button>

                </div>

                <div class="selected-label">

                    ${
                        quantity > 0
                            ? `✓ ${quantity} meal${quantity > 1 ? "s" : ""} selected`
                            : ""
                    }

                </div>

            `;


            menuGrid.appendChild(card);

        });


        attachQuantityEvents();

    }


    /* =========================
       QUANTITY CONTROLS
    ========================== */

    function attachQuantityEvents() {


        document
            .querySelectorAll(".plus-button")
            .forEach((button) => {


                button.addEventListener("click", () => {


                    const date =
                        button.dataset.date;


                    order[date] =
                        (order[date] || 0) + 1;


                    renderMenu();

                    renderOrder();

                });

            });


        document
            .querySelectorAll(".minus-button")
            .forEach((button) => {


                button.addEventListener("click", () => {


                    const date =
                        button.dataset.date;


                    if (!order[date]) return;


                    order[date]--;


                    if (order[date] <= 0) {

                        delete order[date];

                    }


                    renderMenu();

                    renderOrder();

                });

            });

    }


    /* =========================
       WHOLE WEEK
    ========================== */

    document
        .getElementById("wholeWeekButton")
        .addEventListener("click", () => {


            const menu =
                menus[currentMenu];


            menu.days.forEach((meal) => {


                if (!order[meal.date]) {

                    order[meal.date] = 1;

                }

            });


            renderMenu();

            renderOrder();

        });


    /* =========================
       CLEAR SELECTION
    ========================== */

    function clearSelection() {


        order = {};


        renderMenu();

        renderOrder();

    }


    document
        .getElementById("clearDaysButton")
        .addEventListener("click", clearSelection);


    document
        .getElementById("clearOrder")
        .addEventListener("click", clearSelection);


    /* =========================
       ORDER SUMMARY
    ========================== */

    function renderOrder() {


        const menu =
            menus[currentMenu];


        const selectedMeals =
            menu.days.filter(

                (meal) => order[meal.date]

            );


        if (selectedMeals.length === 0) {


            orderItems.innerHTML = `

                <p class="empty-order">

                    Select meals from the menu to get started.

                </p>

            `;


            foodTotal.textContent =
                "RM 0.00";


            updateTotals(0);


            return;

        }


        let total =
            0;


        orderItems.innerHTML =
            "";


        selectedMeals.forEach((meal) => {


            const quantity =
                order[meal.date];


            const subtotal =
                meal.price * quantity;


            total +=
                subtotal;


            const item =
                document.createElement("div");


            item.className =
                "order-item";


            item.innerHTML = `

                <div>

                    <strong>
                        ${meal.shortDay}, ${meal.displayDate}
                    </strong>

                    <small>

                        ${
                            currentLanguage === "en"
                                ? meal.name
                                : meal.chineseName
                        }

                        × ${quantity}

                    </small>

                </div>


                <strong>

                    RM ${subtotal.toFixed(2)}

                </strong>

            `;


            orderItems.appendChild(item);

        });


        foodTotal.textContent =
            `RM ${total.toFixed(2)}`;


        updateTotals(total);

    }


    /* =========================
       DELIVERY ESTIMATION
    ========================== */

    function estimateDeliveryFee(address) {


        if (!address || address.length < 8) {


            deliveryFee.textContent =
                "Enter your address";


            summaryDeliveryFee.textContent =
                "RM 0.00";


            return 0;

        }


        const lowerAddress =
            address.toLowerCase();


        let estimatedFee =
            8;


        if (

            lowerAddress.includes("seremban 2") ||

            lowerAddress.includes("bukit kepayang") ||

            lowerAddress.includes("taman bukit kepayang")

        ) {


            estimatedFee =
                8;

        }


        else if (

            lowerAddress.includes("seremban")

        ) {


            estimatedFee =
                10;

        }


        else {


            estimatedFee =
                15;

        }


        deliveryFee.textContent =
            `Approximately RM ${estimatedFee.toFixed(2)}`;


        summaryDeliveryFee.textContent =
            `RM ${estimatedFee.toFixed(2)}`;


        return estimatedFee;

    }


    function updateTotals(foodAmount) {


        const address =
            document
                .getElementById("deliveryAddress")
                .value;


        const delivery =
            estimateDeliveryFee(address);


        orderTotal.textContent =
            `RM ${(foodAmount + delivery).toFixed(2)}`;

    }


    document
        .getElementById("deliveryAddress")
        .addEventListener("input", () => {


            renderOrder();

        });


    /* =========================
       MENU SWITCHER
    ========================== */

    document
        .querySelectorAll(".menu-switch-button")
        .forEach((button) => {


            button.addEventListener("click", () => {


                currentMenu =
                    button.dataset.menu;


                order =
                    {};


                document
                    .querySelectorAll(".menu-switch-button")
                    .forEach((btn) => {


                        btn.classList.remove("active");

                    });


                button.classList.add("active");


                document
                    .getElementById("adminStatusText")
                    .textContent =
                    `${menus[currentMenu].weekLabel} menu is currently live`;


                renderMenu();

                renderOrder();

            });

        });


    /* =========================
       DARK MODE
    ========================== */

    document
        .getElementById("themeToggle")
        .addEventListener("click", () => {


            document
                .body
                .classList
                .toggle("dark-mode");

        });


    /* =========================
       LANGUAGE
    ========================== */

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
                "Choose your meals.",

            menuDescription:
                "Select the days you would like meals delivered.",

            weekOf:
                "WEEK OF",

            wholeWeek:
                "+ Order Whole Week",

            clearDays:
                "Clear Selection",

            orderEyebrow:
                "YOUR ORDER",

            orderTitle:
                "Almost there.",

            orderDescription:
                "Tell us where you would like your meals delivered.",

            nameLabel:
                "Your Name",

            phoneLabel:
                "WhatsApp Number",

            addressLabel:
                "Delivery Address",

            deliveryEstimate:
                "Estimated delivery fee",

            deliveryNote:
                "Final delivery fee may vary depending on the actual Lalamove quotation.",

            summaryTitle:
                "Your order",

            clearOrder:
                "Clear",

            emptyOrder:
                "Select meals from the menu to get started.",

            foodTotal:
                "Food Total",

            deliveryTotal:
                "Estimated Delivery",

            estimatedTotal:
                "Estimated Total",

            submitOrder:
                "Continue to WhatsApp →",

            howEyebrow:
                "HOW IT WORKS",

            howTitle:
                "Simple from craving<br>to delivery.",

            stepOneTitle:
                "Choose your days",

            stepOneDescription:
                "Select individual days or order meals for the whole week.",

            stepTwoTitle:
                "Tell us where",

            stepTwoDescription:
                "Enter your delivery address and receive an estimated delivery fee.",

            stepThreeTitle:
                "We prepare the rest",

            stepThreeDescription:
                "Confirm your order and we will prepare your meals for delivery.",

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
                "如何订购",

            orderNow:
                "立即订购",

            eyebrow:
                "每周家常美食",

            heroTitle:
                "想吃一顿好饭。<br>无需自己下厨。",

            heroDescription:
                "为忙碌的人准备的家常美食，方便、温暖又美味。",

            viewMenu:
                "查看本周菜单 →",

            learnMore:
                "如何订购",

            heroNote:
                "菜单每周更新",

            featuredThisWeek:
                "本周精选",

            available:
                "可订购",

            homemadeMeal:
                "家常美食",

            menuEyebrow:
                "当前菜单",

            menuTitle:
                "选择您的餐点。",

            menuDescription:
                "选择您希望配送餐点的日期。",

            weekOf:
                "本周菜单",

            wholeWeek:
                "+ 订购整周",

            clearDays:
                "清除选择",

            orderEyebrow:
                "您的订单",

            orderTitle:
                "快完成了。",

            orderDescription:
                "告诉我们您希望将餐点送到哪里。",

            nameLabel:
                "您的姓名",

            phoneLabel:
                "WhatsApp 电话号码",

            addressLabel:
                "配送地址",

            deliveryEstimate:
                "预计配送费",

            deliveryNote:
                "最终配送费可能会根据实际 Lalamove 报价而有所不同。",

            summaryTitle:
                "您的订单",

            clearOrder:
                "清除",

            emptyOrder:
                "请从菜单中选择餐点。",

            foodTotal:
                "餐点总额",

            deliveryTotal:
                "预计配送费",

            estimatedTotal:
                "预计总额",

            submitOrder:
                "继续前往 WhatsApp →",

            howEyebrow:
                "如何订购",

            howTitle:
                "从想吃<br>到送到家。",

            stepOneTitle:
                "选择配送日期",

            stepOneDescription:
                "可以选择单独日期，也可以一次订购整周。",

            stepTwoTitle:
                "告诉我们地址",

            stepTwoDescription:
                "输入配送地址并获取预计配送费用。",

            stepThreeTitle:
                "我们准备一切",

            stepThreeDescription:
                "确认订单后，我们将准备您的餐点并安排配送。",

            footerText:
                "为忙碌生活准备的家常美食。",

            footerOrder:
                "订购本周菜单"

        }

    };


    function updateLanguage() {


        const language =
            translations[currentLanguage];


        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {


                const key =
                    element.dataset.i18n;


                if (language[key]) {


                    element.innerHTML =
                        language[key];

                }

            });


        document
            .getElementById("languageLabel")
            .textContent =

            currentLanguage === "en"
                ? "中文"
                : "EN";


        renderMenu();

        renderOrder();

    }


    document
        .getElementById("languageToggle")
        .addEventListener("click", () => {


            currentLanguage =

                currentLanguage === "en"
                    ? "zh"
                    : "en";


            updateLanguage();

        });


    /* =========================
       SAVE ORDER TO BACKEND
    ========================== */

    async function saveOrderToBackend(orderData) {


        try {


            const response =
                await fetch(

                    BACKEND_URL,

                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "text/plain;charset=utf-8"

                        },

                        body:
                            JSON.stringify(orderData)

                    }

                );


            const result =
                await response.json();


            if (!result.success) {


                throw new Error(

                    result.error ||
                    "Backend failed to save order."

                );

            }


            return result;


        }


        catch (error) {


            console.error(

                "Order saving failed:",

                error

            );


            throw error;

        }

    }


    /* =========================
       WHATSAPP + BACKEND ORDER
    ========================== */

    document
        .getElementById("orderForm")
        .addEventListener("submit", async (event) => {


            event.preventDefault();


            const name =
                document
                    .getElementById("customerName")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("customerPhone")
                    .value
                    .trim();


            const address =
                document
                    .getElementById("deliveryAddress")
                    .value
                    .trim();


            const menu =
                menus[currentMenu];


            const selectedMeals =
                menu.days.filter(

                    (meal) => order[meal.date]

                );


            if (selectedMeals.length === 0) {


                alert(

                    currentLanguage === "en"

                        ? "Please select at least one day."

                        : "请至少选择一天。"

                );


                return;

            }


            if (!name || !phone || !address) {


                alert(

                    currentLanguage === "en"

                        ? "Please complete your name, WhatsApp number and delivery address."

                        : "请填写您的姓名、WhatsApp 电话号码和配送地址。"

                );


                return;

            }


            const submitButton =
                document
                    .querySelector(".submit-order-button");


            const originalButtonText =
                submitButton.innerHTML;


            submitButton.disabled =
                true;


            submitButton.innerHTML =
                currentLanguage === "en"

                    ? "Saving Order..."

                    : "正在保存订单...";


            let foodTotalAmount =
                0;


            let orderDetails =
                "";


            let whatsappOrderText =
                "";


            selectedMeals.forEach((meal) => {


                const quantity =
                    order[meal.date];


                const subtotal =
                    meal.price * quantity;


                foodTotalAmount +=
                    subtotal;


                orderDetails +=

                    `${meal.day}, ${meal.displayDate}: ${meal.name} x ${quantity} = RM ${subtotal.toFixed(2)}\n`;


                whatsappOrderText +=

                    `${meal.day}, ${meal.displayDate}\n`;


                whatsappOrderText +=

                    `${meal.name} x ${quantity} — RM ${subtotal.toFixed(2)}\n\n`;

            });


            const estimatedDelivery =
                estimateDeliveryFee(address);


            const total =
                foodTotalAmount +
                estimatedDelivery;


            const backendOrder = {


                customerName:
                    name,


                phone:
                    phone,


                address:
                    address,


                orderDetails:
                    orderDetails,


                foodTotal:
                    foodTotalAmount,


                deliveryFee:
                    estimatedDelivery,


                total:
                    total

            };


            try {


                const result =
                    await saveOrderToBackend(

                        backendOrder

                    );


                const orderId =
                    result.orderId;


                let orderText =

                    `Hi House of Coco! I would like to place an order.%0A%0A`;


                orderText +=

                    `ORDER ID: ${orderId}%0A%0A`;


                orderText +=

                    `CUSTOMER%0AName: ${name}%0AWhatsApp: ${phone}%0A%0A`;


                orderText +=

                    `DELIVERY ADDRESS%0A${address}%0A%0A`;


                orderText +=

                    `ORDER%0A${encodeURIComponent(whatsappOrderText)}`;


                orderText +=

                    `%0AFOOD TOTAL: RM ${foodTotalAmount.toFixed(2)}`;


                orderText +=

                    `%0AESTIMATED DELIVERY: RM ${estimatedDelivery.toFixed(2)}`;


                orderText +=

                    `%0AESTIMATED TOTAL: RM ${total.toFixed(2)}`;


                orderText +=

                    `%0A%0APlease confirm availability and the final delivery fee. Thank you!`;


                const whatsappURL =

                    `https://wa.me/${WHATSAPP_NUMBER}?text=${orderText}`;


                window.open(

                    whatsappURL,

                    "_blank"

                );


                submitButton.disabled =
                    false;


                submitButton.innerHTML =
                    originalButtonText;


            }


            catch (error) {


                alert(

                    currentLanguage === "en"

                        ? "We could not save your order. Please try again."

                        : "无法保存您的订单，请再试一次。"

                );


                submitButton.disabled =
                    false;


                submitButton.innerHTML =
                    originalButtonText;

            }

        });


    /* =========================
       INITIAL LOAD
    ========================== */

    renderMenu();

    renderOrder();

});
