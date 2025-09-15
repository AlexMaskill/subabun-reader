import React from 'react';
import { View } from 'react-native';
import BookList from '../components/BookList';
import FilePickerButton from '../components/FilePickerButton';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LibraryScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function LibraryScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <FilePickerButton />
      <BookList navigation={navigation} />
    </View>
  );
}