import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { getLocalBooks } from '../services/fileSystem';
import { fetchBooks } from '../services/api';
import FilePickerButton from './FilePickerButton';


type RootStackParamList = {
  Reader: { book: any };
};
const [books, setBooks] = useState<any[]>([]);
const loadBooks = async () => {
      const local = await getLocalBooks();
      const remote = await fetchBooks();
      setBooks([...local, ...remote]);
    };

export default function BookList() {

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      <FilePickerButton onFilePicked={(file) => loadBooks()} />
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            // Handle book selection, e.g., navigate to Reader screen
            console.log('Selected book:', item);
          }}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
}