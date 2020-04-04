const week = ['Tuesday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Saturday'];

let day = new Date();

const checkDay = (thisDay) => {
	return thisDay === 0 ? 'Saturday' : thisDay === 1 ? 'Monday' : thisDay === 2 ? 'Tuesday' : thisDay === 3 ? 'Wednesday' : thisDay === 4 ? 'Thursday' : thisDay === 5 ? 'Friday' : 'Sunday'
};
const today = checkDay(day);

for (const day of week) {
	const p = document.createElement('p');
	if (day === today) {
		p.innerHTML = `<b>${day}</b>`;
		document.body.append(p);
	} else if (day === 'Saturday' || day ==='Sunday') {
		p.innerHTML = `<i>${day}</i>`;
		document.body.append(p);
	} else {
		p.innerHTML = `${day}`;
		document.body.append(p);
	}
}

