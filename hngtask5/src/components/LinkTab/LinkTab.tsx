import React from 'react';
import { useLinkContext } from '@/context/LinkProvider';
import Image from 'next/image';
import { PhonePreview } from '../PhonePreview';
import { Button } from '../Button';
import { AddLinkForm } from '../AddLinkForm';

const LinkTab = () => {
  const { links, addLink } = useLinkContext();

  const saveLinks = () => {
    console.log('Save');
    console.log(links);
  };

  const addItemToLink = () => {
    addLink({
      id: `${links.length + 1}`,
      url: '',
      platform: {
        name: '',
        icon: null,
        previewColor: ''
      }
    });
  };
  return (
    <div className="grid tablet:grid-cols-[460px,1fr] gap-4 grid-cols-1 container items-center">
      <div>
        <PhonePreview />
      </div>
      <div className="w-full border border-grey rounded-xl">
        <div className="tablet:p-10 p-3 flex flex-col gap-10">
          <div className="grid gap-2">
            <h1>Customize your links</h1>
            <p className="text-grey">
              Add/edit/remove links below and then share all your profiles with the world!
            </p>
          </div>
          <div className="grid gap-6">
            <Button type="secondary" text="+ Add new link" state="active" onClick={addItemToLink} />
            {links.length > 0 ? (
              links.map((link, index) => <AddLinkForm key={index} id={link.id} />)
            ) : (
              <div className="py-[62.5px] px-5 grid gap-10">
                <div className="flex items-center justify-center">
                  <Image src="getStarted.svg" alt="get Started" width={249.5} height={160} />
                </div>
                <div className="grid gap-5 max-w-[488px] mx-auto text-center">
                  <h1>Let’s get you started</h1>
                  <p className="text-grey">
                    Use the “Add new link” button to get started. Once you have more than one link,
                    you can reorder and edit them. We’re here to help you share your profiles with
                    everyone!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full py-6 px-10 flex justify-end border-t border-t-grey">
          <button
            disabled={links.length === 0}
            onClick={saveLinks}
            className={`w-[91px] h-[46px] rounded-lg ${links.length > 0 ? 'bg-purple' : 'bg-lightPurple'} border font-bold text-white`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkTab;
