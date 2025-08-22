# Budget Tracker App

A fully responsive, installable web app that helps you manage personal finances in style. Developed as part of the Women in DeFi JavaScript Program, this project showcases:

- Real-time multi-currency support via [exchangerate.host](https://exchangerate.host)  
- Interactive spending charts powered by Chart.js  
- Persistent data storage in `localStorage`  
- CSV export & “Email my report” functionality  
- Progressive Web App features (offline support & installability)  
- Modern UI/UX: glassmorphism, neumorphic controls, pastel palette, hover-lift animations, sticky navigation  
- Mobile-first, fully responsive layout  

---

## 📂 Project Structure

```
budget-tracker/
├── index.html         # Main HTML entry
├── style.css          # App-wide styling
├── script.js          # Front-end logic & API calls
└── README.md          # Project overview & setup instructions
```


## 🚀 Features

- **Income & Expense Logging**  
- **Multi-Currency Converter**  
- **Chart.js Spending Bar Chart**  
- **Data Persistence** in `localStorage`  
- **CSV Export & Email Report**  
- **PWA Ready** (Service Worker + Manifest)  
- **Responsive & Navigable** (sticky navbar, section links)  
- **Vibrant UI** (glassmorphic cards, pastel colors, hover effects)


## 🛠️ Setup & Local Development

1. **Clone the repo**  
   ```bash
   git clone https://github.com/YOUR_USERNAME/budget-tracker.git
   cd budget-tracker
   ```

2. **Open in browser**  
   Simply launch `index.html` in your favorite browser.  
   No build step or server required—everything runs client-side.

---

## 🌐 Live Demo

Check out the deployed app on Vercel:  
https://budget-tracker-app.vercel.app

---

## 📦 Deployment

### GitHub Pages

1. Push code to your GitHub repo’s `main` branch.  
2. In GitHub, go to **Settings → Pages**, select `main`/`root`, and save.  
3. Your app will be live at `https://YOUR_USERNAME.github.io/budget-tracker/`.

### Vercel

1. Sign in to [Vercel](https://vercel.com) and import your GitHub repo.  
2. Choose **Other** for the framework preset.  
3. Leave build/output settings blank and click **Deploy**.  
4. Vercel provides a live URL—share it anywhere!

---

## 📋 Usage

1. **Select a currency** from the dropdown.  
2. **Add a transaction**: description, amount, and type (income/expense).  
3. **View your updated balance** and transaction list.  
4. **Scroll to the Chart section** for a visual spending summary.  
5. **Export CSV** or **Email report** (mailto link) for records.  
6. **Install as PWA** on supported devices for offline access.

---

## 💡 Customization Ideas

- Upgrade storage to IndexedDB for larger datasets  
- Add date filters or category breakdown  
- Integrate real-time charts (ApexCharts, D3.js)  
- Implement authentication and cloud storage  
- Support dark/light theme toggle  

---

## 👩‍💻 Acknowledgments

Built as part of the **Women in DeFi JavaScript Program**—an initiative to empower women in blockchain and web development. Special thanks to all mentors and community members for guidance and inspiration.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE). Feel free to fork, modify, and share!
