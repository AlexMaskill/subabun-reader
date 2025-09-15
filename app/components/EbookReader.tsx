import React, { useState } from 'react';
import { ReadiumView } from 'react-native-readium';
import type { File } from 'react-native-readium';
import type { Preferences } from 'react-native-readium';
// Import your EPUB viewer here (e.g., react-native-epub-viewer)

interface EbookReaderProps {
  book: string;
}

export default function EbookReader({ book }: EbookReaderProps) {
  // Render EPUB from local file or remote URL
  const MyComponent: React.FC = () => {
    const [file] = useState<File>({
      url: book,
    });

    return (
      <ReadiumView
        file={file} preferences={{}}      />
    );
  }
}