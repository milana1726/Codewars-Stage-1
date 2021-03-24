function killer(suspectInfo, dead) {

	var the_killer = undefined;

	for (var key in suspectInfo) {
		if (suspectInfo.hasOwnProperty(key)) {

			//console.log('TYPE check the_killer is ' + the_killer);
			if (typeof the_killer !== 'undefined') {
				//console.log('We have found the killer, lets return it ' + the_killer);
				return the_killer;
			}

			//console.log('Checking '+ key);
			the_killer = key;
			for (var i = 0; i < dead.length; i++) {
				
				//console.log('         checking dead body: '+ dead[i]);
				
				if (suspectInfo[key].includes(dead[i])) {
					//console.log('      '+ key +' could kill '+dead[i]);
				} else {
					//console.log('      '+ key+' is not the killer');
					the_killer = undefined;
					break;
				}

			}
		}

	}

	return the_killer;
		
}
