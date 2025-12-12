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
<img width="2203" height="706" alt="image" src="https://github.com/user-attachments/assets/088eea13-07ef-4731-b80e-935ca8afe018" />


### Weather Data Display
<img width="1638" height="647" alt="image" src="https://github.com/user-attachments/assets/c21cc1d3-4ffa-4f09-8ea5-d561151d72e6" />

### Weather Trend Chart
<img width="1560" height="887" alt="image" src="https://github.com/user-attachments/assets/93ee0a46-2c8b-4670-8043-57bf3320d852" />



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

