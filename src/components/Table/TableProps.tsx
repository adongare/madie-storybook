export interface TableProps {
  /**
   * List of rows that will be displayed in Table
   */
  rows: string[][]

  /**
   * Table column labels
   */
  headers: string[]

  /**
   * Border width one of the following:
   */
  borderWidth: 'thin' | 'medium' | 'thick'
  cellPadding: string
  cellTextColor: string
  headerTextColor: string
  cellBorderColor: string
  headerBorderColor: string
  backgroundColor: string
  headerBackgroundColor: string
}
