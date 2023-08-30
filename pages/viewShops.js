import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseconfig';

export default function ViewShops() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shopCollection = collection(db, 'SHOP');
        const querySnapshot = await getDocs(shopCollection);

        const shopData = [];

        querySnapshot.forEach((doc) => {
          shopData.push({ id: doc.id, ...doc.data() });
        });

        setShops(shopData);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div className='viewShops'>
      <h1>All Shops</h1>
      <div className='shop-list'>
        {shops.map((shop) => (
          <div key={shop.id} className='shop-item'>
            <div
              className='shop-image'
              style={{ backgroundImage: `url(${shop.imageUrl})` }}
            >
              <div className='text-container'>
                <h2>{shop.storeName}</h2>
                <p>Description: {shop.description}</p>
                <p>Location: {shop.location}</p>
                <p>Owner Name: {shop.ownerName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}