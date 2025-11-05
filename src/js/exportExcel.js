import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

/**
 * 导出 el-table 为 Excel
 * @param {Array}  data   el-table 绑定的数组
 * @param {Array}  cols   el-table-columns 配置
 * @param {String} filename  文件名（含 .xlsx）
 */
export function exportElTable(data, cols, filename = 'export.xlsx') {
  // 1. 中文列头
  const header = cols.map(c => c.label);
  // 2. 按列顺序取值
  const rows = data.map(row =>
    cols.map(c => {
      const val = row[c.prop];
      // 简单处理日期、布尔等，可按需扩展
      return val === null || val === undefined ? '' : val;
    })
  );
  // 3. 构造工作簿
  const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  // 4. 触发下载
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  saveAs(blob, filename);
}