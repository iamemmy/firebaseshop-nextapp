import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import {db, storage} from '../firebaseconfig';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

export default function CreateShop() {
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setSelectedImage(selectedImage);
  };

  const uploadImageToStorage = async (selectedImage) => {
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);

    return new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!storeName || !description || !location || !ownerName || !selectedImage) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const imageUrl = await uploadImageToStorage(selectedImage);

      const storageRef = ref(storage, 'images/' + selectedImage.name);
      await uploadString(storageRef, imageUrl, 'data_url');

      const shopCollection = collection(db, 'SHOP');

      const newShop = {
        storeName,
        description,
        location,
        ownerName,
        imageUrl,
        createdAt: serverTimestamp(),
      };

      // Add the new shop document to the collection
      await addDoc(shopCollection, newShop);

      setStoreName('');
      setDescription('');
      setLocation('');
      setOwnerName('');
      setSelectedImage(null);

      alert('Shop created successfully!');
    } catch (error) {
      console.error('Error creating shop:', error);
    }
  };
  
  

  return (
    <div className='createShop'>
      <h1>Create a Shop</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Store Name:
          <input
            type='text'
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Owner Name:
          <input
            type='text'
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            onChange={(e) => handleImageUpload(e)}
          />
        </label>
        <button type='submit'>Create Shop</button>
      </form>
    </div>
  );
}