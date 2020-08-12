export default class DataStorage {
   
    addTolocalStorage(dataName,obj){
        let json = JSON.stringify(obj);
        localStorage.setItem(dataName, json);
    }

    getTolocalStorage(dataN){
       return JSON.parse(localStorage.getItem(dataN));
    }

}
