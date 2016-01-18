
moment.locale('kz', {
    months : "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
    monthsShort : "қант._ақп._наур._сәуір_мамыр_маус._шілд._тамыз_қырк._қаз._қар._желт.".split("_"),
    weekdays : "дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі_жексенбі".split("_"),
    weekdaysShort : "дүйс._сейс._сәрс._бейс._жұма_сенб._жекс.".split("_"),
    weekdaysMin : "Дс_Сс_Ср_Бс_Жм_Сн_Жк".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        LTS : "HH:mm:ss",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Бүгін] LT",
        nextDay: '[Ертең] LT',
        nextWeek: '[Келесі] dddd LT',
        lastDay: '[Кеше] LT',
        lastWeek: 'dddd [алдыңғы апта] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "%s кезде",
        past : "%s бұрын",
        s : "бірнеше секунд",
        m : "бірнеше минут",
        mm : "%d минут",
        h : "бірнеше сағат",
        hh : "%d сағат",
        d : "бірнеше күн",
        dd : "%d күн",
        M : "бірнеше ай",
        MM : "%d ай",
        y : "бірнеше жыл",
        yy : "%d жыл"
    },
    ordinalParse : /\d{1,2}(ші|ші)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'ші' : 'ші');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    // in case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example)
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});
moment.locale('fr');
UI.registerHelper('formatDateFromNow', function(date) {
	return moment(date).fromNow();
});
UI.registerHelper('formatDate', function(date) {
	return moment(date).format('MM-DD-YYYY');
});

UI.registerHelper('describe', function(body) {
    var description = "";
    for (var i = 0; i < Math.min(body.length, 150); i++) {
        if (body[i] == '<') {
            while (body[i] !== '>') {
                i++;
            }
            i++;
        }
        if (body[i] === "'")
            body[i] = '"';
        if (body[i] === "\n")
            body[i] = " ";
        description += body[i];
    }       
    return description;
});