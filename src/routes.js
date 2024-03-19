import {BASKET_ROUTE, MAIN_PAGE_ROUTE} from "./utils/consts";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";

export const publicRoutes = [
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    }
]