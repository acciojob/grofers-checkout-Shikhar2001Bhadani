const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll(".price");
    
    let total = 0;
    priceElements.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    const existingTotalRow = document.querySelector(".total-price-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
    
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    newRow.classList.add("total-price-row");
    
    const newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2");
    newCell.style.textAlign = "center";
    newCell.textContent = `Total Price: Rs ${total}`;
    
    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
