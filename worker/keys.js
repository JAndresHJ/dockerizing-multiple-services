/**
 * This file contains the hostname and the port required
 * to connect with Reddis
 */

module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT
};
