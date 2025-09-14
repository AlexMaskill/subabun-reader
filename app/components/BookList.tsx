import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { getLocalBooks, getRemoteBooks } from '../services/fileSystem';
import { fetchBooks } from '../services/api';

export default function BookList({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const local = await getLocalBooks();
      const remote = await fetchBooks();
      setBooks([...local, ...remote]);
    };
    loadBooks();
  }, []);

  return (
    <FlatList
      data={books}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Reader', { book: item })}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}