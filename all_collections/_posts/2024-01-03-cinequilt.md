---
layout: post
title: CineQuilt App Frontend & Backend Instructions
date: 2024-01-03
categories: [spring, springboot, backend, frontend, app, cinequilt]
---

# Frontend

# Getting Started: CineQuilt React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start-server`

Runs the server that allows CORS requests from the React app.

## Code Overview

### `src/App.js`

This is the main React component that renders the entire app. It contains the `Router` component that handles routing to different pages.

### `src/components/`

This folder contains all the React components that are used in the app.

### `src/video/`

This folder contains the video properties that are used in the app.

### `src/hooks/`

This folder contains the custom hooks that are used in the app. 
They let you use state and other React features without writing a class.


### Sample Code Blocks


#### `src/components/MovieCard.js`
``` jsx
<MovieCard
    title={metadata.title?.trim()}
    posterUrl={metadata.posterUrl}
    releaseYear={metadata.releaseYear}
    mediaType={metadata.type}
    linkTo={`${Paths.METADATA_PROFILE}/${metadata.metadataId}`}
/>
```

#### `src/video`
``` jsx
    {/*< usage of Video Components */}
    <VideoEmbed embedUrl={episode.videoUrl} /> :
    <CustomPlayer metadata={episode} />
```

#### `src/components/App.js`
``` jsx
    {/* Background image listens useBgImage.js hook.*/}

    <BackgroundImage> 
        ...
        
        <Route element={<RequireAuth allowedRoles={[Constants.ROLES.Admin]}/>}>
            <Route path={Paths.ADMIN} element={<Admin/>}/>
        </Route>

        <Route element={<RequireAuth
            allowedRoles={[Constants.ROLES.User, Constants.ROLES.Manager, Constants.ROLES.Admin]}/>}>
            <Route path={Paths.VIEW_METADATAS} element={<AllMetadatas/>}/>
        </Route>
        ...
    </BackgroundImage>
```

#### `src/hooks/useAuth.js`
``` jsx
    const {auth} = useAuth();
    ...
    // While sending Bearer token to the server
    const authHeader = auth ? {Authorization: `Bearer ${auth.token}`} : {};
```

#### `src/components/RequireAuth.jsx`
``` jsx
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.accessToken //changed from user to accessToken to persist login after refresh
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;
```


#### `src/api/axios.js`
> **Warning:** The proxy set in package.json is used to redirect requests to the server.
> ``` json
>/// package.json     
>"proxy": "http://localhost:8080", ...
> ```

``` jsx
import axios from 'axios';

const BASE_URL = '/api/v1';

export default axios.create({
    baseURL: '/api/v1'
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
```


#### `src/server.js`
> **Warning:**  `:/endpoint` allows any request to be made to the server for development purposes. This is not secure and shall be changed on production. 

``` jsx
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

app.get(`/:endpoint`, async (req, res) => {
  try {
    const endpoint = req.params.endpoint;
    const response = await axios.get(`${endpoint}`);
    const data = response.data;
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    res.status(403).json({ error: 'Forbidden' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```


# Backend

# Getting Started: CineQuilt Spring Boot App

Web Design and Applications Term Project Backend

- Java (pinch of Kotlin :)
- Spring Web
- Spring Security
- JPA



## Getting Started

### Prerequisites

- Java 8 or higher (Java 17 is recommended)
- Gradle
- PostgreSQL

### Installing

1. Clone the repository
```bash
git clone https://github.com/samet-byte/CineQuiltAppBackend.git
```

2. Install dependencies
```bash
gradle build
```

3. Create a PostgreSQL database and follow the instructions in [`DB_INSTRUCTIONS.md`](DB_INSTRUCTIONS.md)

```bash
create database cine_demo_db2
```

4. Create a `application-key.yml` file in `src/main/resources` and add the following lines

```yml
# application-key.yml

## for film buff
gpt:
  api-key: *
key:
  mail-username: example@gmail.com
  mail-password: pass word 1234 5678

#for PostgreSQL Google Cloud
g_cloud_psql:
  url: jdbc:postgresql://global_ip:5432/cine_demo_db2
  username: *
  password: *
```

5. Run the application

```bash
gradle bootRun
```

## Built With

- [Spring](https://spring.io/) - The web framework used
- [Gradle](https://gradle.org/) - Dependency Management
- [Kotlin](https://kotlinlang.org/) - Programming Language
- [PostgreSQL](https://www.postgresql.org/) - Database
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) - IDE
- [Postman](https://www.postman.com/) - API Development Environment
- [Git](https://git-scm.com/) - Version Control System
- [GitHub](https://github.com/samet-byte/cinequilt-app-v2) - Code Hosting Platform

## Authors
- [Samet Bayat](https://sametb.com/)
- [Ramazan Alper]()

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

# API Documentation

## Base URL
`/api/v1`

## Authentication
- **Endpoint:**
    - `/auth`
        - **Logout:**
            - `POST api/v1/auth/logout`

## Demo
- **Management:**
    - `GET api/v1/management/**`

## User Operations
- **Users:**
    - `GET api/v1/users`

## Metadata Operations
- **Metadatas:**
    - `GET api/v1/metadatas`
    - **Search:**
        - `GET api/v1/metadatas/search`

## Favorites
- **Favs:**
    - `GET api/v1/favs`

## Series Operations
- **Series:**
    - `GET api/v1/series`
- **Episode:**
    - `GET api/v1/series/episode`

## API Operations
- **ID:**
    - `GET ../{id}`
- **IP:**
    - `GET api/v1/ip`




> **Note:** Movie and TV Show samples are taken from [TMDB](https://www.themoviedb.org/)
> and saved to the database with the help of `Python` scripts.
> ```python
> import requests
> 
> bearer_token = 'TOKEN_GOES_HERE'
> content_id = input("Enter content id: ")
> query = input("Enter query: ")
> api_key = 'TMDB_API_KEY_GOES_HERE'
> 
> def post_episode(episode_number, episode_name, episode_description, season_number):
>     # Replace the following placeholder values with your actual endpoint and request body
>     endpoint = "http://localhost:8080/api/v1/series"  # Replace with your API endpoint
>     headers = {
>         'Authorization': f'Bearer {bearer_token}',
>         'Content-Type': 'application/json',
>         'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
>     }
> 
>     # Replace the following placeholder values with your actual request body
>     request_body = {
>         'metadataId': content_id,
>         'season': season_number,
>         'episode': episode_number,
>         'title': episode_name,
>         'description': episode_description,
>         'videoUrl': None
>     }
> 
>     # Make the POST request
>     response = requests.post(endpoint, headers=headers, json=request_body, verify=False, timeout=5)
> # 201
>     if response.status_code == 200:
>         print(f"Successfully posted episode {episode_number} of season {season_number}")
>     else:
>         print(f"Failed to post episode {episode_number} of season {season_number}. Status code: {response.status_code}")
> 
> 
> def get_seasons(api_key):
>     # Set up the base URL for the TMDb API
>     base_url = "https://api.themoviedb.org/3"
> 
>     search_url = f"{base_url}/search/tv"
>     search_params = {
>         'api_key': api_key,
>         'query': query
>     }
> 
>     # Make the request to search for the TV show
>     response = requests.get(search_url, params=search_params)
>     show_data = response.json()
> 
>     show_id = show_data['results'][0]['id']
> 
>     seasons_url = f"{base_url}/tv/{show_id}"
>     seasons_params = {
>         'api_key': api_key
>     }
> 
>     # Make the request to get information about all seasons
>     response = requests.get(seasons_url, params=seasons_params)
>     show_info = response.json()
> 
>     # Print information about each season and its episodes
>     for season in show_info['seasons']:
>         season_number = season['season_number']
>         print(f"\nSeason {season_number} - {season['name']}")
> 
>         # Get the list of episodes for the current season
>         episodes_url = f"{base_url}/tv/{show_id}/season/{season_number}"
>         episodes_params = {
>             'api_key': api_key
>         }
> 
>         # Make the request to get the list of episodes
>         response = requests.get(episodes_url, params=episodes_params)
>         episodes_data = response.json()
> 
>         # Print information about each episode in the season
>         for episode in episodes_data['episodes']:
>             print(f"\tEpisode {episode['episode_number']}: {episode['name']}")
>             print(f"\t\tDescription: {episode['overview']}\n")
>             
>             episode_number = episode['episode_number']
>             episode_name = episode['name']
>             episode_description = episode['overview']
>             post_episode(episode_number, episode_name, episode_description, season_number)
>             # input("Continue?")
> 
> if __name__ == "__main__":
>     get_seasons(api_key) 
> ```