import "../vendor/normalise.css";
import "../page/analitikastyle.css";
import DataStorage from "../js/modules/datastorage.js";
import Analitika from "../js/components/analitika.js";
import { checkTitleResult, checkTotalResult, breackArrFordata, percentDay, getDataInterval, getDataStr, sortMassivDays, getMonth } from "../js/utelites/analitikautilits.js"
const DataStorages = new DataStorage();
const nameSearch = document.querySelector(".analitika-title__title");
const totalResult = document.querySelector("#totalresuilt");
const totalResultTitle = document.querySelector("#totalresuiltitle");
const nevsArrforCheck = DataStorages.getTolocalStorage("nevsArrForData");
const nameSearchValue = DataStorages.getTolocalStorage("name");
const analitikaTableWeek = document.querySelectorAll(".analitika-table__week-day");
const analitikaTabldayValue = document.querySelectorAll(".analitika-table__scale");
const fiveWeak = document.querySelector("#month")
if (nameSearchValue) {
    nameSearch.textContent = nameSearchValue;
};
if (nevsArrforCheck) {
    totalResult.textContent = nevsArrforCheck.length;
}
totalResult.textContent = checkTotalResult(nevsArrforCheck, nameSearchValue);
totalResultTitle.textContent = (checkTitleResult(nevsArrforCheck, nameSearchValue));
fiveWeak.textContent = getMonth();
const MassivOfweekDay = (percentDay(breackArrFordata(nevsArrforCheck), nevsArrforCheck))[0];
const percentMassivOfweekDay = (percentDay(breackArrFordata(nevsArrforCheck), nevsArrforCheck))[1];
const weckDayNumberDay = getDataInterval();
const dayAndWeek = getDataStr();
const totalOfDayMassiv = sortMassivDays(MassivOfweekDay, weckDayNumberDay);
const totalOfDaypercent = sortMassivDays(percentMassivOfweekDay, weckDayNumberDay);
const analitikas = new Analitika(dayAndWeek, totalOfDayMassiv, totalOfDaypercent, analitikaTableWeek, analitikaTabldayValue);
analitikas.renderWeekday();
analitikas.renderTotalvalueDay();
analitikas.renderPircentDay();


