import { lazy } from 'react';

const MeatDishesAsync = lazy(() => import('./MeatDishes'));

export {MeatDishesAsync}