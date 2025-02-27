import React, { useState, useEffect } from "react";

const Cell = ({ row, col, value, onChange, onFocus, onBlur }) => {
  const [editing, setEditing] = useState(false);
  const [cellValue, setCellValue] = useState(value);

  useEffect(() => {
    setCellValue(value); // Update when parent value changes
  }, [value]);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setCellValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
      onChange(row, col, cellValue);
    }
  };

  const handleBlur = () => {
    setEditing(false);
    onChange(row, col, cellValue);
    onBlur();
  };

  return (
    <td 
      onDoubleClick={handleDoubleClick} 
      onFocus={() => onFocus(row, col)} 
      onBlur={handleBlur} 
      className="cell"
    >
      {editing ? (
        <input
          type="text"
          value={cellValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span>{cellValue}</span>
      )}
    </td>
  );
};

export default Cell;
