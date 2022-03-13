# Contact App - Full Stack app

We are using **React.js** for front end and **Firebase** store the authentication details and contact details

### Open terminal in vscode and type `npm install`

This will install all the required packages to run the project

### After the packages are installed, type `npm start` to run the project

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Pages

Sign Up - page to sign up a new user

Sign In - page to sign in a present user

Dashboard - User can add contacts

Reset - Where he can reset his password


### Working

When you login the data is being stored in `users` collection in firebase database.
Each time you login the credentials are checked if present in database then allow you to log in.
In Dashboard page you can add a contact, this is stored in the firebase database under `contacts` collection.

You can view the database by going to [https://firebase.google.com/](https://firebase.google.com/) and Sign in using the given credentails 

Mail id: `rmelvin1720@gmail.com`
Password: `Melvin@0421`

Then click the `go to console` on the top, this will display all the projects select `Contact-fullstack` project.

Select `Firebase Database`, this will display all the back end data stored when you save a contact.



