function inter(s1, s2){
  	var interRes = new Set();
  	// traversing set elements
    // will display items in order
    for (var elem of s2) {
        if (s1.has(elem)) {
            interRes.add(elem);
        }
    }
    return interRes;
}
