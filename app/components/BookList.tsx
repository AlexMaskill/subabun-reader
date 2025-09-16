import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { getLocalBooks } from '../services/fileSystem';
import { fetchBooks } from '../services/api';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
  Reader: { book: any };
};

type BookListProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Reader'>;
};


export default function BookList({ navigation } : BookListProps) {
  const [books, setBooks] = useState<any[]>([]);

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