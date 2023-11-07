import React, { useContext, useState } from "react";
import { createContext } from "react";

function UserDetails() {
  const { userData } = useContext(GithubAppContext);

  return (
    userData.id && (
      <div className="mt-6">
        <div className="flex items-center gap-4">
          <img
            src={userData.avatar_url}
            alt="User Image"
            id="image"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h3 className="text-gray-700 font-semibold" id="name">
            {userData.name}
          </h3>
        </div>

        <ul>
          <li className="flex items-center gap-2">
            <span>Bio</span>
            <span id="bio">{userData.bio}</span>
          </li>

          <li className="flex items-center gap-2">
            <span>Public Repositories</span>
            <span id="public_repos">{userData.public_repos}</span>
          </li>
        </ul>
      </div>
    )
  );
}
// user data brought together into one component

function ErrorMessage() {
  const { errorMessage } = useContext(GithubAppContext);

  return (
    <span className="text-red-500 font-semibold my-2">{errorMessage}</span>
  );
}

function SearchForm() {
  const { setUserData, setErrorMessage } = useContext(GithubAppContext);

  function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setUserData({});

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (data.username == "" || !data.username) {
      setErrorMessage("Please enter a valid username");
      return;
    }

    fetch(`https://api.github.com/users/${data.username}`)
      .then((response) => response.json())
      .then((apiData) => {
        // console.log("entered this section")

        if (apiData.message && apiData.message == "Not Found") {
          setErrorMessage(
            "Enter a valid username because this one was not found"
          );
          return;
        }
        setUserData(apiData);
        console.log("data", apiData);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="search-form"
      className="flex items-center w-full gap-3"
    >
      <input
        type="search"
        name="username"
        placeholder="Enter Github username"
        className="border rounded-md p-2 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-400 text-white rounded px-4 py-2"
      >
        Search
      </button>
    </form>
  );
}

const GithubAppContext = createContext({
  userData: {},
  setUserData: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
});

function GithubAppProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({});

  return (
    <GithubAppContext.Provider
      value={{ userData, setUserData, errorMessage, setErrorMessage }}
    >
      {children}
    </GithubAppContext.Provider>
  );
}

export default function GithubApp() {
  // const image = document.querySelector("#image")
  // const h3 = document.querySelector("#name")

  // const bioSpan = document.querySelector("#bio")
  // const resposSpan = document.querySelector("#public_repos")

  // image.setAttribute("src", apiData.avatar_url)

  // h3.innerHTML = apiData.name
  // bioSpan.innerHTML = apiData.bio
  // resposSpan.innerHTML = apiData.public_repos

  // setUserData(apiData);

  return (
    <GithubAppProvider>
      <div className="grid place-items-center max-w-md mx-auto h-96">
        <div className="w-full">
          <SearchForm />
          <UserDetails />
          <ErrorMessage />
        </div>
      </div>
    </GithubAppProvider>
  );
}
// Generally when the components are used for the app and unlikely to be used outside
// then the components would be included like this *above*

//Shared state (global copy) for our components to receive information and also pass info
// to and from eg function GithubApp (parent) components inside <div> (children)
