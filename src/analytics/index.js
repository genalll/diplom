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


///console.log(DataStorages.getTolocalStorage("name"));
///console.log(checkTitleResult(DataStorages.getTolocalStorage("nevsArr")));





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

//console.log(percentMassivOfweekDay); // Массив с процентами в порядке ПН ВТ... требует сортировки
//console.log(MassivOfweekDay); // Массив с количеством по дням недели ПН ВТ... требует сортировки
/* Разбитие массива по дням */

/*Получаем готовый массив правильных дат для сортировки массива по дням недели*/
function getDataInterval(){
  return [
    new Date(((new Date().setDate(new Date().getDate()-6)))).getDay(),
    new Date(((new Date().setDate(new Date().getDate()-5)))).getDay(),
    new Date(((new Date().setDate(new Date().getDate()-4)))).getDay(),
    new Date(((new Date().setDate(new Date().getDate()-3)))).getDay(),
    new Date(((new Date().setDate(new Date().getDate()-2)))).getDay(),
    new Date(((new Date().setDate(new Date().getDate()-1)))).getDay(),
    new Date(((new Date().setDate(new Date().getDate()-0)))).getDay(),
  ]
}
/*Получаем готовый массив правильных дат для сортировки массива с количеством и процентами*/
/** Массив дат для отрисовки */

const weckDayNumberDay = getDataInterval();
  
/** Массив дат для отрисовки */

/*перевод значения в день недели*/
function getDataStr(){
    let massivWeekDay=["пн","вт","ср","чт","пт","сб","вс"]
    return [
      new Date(((new Date().setDate(new Date().getDate()-6)))).getDate()+ "," + " " +massivWeekDay[new Date(((new Date().setDate(new Date().getDate()-6)))).getDay()],
      new Date(((new Date().setDate(new Date().getDate()-5)))).getDate() + "," + " " +massivWeekDay[new Date(((new Date().setDate(new Date().getDate()-5)))).getDay()],
      new Date(((new Date().setDate(new Date().getDate()-4)))).getDate() + "," + " " +massivWeekDay[new Date(((new Date().setDate(new Date().getDate()-4)))).getDay()],
      new Date(((new Date().setDate(new Date().getDate()-3)))).getDate() + "," + " " +massivWeekDay[new Date(((new Date().setDate(new Date().getDate()-3)))).getDay()],
      new Date(((new Date().setDate(new Date().getDate()-2)))).getDate() + "," + " " +massivWeekDay[new Date(((new Date().setDate(new Date().getDate()-2)))).getDay()],
      new Date(((new Date().setDate(new Date().getDate()-1)))).getDate() + "," + " " +massivWeekDay[new Date(((new Date().setDate(new Date().getDate()-1)))).getDay()],
      new Date(((new Date().setDate(new Date().getDate()-0)))).getDate() + "," + " " +massivWeekDay[new Date(((new Date().setDate(new Date().getDate()-0)))).getDay()],
    ]
  }
 //console.log(getDataStr());
/*перевод значения в день недели*/
//console.log(weckDayNumberDay);

/*сортировка массивов для отрисовки.*/
function sortMassivDays(arr,arrsort){
    let sortArr=[];
    arrsort.forEach(element => {
        sortArr.push(arr[element])
    });
    return sortArr
}

/*сортировка массивов для отрисовки.*/

/** константы для отисовки */
const dayAndWeek = getDataStr();
const totalOfDayMassiv = sortMassivDays(MassivOfweekDay,weckDayNumberDay);
const totalOfDaypercent = sortMassivDays(percentMassivOfweekDay,weckDayNumberDay);
/** константы для отисовки */

console.log(dayAndWeek);
console.log(totalOfDayMassiv);
console.log(totalOfDaypercent);



