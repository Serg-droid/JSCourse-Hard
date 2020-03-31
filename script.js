let checkInput = function(symbols) {
	if (typeof symbols !== 'string') {
		alert('It is not a string');
		return;
	} else {
		let trimmedString = symbols.trim();
		if (symbols.length > 30) {
			return trimmedString.slice(0,31) + '...';
		} 
		return trimmedString;
	}
};


