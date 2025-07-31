import express from "express"


const app = express()
const port = 3000



app.get("/", (req, res) => {
    res.send("Congrats! You've created your first wep-app")
})

app.listen(port, () => {
    console.log(`Server running on the ${port}`)
})