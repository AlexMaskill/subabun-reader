import React from 'react';
import { View } from 'react-native';
import EbookReader from '../components/EbookReader';
import AnkiExportButton from '../components/AnkiExportButton';

import type { RouteProp } from '@react-navigation/native';
import { Book } from '@/utils/LibraryClasses';
import {useLibrary} from '../context/LibraryContext';

type ReaderScreenRouteParams = {
  book: Book; // URL or local path to the EPUB file
};

type ReaderScreenProps = {
  route: RouteProp<{ ReaderScreen: ReaderScreenRouteParams }, 'ReaderScreen'>;
};

export default function ReaderScreen() {
    const { selectedBook } = useLibrary();

    return (
        <View style={{ flex: 1 }}>
            <EbookReader/>
            {/* <AnkiExportButton/> */}
        </View>
    );
}