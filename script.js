// DOM Elements
const form = document.getElementById('transaction-form');
const listEl = document.getElementById('transaction-list');
const balanceEl = document.getElementById('balance');
const currSelector = document.getElementById('currency-selector');
const currSymbol = document.getElementById('currency-symbol');
const ctx = document.getElementById('spendingChart').getContext('2d');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

let transactions = JSON.parse(localStorage.getItem('txns')) || [];
let exchangeRates = {};
let chartInstance = null;
let selectedCurr = localStorage.getItem('currency') || 'USD';

// Initialize App
initCurrencies().then(() => renderAll());
form.addEventListener('submit', addTransaction);
currSelector.addEventListener('change', onCurrencyChange);
window.addEventListener('scroll', highlightNav);

// Fetch rates & populate currency dropdown
async function initCurrencies() {
  const res = await fetch('https://api.exchangerate.host/latest');
  const data = await res.json();
  exchangeRates = data.rates;
  ['USD','EUR','GBP','NGN','JPY','AUD','CAD','CHF','CNY','INR'].forEach(code => {
    currSelector.add(new Option(code, code));
  });
  currSelector.value = selectedCurr;
  currSymbol.textContent = selectedCurr;
}

// Handle currency switch
function onCurrencyChange() {
  selectedCurr = currSelector.value;
  currSymbol.textContent = selectedCurr;
  localStorage.setItem('currency', selectedCurr);
  renderAll();
}

// Add a new transaction
function addTransaction(e) {
  e.preventDefault();
  const desc = document.getElementById('description').value.trim();
  const amt = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;
  transactions.push({ desc, amt, type, date: new Date().toISOString() });
  localStorage.setItem('txns', JSON.stringify(transactions));
  form.reset();
  renderAll();
}

// Render list, balance & chart
function renderAll() {
  renderList();
  renderBalance();
  renderChart();
}

// Convert USD base to selected currency
function convert(val) {
  const rate = exchangeRates[selectedCurr] || 1;
  return val * rate;
}

// Transaction list UI
function renderList() {
  listEl.innerHTML = '';
  transactions.forEach(t => {
    const li = document.createElement('li');
    const sign = t.type === 'expense' ? '-' : '+';
    li.textContent = `${t.desc}  ${sign}${convert(t.amt).toFixed(2)}`;
    listEl.appendChild(li);
  });
}

// Balance UI
function renderBalance() {
  const total = transactions.reduce((sum, t) =>
    sum + (t.type === 'income' ? t.amt : -t.amt), 0
  );
  balanceEl.textContent = convert(total).toFixed(2);
}

// Chart.js UI
function renderChart() {
  const labels = transactions.map(t => new Date(t.date).toLocaleDateString());
  const data = transactions.map(t => {
    const val = t.type === 'expense' ? -t.amt : t.amt;
    return convert(val);
  });
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Net Flow',
        data,
        backgroundColor: data.map(v =>
          v < 0 ? 'rgba(255,99,132,0.6)' : 'rgba(54,162,235,0.6)'
        )
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });
}

// Highlight navbar link on scroll
function highlightNav() {
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.navbar a[href="#${sec.id}"]`);
      activeLink?.classList.add('active');
    }
  });
}

