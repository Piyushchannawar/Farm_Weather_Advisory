# Farm Weather Advisor

Farm Weather Advisor is a MERN-based application that provides real-time weather insights, temperature and rain probability trends, and smart advisory suggestions to assist farmers in making better field decisions.

This project was developed as part of the GramIQ Internship Technical Assignment.

---

## Features

- Search weather by city name  
- Real-time weather metrics (temperature, humidity, wind speed, rain probability)  
- Weather trend charts (Temperature + POP)  
- Automated advisory generation based on conditions  
- Recent searches sidebar  
- Dark/Light mode toggle  
- Responsive UI using Tailwind CSS  
- MongoDB Atlas integration  

---

## Screenshots

### Homepage – Dark Mode
![Dark Mode Screenshot](./screenshots/dark-mode.png)

### Weather Data Display
![Weather Data Screenshot](./screenshots/weather-data.png)

### Weather Trend Chart
![Chart Screenshot](./screenshots/chart.png)

> Create a folder named `screenshots` in your repo and add images with these names.

---

## 🛠 Tech Stack

### Frontend
- React + Vite  
- Tailwind CSS  
- Chart.js + react-chartjs-2  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- OpenWeatherMap API  

---

## 📦 Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/farm-weather-advisor.git
cd farm-weather-advisor

2. Create .env file

Inside backend folder:

OPENWEATHER_API_KEY=your_api_key_here
MONGO_URI=your_mongodb_atlas_uri
PORT=5000

3. Start Backend Server
npm run dev


The backend starts at:

http://localhost:5000

### Frontend Setup
1. Navigate to frontend folder
cd ../frontend
npm install

2. Run Frontend
npm run dev


The frontend starts at:

http://localhost:5173


🌦 API Used

The project uses real-time data from:

OpenWeatherMap Forecast API

https://openweathermap.org/api

📊 Core Logic
✔ Weather Trend Charts

The app extracts temperature and rain probability (POP) values from OpenWeatherMap’s forecast API and visualizes them using Chart.js.

✔ Advisory Engine

The backend generates smart farming advisories based on:

High or moderate rain probability

High temperature

Low temperature

High humidity (fungal risk)

High wind (avoid spraying)

Dry weather window (good for fieldwork)

These advisories change dynamically based on weather conditions.

```bash
📁 Project Structure
project/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── components/charts/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── ...
│
└── README.md

