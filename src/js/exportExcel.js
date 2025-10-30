import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

//只导出当前页
export function exportTableToExcel(tableRef, fileName = 'export.xlsx') {
  // 获取 el-table 的 DOM
  const tableEl = tableRef.$el;
  const wb = XLSX.utils.table_to_book(tableEl, { sheet: 'Sheet1' });

  // 生成二进制数据
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

  // 保存文件
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
}
// 分页，导出全部
export function exportDataToExcels(data, columns, fileName = 'export.xlsx') {
  const headers = columns.map(col => col.label);
  const rows = data.map(row => columns.map(col => row[col.prop]));

  const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
}