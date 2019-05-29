const xlsx = require('xlsx');

const workbook = xlsx.readFile('./data.xlsx');

const ws = workbook.Sheets.영화목록;

const records = xlsx.utils.sheet_to_json(ws);

for(const [i, r] of records.entries()) {
    console.log(i, r.제목, r.링크);
}