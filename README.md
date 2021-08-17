# Blog
<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/> <img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"/> 
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

This is a simple blog site with two pages only.

## Functions
* Display all blogs
* Display specific blog by Id
* Filter blogs by title, main author, secondary author

## API 
The API used is provided by SoftwareQ
* https://softwareq-merdeka-api.azure-api.net/blog/v1/ListAll
* https://softwareq-merdeka-api.azure-api.net/blog/v1/ById?Id=[ID]

Postman is used to test the API provided and use the data returned locally before setting up fetch in app  
- Avoid spamming requests when re-rendering component upon updates
  
## What I learnt
### Components' names conflict
#### Problem
For example, I have two components:
  * Blog (components folder)
  * Blog (routes folder)
  
The first Blog represents each blog item whereas the second represents the page.  
The *similar names* used will cause some conflicts, especially in the *stylesheets*.
#### Solution
Adding the type of component at the start of class name.
* c for Component
* r for Route
* l for Layout  

For e.g. 'c-blog' for Blog in Components dir.  
**Reference:** https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
