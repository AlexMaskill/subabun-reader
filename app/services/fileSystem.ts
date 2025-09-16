import * as FileSystem from 'expo-file-system';

export async function saveLocalBook(uri: string, name: string) {
  // Copy EPUB to app storage
  const dest = FileSystem.Directory.name + name;
  //await new FileSystem.File().copy({ dest });
}

export async function getRemoteBooks() {
  const response = await fetch('/books');
  if (!response.ok) {
    throw new Error('Failed to fetch remote books');
  }
  const books = await response.json();
  return books.map((book: any) => ({
    id: book.id,
    title: book.title,
    uri: book.uri,
    local: false,
  }));
}

export async function getLocalBooks() {
  // List EPUBs in app storage
  const files = await FileSystem.readDirectoryAsync(FileSystem.Directory.name || '');
  return files.filter(f => f.endsWith('.epub')).map(f => ({
    id: f,
    title: f,
    uri: FileSystem.Directory + f,
    local: true,
  }));
}