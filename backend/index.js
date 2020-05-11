const express = require('express')
const PORT = process.env.PORT || 3000
const parser = require('body-parser')
const cors = require('cors')
const app = express()
const restaurantRoutes = require('./routes/restaurantRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const imageRoutes = require('./routes/imageRoutes')
const faveRoutes = require('./routes/favoriteRoutes')
const hourRoutes = require('./routes/hourRoutes')

app.use(parser.json())
app.use(bodyParser.urlencoded({ extended:true}))
app.use(cors())

app.use('/restaurants', restaurantRoutes)
app.use('/reviews', reviewRoutes)
app.use('/images', imageRoutes)
app.use('/hours', hourRoutes )
app.use('/favorites', faveRoutes)


app.listen(PORT, () => console.log('working!', PORT))
