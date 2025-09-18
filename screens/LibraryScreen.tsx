import React from 'react';
import { View } from 'react-native';
import BookList from '../components/BookList';
import FilePickerButton from '../components/FilePickerButton';

export default function LibraryScreen({ }: any) {
  return (
    <View style={{ flex: 1 }}>
      <BookList />
    </View>
  );
}