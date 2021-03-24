function catMouse(map,moves) {
	var real_moves = 0;
	var arr = Array(), pets = Array();

	arr = map.split('\n');
	for (var i=0; i < arr.length; i++){
		for (var j=0; j < arr[i].length; j++){
			if (arr[i][j] === 'C' || arr[i][j] === 'm'){
				pets.push([i, j]);
			}
		}
	}

	if (pets.length < 2) {
	    return ('boring without two animals');
   	}

	real_moves = Math.abs(pets[0][0] - pets[1][0])
		+ Math.abs(pets[0][1] - pets[1][1]);
	if (real_moves <= moves) {
		return ('Caught!');
	}
    return ('Escaped!');
}

