import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-csv-table',
  templateUrl: './csv-table.component.html',
  styleUrls: ['./csv-table.component.scss']
})
export class CsvTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handleFile(e) { //
    var files = e.target.files; // 
    var i, f;
    var newArry = [];//
    for (i = 0, f = files[i]; i != files.length; i++) { // 
      var reader = new FileReader(); // 
      // var name = f.name;
      // console.log(name); // local file name
      reader.onload = (e:any) => { //  
        var data = e.target.result;

        var workbook = XLSX.read(data, { type: 'binary' });

        /* DO SOMETHING WITH workbook HERE */
        var sheet_name_list = workbook.SheetNames;
        console.log(sheet_name_list); // excel 左下角“sheet1”
        sheet_name_list.forEach((y) => { /* iterate through sheets */
          var worksheet = workbook.Sheets[y];
          console.log(y); // SHEET1
          // XLSX.utils.sheet_to_json(worksheet);
          console.log(worksheet); // WHOLE CONTENT
          var item;
          var beginLine;
          for (let z in worksheet) {
            var colNum;
            var rowNum;
            /* all keys that do not begin with "!" correspond to cell addresses */
            // console.log(z); // A1
            if (z[0] === '!') {
            }
            if (z === '!ref') {
              item = z;
              console.log(worksheet[z]);// A1:D4
              var wholeLength = worksheet[z].split(":");
              let startAlpha = wholeLength[0][0];
              let startNum = +wholeLength[0].substring(1);
              beginLine = startNum + 1;//A2
              let endAlpha = wholeLength[1][0];
              let endNum = +wholeLength[1].substring(1);
              colNum = endAlpha.charCodeAt(0) - startAlpha.charCodeAt(0) + 1;
              rowNum = endNum - startNum;
              console.log(colNum, rowNum);
            }
          }

          // beginLine = +(worksheet[item][1])+1;
          for (let j = beginLine; j < rowNum + beginLine; j++) {
            // let newobj = [];
            let newobj = {'name':'','age':'','gender':'','middle':''};
            let objPropArray=['name','age','gender','middle'];
            for (let i = 0; i < objPropArray.length; i++) {
              var a = worksheet[item].charCodeAt(0);
              var b = String.fromCharCode(a + i);
              let newItem = b + j;
              console.log(a, b, newItem);
              if (worksheet[newItem] === undefined) {
                // newobj.push('');
                newobj[objPropArray[i]] = '';
              }
              else {
                // newobj.push(worksheet[newItem].v);
                // console.log(worksheet[newItem].v);
                newobj[objPropArray[i]] = worksheet[newItem].v;
                console.log(objPropArray[i]);
              }

            }
            console.log(newobj);
            newArry.push(newobj); //newArry.push([...newobj]); if {}, newArry.push({...newobj});
            
          }
          console.log(newArry); //this is whole data
          console.log(this);
        });
      };
      reader.readAsBinaryString(f);
    }

  }
}
