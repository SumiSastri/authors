
## Naming conventions

In the src files create frontend (client) and backend (server) folders to separate concerns
- Folder naming convention - snake-case-for-folders
- Files PascalCase for for front-end React containers and components
- Files camelCase for css and backend server files

## VERSION CONTROL - FILE ACCESS

- Clone this repo - The pack has a sample basic front-end and server set-up
- $git clone - paste with URL link not ssl link (https://github.com/SumiSastri/authors.git)

Make sure you have a working pack by:-
- use npm as your package manager (yarn and npm conflict this has been configured with npm)

- cd into client ```npm init -y```
- cd into server ```npm init - y``` 
- to spin-up the front-end server ```npm run-start-client```
- the server side ```npm run start-server``` works mongo-db database not set-up
- proxy for backend is port:5000
- proxy for frontend is port:3000
- ```pkill node 3000 or 5000``` if you find the ports already in use when you switch from one project to another.

# Team authors branch
- Then check out of the main branch to the team-authors branch
- $git checkout team-authors

__Set up your main working branch__
- Now that you have a working team-branch create your own local main branch
- Make sure you are in the team-authors branch 
- $git checkout -b'name of your branch' eg: $git checkout -b 'authors-fe-complete-works-section' 
- make an initial commit with a readme if you wish to document what you have done - there is a folder called docs, you can add your readme to this folder
- $touch complete-works-section.md 
- push it and set your branch origin (you will get a git prompt - copy and paste the prompt and push)
eg:    git push --set-upstream origin authors-fe-complete-works-section
- this connects the branch to the upstream main branch you have set up
- You are now ready to set-up your sub-branches

__Sub Branches__
- create all your sub-branches from this main branch you have created
eg: In the authors-fe-complete-works-section  
- branch $git checkout -b'name of sub-branch' eg: '$git checkout -b 'complete-works-header' 
- push changes to this local branch (same steps as above)
- when you have a chunk of working code you can merge this into your maiin branch
- checkout of the sub branch to  your main branch
- $git checkout 'name of your main branch'
- In you main branch $git merge name of sub-branch
- This keeps your main  branch up to date with every branch change
