const nameEl = document.getElementById("name-el");
const dateEl = document.getElementById("date-el");
const amountEl = document.getElementById("amount-el");
const addBtn = document.getElementById("add-btn");
const moneyTable = document.getElementById("money-table");
const clearBtn = document.getElementById("clear-btn");

// ADD
addBtn.addEventListener("click", function () {
  let name = nameEl.value;
  let date = dateEl.value;
  let amount = amountEl.value;
  let template = `
  <tr>
<td>${name}</td>
<td>${date}</td>
<td>$${amount}</td>
  </tr>
  `;
  moneyTable.innerHTML += template;
  nameEl.value = "";
  dateEl.value = "";
  amountEl.value = "";
});

// CLEAR
clearBtn.addEventListener("click", function () {
  let templateClear = `
  <table id="money-table">
<tr id="tr-el">
<th>Name</th>
<th>Date</th>
<th>Amount</th>
</tr>
</table>
`;
  moneyTable.innerHTML = templateClear;
});
