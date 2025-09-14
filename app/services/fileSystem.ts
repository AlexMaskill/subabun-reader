import * as FileSystem from 'expo-file-system';

export async function saveLocalBook(uri: string, name: string) {
  // Copy EPUB to app storage
  const dest = FileSystem.documentDirectory + name;
  await FileSystem.copyAsync({ from: uri, to: dest });
}

export async function getLocalBooks() {
  // List EPUBs in app storage
  const files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory || '');
  return files.filter(f => f.endsWith('.epub')).map(f => ({
    id: f,
    title: f,
    uri: FileSystem.documentDirectory + f,
    local: true,
  }));
}