import { useState, useEffect } from 'react';

const account = import.meta.env.VITE_AZURE_ACCOUNT_NAME;
const container = import.meta.env.VITE_AZURE_CONTAINER_NAME;
const sas = import.meta.env.VITE_AZURE_SAS_TOKEN;
const baseUrl = `https://${account}.blob.core.windows.net/${container}`;

export interface AzureDocument {
  url: string;
  fileName: string;
  rawName: string;
}

export const useAzureBlobs = (folderPrefix: string) => {
  const [documents, setDocuments] = useState<AzureDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!account || !container || !sas) {
      console.error("Missing Azure configuration environment variables.");
      setHasError(true);
      setLoading(false);
      return;
    }

    const listUrl = `${baseUrl}${sas}&restype=container&comp=list&prefix=${folderPrefix}`;

    const fetchDocuments = async () => {
      try {
        const response = await fetch(listUrl);
        if (!response.ok) throw new Error();

        const xmlText = await response.text();
        const xmlDoc = new DOMParser().parseFromString(xmlText, "application/xml");
        const blobElements = Array.from(xmlDoc.getElementsByTagName("Blob"));

        const fetchedDocs: AzureDocument[] = blobElements.map((blob) => {
          const rawName = blob.getElementsByTagName("Name")[0]?.textContent || "";
          // Extract file name without path prefix
          const fileName = rawName.split('/').pop() || rawName;

          return {
            url: `${baseUrl}/${rawName}${sas}`, // Includes SAS token so non-public blobs open correctly
            fileName,
            rawName
          };
        });

        setDocuments(fetchedDocs);
      } catch {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [folderPrefix]);

  return { documents, loading, hasError };
};