const { format } = require("date-fns");
const { commands, window } = require("vscode");

function activate(context) {
    context.subscriptions.push(
        commands.registerCommand("tracker-lang.insertTime", () => {
            let editor = window.activeTextEditor;
            if (editor) {
                editor.edit(editBuilder => {
                    if (!editor.selection.isEmpty) {
                        editBuilder.replace(editor.selection, getCurrentTime())
                    }
                    else {
                        editBuilder.insert(editor.selection.active, getCurrentTime())
                    }
                })
            }
        })
    );
}

function getCurrentTime() {
    return format(new Date(), 'hh:mm aa');
}

module.exports = {
    activate
}
