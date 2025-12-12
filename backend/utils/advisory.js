export function generateAdvisories({ temperature, humidity, windKmh, pop, forecast }) {
  const adv = [];
  if (pop > 60) {
    adv.push({
      title: "High Rain Alert",
      message: `Rain probability is ${pop}%. Avoid irrigation and pesticide spraying. Protect stored grains.`
    });
  } else if (pop > 30) {
    adv.push({
      title: "Moderate Rain Possibility",
      message: `Chance of rain is ${pop}%. Plan field activities accordingly.`
    });
  }
  if (temperature > 35) {
    adv.push({
      title: "High Temperature Warning",
      message: `Temperature is ${temperature}°C. Increase irrigation for heat-sensitive crops. Consider mulching.`
    });
  } else if (temperature < 15) {
    adv.push({
      title: "Low Temperature Alert",
      message: `Temperature is ${temperature}°C. Frost risk for tender crops — use protective covering.`
    });
  }

  if (windKmh > 20) {
    adv.push({
      title: "High Wind Speed",
      message: `Wind is ${windKmh} km/h. Avoid spraying due to drift risk. Secure loose items.`
    });
  } else if (windKmh < 8) {
    adv.push({
      title: "Low Wind — Spraying Window",
      message: `Wind is ${windKmh} km/h. Good conditions for pesticide spraying if no rain expected.`
    });
  }

  if (humidity > 80) {
    adv.push({
      title: "High Humidity — Disease Risk",
      message: `Humidity is ${humidity}%. Risk of fungal diseases. Monitor crops and consider preventive treatments.`
    });
  }
  if (forecast.length > 0) {
    const nextDay = forecast.slice(0, 8);
    const avgPop = Math.round(
      nextDay.reduce((sum, f) => sum + (f.pop || 0), 0) / nextDay.length
    );

    if (avgPop < 20) {
      adv.push({
        title: "Dry Weather Window",
        message: `Next 24 hours show only ${avgPop}% rain chance. Ideal time for fieldwork and spraying.`
      });
    }
  }
  if (adv.length === 0) {
    adv.push({
      title: "Normal Weather",
      message: "Weather seems stable. Continue regular farm activities."
    });
  }

  return adv;
}
