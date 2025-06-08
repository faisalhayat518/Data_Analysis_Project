
# 📊 Auto Data Analysis Platform

A private, full-stack automation web app for numeric data analysis. Upload files or connect to a MySQL database and get powerful insights instantly.

## 🚀 Features
- 📁 Upload CSV, Excel, or TXT files
- 🔗 Connect to MySQL with a query
- 📊 Automated analysis: stats, trends, correlation, clustering
- 📤 Export as PDF/Excel

## 🧱 Stack
- **Frontend:** React.js
- **Backend:** FastAPI (Python)

## ▶️ How to Run

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```
