import express from "express"
import axios from "axios"
import dotenv from "dotenv"

dotenv.config();

const app = express()
const port = 3000
const api_key = process.env.API_KEY

app.use(express.urlencoded({ extended: true }))


app.get("/1", (req, res) => {
    res.send("Congrats! You've created your first wep-app")
})

app.get("/", (req, res) => {
    res.render("index.ejs", {weather: null, error: null})
})

app.post("/", async (req, res) => {
    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    try {
        const response = await axios.get(url);
        const weather = `It's ${response.data.main.temp} celcius in ${response.data.name}`
        res.render('index.ejs', {weather, error: null})

    }
    catch(error) {
        res.render("index.ejs", {weather: null, error: "city not founded"})
    }
})

app.get("/2", (req, res) =>{
    res.render("hello2.ejs")
})

app.listen(port, () => {
    console.log(`Server running on the ${port}`)
})