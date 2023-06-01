import express, { Express, Request, Response } from 'express';
import { PORT } from './src/common/constants/common.constant';
import db from "./src/models"
import App from "./src/app"

const app: Express = App();
const syncOptions = {
	logging: process.env.NODE_ENV !== 'production', // Mute sync log output in production
	force: process.env.NODE_ENV !== 'production' || process.env.DB_SYNC_FORCE === 'true', // Disable force sync in production unless DB_SYNC_FORCE is set to true
  };
  
db.sequelize.sync(syncOptions).then(() => {
	app.listen(PORT, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
	});
})