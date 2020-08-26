function checkTitleResult(arr, nameSearchValue) {
    let result = 0;
    arr.forEach(element => {
        if (element.title != null) {
            if (element.title.indexOf(nameSearchValue)) {
                result += 1;
            };
        }
    });
    return result
}

function checkTotalResult(arr, nameSearchValue) {
    let result = 0;
    arr.forEach(element => {
        if (element.title != null) {
            if (element.title.indexOf(nameSearchValue)) {
                result += 1;
            };
        }
        if (element.description != null) {
            if (element.description.indexOf(nameSearchValue)) {
                result += 1;
            };
        }
    });
    return result
}

function breackArrFordata(arr) {
    let vs = [];
    let pn = [];
    let vt = [];
    let sr = [];
    let ch = [];
    let pt = [];
    let sub = [];
    arr.forEach(element => {

        if (new Date(element.publishedAt).getDay() == 0) {
            vs.push(element);
        }
        if (new Date(element.publishedAt).getDay() == 1) {
            pn.push(element);
        }
        if (new Date(element.publishedAt).getDay() == 2) {
            vt.push(element);
        }
        if (new Date(element.publishedAt).getDay() == 3) {
            sr.push(element);
        }
        if (new Date(element.publishedAt).getDay() == 4) {
            ch.push(element);
        }
        if (new Date(element.publishedAt).getDay() == 5) {
            pt.push(element);
        }
        if (new Date(element.publishedAt).getDay() == 6) {
            sub.push(element);
        }
    });


    return [vs, pn, vt, sr, ch, pt, sub,]
}

function percentDay(arr, nevsArrforCheck) {
    let dataChekMassivPercent = [];
    let dataChekMassiv = [];
    arr.forEach(element => {
        dataChekMassivPercent.push((checkTotalResult(element) / checkTotalResult(nevsArrforCheck)) * 100);
    });
    arr.forEach(element => {
        dataChekMassiv.push((checkTotalResult(element)));
    });
    return [dataChekMassiv, dataChekMassivPercent]
}

function getDataInterval() {
    return [
        new Date(((new Date().setDate(new Date().getDate() - 6)))).getDay(),
        new Date(((new Date().setDate(new Date().getDate() - 5)))).getDay(),
        new Date(((new Date().setDate(new Date().getDate() - 4)))).getDay(),
        new Date(((new Date().setDate(new Date().getDate() - 3)))).getDay(),
        new Date(((new Date().setDate(new Date().getDate() - 2)))).getDay(),
        new Date(((new Date().setDate(new Date().getDate() - 1)))).getDay(),
        new Date(((new Date().setDate(new Date().getDate() - 0)))).getDay(),
    ]
}


function getDataStr() {
    let massivWeekDay = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
    return [
        new Date(((new Date().setDate(new Date().getDate() - 6)))).getDate() + "," + " " + massivWeekDay[new Date(((new Date().setDate(new Date().getDate() - 6)))).getDay()],
        new Date(((new Date().setDate(new Date().getDate() - 5)))).getDate() + "," + " " + massivWeekDay[new Date(((new Date().setDate(new Date().getDate() - 5)))).getDay()],
        new Date(((new Date().setDate(new Date().getDate() - 4)))).getDate() + "," + " " + massivWeekDay[new Date(((new Date().setDate(new Date().getDate() - 4)))).getDay()],
        new Date(((new Date().setDate(new Date().getDate() - 3)))).getDate() + "," + " " + massivWeekDay[new Date(((new Date().setDate(new Date().getDate() - 3)))).getDay()],
        new Date(((new Date().setDate(new Date().getDate() - 2)))).getDate() + "," + " " + massivWeekDay[new Date(((new Date().setDate(new Date().getDate() - 2)))).getDay()],
        new Date(((new Date().setDate(new Date().getDate() - 1)))).getDate() + "," + " " + massivWeekDay[new Date(((new Date().setDate(new Date().getDate() - 1)))).getDay()],
        new Date(((new Date().setDate(new Date().getDate() - 0)))).getDate() + "," + " " + massivWeekDay[new Date(((new Date().setDate(new Date().getDate() - 0)))).getDay()],
    ]
}

function sortMassivDays(arr, arrsort) {
    let sortArr = [];
    arrsort.forEach(element => {
        sortArr.push(arr[element])
    });
    return sortArr
}

function getMonth() {
    let datae = new Date();
    let Month = datae.getMonth();
    let fMonth = "";
    switch (Month) {
        case 0: fMonth = "января"; break;
        case 1: fMonth = "февраля"; break;
        case 2: fMonth = "марта"; break;
        case 3: fMonth = "апреля"; break;
        case 4: fMonth = "мая"; break;
        case 5: fMonth = "июня"; break;
        case 6: fMonth = "июля"; break;
        case 7: fMonth = "августа"; break;
        case 8: fMonth = "сентября"; break;
        case 9: fMonth = "октября"; break;
        case 10: fMonth = "ноября"; break;
        case 11: fMonth = "декабря"; break;
    }
    return "(" + fMonth + ")"
};

export { checkTitleResult, checkTotalResult, breackArrFordata, percentDay, getDataInterval, getDataStr, sortMassivDays, getMonth };