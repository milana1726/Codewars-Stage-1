function starSign(date) {
	var zodiac = {
            0:{limit:21,vals:["Aquarius","Capricorn"]},
            1:{limit:20,vals:["Pisces","Aquarius"]},
            2:{limit:21,vals:["Aries","Pisces"]},
            3:{limit:21,vals:["Taurus","Aries"]},
            4:{limit:22,vals:["Gemini","Taurus"]},
            5:{limit:22,vals:["Cancer","Gemini"]},
            6:{limit:23,vals:["Leo","Cancer"]},
            7:{limit:24,vals:["Virgo","Leo"]},
            8:{limit:24,vals:["Libra","Virgo"]},
            9:{limit:24,vals:["Scorpio","Libra"]},
            10:{limit:23,vals:["Sagittarius","Scorpio"]},
            11:{limit:22,vals:["Capricorn","Sagittarius"]}
    };

    var zodMonth = zodiac[date.getMonth()];
    return date.getDate() >= zodMonth.limit ? zodMonth.vals[0] : zodMonth.vals[1];
}



