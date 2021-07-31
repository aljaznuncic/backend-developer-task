# Database

## Local DB

You can use the [db-seed.js](db-seed.js) file to import mock data into the database. 
To import, first move to directory [database](.) and execute the command below in the bash shell.

```bash
mongo db-seed.js
```

## Online DB

First, you need to connect to online DB with shell, you installed before. 
You can do this with command, dependent on shell, which you are using:

* Mongosh

```bash
mongosh "mongodb+srv://cluster0.uk2p3.mongodb.net/notesapi" --username aljaz --password fYtiP7ao94Xve9ZA
```

* Mongo 3.6 or newer

```bash
mongo "mongodb+srv://cluster0.uk2p3.mongodb.net/notesapi" --username aljaz --password fYtiP7ao94Xve9ZA
```

* Mongo 3.4 or earlier

```bash
mongo "mongodb://cluster0-shard-00-00.uk2p3.mongodb.net:27017,cluster0-shard-00-01.uk2p3.mongodb.net:27017,cluster0-shard-00-02.uk2p3.
mongodb.net:27017/notesapi?replicaSet=Cluster0-shard-0" --ssl --authenticationDatabase admin --username aljaz --password fYtiP7ao94Xve9ZA
```

Then you just copy all text from the file [db-seed.txt](db-seed.txt) and paste it in shell.