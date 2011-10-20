/**
 * an jQuery wrapper for CodeMirrorUI. The purpose of this plugin is to isolate
 * custom code from original source.
 * 
 */
// TODO: Test "inline" searchMode with extra button
// TODO: a framework for adding custom buttons. may use markItUp as reference.
// Here is what we needs.
// 'new': ["new button", "new", "/images/silk/help.png", function() {
// this.mirror.replaceSelection("NewMethod") }]
//			
(function($) {
	$.fn.codeMirrorUI = function(options) {
		var settings = {
			uiOptions : {
				path : 'js/',
				searchMode : 'popup'
			},
			codeMirrorOptions : {
				mode : "javascript"
			},
			buttons : {'new': ["new button", "new", "/images/silk/help.png", function() { this.mirror.replaceSelection("NewMethod") }]},
		}

// if (options) {
// $.extend(settings, options); //TODO: verify this will work, somehow ....
// }
		// TODO: verify this is needed

		var editor = new CodeMirrorUI(this.get()[0], {
			path : 'js/',
			searchMode : 'popup'
		},
		 {
			mode : "javascript"
		}
	)
	

// for ( var i = 0; i < settings.buttons.length; i++) {
// var buttonDef = settings.buttons[i];
// editor.addButton(buttonDef[0], buttonDef[1], buttonDef[2],
// buttonDef[3], editor.buttonFrame);
// } //TODO: verify this work add buttons after editor is created.
		
		return editor; // TODO: verify what this means. Wrapping a CodeMirrorUI
						// editor with jQuery
	};
})(jQuery);