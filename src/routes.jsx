import Layout from './components/Layout';
import Home from './components/Home';
import Shop from './components/Shop';

const routes = [

    {
        path: '/',
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'shop',
                element: <Shop />
            }
        ]
    },
];

export default routes;