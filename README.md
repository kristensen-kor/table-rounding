# Table Rounding

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://kristensen-kor.github.io/table-rounding/)

Table Rounding is a lightweight, browser-based tool that rounds a table of numbers while preserving the overall sum. It is useful in surveys, marketing research, and sampling, where maintaining accurate totals is crucial.

🔗 **Try it online:** [kristensen-kor.github.io/table-rounding](https://kristensen-kor.github.io/table-rounding/)

---

## ✨ Features

- **Accurate Rounding:** Uses the largest remainder method to ensure the sum of rounded numbers remains consistent.
- **Simple Input:** Paste your tab-delimited table into the text area.
- **Instant Processing:** Click a button to round the table and automatically copy the result to your clipboard.
- **No Installation Needed:** Runs directly in your browser.

## 🛠️ Built With

- **Vue.js** (lightweight, modern framework for reactive UI)

---

## 🚀 How to Use

1. **Go to the app:** [kristensen-kor.github.io/table-rounding](https://kristensen-kor.github.io/table-rounding/)
2. **Paste your data** into the text area.
   - Input should be tab-delimited (e.g., copied from Excel or a CSV file).
   - The app automatically replaces commas with dots if needed.
3. **Click the button**: "Read, Round, and Copy to Clipboard".
4. **View the rounded table**: Your data will be updated in the text area.
5. **Your data is copied**: The rounded table is automatically copied to your clipboard.
6. **Paste the rounded data** into your document, spreadsheet, or report.

### Example Input:

```
12.4	25.6	8.1
15.3	9.8	28.9
```

### Example Output:

```
12	26	8
15	10	29
```
(Total remains the same!)

---

## 📌 Use Cases

- **Survey Results:** Ensure percentage distributions sum to exactly 100%.
- **Marketing Reports:** Present market share or demographic data with precise rounding.
- **Statistical Research:** Maintain data integrity when working with proportions.
- **Sampling & Quotas:** Allocate resources fairly while rounding values correctly.

