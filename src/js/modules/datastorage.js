export default class DataStorage {
    constructor(data) {
        this.data=data;
    }
   
    addTolocalStorage(dataName){
        let json = JSON.stringify(this.data);
        localStorage.setItem(dataName, json);
    }

    getTolocalStorage(dataName){
       return JSON.parse(localStorage.getItem(dataName));
    }

}
