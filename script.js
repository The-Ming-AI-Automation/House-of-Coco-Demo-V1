document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       MENU DATA
    ========================= */

    const menuItems = [

        {
            id: 1,

            day: "Monday",

            dayZh: "星期一",

            name: "Mongolian Chicken",

            nameZh: "蒙古鸡",

            description: "Tender chicken with a rich and savoury sauce.",

            descriptionZh: "嫩鸡肉搭配浓郁咸香的酱汁。",

            price: 12,

            image: "images/monday.jpg"

        },

        {
            id: 2,

            day: "Tuesday",

            dayZh: "星期二",

            name: "Sweet and Sour Pork",

            nameZh: "咕噜肉",

            description: "Crispy pork with a sweet and tangy sauce.",

            descriptionZh: "酥脆猪肉搭配酸甜酱汁。",

            price: 12,

            image: "images/tuesday.jpg"

        },

        {
            id: 3,

            day: "Wednesday",

            dayZh: "星期三",

            name: "Braised Chicken",

            nameZh: "焖鸡",

            description: "Comforting homemade braised chicken.",

            descriptionZh: "充满家的味道的焖鸡。",

            price: 12,

            image: "images/wednesday.jpg"

        },

        {
            id: 4,

            day: "Thursday",

            dayZh: "星期四",

            name: "Homemade Special",

            nameZh: "家常特色菜",

            description: "A delicious homemade meal prepared fresh.",

            descriptionZh: "新鲜制作的美味家常餐。",

            price: 12,

            image: "images/thursday.jpg"

        },

        {
            id: 5,

            day: "Friday",

            dayZh: "星期五",

            name: "Weekly Special",

            nameZh: "每周特色菜",

            description: "End the week with something delicious.",

            descriptionZh: "用美味的家常菜结束这一周。",

            price: 12,

            image: "images/friday.jpg"

        }

    ];


    /* =========================
       STATE
    ========================= */

    let cart = [];

    let currentLanguage = "en";

    let deliveryEstimate = null;


    /* =========================
       ELEMENTS
    ========================= */

    const menuContainer =
        document.getElementById("menuContainer");

    const cartContainer =
        document.getElementById("cartContainer");

    const foodSubtotal =
        document.getElementById("foodSubtotal");

    const deliveryFee =
        document.getElementById("deliveryFee");

    const grandTotal =
        document.getElementById("grandTotal");

    const getDeliveryEstimateButton =
        document.getElementById("getDeliveryEstimate");

    const deliveryMessage =
        document.getElementById("deliveryMessage");

    const orderForm =
        document.getElementById("orderForm");

    const orderConfirmation =
        document.getElementById("orderConfirmation");

    const finalOrderSummary =
        document.getElementById("finalOrderSummary");


    /* =========================
       RENDER MENU
    ========================= */

    function renderMenu() {

        menuContainer.innerHTML = "";

        menuItems.forEach(function (item) {

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


            const menuCard = document.createElement("article");

            menuCard.className = "menu-card";


            menuCard.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${name}"
                    class="menu-image"
                    onerror="this.style.display='none'"
                >

                <div class="menu-card-content">

                    <div class="menu-day">
                        ${day}
                    </div>

                    <h3>
                        ${name}
                    </h3>

                    <p class="menu-description">
                        ${description}
                    </p>

                    <div class="menu-bottom">

                        <span class="menu-price">
                            RM ${item.price.toFixed(2)}
                        </span>

                        <button
                            class="add-button"
                            data-id="${item.id}"
                            aria-label="Add ${name}"
                        >
                            +
                        </button>

                    </div>

                </div>

            `;


            menuContainer.appendChild(menuCard);

        });


        document.querySelectorAll(".add-button")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    const itemId =
                        Number(button.dataset.id);

                    addToCart(itemId);

                });

            });

    }


    /* =========================
       ADD TO CART
    ========================= */

    function addToCart(itemId) {

        const existingItem =
            cart.find(function (item) {

                return item.id === itemId;

            });


        if (existingItem) {

            existingItem.quantity++;

        } else {

            const menuItem =
                menuItems.find(function (item) {

                    return item.id === itemId;

                });


            cart.push({

                ...menuItem,

                quantity: 1

            });

        }


        renderCart();

    }


    /* =========================
       CHANGE QUANTITY
    ========================= */

    function changeQuantity(itemId, change) {

        const item =
            cart.find(function (item) {

                return item.id === itemId;

            });


        if (!item) return;


        item.quantity += change;


        if (item.quantity <= 0) {

            cart =
                cart.filter(function (cartItem) {

                    return cartItem.id !== itemId;

                });

        }


        renderCart();

    }


    /* =========================
       RENDER CART
    ========================= */

    function renderCart() {

        cartContainer.innerHTML = "";


        if (cart.length === 0) {

            cartContainer.innerHTML = `

                <p class="empty-cart">

                    ${
                        currentLanguage === "en"
                            ? "Your order is currently empty."
                            : "您的订单目前是空的。"
                    }

                </p>

            `;

            updateTotals();

            return;

        }


        cart.forEach(function (item) {

            const name =
                currentLanguage === "en"
                    ? item.name
                    : item.nameZh;


            const cartItem =
                document.createElement("div");


            cartItem.className = "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-info">

                    <h4>
                        ${name}
                    </h4>

                    <p>
                        RM ${item.price.toFixed(2)}
                    </p>

                </div>


                <div class="quantity-controls">

                    <button
                        class="quantity-button decrease"
                        data-id="${item.id}"
                    >
                        −
                    </button>

                    <strong>
                        ${item.quantity}
                    </strong>

                    <button
                        class="quantity-button increase"
                        data-id="${item.id}"
                    >
                        +
                    </button>

                </div>

            `;


            cartContainer.appendChild(cartItem);

        });


        document.querySelectorAll(".decrease")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    changeQuantity(

                        Number(button.dataset.id),

                        -1

                    );

                });

            });


        document.querySelectorAll(".increase")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    changeQuantity(

                        Number(button.dataset.id),

                        1

                    );

                });

            });


        updateTotals();

    }


    /* =========================
       TOTAL CALCULATION
    ========================= */

    function calculateFoodSubtotal() {

        return cart.reduce(function (total, item) {

            return total + (item.price * item.quantity);

        }, 0);

    }


    function updateTotals() {

        const subtotal =
            calculateFoodSubtotal();


        foodSubtotal.textContent =
            `RM ${subtotal.toFixed(2)}`;


        if (deliveryEstimate !== null) {

            deliveryFee.textContent =
                `RM ${deliveryEstimate.toFixed(2)}`;

            grandTotal.textContent =
                `RM ${(subtotal + deliveryEstimate).toFixed(2)}`;

        } else {

            deliveryFee.textContent =
                "—";

            grandTotal.textContent =
                `RM ${subtotal.toFixed(2)}`;

        }

    }


    /* =========================
       LALAMOVE ESTIMATE
    ========================= */

    getDeliveryEstimateButton
        .addEventListener("click", function () {


            if (cart.length === 0) {

                deliveryMessage.textContent =
                    currentLanguage === "en"

                        ? "Please select at least one meal first."

                        : "请先选择至少一个餐点。";

                return;

            }


            const address =
                document
                    .getElementById("deliveryAddress")
                    .value
                    .trim();


            if (!address) {

                deliveryMessage.textContent =
                    currentLanguage === "en"

                        ? "Please enter your delivery address first."

                        : "请先输入您的配送地址。";

                return;

            }


            getDeliveryEstimateButton.disabled =
                true;


            getDeliveryEstimateButton.textContent =
                currentLanguage === "en"

                    ? "Connecting to Lalamove..."

                    : "正在连接 Lalamove...";


            deliveryMessage.textContent =
                currentLanguage === "en"

                    ? "Preparing your delivery quotation..."

                    : "正在准备您的配送报价...";


            /*
                TEMPORARY V1.3 PLACEHOLDER

                The actual Lalamove API will be connected
                through a secure Google Apps Script backend.

                Pickup location:

                Jalan TBK 2/3,
                Taman Bukit Kepayang,
                Seremban 2,
                Negeri Sembilan

                DO NOT PUT LALAMOVE API KEYS HERE.
            */


            setTimeout(function () {


                deliveryEstimate = null;


                deliveryFee.textContent =
                    currentLanguage === "en"

                        ? "Pending"

                        : "待确认";


                grandTotal.textContent =
                    `RM ${calculateFoodSubtotal().toFixed(2)}`;


                deliveryMessage.innerHTML =

                    currentLanguage === "en"

                        ? "Your real Lalamove delivery quotation will be calculated here once the secure backend is connected."

                        : "连接安全后台后，这里将显示真实的 Lalamove 配送报价。";


                getDeliveryEstimateButton.disabled =
                    false;


                getDeliveryEstimateButton.textContent =
                    currentLanguage === "en"

                        ? "Get Lalamove delivery estimate"

                        : "获取 Lalamove 配送估价";


            }, 1000);


        });


    /* =========================
       ORDER REVIEW
    ========================= */

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();


        if (cart.length === 0) {

            alert(

                currentLanguage === "en"

                    ? "Please select at least one meal."

                    : "请先选择至少一个餐点。"

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
            calculateFoodSubtotal();


        let summaryHTML = `

            <p>
                <strong>
                    ${
                        currentLanguage === "en"
                            ? "Customer"
                            : "顾客"
                    }:
                </strong>

                ${name}
            </p>


            <p>
                <strong>
                    WhatsApp:
                </strong>

                ${phone}
            </p>


            <p>
                <strong>
                    ${
                        currentLanguage === "en"
                            ? "Address"
                            : "地址"
                    }:
                </strong>

                ${address}
            </p>


            <hr>


            <h3>
                ${
                    currentLanguage === "en"
                        ? "Items"
                        : "餐点"
                }
            </h3>

        `;


        cart.forEach(function (item) {

            const itemName =
                currentLanguage === "en"
                    ? item.name
                    : item.nameZh;


            summaryHTML += `

                <p>
                    ${itemName}
                    × ${item.quantity}
                    — RM ${(item.price * item.quantity).toFixed(2)}
                </p>

            `;

        });


        summaryHTML += `

            <hr>

            <p>
                <strong>
                    ${
                        currentLanguage === "en"
                            ? "Food subtotal"
                            : "餐点小计"
                    }:
                </strong>

                RM ${subtotal.toFixed(2)}
            </p>

            <p>
                <strong>
                    ${
                        currentLanguage === "en"
                            ? "Delivery"
                            : "配送费"
                    }:
                </strong>

                ${
                    deliveryEstimate !== null
                        ? `RM ${deliveryEstimate.toFixed(2)}`
                        : (
                            currentLanguage === "en"
                                ? "Pending quotation"
                                : "等待报价"
                        )
                }
            </p>

        `;


        finalOrderSummary.innerHTML =
            summaryHTML;


        orderConfirmation
            .classList
            .remove("hidden");


        orderConfirmation
            .scrollIntoView({

                behavior: "smooth"

            });

    });


    /* =========================
       LANGUAGE TOGGLE
    ========================= */

    document
        .getElementById("languageToggle")
        .addEventListener("click", function () {


            currentLanguage =
                currentLanguage === "en"
                    ? "zh"
                    : "en";


            document
                .querySelectorAll("[data-en]")
                .forEach(function (element) {

                    element.textContent =

                        currentLanguage === "en"

                            ? element.dataset.en

                            : element.dataset.zh;

                });


            this.textContent =

                currentLanguage === "en"

                    ? "中文"

                    : "EN";


            renderMenu();

            renderCart();

        });


    /* =========================
       DARK MODE
    ========================= */

    document
        .getElementById("darkModeToggle")
        .addEventListener("click", function () {


            document
                .body
                .classList
                .toggle("dark-mode");


            const darkModeEnabled =
                document
                    .body
                    .classList
                    .contains("dark-mode");


            this.textContent =
                darkModeEnabled
                    ? "☀️"
                    : "🌙";


            localStorage.setItem(

                "houseOfCocoDarkMode",

                darkModeEnabled

            );

        });


    /* =========================
       LOAD SAVED DARK MODE
    ========================= */

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
            .getElementById("darkModeToggle")
            .textContent = "☀️";

    }


    /* =========================
       INITIAL RENDER
    ========================= */

    renderMenu();

    renderCart();


});
