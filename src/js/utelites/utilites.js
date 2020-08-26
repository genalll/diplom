export default class Datas {

    getDataSevenDaysAgo() {
        let date = new Date();
        let Year = date.getFullYear();
        let Month = date.getMonth() + 1;
        let Day = date.getDate() - 6;
        return Year + "-" + Month + "-" + Day

    }

    dataTransform(data) {
        let datae = new Date(data);
        let Year = datae.getFullYear();
        let Month = datae.getMonth();
        let Day = datae.getDate();
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

        return Day + " " + fMonth + "," + " " + Year;
    }

}

