import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import ReaderScreen from '@/screens/ReaderScreen';
import { Book } from '@/utils/LibraryClasses';
import { useLibrary } from '@/context/LibraryContext';

export default function TabTwoScreen() {
  const { selectedBook } = useLibrary();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <ReaderScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
