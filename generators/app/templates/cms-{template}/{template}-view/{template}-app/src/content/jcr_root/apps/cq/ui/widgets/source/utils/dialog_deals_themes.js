CQ.wcm.SiteAdmin.dealsDialogs = {};
CQ.wcm.SiteAdmin.dealsDialogs.filterBar = {};
CQ.wcm.SiteAdmin.dealsDialogs.themes = {};

CQ.wcm.SiteAdmin.dealsDialogs.filterBar.toggle = function(component){
	//console.log("component: " + component.checked);
	//console.log(component);
	CQ.Ext.each(component.ownerCt.find('custom_filterBarName', 'filterBar'), function(item, index) { 
		(item.custom_filterBarSelected == component.checked) ? item.show() : item.hide() 
	});
}

CQ.wcm.SiteAdmin.dealsDialogs.themes.toggle = function(box, index){
	var thematicTab = CQ.Ext.getCmp('thematicTab');
	var landingPageTab = CQ.Ext.getCmp('landingPageTab');
	//console.log("index222: " + index);
	switch(index) {
		case '3':
			landingPageTab.enable();
			landingPageTab.show();
			thematicTab.disable();
			break;
		case '2':
			thematicTab.enable();
			thematicTab.show();
			landingPageTab.disable();
			break;
	}
}

CQ.wcm.SiteAdmin.dealsDialogs.themes.validateMax = function(box, value, max){
	var selectedItems = box.getValue(); 
	var lastSelectedItem = value;
	
	//console.log('last checked: ' + lastSelectedItem); 
	//console.log(box); 
	//console.log(value);
	//console.log(selectedItems);
	//console.log(box.options);  
	//console.log(document.getElementsByName('./multiThemes')); 
	//console.log('Len2: ' + box.getValue().length); 
	//console.log(this.items.items[selectedItems.length-1]); 
	
	// Validate for the max number of items
	if(box.getValue().length > max) {
		if(box.options){
			for(var i=0; i < box.options.length; i++){
				if(lastSelectedItem == box.options[i].value){
					if(box.items.items[i].checked) {
						//console.log("^^^ " + i + ": BINGO " + box.options[i].value + " &&&");
						$("input:checkbox[value=" + box.options[i].value + "]").attr("checked", false);
					}
					break;
				}
			}
		}
		alert("You can't have more than 3 themes."); 
		return false;
	}
}