import "../vendor/normalise.css";
import "../page/analitikastyle.css";
import DataStorage from "../js/modules/datastorage.js";
const DataStorages = new DataStorage();
const nameSearch = document.querySelector(".analitika-title__title");
const totalResult = document.querySelector("#totalresuilt");
const totalResultTitle = document.querySelector("#totalresuiltitle");
const nevsArrforCheck = DataStorages.getTolocalStorage("nevsArrForData");

const nameSearchValue =DataStorages.getTolocalStorage("name");

if (nameSearchValue){
nameSearch.textContent=nameSearchValue;
};
if (nevsArrforCheck){
    totalResult.textContent = nevsArrforCheck.length;
}

function checkTitleResult(arr){
     let result=0;
     arr.forEach(element => {
        if (element.title.indexOf(nameSearchValue)){
            result+=1;
        };
     });
     return result
}

function checkTotalResult(arr){
    let result=0;
    arr.forEach(element => {
        if(element.title!=null){
       if (element.title.indexOf(nameSearchValue)){
           result+=1;
       };
    }
       if(element.description!=null){
       if (element.description.indexOf(nameSearchValue)){
        result+=1;
    };
    }
    });
    return result
}
totalResult.textContent=checkTotalResult(nevsArrforCheck);
totalResultTitle.textContent=(checkTitleResult(nevsArrforCheck));


console.log(DataStorages.getTolocalStorage("name"));
console.log(checkTitleResult(DataStorages.getTolocalStorage("nevsArr")));





/* Разбитие массива по дням */

function breackArrFordata(arr){
        let vs =[];
        let pn =[];
        let vt =[];
        let sr =[];
        let ch =[];
        let pt =[];
        let sub =[];
    arr.forEach(element => {
        
        if (new Date(element.publishedAt).getDay()==0){
            vs.push(element);
        }
        if (new Date(element.publishedAt).getDay()==1){
            pn.push(element);
        }
        if (new Date(element.publishedAt).getDay()==2){
            vt.push(element);
        }
        if (new Date(element.publishedAt).getDay()==3){
            sr.push(element);
        }
        if (new Date(element.publishedAt).getDay()==4){
            ch.push(element);
        }
        if (new Date(element.publishedAt).getDay()==5){
            pt.push(element);
        }
        if (new Date(element.publishedAt).getDay()==6){
            sub.push(element);
        }
    });
    

    return [vs,pn,vt,sr,ch,pt,sub,]
}

console.log()


function percentDay(arr) {
    let dataChekMassivPercent =[];
    let dataChekMassiv =[];
    arr.forEach(element => {
        dataChekMassivPercent.push((checkTotalResult(element)/checkTotalResult(nevsArrforCheck))*100);
    });
    arr.forEach(element => {
        dataChekMassiv.push((checkTotalResult(element)));
    });
    return [dataChekMassiv,dataChekMassivPercent]
}
const MassivOfweekDay = (percentDay(breackArrFordata(nevsArrforCheck)))[0];
const percentMassivOfweekDay = (percentDay(breackArrFordata(nevsArrforCheck)))[1];

console.log(percentMassivOfweekDay);
console.log(MassivOfweekDay);
/* Разбитие массива по дням */


