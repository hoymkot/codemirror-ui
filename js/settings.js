	jQuery('#editor').codeMirrorUI({
		uiOptions : {
			path : 'js/',
		},
		codeMirrorOptions : {
		      buttons: ['search', 'undo', 'redo', 'jump', 'reindentSelection', 'reindent']

		},		
		buttons : [ [ "new button", "new", "/images/silk/help.png", function() {
			this.mirror.replaceSelection("NewMethod")
		} ] ]
	});