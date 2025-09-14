import React from 'react';
import { Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { saveLocalBook } from '../services/fileSystem';

export default function FilePickerButton() {
  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: 'application/epub+zip' });
    if (result.type === 'success') {
      await saveLocalBook(result.uri, result.name);
      // Optionally trigger a refresh of the book list
    }
  };

  return <Button title="Import EPUB from Device" onPress={pickFile} />;
}