---
layout: post
title: "Sloth Series 2: Download All Github User/Organization Repositories"
date: 2023-08-09
categories: [python, github, sloth, repository, download, batch]
---



```python
import os
import requests

github_username = input("Enter GitHub username: ")

# URL of the user's repositories on GitHub API
url = f"https://api.github.com/users/{github_username}/repos"

# Make the GET request to fetch the repositories data
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    repositories = response.json()

    # Extract and print the html_url for each repository
    for repo in repositories:
        html_url = repo['html_url'] + ".git"
        print(html_url)
        os.system(f"git clone {html_url}")
    print("Done!")
else:
    print(f"Failed to fetch data. Status code: {response.status_code}")
```