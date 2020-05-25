import React, { useState, useEffect } from "react";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
import axios from "axios";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";

export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    async function getProfileData() {
      await axios
        .get("https://api.github.com/users/" + openSource.githubUserName)
        .then(function (response) {
          setProfileFunction(response.data);
        });
    }

    getProfileData();
  }, []);
  if (openSource.showGithubProfile === "true") {
    return <GithubProfileCard prof={prof} key={prof.id} />;
  } else {
    return <Contact />;
  }
}
