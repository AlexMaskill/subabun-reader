import React, { useEffect, useState, useContext } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { getLocalBooks } from '../services/fileSystem';
import { fetchBooks } from '../services/api';
import FilePickerButton from './FilePickerButton';
import {Book} from '../utils/LibraryClasses';
import { useLibrary } from '@/context/LibraryContext';

type RootStackParamList = {
  Reader: { book: Book };
};
export default function BookList() {
    const { books, setBooks, selectedBook, setSelectedBook } = useLibrary();
    const loadBooks = async () => {
      const local = await getLocalBooks();
      const remote = await fetchBooks();
      setBooks([...local, ...remote]);
    };


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
            setSelectedBook(item);
            console.log('Selected book:', item);
          }}>
            <Text>{item.title} - {item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
}