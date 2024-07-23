import { useState, useEffect } from 'react';
import { collection, DocumentData, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const useGetUserById = (userId: string) => {
  const [user, setUser] = useState<DocumentData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const usersRef = collection(db, 'userRef');
        const querySnapshot = await getDocs(query(usersRef, where('userId', '==', userId)));

        if (querySnapshot.empty) {
          console.log('User not found');
          setUser(null);
        } else {
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          setUser(userData);
        }
      } catch (error) {
        console.error('Error getting user:', error);
        setUser(null);
      }
    };

    if (userId) {
      fetchUser();
    } else {
      setUser(null);
    }
  }, [userId]);

  return user;
};

export default useGetUserById;
