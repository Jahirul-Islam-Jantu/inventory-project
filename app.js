// Basic Library import
const express = require('express')
const app = new express()
const router = express.Router()
const bodyParser = require('body-parser')

// security middleware import
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const hpp = require('hpp')
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors')
const xss = require('xss-clean')

// database library import
const mongoose = require('mongoose')

// security middleware implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ limit: '50mb' }))

// Body parser implement

app.use(bodyParser.json())

// Request rate limit

const limiter = rateLimit({windowMs:15*60*1000, max: 3000})
app.use(limiter)

