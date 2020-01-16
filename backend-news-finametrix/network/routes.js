const news = require('../components/news/network');

const routes = function (server) {
    server.use('/api', news);
}

module.exports = routes;