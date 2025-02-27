import React, { useState } from 'react';
import Cell from './Cell';
import { parseFormula } from './formulaParser';

const Spreadsheet = ({ rows, cols }) => {
  // Create 2D grid state
  const initialData = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => "")
  );
  const [data, setData] = useState(initialData);
  const [selectedCell, setSelectedCell] = useState({ row: null
