# 🌐 Node Web Scraper

![Node Web Scraper](https://img.shields.io/badge/Node.js-v16.x%2B-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Overview

**Node Web Scraper** is a powerful and simple web scraping tool built using **Node.js** and the **Cheerio** library. Extract valuable data from web pages with ease and save it in your preferred format!

### ✨ Features

- **Data Extraction**: Scrape titles, subtitles, and links from any web page.
- **Configurable**: Set target URLs and HTML saving options via `settings.json`.
- **Output Formats**: Save scraped data in **JSON** and optional **HTML** format.
- **Lightweight**: Minimal dependencies and fast performance.

### 📦 Getting Started

Follow these simple steps to get your scraper up and running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/infalibless/web-scraper
   ```
   Or download it directly from [this link](https://github.com/infalibless/web-scraper/archive/refs/heads/main.zip).

2. **Navigate to the project directory**:
   ```bash
   cd node-web-scraper
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Configure settings**: Edit `settings.json` to set your target URL and preferences.

5. **Run the scraper**:
   ```bash
   node web.js
   ```

### 🛠️ Configuration Example

Here's a sample `settings.json` configuration:

```json
{
    "saveHtml": true,
    "logfolder": "./extract",
    "url": "https://example.com"
}
```

### 📈 Extract

- Scraped data is saved as `scraped.json`.
- HTML source is saved in the specified folder.

### 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request. Let's enhance this tool together!

### 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

### ©️ Copyright

© 2024 raynex. All rights reserved.

---

**Happy Scraping!** 🕵️‍♂️
