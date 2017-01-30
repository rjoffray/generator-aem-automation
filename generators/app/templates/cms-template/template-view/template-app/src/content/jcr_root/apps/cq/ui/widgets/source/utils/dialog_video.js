/*
 ***************************************************************************
 >>>>>>>>>>>>>>>>>>>>>> Custom ExtJS function to toggle <<<<<<<<<<<<<<<<<<<<
 >>>>>>>>>>>>>>>>>>>>>> between the Fixed or Custom Playlist tab <<<<<<<<<<<
 ***************************************************************************
 */
CQ.wcm.SiteAdmin.videoDialog = {};
CQ.wcm.SiteAdmin.videoDialog.playlist = {};

CQ.wcm.SiteAdmin.videoDialog.playlist.toggle = function(component, value) {
	// Mirror the number of available tabs in the dialog
	var tabs = ['0', '1', '2'];	
	var index = tabs.indexOf(value); 
	if(index == -1) return;	// Do nothing if playlist selection is unchanged
	
	// Toggle the tab on & off accordingly based on the playlist type selection
	var currentComponent = component.findParentByType('tabpanel');
	for(var i = 1; i < tabs.length; i++) {	// Skip the 1st default tab
		(index == i) ? currentComponent.unhideTabStripItem(i) : currentComponent.hideTabStripItem(i);
	}
	// Force this container's layout to be recalculated
	currentComponent.doLayout();
	// Set this as the active tab
	currentComponent.activate(index);
}