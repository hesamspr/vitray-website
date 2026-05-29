module.exports = {
  apps: [
    {
      name: 'vitrayco',
      cwd: '/var/www/website/web-next',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '127.0.0.1',
      },
      error_file: '/var/log/pm2/vitrayco-error.log',
      out_file: '/var/log/pm2/vitrayco-out.log',
      merge_logs: true,
      time: true,
    },
  ],
};
