import React from 'react';
import { Button } from 'react-native';
import { exportToAnki } from '../utils/anki';

export default function AnkiExportButton({ book }) {
  const handleExport = () => {
    // Gather selected words/sentences and export
    exportToAnki(book);
  };

  return <Button title="Export to Anki" onPress={handleExport} />;
}