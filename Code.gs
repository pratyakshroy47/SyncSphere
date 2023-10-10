// Code.gs
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CSV Importer')
      .addItem('Import CSV', 'openDialog')
      .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Drop CSV File');
}

function saveData(data, columnNumber) {
  Logger.log("saveData is called");
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log("data from file",data);
  data.forEach(function(row, index) {
    sheet.getRange(index + 1, columnNumber).setValue(row[0]);
  });
}
