import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const API_URL= "http://api.weatherapi.com/v1/"
const yourAPIKey= "4e8c8259ad6247e3859132227242205"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async(req, res) => {
    try {
        const response = await axios.get(API_URL + `forecast.json?key=${yourAPIKey}&q=London&days=3`);
        const result = response.data;
        res.render("index.ejs", {
            city: result.location.name,
            country: result.location.country,
            localtime: result.location.localtime,
            temp_c: result.current.temp_c,
            cond_txt: result.current.condition.text,
            cond_icon: result.current.condition.icon,
            wind_kph: result.current.wind_kph,
            wind_dir: result.current.wind_dir,
            precip_mm: result.current.precip_mm,
            humid: result.current.humidity,
            forDateOne: result.forecast.forecastday[0].date,
            maxt_one: result.forecast.forecastday[0].day.maxtemp_c,
            mint_one: result.forecast.forecastday[0].day.mintemp_c,
            avgt_one: result.forecast.forecastday[0].day.avgtemp_c,
            maxwind_one: result.forecast.forecastday[0].day.maxwind_kph,
            totprecip_one: result.forecast.forecastday[0].day.totalprecip_mm,
            avghum_one: result.forecast.forecastday[0].day.avghumidity,
            cond_icon_one: result.forecast.forecastday[0].day.condition.icon,
            rain_one: result.forecast.forecastday[0].day.daily_chance_of_rain,
            forDateTwo: result.forecast.forecastday[1].date,
            maxt_two: result.forecast.forecastday[1].day.maxtemp_c,
            mint_two: result.forecast.forecastday[1].day.mintemp_c,
            avgt_two: result.forecast.forecastday[1].day.avgtemp_c,
            maxwind_two: result.forecast.forecastday[1].day.maxwind_kph,
            totprecip_two: result.forecast.forecastday[1].day.totalprecip_mm,
            avghum_two: result.forecast.forecastday[1].day.avghumidity,
            cond_icon_two: result.forecast.forecastday[1].day.condition.icon,
            rain_two: result.forecast.forecastday[1].day.daily_chance_of_rain,
            forDateThr: result.forecast.forecastday[2].date,
            maxt_thr: result.forecast.forecastday[2].day.maxtemp_c,
            mint_thr: result.forecast.forecastday[2].day.mintemp_c,
            avgt_thr: result.forecast.forecastday[2].day.avgtemp_c,
            maxwind_thr: result.forecast.forecastday[2].day.maxwind_kph,
            totprecip_thr: result.forecast.forecastday[2].day.totalprecip_mm,
            avghum_thr: result.forecast.forecastday[2].day.avghumidity,
            cond_icon_thr: result.forecast.forecastday[2].day.condition.icon,
            rain_thr: result.forecast.forecastday[2].day.daily_chance_of_rain,
        });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
});

app.post("/", async(req, res) => {
    const place = req.body.location;
    try {
        const response = await axios.get(API_URL + `forecast.json?key=${yourAPIKey}&q=${place}&days=3`);
        const result = response.data;
        res.render("index.ejs", {
            city: result.location.name,
            country: result.location.country,
            localtime: result.location.localtime,
            temp_c: result.current.temp_c,
            cond_txt: result.current.condition.text,
            cond_icon: result.current.condition.icon,
            wind_kph: result.current.wind_kph,
            wind_dir: result.current.wind_dir,
            precip_mm: result.current.precip_mm,
            humid: result.current.humidity,
            forDateOne: result.forecast.forecastday[0].date,
            maxt_one: result.forecast.forecastday[0].day.maxtemp_c,
            mint_one: result.forecast.forecastday[0].day.mintemp_c,
            avgt_one: result.forecast.forecastday[0].day.avgtemp_c,
            maxwind_one: result.forecast.forecastday[0].day.maxwind_kph,
            totprecip_one: result.forecast.forecastday[0].day.totalprecip_mm,
            avghum_one: result.forecast.forecastday[0].day.avghumidity,
            cond_icon_one: result.forecast.forecastday[0].day.condition.icon,
            rain_one: result.forecast.forecastday[0].day.daily_chance_of_rain,
            forDateTwo: result.forecast.forecastday[1].date,
            maxt_two: result.forecast.forecastday[1].day.maxtemp_c,
            mint_two: result.forecast.forecastday[1].day.mintemp_c,
            avgt_two: result.forecast.forecastday[1].day.avgtemp_c,
            maxwind_two: result.forecast.forecastday[1].day.maxwind_kph,
            totprecip_two: result.forecast.forecastday[1].day.totalprecip_mm,
            avghum_two: result.forecast.forecastday[1].day.avghumidity,
            cond_icon_two: result.forecast.forecastday[1].day.condition.icon,
            rain_two: result.forecast.forecastday[1].day.daily_chance_of_rain,
            forDateThr: result.forecast.forecastday[2].date,
            maxt_thr: result.forecast.forecastday[2].day.maxtemp_c,
            mint_thr: result.forecast.forecastday[2].day.mintemp_c,
            avgt_thr: result.forecast.forecastday[2].day.avgtemp_c,
            maxwind_thr: result.forecast.forecastday[2].day.maxwind_kph,
            totprecip_thr: result.forecast.forecastday[2].day.totalprecip_mm,
            avghum_thr: result.forecast.forecastday[2].day.avghumidity,
            cond_icon_thr: result.forecast.forecastday[2].day.condition.icon,
            rain_thr: result.forecast.forecastday[2].day.daily_chance_of_rain,
        });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });