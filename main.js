import "./style.css"

let selectedOption = 2;

const radioButtons = document.querySelectorAll(".radio-button");
const addToCardBtn = document.querySelector(".add-to-cart-btn");

const optionCards = {
    1: document.getElementById("option-1"),
    2: document.getElementById("option-2"),
    3: document.getElementById("option-3"),
};

function updateUI() {
    // Highlight selected radio button
    radioButtons.forEach((radio) => {
        const optionNumber = Number.parseInt(radio.getAttribute("data-option"));
        radio.classList.toggle("selected", optionNumber === selectedOption);
    });

    // Show/hide selection area for selected card
    for (const option in optionCards) {
        const card = optionCards[option];
        const isSelected = Number(option) === selectedOption;
        card.classList.toggle("selected", isSelected);

        const selectionArea = card.querySelector(".selection-area");
        if (selectionArea) {
            selectionArea.style.display = isSelected ? "block" : "none";
        }

        // Show or hide the popular badge for the second option
        const popularBadge = card.querySelector("#popular-badge");
        if (popularBadge) {
            popularBadge.style.display = isSelected && selectedOption === 2 ? "block" : "none";
        }
    }

    // Set total price
    const totalElement = document.querySelector(".total");
    const prices = { 1: "$10.00 USD", 2: "$18.00 USD", 3: "$24.00 USD" };
    totalElement.textContent = `Total : ${prices[selectedOption]}`;
}

// Setup event listeners
radioButtons.forEach((radio) => {
    radio.addEventListener("click", () => {
        selectedOption = Number.parseInt(radio.getAttribute("data-option"));
        updateUI();
    });
});

// Handle add to cart click
addToCardBtn.addEventListener("click", () => {
    const size1 = document.getElementById(`size1-${selectedOption}`)?.value || "-";
    const color1 = document.getElementById(`color1-${selectedOption}`)?.value || "-";
    const size2 = document.getElementById(`size2-${selectedOption}`)?.value || "-";
    const color2 = document.getElementById(`color2-${selectedOption}`)?.value || "-";

    let message = `Added to cart: ${selectedOption} Unit (Item #1: ${size1}/${size2}, Item #2: ${color1}/${color2})`;
    console.log(message);
    alert("Product added to cart!");
});

// Init
updateUI();
