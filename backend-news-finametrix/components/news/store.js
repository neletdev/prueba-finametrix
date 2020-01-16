const Model = require('./model');

async function getNew(id) {

    return await Model.findOne({
        _id: id
    });

}

async function getNews(filterType){

    let filter = {};

    if (filterType === null){
        filter = { archived: false }
        const news  = await Model.find(filter);
        news.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });
        return news;
    } else {
        filter = { archived: filterType }
        const news  = await Model.find(filter);
        news.sort(function(a,b){
            return new Date(b.archiveDate) - new Date(a.archiveDate);
        });
        return news;
    }

}

async function addNew(news) {
    const myNew = new Model(news);
    await myNew.save();
}

async function deleteNew(id){
    return await Model.deleteOne({
        _id: id
    });
}

async function updateNew(id, newData){

    let foundNew = await Model.findOne({
        _id: id
    });

    console.log(foundNew);

    console.log(newData);

    for (property in newData){
        foundNew[property] = newData[property];
    }

    console.log(foundNew);

    const newNew = await foundNew.save();
    return newNew;

}

module.exports = {
    add: addNew,
    list: getNews,
    remove: deleteNew,
    update: updateNew,
    get: getNew
}

