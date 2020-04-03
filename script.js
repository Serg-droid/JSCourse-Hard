const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Saturday'];

let today = new Date();

for (let i = 0; i < week.length; i++) {
	i === today.getDate() + 1 || (i === 6 && today.getDate() === 0) ? console.log(week[i].bold()) : i === 5 || i === 6 ? console.log(week[i].italics()) : console.log(week[i])
}

