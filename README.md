# E commerce mockup

Hello. This is my e-commerce project which I programmed while being in the UpLeveled Bootcamp. As it is clearly obvious, this is completely fake although it has the same functionality as a real online shop - except for not storing anything when filling out the checkout form (and of course not accepting any payment). Since I am an avid sci-fi fan, I decided on selling space ships from movies and TV like the Rocinante from The Expanse or the Discovery One from 2001 - A Space Odyssey.

![Screenshot of the landing page](/img/Screenshot-1.png)
![Screenshot of the cart page](/img/Shopping-Cart.png)
![Screenshot of the checkout page](/img/Checkout.png)

## Technologies used in this project

* Next.js/React.js
* PostgreSQL
* Jest
* Playwright
* GitHub Actions
* Fly.io

## Clone the repository

If you want to try this project yourself (and I don`t mean the deployed version), these are the steps you have to take:
1. In your terminal run the following
  ```
cd projects
git clone https://github.com/DerTimonius/nextjs-ecommerce-store-mockup
cd nextjs-ecommerce-store-mockup
  ```
2. Run `yarn` to add the necessary dependencies (you have to have yarn installed for this to work)
3. Next, we have to setup the database

## Setup of the database

This project is using PostgreSQL, so to set it up properly it has to be installed on your machine. Just follow the instructions of the system setup of the [UpLeveled System Setup](https://github.com/upleveled/system-setup/blob/main/readme.md).
For the needed environmental variables, check the `.env.example` to create a new `.env` file (which is ignored with Git).
Connect to the `postgres` database as administator and create a new database. Depending on your operating system:

##### Windows

```
psql -U postgres
```

If a password is necessary, enter `postgres`

##### Apple

```
psql postgres
```

##### Linux

```
sudo -u postgres psql
```

You should now be connected to the database, so it's time to first setup the user. Enter following code:
```
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
```
Since you're running postgres as a superuser you now have to quit psql using `\q`

Again, the next steps vary depending on your oeprating system:

##### Windows & Apple

```
psql -U <user name> <database name>
```

##### Linux

With Linux, you first have to create a new user:
```
sudo adduser <user name>
```

And then you can run:
```
sudo -u <user name> psql -U <user name> <database name>
```

## Migration of database

In this project I used `ley` for the migration of files to the database. Just to make sure, check your `package.json` file and look for `ley`, `dotenv-safe` and `dotenv-cli`. Also, under scripts, there should be this:
```
"migrate": "dotenv ley",
```

To migrate the files to your existing database, you now have to run in your terminal:
```
yarn migrate up
```
(To reverse this action, you would have to run `yarn migrate down` twice)

If you start the next.js dev server (using `yarn dev`) you now should be able to click around without anything breaking.

## Deployment instructions

(work in progress)
