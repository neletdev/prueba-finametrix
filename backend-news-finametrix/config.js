const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_user:4W2vv9SluC2Pms3D@cluster0-vdlpx.mongodb.net/test?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost'
};

module.exports = config;