export const parseFormula = (formula, data) => {
  if (!formula.startsWith("=")) return formula; // Return raw value if not a formula

  try {
    const expression = formula.substring(1).toUpperCase(); // Remove '=' and convert to uppercase
    const match = expression.match(/([A-Z]+)(\d+):([A-Z]+)(\d+)/);

    if (match) {
      const [, col1, row1, col2, row2] = match;
      const startRow = parseInt(row1, 10) - 1;
      const endRow = parseInt(row2, 10) - 1;
      const startCol = col1.charCodeAt(0) - 65; // Convert A->0, B->1, etc.
      const endCol = col2.charCodeAt(0) - 65;

      let values = [];
      for (let r = startRow; r <= endRow; r++) {
        for (let c = startCol; c <= endCol; c++) {
          const cellValue = parseFloat(data[r]?.[c] || 0);
          if (!isNaN(cellValue)) values.push(cellValue);
        }
      }

      if (expression.startsWith("SUM")) return values.reduce((a, b) => a + b, 0);
      if (expression.startsWith("AVERAGE"))
        return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
      if (expression.startsWith("MAX")) return Math.max(...values);
      if (expression.startsWith("MIN")) return Math.min(...values);
      if (expression.startsWith("COUNT")) return values.length;

      return "ERROR";
    }

    return "INVALID FORMULA";
  } catch (error) {
    return "ERROR";
  }
};
