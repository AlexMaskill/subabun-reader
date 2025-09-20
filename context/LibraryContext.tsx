import React, { createContext, useContext, useState } from 'react';
import type { Book } from '../utils/LibraryClasses';

type LibraryContextType = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  selectedBook: Book | null;
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>;
  // Add more pairs as needed
};

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  return (
    <LibraryContext.Provider value={{ books, setBooks, selectedBook, setSelectedBook }}>
      {children}
    </LibraryContext.Provider>
  );
};

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (!context) throw new Error('useLibrary must be used within a LibraryProvider');
  return context;
}