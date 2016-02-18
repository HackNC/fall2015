var scheduleLoad = function(url) {
	//get JSON
	$.getJSON(url, function(data) {
		var sattable = $("#sattable");
		var sntable = $("#sntable");
		for (var i = 0; i < data.events.length; i++) {
			thisEvent = data.events[i];
			var table;
			if (data.events[i].day.toLowerCase() == "saturday") {
				table = sattable;
			} else {
				table = sntable;
			}
			table.append("<tr><td>" + thisEvent.starttime + "</td><td>" + thisEvent.endtime + "</td><td>" + thisEvent.room + "</td><td>" + thisEvent.title + "</td></tr>");
		}
	});
};