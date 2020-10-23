var dbPromised = idb.open("footbal-pwa", 1, function(upgradeDb){
    var teamsObjectStore = upgradeDb.createObjectStore("teams", {
        keyPath: "id"
    });
    teamsObjectStore.createIndex("name","name", { unique: false });
});

function saveForLater(team) {
    dbPromised.then(function(db) {
        var tx = db.transaction("teams", "readwrite");
        var store = tx.objectStore("teams");
        console.log(team);
        store.put(team);
        return tx.complete;
    })
    .then(function(){
        console.log("Favorite team berhasil disimpan");
    });
}

function getAll() {
    return new Promise(function(resolve, reject) {
        dbPromised
            .then(function(db) {
                var tx = db.transaction("teams","readonly");
                var store = tx.objectStore("teams");
                return store.getAll();
            })
            .then(team => {
                if (team !== undefined) {
                    resolve(team)
                } else {
                    reject(new Error("favorite not found"))
                }
            });
    });
}

const dbDeleteTeam = id => {
    return new Promise((resolve, reject) => {
        dbPromised.then(function(db) {
            const transaction = db.transaction("teams", "readwrite");
            transaction.objectStore("teams").delete(id);
            return transaction;
        }).then(transaction => {
            if (transaction.complete) {
                resolve(true)
            } else {
                reject(new Error(transaction.onerror))
            }
        })
    })
};