const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('insert-time.insertCurrentTime', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selections = editor.selections; // Get all cursor selections
			const startTime = Date.now(); // Get the current time in milliseconds

			editor.edit(editBuilder => {
				selections.forEach((selection, index) => {
					// Calculate the timestamp for each cursor
					const timestamp = startTime + index; // Increment by index for unique timestamps
					editBuilder.insert(selection.active, `${timestamp}`); // Insert timestamp at cursor position
				});
			});
		}
	});

	context.subscriptions.push(disposable);
}


function deactivate() { }

module.exports = {
	activate,
	deactivate
}
