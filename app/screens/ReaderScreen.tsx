import React from 'react';
import { View } from 'react-native';
import EbookReader from '../components/EbookReader';
import AnkiExportButton from '../components/AnkiExportButton';

import type { RouteProp } from '@react-navigation/native';

type ReaderScreenRouteParams = {
  book: string; // URL or local path to the EPUB file
};

type ReaderScreenProps = {
  route: RouteProp<{ ReaderScreen: ReaderScreenRouteParams }, 'ReaderScreen'>;
};

export default function ReaderScreen({ route }: ReaderScreenProps) {
    const { book } = route.params;
    // const [currentPage, setCurrentPage] = React.useState(1);
    // const handlePageChange = (page: number) => setCurrentPage(page);

    return (
        <View style={{ flex: 1 }}>
            <EbookReader book={book} />
            <AnkiExportButton book={book} />
            {/* <Text>Current Page: {currentPage}</Text> */}
            {/* <Button title="Next Page" onPress={() => handlePageChange(currentPage + 1)} /> */}
        </View>
    );
}