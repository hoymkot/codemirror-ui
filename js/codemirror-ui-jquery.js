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
				searchMode : 'popup'
			},
			codeMirrorOptions : {
				mode : "javascript"
			},
			buttons : []
		}

		if (options) {
			$.extend(settings, options); //TODO: verify this will work, somehow ....
		}
		// TODO: verify this is needed

		this.each(function() {
			var editor = new CodeMirrorUI(this, settings.uiOptions,
					settings.codeMirrorOptions);
			for ( var i = 0; i < settings.buttons.length; i++) {
				var buttonDef = settings.buttons[i];
				editor.addButton(buttonDef[0], buttonDef[1], buttonDef[2],
						buttonDef[3], editor.buttonFrame);
			} 
		})

		return editor; // TODO: verify what this means. Wrapping a CodeMirrorUI
		// editor with jQuery
	};
})(jQuery);