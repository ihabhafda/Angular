import { Component } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'app-csv-file',
  templateUrl: './csv-file.component.html',
  styleUrl: './csv-file.component.css'
})
export class CsvFileComponent {

  data = [
    {
      name: "Test 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];

  
  downloadCcvFile () {
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'My title',
      useBom: true,
      noDownload: false,
      headers: ["Name", "Age", "Average", "Approved", "Description"]
    };

    new ngxCsv(this.data, 'myFirstCsv', options);
  }
 

}
