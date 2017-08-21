require('dotenv').config({path: "config/env"})
const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./config/webpack.config.dev.js')

const app = express()
const compiler = webpack(webpackConfig)

//routers
const testRouter = require('./src/routers/test-router');

//Static content
app.use(express.static(__dirname+'/public'))

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/js/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}))
app.use(webpackHotMiddleware(compiler, {
    log: console.log, // eslint-disable-line
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}))

app.use('/test',testRouter);

app.all('/**',(req,res) => res.sendFile(__dirname + '/public/views/index.html'))
app.listen(process.env.PORT);
