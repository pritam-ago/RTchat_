import { useState } from 'react';
import { storage } from '@/config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const useStorage = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (file: File, path: string) => {
    try {
      setUploading(true);
      setError(null);

      // Create a storage reference
      const storageRef = ref(storage, path);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      return downloadURL;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setUploading(false);
    }
  };

  const uploadImage = async (file: File, userId: string) => {
    const path = `images/${userId}/${Date.now()}_${file.name}`;
    return uploadFile(file, path);
  };

  const uploadMessageFile = async (file: File, roomId: string, userId: string) => {
    const path = `messages/${roomId}/${userId}/${Date.now()}_${file.name}`;
    return uploadFile(file, path);
  };

  return {
    uploadFile,
    uploadImage,
    uploadMessageFile,
    uploading,
    error,
  };
}; 