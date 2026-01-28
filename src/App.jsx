
import Article from './Article';
import Home from './Home';
import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Layout from './Layout';
import NotFound from './NotFound';
import Blog from './Blog';
import data from "./posts.json";


export default function App() {
  const posts = data.posts;

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: 'home', element: <Navigate to={"/"} /> },
      { index: true, element: <Home /> },
      // { path: 'article', element: <Article/> },
      { path: 'blog', element: <Blog /> },
      ...posts.map(post => ({
        path: `/article/${post.slug}`,
        element: <Article id={post.id -1}/>
      })),
      { path: '*', element: <NotFound /> },
    ]
  }
]);

  return (
    <>
    <RouterProvider router={router}  />
  </> )
}
