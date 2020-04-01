// 1 -------------------------------

let arr = ['23803842', '49248973'];

for (let i = 0; i < 5; i += 1) {
	const randomNumber = Math.random() * 1000000;
	arr.push(String(Math.round(randomNumber)));
}

const checkArray = (massive) => {
	for (const item of massive) {
		switch (item[0]) {
			case '2':
			case '4':
				console.log(item);
				break;
		}
	}
};

checkArray(arr);

// 2 -------------------------------

const simpleNumbers = (start, end) => {
	for (let i = start; i < end + 1; i += 1) {
		let dividers = 0
		for (let j = start; j**2 <= i; j += 1) {
			if (i % j === 0) {
				dividers += 1;
			}
		}
		if (dividers < 2) {console.log(`${i} -- Делители этого числа: 1 и ${i}`)}
	}
};

simpleNumbers(1, 100);

