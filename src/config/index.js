require('dotenv').config();

const { checkEnvironmentVariables } = require('../utils/env');

const envVariables = ['APIRESTASOCIACION_JWT_SECRET'];

checkEnvironmentVariables(envVariables);

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const isDevelopment = !isProduction;
const isTest = env === 'test';

module.exports = {
  // Server options
  host: '0.0.0.0',
  port: parseInt(process.env.PORT, 10) || 8088,

  // Application environment
  env,
  isProduction,
  isDevelopment,
  isTest,
  db: process.env.MONGODB_URI || 'mongodb://andres:andres123@cluster0-shard-00-00-wyppu.mongodb.net:27017,cluster0-shard-00-01-wyppu.mongodb.net:27017,cluster0-shard-00-02-wyppu.mongodb.net:27017/asociacionAgro?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',

  // JWT config
  JWT: {
    algorithm: 'HS256',
    accessTokenExpiryTime: 900, // 15 minutes
    refreshTokenExpiryTime: 3600, // 1 hour
    secret: process.env.APIRESTASOCIACION_JWT_SECRET,
  },
};
