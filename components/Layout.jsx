import React from 'react'
import {Link, Outlet} from "react-router-dom"
//React Router DOM is an npm package that enables you to implement dynamic routing
 //in a web app. It allows you to display pages and allow users to navigate them. 
 //It is a fully-featured client and server-side routing library for React. 
export default function Layout() {
  return (
     <>  
        <header className="bg-black p-4 w-full text-white gap-3 flex items-center">
            <Link to="/">Counter</Link>
            <Link to="/todo-list">Todo List</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/githubapp">Github App</Link>
        </header>

        <div>
            {/* page content */}
            <Outlet />
        </div>
    </>
  )
}


// link component can be translated to anchor tag, a traditional anchor tag will 
//either redirect or fetch content, this is avoided by/as the link component has 
//the logic to make the routing, for better performance.