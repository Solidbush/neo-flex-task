import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
export const MAIN_PAGE_ROUTE = '/';

export const BASKET_ROUTE = '/basket';

export const FAVORITES_ROUTE = '/favorites';

export const CONTACTS_ROUTE = '/contacts';
export const PUBLIC_ROUTES = [
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    }
]