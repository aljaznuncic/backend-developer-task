// Execute script with command: mongo db-seed.js

var db = connect('127.0.0.1:27017/notesapi');
var allNotesApi = null;
var numOfUsers = 0;
var numOfFolders = 0;
var numOfNotes = 0;

// Delete all old data in db
db.Users.deleteMany({});
db.Folders.deleteMany({});
db.Notes.deleteMany({});

// Insert Users
db.Users.insertMany([
    { "_id" : ObjectId("610322692411c93b6f1b60f6"), "name" : "Ana", "username" : "ana", "randomValue" : "2332deaf80dac3c85e9ca6555ea566e8", "hashedValue" : "25959f4181892392d4de051a494912618c7c011039f30f1613f2a0a6ba9da4b6953665451ab60045456af63fb3d2ebe52359e5f31b000536ffde1dfa8ef20df3", "__v" : 0 },
    { "_id" : ObjectId("610322892411c93b6f1b60f8"), "name" : "Bob", "username" : "bob", "randomValue" : "acad54f7ff179dbbe7f80a27d1d0837a", "hashedValue" : "3ae67c83799a409055016958bbac2591e9470d6b58a54af54a669a10eae12db7253710273391254aad93e8bbded0f60951395d6cf809205ef27a4fc953c77d08", "__v" : 0 },
    { "_id" : ObjectId("610322ae2411c93b6f1b60fa"), "name" : "Eva", "username" : "eva", "randomValue" : "baf5ac1c958cd7bae55f636d5937b961", "hashedValue" : "a6be4216093d0ee46e2069823eafc6e38a8e0ad4f4eece003f4a8e524754fb8335f5850f9a29083d8130dcf5fb57674791e1e3961b0233fb5459ce6a4f9567dd", "__v" : 0 }
]);

allNotesApi = db.Users.find();

print('* ALL Users:');
 
//Iterate the Users collection and output each document
while (allNotesApi.hasNext()) {
   printjson(allNotesApi.next());
   numOfUsers++;
}

// Insert Folders
db.Folders.insertMany([
    { "_id" : ObjectId("6103cd542411c93b6f1b6105"), "name" : "Bob's folder 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ce032411c93b6f1b6108"), "name" : "Ana's folder 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103ce092411c93b6f1b610b"), "name" : "Eva's folder 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ce0f2411c93b6f1b610e"), "name" : "Ana's folder 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103ce222411c93b6f1b6111"), "name" : "Bob's folder 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ce2c2411c93b6f1b6114"), "name" : "Bob's folder 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ce342411c93b6f1b6117"), "name" : "Eva's folder 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ce3b2411c93b6f1b611a"), "name" : "Ana's folder 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103ce3f2411c93b6f1b611d"), "name" : "Ana's folder 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103ce452411c93b6f1b6120"), "name" : "Eva's folder 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ce4b2411c93b6f1b6123"), "name" : "Eva's folder 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ce4f2411c93b6f1b6126"), "name" : "Eva's folder 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ce572411c93b6f1b6129"), "name" : "Bob's folder 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ce5f2411c93b6f1b612c"), "name" : "Ana's folder 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103ce642411c93b6f1b612f"), "name" : "Ana's folder 6", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103ce6a2411c93b6f1b6132"), "name" : "Eva's folder 6", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ce6e2411c93b6f1b6135"), "name" : "Eva's folder 7", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ce732411c93b6f1b6138"), "name" : "Eva's folder 8", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ce7c2411c93b6f1b613b"), "name" : "Bob's folder 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ce812411c93b6f1b613e"), "name" : "Bob's folder 6", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ce8c2411c93b6f1b6141"), "name" : "Bob's folder 7", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ce912411c93b6f1b6144"), "name" : "Bob's folder 8", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ce982411c93b6f1b6147"), "name" : "Ana's folder 7", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103ce9d2411c93b6f1b614a"), "name" : "Ana's folder 8", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103cea12411c93b6f1b614d"), "name" : "Ana's folder 9", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103cea52411c93b6f1b6150"), "name" : "Ana's folder 10", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "__v" : 0 },
    { "_id" : ObjectId("6103ceac2411c93b6f1b6153"), "name" : "Eva's folder 9", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 },
    { "_id" : ObjectId("6103ceb32411c93b6f1b6156"), "name" : "Bob's folder 9", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103ceb82411c93b6f1b6159"), "name" : "Bob's folder 10", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "__v" : 0 },
    { "_id" : ObjectId("6103cebf2411c93b6f1b615c"), "name" : "Eva's folder 10", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "__v" : 0 }
]);

allNotesApi = db.Folders.find();

print('* ALL Folders:');
 
//Iterate the Folders collection and output each document
while (allNotesApi.hasNext()) {
   printjson(allNotesApi.next());
   numOfFolders++;
}

// Insert Notes
db.Notes.insertMany([
    { "_id" : ObjectId("6103dea02411c93b6f1b6199"), "shareOption" : "public", "body" : [ "one" ], "name" : "Eva's note 3 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce452411c93b6f1b6120"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103deb12411c93b6f1b61a2"), "shareOption" : "private", "body" : [ "one" ], "name" : "Ana's note 3 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3b2411c93b6f1b611a"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103dec62411c93b6f1b61a7"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Eva's note 3 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce452411c93b6f1b6120"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103decd2411c93b6f1b61ac"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Eva's note 3 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce452411c93b6f1b6120"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103ded72411c93b6f1b61b1"), "shareOption" : "private", "body" : [ "one" ], "name" : "Ana's note 3 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3b2411c93b6f1b611a"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103dee42411c93b6f1b61b6"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 3 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce452411c93b6f1b6120"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103df242411c93b6f1b61bd"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 3 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce2c2411c93b6f1b6114"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103df2a2411c93b6f1b61c2"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 3 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce2c2411c93b6f1b6114"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103df622411c93b6f1b61c7"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 3 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3b2411c93b6f1b611a"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103df752411c93b6f1b61cc"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Eva's note 3 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce452411c93b6f1b6120"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103df802411c93b6f1b61d1"), "shareOption" : "public", "body" : [ "one" ], "name" : "Bob's note 3 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce2c2411c93b6f1b6114"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103df8c2411c93b6f1b61d6"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 3 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce2c2411c93b6f1b6114"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103dfa32411c93b6f1b61db"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Bob's note 3 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce2c2411c93b6f1b6114"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103dfb22411c93b6f1b61e0"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 3 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3b2411c93b6f1b611a"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103dfbc2411c93b6f1b61e5"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Ana's note 3 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3b2411c93b6f1b611a"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e07c2411c93b6f1b61ea"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Bob's note 1 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103cd542411c93b6f1b6105"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e0a62411c93b6f1b61ef"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 1 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce092411c93b6f1b610b"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e0b72411c93b6f1b61f4"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Ana's note 1 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce032411c93b6f1b6108"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e0db2411c93b6f1b61f9"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 1 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103cd542411c93b6f1b6105"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e0e12411c93b6f1b61fe"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 1 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103cd542411c93b6f1b6105"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e0f02411c93b6f1b6203"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Eva's note 1 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce092411c93b6f1b610b"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e0fb2411c93b6f1b6208"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Ana's note 1 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce032411c93b6f1b6108"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e10e2411c93b6f1b620d"), "shareOption" : "private", "body" : [ "one" ], "name" : "Eva's note 1 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce092411c93b6f1b610b"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e11c2411c93b6f1b6212"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 1 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103cd542411c93b6f1b6105"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e1282411c93b6f1b6217"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 1 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce032411c93b6f1b6108"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e1342411c93b6f1b621c"), "shareOption" : "private", "body" : [ "one" ], "name" : "Ana's note 1 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce032411c93b6f1b6108"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e13f2411c93b6f1b6221"), "shareOption" : "public", "body" : [ "one" ], "name" : "Ana's note 1 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce032411c93b6f1b6108"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e1772411c93b6f1b6226"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 1 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce092411c93b6f1b610b"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e1852411c93b6f1b622b"), "shareOption" : "public", "body" : [ "one" ], "name" : "Bob's note 1 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103cd542411c93b6f1b6105"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e18d2411c93b6f1b6230"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 1 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce092411c93b6f1b610b"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e1f82411c93b6f1b6235"), "shareOption" : "public", "body" : [ "one" ], "name" : "Bob's note 5 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce7c2411c93b6f1b613b"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e21f2411c93b6f1b623a"), "shareOption" : "private", "body" : [ "one" ], "name" : "Ana's note 5 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce5f2411c93b6f1b612c"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e24a2411c93b6f1b623f"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 5 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4f2411c93b6f1b6126"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e2622411c93b6f1b6244"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 5 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4f2411c93b6f1b6126"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e26d2411c93b6f1b6249"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 5 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce7c2411c93b6f1b613b"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e2932411c93b6f1b624e"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Bob's note 5 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce7c2411c93b6f1b613b"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e29d2411c93b6f1b6253"), "shareOption" : "private", "body" : [ "one" ], "name" : "Ana's note 5 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce5f2411c93b6f1b612c"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e2a42411c93b6f1b6258"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 5 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4f2411c93b6f1b6126"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e2a82411c93b6f1b625d"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 5 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4f2411c93b6f1b6126"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e2b22411c93b6f1b6262"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Eva's note 5 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4f2411c93b6f1b6126"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e2cc2411c93b6f1b6267"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 5 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce5f2411c93b6f1b612c"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e2f92411c93b6f1b626c"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Eva's note 9 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ceac2411c93b6f1b6153"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e3032411c93b6f1b6271"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 5 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce5f2411c93b6f1b612c"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e31d2411c93b6f1b6276"), "shareOption" : "public", "body" : [ "one" ], "name" : "Ana's note 5 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce5f2411c93b6f1b612c"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e3272411c93b6f1b627b"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Bob's note 5 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce7c2411c93b6f1b613b"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e33c2411c93b6f1b6280"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 5 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce7c2411c93b6f1b613b"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e3602411c93b6f1b6285"), "shareOption" : "private", "body" : [ "one" ], "name" : "Ana's note 7 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce982411c93b6f1b6147"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e38b2411c93b6f1b628a"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 4 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce572411c93b6f1b6129"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e3b22411c93b6f1b628f"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 7 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce982411c93b6f1b6147"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e3bf2411c93b6f1b6294"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Ana's note 7 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce982411c93b6f1b6147"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e3cb2411c93b6f1b6299"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 9 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ceac2411c93b6f1b6153"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e3d52411c93b6f1b629e"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 4 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce572411c93b6f1b6129"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e3e12411c93b6f1b62a3"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 7 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce982411c93b6f1b6147"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e4322411c93b6f1b62a8"), "shareOption" : "private", "body" : [ "one" ], "name" : "Eva's note 9 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ceac2411c93b6f1b6153"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e43b2411c93b6f1b62ad"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 7 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce982411c93b6f1b6147"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e4632411c93b6f1b62b2"), "shareOption" : "private", "body" : [ "one" ], "name" : "Ana's note 2 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce0f2411c93b6f1b610e"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e4712411c93b6f1b62b7"), "shareOption" : "public", "body" : [ "one" ], "name" : "Bob's note 4 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce572411c93b6f1b6129"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e4762411c93b6f1b62bc"), "shareOption" : "public", "body" : [ "one" ], "name" : "Bob's note 4 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce572411c93b6f1b6129"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e4a12411c93b6f1b62c1"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 9 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ceac2411c93b6f1b6153"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e4ae2411c93b6f1b62c6"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 4 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce572411c93b6f1b6129"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e4c92411c93b6f1b62cb"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 8 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce912411c93b6f1b6144"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e4d72411c93b6f1b62d0"), "shareOption" : "public", "body" : [ "one" ], "name" : "Ana's note 2 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce0f2411c93b6f1b610e"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e5052411c93b6f1b62d6"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Ana's note 2 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce0f2411c93b6f1b610e"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e50f2411c93b6f1b62db"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 9 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ceac2411c93b6f1b6153"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e5162411c93b6f1b62e0"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 8 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce912411c93b6f1b6144"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e59d2411c93b6f1b62e5"), "shareOption" : "public", "body" : [ "one" ], "name" : "Bob's note 8 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce912411c93b6f1b6144"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e5b72411c93b6f1b62ea"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Eva's note 10 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103cebf2411c93b6f1b615c"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e5c02411c93b6f1b62ef"), "shareOption" : "public", "body" : [ "one", "two", "three" ], "name" : "Eva's note 10 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103cebf2411c93b6f1b615c"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e5fc2411c93b6f1b62f4"), "shareOption" : "private", "body" : [ "one", "two", "three" ], "name" : "Ana's note 2 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce0f2411c93b6f1b610e"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e6052411c93b6f1b62f9"), "shareOption" : "public", "body" : [ "one" ], "name" : "Bob's note 8 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce912411c93b6f1b6144"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e60d2411c93b6f1b62fe"), "shareOption" : "private", "body" : [ "one" ], "name" : "Bob's note 8 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce912411c93b6f1b6144"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e6332411c93b6f1b6303"), "shareOption" : "public", "body" : [ "blue" ], "name" : "Eva's note 10 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103cebf2411c93b6f1b615c"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e6442411c93b6f1b6308"), "shareOption" : "private", "body" : [ "sun" ], "name" : "Ana's note 2 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce0f2411c93b6f1b610e"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e67e2411c93b6f1b630d"), "shareOption" : "public", "body" : [ "sun" ], "name" : "Bob's note 7 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce8c2411c93b6f1b6141"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e6912411c93b6f1b6312"), "shareOption" : "private", "body" : [ "blue" ], "name" : "Eva's note 10 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103cebf2411c93b6f1b615c"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e6c42411c93b6f1b6317"), "shareOption" : "public", "body" : [ "sun" ], "name" : "Ana's note 6 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce642411c93b6f1b612f"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e6dd2411c93b6f1b631c"), "shareOption" : "public", "body" : [ "sun", "red" ], "name" : "Ana's note 6 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce642411c93b6f1b612f"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e7032411c93b6f1b6321"), "shareOption" : "public", "body" : [ "sun", "red" ], "name" : "Bob's note 7 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce8c2411c93b6f1b6141"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e71b2411c93b6f1b6326"), "shareOption" : "private", "body" : [ "blue", "fun" ], "name" : "Eva's note 10 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103cebf2411c93b6f1b615c"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e73d2411c93b6f1b632b"), "shareOption" : "private", "body" : [ "sun", "blue" ], "name" : "Ana's note 6 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce642411c93b6f1b612f"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e7492411c93b6f1b6330"), "shareOption" : "private", "body" : [ "sun", "red" ], "name" : "Bob's note 7 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce8c2411c93b6f1b6141"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e77e2411c93b6f1b6335"), "shareOption" : "private", "body" : [ "blue", "fun" ], "name" : "Eva's note 7 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6e2411c93b6f1b6135"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e7982411c93b6f1b633a"), "shareOption" : "private", "body" : [ "blue" ], "name" : "Ana's note 6 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce642411c93b6f1b612f"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e7a42411c93b6f1b633f"), "shareOption" : "public", "body" : [ "sun", "red" ], "name" : "Bob's note 7 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce8c2411c93b6f1b6141"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e7ad2411c93b6f1b6344"), "shareOption" : "private", "body" : [ "blue" ], "name" : "Ana's note 6 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce642411c93b6f1b612f"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e7ce2411c93b6f1b6349"), "shareOption" : "public", "body" : [ "blue" ], "name" : "Ana's note 8 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce9d2411c93b6f1b614a"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e83c2411c93b6f1b634e"), "shareOption" : "private", "body" : [ "green" ], "name" : "Bob's note 7 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce8c2411c93b6f1b6141"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e8602411c93b6f1b6353"), "shareOption" : "private", "body" : [ "green" ], "name" : "Bob's note 10 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb82411c93b6f1b6159"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e86e2411c93b6f1b6358"), "shareOption" : "public", "body" : [ "blue", "fun" ], "name" : "Eva's note 7 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6e2411c93b6f1b6135"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e8872411c93b6f1b635d"), "shareOption" : "public", "body" : [ "blue", "snow" ], "name" : "Ana's note 8 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce9d2411c93b6f1b614a"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e8cd2411c93b6f1b6362"), "shareOption" : "public", "body" : [ "blue", "snow" ], "name" : "Bob's note 10 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb82411c93b6f1b6159"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e8e12411c93b6f1b6367"), "shareOption" : "private", "body" : [ "blue", "fun" ], "name" : "Eva's note 7 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6e2411c93b6f1b6135"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e8e92411c93b6f1b636c"), "shareOption" : "private", "body" : [ "blue", "fun" ], "name" : "Eva's note 7 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6e2411c93b6f1b6135"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e90d2411c93b6f1b6371"), "shareOption" : "private", "body" : [ "seven" ], "name" : "Eva's note 7 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6e2411c93b6f1b6135"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e91c2411c93b6f1b6376"), "shareOption" : "private", "body" : [ "blue", "snow" ], "name" : "Ana's note 8 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce9d2411c93b6f1b614a"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e93d2411c93b6f1b637b"), "shareOption" : "private", "body" : [ "cat", "dog" ], "name" : "Ana's note 8 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce9d2411c93b6f1b614a"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e9482411c93b6f1b6380"), "shareOption" : "public", "body" : [ "cat", "dog" ], "name" : "Ana's note 8 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce9d2411c93b6f1b614a"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e99e2411c93b6f1b6385"), "shareOption" : "private", "body" : [ "cat", "dog" ], "name" : "Ana's note 10 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea52411c93b6f1b6150"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103e9bf2411c93b6f1b638a"), "shareOption" : "private", "body" : [ "trash" ], "name" : "Bob's note 10 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb82411c93b6f1b6159"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103e9f32411c93b6f1b638f"), "shareOption" : "public", "body" : [ "seven" ], "name" : "Eva's note 4 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4b2411c93b6f1b6123"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f14a2411c93b6f1b6394"), "shareOption" : "public", "body" : [ "console" ], "name" : "Eva's note 4 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4b2411c93b6f1b6123"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f1682411c93b6f1b6399"), "shareOption" : "public", "body" : [ "console" ], "name" : "Ana's note 10 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea52411c93b6f1b6150"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f16e2411c93b6f1b639e"), "shareOption" : "public", "body" : [ "console" ], "name" : "Ana's note 10 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea52411c93b6f1b6150"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f1862411c93b6f1b63a3"), "shareOption" : "private", "body" : [ "data" ], "name" : "Bob's note 10 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb82411c93b6f1b6159"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f1992411c93b6f1b63a8"), "shareOption" : "private", "body" : [ "data", "params" ], "name" : "Bob's note 10 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb82411c93b6f1b6159"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f1aa2411c93b6f1b63ad"), "shareOption" : "private", "body" : [ "console" ], "name" : "Eva's note 4 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4b2411c93b6f1b6123"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f1bd2411c93b6f1b63b2"), "shareOption" : "public", "body" : [ "console", "data" ], "name" : "Ana's note 10 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea52411c93b6f1b6150"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f1e12411c93b6f1b63b7"), "shareOption" : "private", "body" : [ "data", "params" ], "name" : "Bob's note 2 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce222411c93b6f1b6111"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f2112411c93b6f1b63bc"), "shareOption" : "public", "body" : [ "trash" ], "name" : "Eva's note 4 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4b2411c93b6f1b6123"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f2302411c93b6f1b63c1"), "shareOption" : "private", "body" : [ "binary", "head" ], "name" : "Ana's note 10 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea52411c93b6f1b6150"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f2502411c93b6f1b63c6"), "shareOption" : "public", "body" : [ "binary", "head" ], "name" : "Ana's note 4 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3f2411c93b6f1b611d"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f26d2411c93b6f1b63cb"), "shareOption" : "public", "body" : [ "binary", "head" ], "name" : "Eva's note 4 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce4b2411c93b6f1b6123"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f29f2411c93b6f1b63d0"), "shareOption" : "private", "body" : [ "binary", "head" ], "name" : "Eva's note 2 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce342411c93b6f1b6117"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f2c82411c93b6f1b63d5"), "shareOption" : "private", "body" : [ "sun" ], "name" : "Bob's note 2 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce222411c93b6f1b6111"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f2e82411c93b6f1b63da"), "shareOption" : "public", "body" : [ "binary", "head" ], "name" : "Eva's note 2 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce342411c93b6f1b6117"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f2f72411c93b6f1b63df"), "shareOption" : "public", "body" : [ "head" ], "name" : "Eva's note 2 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce342411c93b6f1b6117"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f30f2411c93b6f1b63e4"), "shareOption" : "private", "body" : [ "head" ], "name" : "Eva's note 2 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce342411c93b6f1b6117"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f3292411c93b6f1b63e9"), "shareOption" : "private", "body" : [ "head", "test" ], "name" : "Eva's note 2 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce342411c93b6f1b6117"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f3522411c93b6f1b63ee"), "shareOption" : "private", "body" : [ "head", "home" ], "name" : "Eva's note 6 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6a2411c93b6f1b6132"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f3702411c93b6f1b63f3"), "shareOption" : "private", "body" : [ "sun", "red" ], "name" : "Bob's note 2 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce222411c93b6f1b6111"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f3962411c93b6f1b63f8"), "shareOption" : "private", "body" : [ "sun", "red" ], "name" : "Ana's note 4 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3f2411c93b6f1b611d"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f3a82411c93b6f1b63fd"), "shareOption" : "private", "body" : [ "head", "script" ], "name" : "Eva's note 6 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6a2411c93b6f1b6132"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f3c22411c93b6f1b6402"), "shareOption" : "private", "body" : [ "sun", "red", "snow" ], "name" : "Bob's note 2 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce222411c93b6f1b6111"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f3d62411c93b6f1b6407"), "shareOption" : "public", "body" : [ "snow" ], "name" : "Bob's note 2 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce222411c93b6f1b6111"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f4082411c93b6f1b640c"), "shareOption" : "public", "body" : [ "head", "script" ], "name" : "Eva's note 6 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6a2411c93b6f1b6132"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f46f2411c93b6f1b6411"), "shareOption" : "private", "body" : [ "sun" ], "name" : "Eva's note 6 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6a2411c93b6f1b6132"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f4d42411c93b6f1b6416"), "shareOption" : "public", "body" : [ "sun" ], "name" : "Bob's note 6 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce812411c93b6f1b613e"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f4e92411c93b6f1b641b"), "shareOption" : "public", "body" : [ "blue", "red" ], "name" : "Bob's note 6 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce812411c93b6f1b613e"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f50a2411c93b6f1b6420"), "shareOption" : "public", "body" : [ "blue", "red" ], "name" : "Eva's note 6 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce6a2411c93b6f1b6132"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f5272411c93b6f1b6425"), "shareOption" : "private", "body" : [ "blue", "red" ], "name" : "Bob's note 6 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce812411c93b6f1b613e"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f5492411c93b6f1b642a"), "shareOption" : "public", "body" : [ "blue", "red" ], "name" : "Ana's note 4 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3f2411c93b6f1b611d"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f55f2411c93b6f1b642f"), "shareOption" : "private", "body" : [ "green" ], "name" : "Bob's note 6 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce812411c93b6f1b613e"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f5722411c93b6f1b6434"), "shareOption" : "public", "body" : [ "green" ], "name" : "Bob's note 6 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ce812411c93b6f1b613e"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f5842411c93b6f1b6439"), "shareOption" : "private", "body" : [ "green", "red" ], "name" : "Ana's note 4 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3f2411c93b6f1b611d"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f5952411c93b6f1b643e"), "shareOption" : "public", "body" : [ "green", "red" ], "name" : "Ana's note 4 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103ce3f2411c93b6f1b611d"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f9692411c93b6f1b6443"), "shareOption" : "public", "body" : [ "green" ], "name" : "Bob's note 9 1", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb32411c93b6f1b6156"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103f9702411c93b6f1b6448"), "shareOption" : "public", "body" : [ "green", "red" ], "name" : "Ana's note 9 1", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea12411c93b6f1b614d"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f9742411c93b6f1b644d"), "shareOption" : "public", "body" : [ "blue", "red" ], "name" : "Eva's note 8 1", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce732411c93b6f1b6138"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f9972411c93b6f1b6452"), "shareOption" : "private", "body" : [ "raw", "binary" ], "name" : "Ana's note 9 2", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea12411c93b6f1b614d"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f9ab2411c93b6f1b6457"), "shareOption" : "public", "body" : [ "raw", "binary" ], "name" : "Eva's note 8 2", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce732411c93b6f1b6138"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f9cc2411c93b6f1b645c"), "shareOption" : "public", "body" : [ "raw", "binary" ], "name" : "Bob's note 9 2", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb32411c93b6f1b6156"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f9e42411c93b6f1b6461"), "shareOption" : "private", "body" : [ "sun", "rain" ], "name" : "Eva's note 8 3", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce732411c93b6f1b6138"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103f9fc2411c93b6f1b6466"), "shareOption" : "private", "body" : [ "rain" ], "name" : "Bob's note 9 3", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb32411c93b6f1b6156"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103fa0d2411c93b6f1b646b"), "shareOption" : "private", "body" : [ "sun" ], "name" : "Eva's note 8 4", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce732411c93b6f1b6138"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103fa172411c93b6f1b6470"), "shareOption" : "private", "body" : [ "rain" ], "name" : "Eva's note 8 5", "authorId" : ObjectId("610322ae2411c93b6f1b60fa"), "folderId" : ObjectId("6103ce732411c93b6f1b6138"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103fa252411c93b6f1b6475"), "shareOption" : "private", "body" : [ "snow" ], "name" : "Bob's note 9 4", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb32411c93b6f1b6156"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103fa3a2411c93b6f1b647a"), "shareOption" : "private", "body" : [ "snow", "rain" ], "name" : "Ana's note 9 3", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea12411c93b6f1b614d"), "type" : "list", "__v" : 0 },
    { "_id" : ObjectId("6103fa472411c93b6f1b647f"), "shareOption" : "private", "body" : [ "snow" ], "name" : "Ana's note 9 4", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea12411c93b6f1b614d"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103fa592411c93b6f1b6484"), "shareOption" : "private", "body" : [ "rain" ], "name" : "Bob's note 9 5", "authorId" : ObjectId("610322892411c93b6f1b60f8"), "folderId" : ObjectId("6103ceb32411c93b6f1b6156"), "type" : "text", "__v" : 0 },
    { "_id" : ObjectId("6103fa752411c93b6f1b6489"), "shareOption" : "private", "body" : [ "head" ], "name" : "Ana's note 9 5", "authorId" : ObjectId("610322692411c93b6f1b60f6"), "folderId" : ObjectId("6103cea12411c93b6f1b614d"), "type" : "text", "__v" : 0 }
]);

allNotesApi = db.Notes.find();

print('* ALL Notes:');
 
//Iterate the Notes collection and output each document
while (allNotesApi.hasNext()) {
   printjson(allNotesApi.next());
   numOfNotes++;
}

print('\n\nSuccessfully inserted ' + numOfUsers + ' / 3 Users.');
print('Successfully inserted ' + numOfFolders + ' / 30 Folders.');
print('Successfully inserted ' + numOfNotes + ' / 150 Notes.');