import React, { useState } from 'react';
import { ReadiumView } from 'react-native-readium';
import type { File } from 'react-native-readium';
import type { Preferences } from 'react-native-readium';
import {useLibrary} from '../context/LibraryContext';

const { selectedBook } = useLibrary();

export default function EbookReader() {
  // Render EPUB from local file or remote URL
    if(selectedBook === null) {
        return null;
    }
    let file: File = { url: selectedBook.uri };
    let preferences: Preferences = {
        // Customize reader preferences as needed
        fontSize: 100,
        theme: 'dark',
    };

    return (
      <ReadiumView
        file={file} preferences={preferences}/>
    );
}