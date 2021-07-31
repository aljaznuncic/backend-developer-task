# Setup

## Prepare environment

For using this app, you need to install Node.js and npm package.
In Ubuntu, you can do this with the following commands:

```bash
sudo apt update
sudo apt install nodejs npm
```

I was using using Node.js version 10.19.0 and npm version 6.14.4.

### Install database

#### Local db

You will also need to install MongoDB database (and MongoDB schell for import mock data into the database).

```bash
sudo apt install mongodb
```

And then you start DB with

```bash
mongod
```

I was using WSL2 and Ubuntu 20.04 LTS on Windows and get error, when I was try to start db.
I fixed this with commands below:

```bash
sudo mkdir -p /data/db/
sudo chown `id -u` /data/db
```

If it still does not start, you can try to start with the command

```bash
sudo service mongodb start
```

I was using both version 3.6.8.

#### Online db

Another alternative is to use online DB on https://www.mongodb.com/.

With this option, you need only MongoDB shell for bulk data insert, which you can get [here](https://www.mongodb.com/try/download/shell).

## Start app

You must first install all the packages listed in [package.json](../package.json). You do this with a command 

```bash
npm install
```

If you use local db, you use the following command

```bash
npm start
```

but if you use it online, use the command

```bash
NODE_ENV=production DB_URI='mongodb+srv://aljaz:fYtiP7ao94Xve9ZA@cluster0.uk2p3.mongodb.net/notesapi?retryWrites=true&w=majority' npm start
```

API is now avaiable at http://localhost:8080/api/v1.

## API documentation

Simple API documentation with some examples is avaiable at: https://documenter.getpostman.com/view/5828455/TzseHRCA