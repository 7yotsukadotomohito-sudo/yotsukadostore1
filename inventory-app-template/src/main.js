const stocks = [
  { name: "りんご", qty: 10 },
  { name: "みかん", qty: 5 },
  { name: "バナナ", qty: 2 },
];

const tbody = document.getElementById("stock-list");

stocks.forEach(item => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.qty}</td>
  `;
  tbody.appendChild(tr);
});
