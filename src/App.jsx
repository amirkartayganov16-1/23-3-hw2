import './App.css'
import { Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage'
import PostList from './pages/PostList/PostList'
import Layout from './components/Layout/Layout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import SinglePost from './pages/SinglePost/SinglePost'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
              <Route index element={<h3>Home page</h3>}/>
              <Route path='about' element={<AboutPage/>} />
              <Route path='posts' element={<PostList/>} />
              <Route path='posts/:id' element={<SinglePost/>} />
              <Route path='login' element={<LoginPage/>} />
              <Route path='profile' element={<ProfilePage/>} />

              <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
