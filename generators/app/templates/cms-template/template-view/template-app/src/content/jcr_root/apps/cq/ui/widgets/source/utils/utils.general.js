CQ.wcm.SiteAdmin.utils = {};


CQ.wcm.SiteAdmin.utils.verifyColumnBuilderValues = function(numArray) {
	var isValid = false;
	if (numArray) {
		var total = 0;
		for (var i=0; i < numArray.length; i++) {
			if (numArray[i] == '') {
				numArray[i] = 0;
			}
			total += numArray[i];
		}
		if (total === 100 || total === 0) {
			isValid = true;
		}
	}
	return isValid;
}