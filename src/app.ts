import express from 'express';
import { OrderRoutes } from './routes/OrderRoutes';
import { MenuItemRoutes } from './routes/MenuItemRoutes';
import { RestaurantRoutes } from './routes/RestaurantRoutes';
import { UserRoutes } from './routes/UserRoutes';
import { SupportRoutes } from './routes/SupportRoutes';
import { ReportRoutes } from './routes/ReportRoutes';

const app = express();
app.use(express.json());

// Register routes
app.use('/orders', OrderRoutes);
app.use('/menuItems', MenuItemRoutes);
app.use('/restaurants', RestaurantRoutes);
app.use('/users', UserRoutes);
app.use('/support', SupportRoutes);
app.use('/admin/reports', ReportRoutes);

export default app;