import React, { useState } from 'react';
import useProfile from '@/hooks/useProfile';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Firebase functions

const ProfileComponent = () => {
  const { profile, updateProfile } = useProfile();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(profile.profilePicture || '');
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (profilePicture) {
      const storage = getStorage();
      const storageRef = ref(storage, `profile_pictures/${profilePicture.name}`);
      await uploadBytes(storageRef, profilePicture);
      const downloadURL = await getDownloadURL(storageRef);
      updateProfile({ profilePicture: downloadURL });
    }
  };

  const handleUpdateProfile = () => {
    handleUpload().then(() => {
      updateProfile({
        firstName,
        lastName,
        email
      });
    });
  };

  return (
    <div className="profile-component">
      <h2>Profile Information</h2>
      <div>
        <label>Profile Picture</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {preview && (
          <img src={preview} alt="Profile Preview" style={{ width: '100px', height: '100px' }} />
        )}
      </div>
      <div>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default ProfileComponent;
