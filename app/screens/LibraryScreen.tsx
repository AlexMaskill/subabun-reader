import React from 'react';
import { View } from 'react-native';
import BookList from '../components/BookList';
import FilePickerButton from '../components/FilePickerButton';

export default function LibraryScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FilePickerButton />
      <BookList navigation={navigation} />
    </View>
  );
}