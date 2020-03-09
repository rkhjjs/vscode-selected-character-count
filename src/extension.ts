'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Position, Range } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "selected-character-count" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('selectedText.characterCount', () => {
        // The code you place here will be executed every time your command is executed
        let selectedTextCount = getSelectedTextCount()

        // Display a message box to the user
        vscode.window.showInformationMessage(`Character count: ${selectedTextCount}`);
    });

    context.subscriptions.push(disposable);
}

function getSelectedTextCount() {
    let selection = vscode.window.activeTextEditor.selection
    
    return vscode.window.activeTextEditor.document.getText(
        new Range(selection.start, selection.end)
    ).length
}

// this method is called when your extension is deactivated
export function deactivate() {
}
