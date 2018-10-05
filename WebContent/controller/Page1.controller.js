sap.ui.controller("bs.org.Product.controller.Page1", {
	
	
	gotoPage2 : function(){
		//navigate to Page2
		this.getOwnerComponent().getRouter().navTo("secondPage");
	}
	
})