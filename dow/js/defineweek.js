window.onload = function() {

	/**
	* Getting week
	* 
	* function calculates current week
	* week started from 1 September of past year
	*/
	Date.prototype.getWeek = function() {
	  var date = new Date(this.getTime());
	  date.setHours(0, 0, 0, 0);
	  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
	  var week1 = new Date(date.getFullYear()-1, 8, 1);
	  var result = 1 + Math.round(
	  	((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7
	  );
	  return result;
	};

	/**
	* week_status from index.html
	* week_number from index.html
	*/
	var week_status = document.getElementById('week_status');
	var week_number = document.getElementById('week_number');

	var date = new Date();
	var curWeekNumber = date.getWeek();

	if(curWeekNumber % 2 == 0) {
		week_status.innerText = 'чётная';
	} else {
		week_status.innerText = 'нечётная';
	}
	week_number.innerText = curWeekNumber;
	
};