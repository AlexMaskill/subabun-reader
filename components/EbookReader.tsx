import React, { useState } from 'react';
import { ReadiumView } from 'react-native-readium';
import type { File } from 'react-native-readium';
import type { Preferences } from 'react-native-readium';
// Import your EPUB viewer here (e.g., react-native-epub-viewer)
import type { EbookReaderProps } from '../constants/Interfaces';

export default function EbookReader({ book }: EbookReaderProps) {
  // Render EPUB from local file or remote URL
    const [file] = useState<File>({
      url: book
    });

    return (
      <ReadiumView
        file={file} preferences={{}}/>
    );
}