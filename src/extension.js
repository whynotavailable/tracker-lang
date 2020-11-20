const { format } = require("date-fns");
const { commands, window } = require("vscode");

function activate(context) {
    context.subscriptions.push(
        commands.registerCommand("tracker-lang.insertTime", () => {
            let editor = window.activeTextEditor;
            if (editor) {
                editor.edit(editBuilder => {
                    editBuilder.insert(editor.selection.active, getCurrentTime())
                })
            }
        })
    );
}

function getCurrentTime() {
    let date = new Date();

    let ampm = 'am';
    let hours = date.getHours();



    return format(new Date(), 'hh:mm aa');
}

module.exports = {
    activate
}
