export function downloadCSV(array: any[]) {
  const link = document.createElement('a');
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = 'export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', filename);
  link.click();
}
export function convertArrayOfObjectsToCSV(array: any[]) {
  let result: string;

  const columnDelimiter = ',';
  const lineDelimiter = '\n';
  const keys = Object.keys(array[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

export default function generatePageNumbers(
  rowCount: number,
  rowsPerPage: number,
  maxNumberofPageButtons: number,
  currentPage: number
) {
  // Calculate the total number of pages
  const totalPageCount = Math.ceil(rowCount / rowsPerPage);

  // Ensure currentPage is within valid range
  currentPage = Math.min(Math.max(1, currentPage), totalPageCount);

  // Calculate the start and end range for the page numbers to display
  let startPage = Math.max(
    1,
    currentPage - Math.floor(maxNumberofPageButtons / 2)
  );
  let endPage = Math.min(
    totalPageCount,
    startPage + maxNumberofPageButtons - 1
  );

  // Adjust startPage and endPage if needed to keep currentPage in the center
  const adjustment = maxNumberofPageButtons - (endPage - startPage + 1);
  if (adjustment > 0) {
    startPage = Math.max(1, startPage - adjustment);
    endPage = Math.min(totalPageCount, endPage + adjustment);
  }

  // Generate the array of page numbers to display
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
}