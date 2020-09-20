import express from 'express';
import appRouter from './routes/appRouter';

const app = express();

// access static files
app.use(express.static('public'));

// allow views
app.set('view engine', 'ejs');

// routes
app.use(appRouter);

export default app;