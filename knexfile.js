// Update with your config settings.
// Config file inspired by KnexJS Tutorial - 2 - Getting Started
// https://www.youtube.com/watch?v=HEzAmAmUM7k&index=2&list=PL7sCSgsRZ-smPRSrim4bX5TQfRue1jKfw

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://localhost/sdc`, 
    pool: {
      min: 0,
      max: 10,
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: 10000,
    debug: true,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: `postgres://localhost/sdc`, 
    pool: {
      min: 0,
      max: 10,
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: 10000,
    debug: true,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
}