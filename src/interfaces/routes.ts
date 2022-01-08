import IRoutes from "./IRoutes";
import Home from "../components/Home";
import CardMoviesById from "../components/Card/CardMovieById";

const routes: IRoutes[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        exact: true
    },
    {
        path: '/movie/:id',
        name: 'movies',
        component: CardMoviesById,
        exact: true
    }
]

export default routes;