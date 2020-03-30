let lang;
lang = prompt('Write a lang:');
let daysOfWeekRu = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let daysOfWeekEn = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

// 1 ----->

// a
if (lang === 'ru') {
	console.log(daysOfWeekRu);
} else {
	console.log(daysOfWeekEn);
}
// b
switch (lang) {
	case 'en':
		console.log(daysOfWeekEn);
		break;
	default:
		console.log(daysOfWeekRu);
}
// c
lang === 'ru' ? console.log(daysOfWeekRu):console.log(daysOfWeekEn);
// d (то, о чем я писал в дискорде)
daysOfWeek = {
	ru: daysOfWeekRu,
	en: daysOfWeekEn,
}
console.log(daysOfWeek[lang]);

// 2 ----->

let namePerson = prompt('Put a name: ');

namePerson === 'Артем' ? console.log('директор'):namePerson === 'Максим' ? console.log('преподаватель'):console.log('студент');






