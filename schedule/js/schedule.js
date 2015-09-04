function scheduleLoad(){
    //get JSON
    var url = "../schedule/schedule.json"
    $.getJSON(url , function(data) {
	var fritable = $("ul#fritable");
	var sattable = $("ul#sattable");
	var sntable = $("ul#sntable");
	fritable.empty();
	sattable.empty();
	sntable.empty();
        for (var i =0 ; i<data.events.length ; i++){
            thisEvent = data.events[i];
            if (data.events[i].day.toLowerCase() == "friday"){
                fritable.append("<li class='schedule-first'>" + thisEvent.starttime + " - " + thisEvent.endtime +  "  " + thisEvent.title + "</li>");
            } else if (thisEvent.day.toLowerCase() == "saturday"){
                sattable.append("<li class='schedule-first'>"+ thisEvent.starttime + " - " + thisEvent.endtime + "  " + thisEvent.title + "</li>");
            } else {
                sntable.append("<li class='schedule-first'>"+ thisEvent.starttime + " - " + thisEvent.endtime +  "  " + thisEvent.title + "</li>");
            }
        }
    });
}
