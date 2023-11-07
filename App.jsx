import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Counter from "./pages/Counter"
import TodoList from "./pages/TodoList"
import Contact from "./pages/Contact"
import ContactDetails from "./pages/ContactDetails"
import GithubApp from "./pages/GithubApp"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />}></Route>
          <Route path="/todo-list" element={<TodoList />}></Route>
          <Route path="/contact" element={<Contact />}></Route> 
          <Route path="/contact/:name" element={<ContactDetails />}></Route>
          <Route path="/githubapp" element={<GithubApp />}></Route>          
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

// To render any component we have to bring them into the App.jsx via 'import'