const store = require('./store');

function getNew(id) {

    return new Promise((resolve, reject) => {
        resolve(store.get(id));
    });

}

function listNews(filterType){

    return new Promise((resolve, reject) => {
        resolve(store.list(filterType));
    });

}

function addNew(title, descr, content, author){

    return new Promise((resolve, reject) => {

        if (!title || !descr || !content){
            console.error("[newsController] Datos incompletos");
            reject("Los datos son incorrectos");
        }

        const newToInsert = {
            title: title,
            descr: descr,
            content: content,
            date: new Date(),
            author: author,
            archived: false,
            archiveDate: ''
        };

        store.add(newToInsert);
        resolve(newToInsert);

    });
    
}

function deleteNew(id) {

    return new Promise((resolve, reject) => {

        if (!id) {
            reject('Id no existente o inválido');
        }

        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            });

    });

}

function updateNew(id, newData) {

    return new Promise(async (resolve, reject) => {

        if (!id) {
            reject('Id no existente o inválido');
        }

        const result = await store.update(id, newData);
        resolve(result);

    });

}

module.exports = {
    addNew,
    listNews,
    deleteNew,
    updateNew,
    getNew
};