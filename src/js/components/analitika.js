export default class Analitika {

    constructor(arrWeekday,arrTotalvalueDay,arrPircentDay,TableWeek,TabldayValue) {
        this.arrWeekday=arrWeekday;
        this.arrTotalvalueDay=arrTotalvalueDay;
        this.arrPircentDay=arrPircentDay;
        this.TableWeek=TableWeek;
        this.TabldayValue=TabldayValue;
    }
   
    renderWeekday=()=>{
        this.TableWeek.forEach((item, i)=> {
            item.textContent=this.arrWeekday[i]
          });
    }

    renderTotalvalueDay=()=>{
        this.TabldayValue.forEach((item, i)=> {
            item.textContent=this.arrTotalvalueDay[i]
          });
    }

    renderPircentDay=()=>{
        this.TabldayValue.forEach((item, i)=> {
            item.setAttribute('style', "width:" + this.arrPircentDay[i] +"%" + ";");
          });
    }

}

