import React from 'react';
import { Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { saveLocalBook } from '../services/fileSystem';

export default function FilePickerButton({ onFilePicked }: { onFilePicked: (file: any) => void }) {
  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: 'application/epub+zip', copyToCacheDirectory: true });
    if (result.assets && result.assets[0] && !result.canceled) {
      await saveLocalBook(result.assets[0].uri, result.assets[0].name);
      // Optionally trigger a refresh of the book list
    }
    onFilePicked(result);
  };

  return <Button title="Import EPUB from Device" onPress={pickFile} />;
}