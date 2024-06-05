import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private http: HttpClient) { }

  fetchExcelFile(url: string): Observable<ArrayBuffer> {
    return this.http.get(url, { responseType: 'arraybuffer' });
  }

  readExcelFile(data: ArrayBuffer,sheetIndex:number): any[] {
    debugger;
    const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
    const sheetName: string = workbook.SheetNames[sheetIndex];
    const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  }
}
