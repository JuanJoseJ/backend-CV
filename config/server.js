module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '93879c9d889ba0fcd1ebeaab14d5cd33'),
    },
  },
});
