import { useMemo } from 'react';
import { type AzureDocument } from './useAzureBlobs';

export interface Album {
  folderName: string;
  coverImage: string;
  images: AzureDocument[];
}

export const useAlbums = (documents: AzureDocument[]): Album[] => {
  return useMemo(() => {
    const grouped: Record<string, AzureDocument[]> = {};

    documents.forEach((doc) => {
      const pathSegments = doc.rawName.split('/');
      if (pathSegments.length > 2) {
        const folderName = pathSegments[1];
        if (!grouped[folderName]) grouped[folderName] = [];
        grouped[folderName].push(doc);
      }
    });

    return Object.keys(grouped)
      .sort((a, b) => b.localeCompare(a))
      .map((folderName) => ({
        folderName,
        coverImage: grouped[folderName][0]?.url || '',
        images: grouped[folderName],
      }));
  }, [documents]);
};