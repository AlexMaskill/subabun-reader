import {File, Directory, Paths } from 'expo-file-system';

export async function saveLocalBook(uri: string, name: string) {
  // Copy EPUB to app storage
  const dest = Directory.name + name;
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
  var Directory = Paths.document;
  const files = Directory.list();
  return files.filter(f =>  f.name.endsWith('.epub')).map(f => ({
    id: f,
    title: f,
    uri: Directory.name + f,
    local: true,
  }));
}