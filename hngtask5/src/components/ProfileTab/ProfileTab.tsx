import React from 'react';
import { PhonePreview } from '../PhonePreview';
import ProfileComponent from '../ProfileComponent/ProfileComponent';

const ProfileTab = () => (
  <div className="grid tablet:grid-cols-[460px,1fr] gap-4 grid-cols-1 container items-center">
    <div>
      <PhonePreview />
    </div>
    <div className="w-full border border-grey rounded-xl">
      <div className="tablet:p-10 p-3 flex flex-col gap-10">
        <div className="grid gap-2">
          <h1>Profile Details</h1>
          <p className="text-grey">Add your details to create a personal touch to your profile.</p>
        </div>
        <div className="grid gap-6">
          <ProfileComponent />
        </div>
      </div>
    </div>
  </div>
);

export default ProfileTab;
