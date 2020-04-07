const date = new Date();

const showDate1 = function(data) {
	const date = data.toDateString();
	const time = data.toTimeString();
	let month;
	let dayOfWeek;
	let hour = parseInt(time.slice(0, 2));
	let minutes = parseInt(time.slice(3, 5));
	let seconds = parseInt(time.slice(6, 8));
	let dayOfMonths = parseInt(date.slice(8, 10));
	switch (date.slice(0, 3)) {
		case 'Mon':
			dayOfWeek = 'Понедельник';
			break;
		case 'Tue':
			dayOfWeek = 'Вторник';
			break;
		case 'Wed':
			dayOfWeek = 'Среда';
			break;
		case 'Thu':
			dayOfWeek = 'Четверг';
			break;
		case 'Fri':
			dayOfWeek = 'Пятница';
			break;
		case 'Sat':
			dayOfWeek = 'Суббота';
			break;
		case 'Sun':
			dayOfWeek = 'Воскресенье';
			break;
	}
	switch (date.slice(4, 7)) {
		case 'Apr':
			month = 'апреля';
			break;
		case 'May':
			month = 'мая';
			break;
		case 'Jun':
			month = 'июня';
			break;
		case 'Jul':
			month = 'июля';
			break;
		case 'Aug':
			month = 'августа';
			break;
		case 'Sep':
			month = 'сентября';
			break;
		case 'Oct':
			month = 'октября';
			break;
		case 'Nov':
			month = 'ноября';
			break;
		case 'Dec':
			month = 'декабря';
			break;
		case 'Jan':
			month = 'января';
			break;
		case 'Feb':
			month = 'февраля';
			break;
		case 'Mar':
			month = 'марта';
			break;
	}
	let appendix = hour >= 5 && hour <= 20 ? 'ов' : hour === 1 || hour === 21 ? '' : 'а'
	return `Сегодня ${dayOfWeek}, ${dayOfMonths} ${month} ${date.slice(11, 15)} года, ${hour} час${appendix} ${minutes} минут ${seconds} секунды`;
};

const showDate2 = function(date) {
	date = date.toJSON();
 	return `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)} - ${date.slice(11, 19)}`;
};

console.log(showDate2(date));
console.log(showDate1(date));