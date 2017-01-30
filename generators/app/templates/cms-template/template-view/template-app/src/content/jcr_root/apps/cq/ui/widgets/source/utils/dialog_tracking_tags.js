CQ.wcm.SiteAdmin.trackingDialogs = {};
CQ.wcm.SiteAdmin.trackingDialogs.floodLight = {};
CQ.wcm.SiteAdmin.trackingDialogs.siteCatalyst = {};

CQ.wcm.SiteAdmin.trackingDialogs.floodLight.toggle1 = function(component){
	console.log("component: " + component.checked);
	console.log(component);
	CQ.Ext.each(component.ownerCt.find('custom1_floodLightTypeNodeName', 'floodLightCustomType1'), function(item, index) { 
		console.log(item);
		console.log(index);
		
		(item.custom1_floodLightTypeSelected == component.checked) ? item.show() : item.hide(); 
	});
}


CQ.wcm.SiteAdmin.trackingDialogs.floodLight.toggle2 = function(component, value){
	console.log("value: " + value);
	console.log(component);
	CQ.Ext.each(component.ownerCt.find('custom2_floodLightTypeNodeName', 'floodLightCustomType2'), function(item, index) { 
		console.log(item);
		console.log(index);
		
		(item.custom2_floodLightTypeSelected == value) ? item.show() : item.hide();
	});
}

CQ.wcm.SiteAdmin.trackingDialogs.siteCatalyst.toggle = function(component, type){
	console.log("component: " + component.checked + " | type: " + type);
	console.log(component);
	if(type == 'global') {
		var customOption = CQ.Ext.getCmp('siteCatalystCustom');
		var customChannel = CQ.Ext.getCmp('siteCatalystChannel');
		if(component.checked) {
			customOption.enable();
			customChannel.enable();
		} else {
			customOption.disable();
			customChannel.disable();
			//customOption.checked = false;
		}
	} else {
		CQ.Ext.each(component.ownerCt.find('custom2_siteCatalystTypeNodeName', 'siteCatalystCustomType2'), function(item, index) { 
			//console.log(item);
			//console.log(index);
			
			(item.custom2_siteCatalystTypeSelected == component.checked) ? item.show() : item.hide();
		});
	}
}

CQ.wcm.SiteAdmin.trackingDialogs.siteCatalyst.toggle2 = function(component, value){
	console.log("value: " + value);
	console.log(component);
	CQ.Ext.each(component.ownerCt.find('custom1_siteCatalystTypeNodeName', 'siteCatalystCustomType1'), function(item, index) { 
		//console.log(item);
		//console.log(index);
		
		(item.custom1_siteCatalystTypeSelected == value) ? item.show() : item.hide();
	});
}