'use client';

import React, { useEffect, useState } from 'react';
import { HiMiniBars2, HiMiniLink } from 'react-icons/hi2';
import { useSubmit } from '@/hooks';
import { LinkSchema } from '@/config';
import { useLinkContext } from '@/context/LinkProvider';
import { PlatformProps } from '@/types';
import Dropdown from '../Dropdown/Dropdown';
import { Input } from '../Input';
import { platforms } from '../Dropdown/data';

interface AddLinkFormProps {
  id: string;
}

const AddLinkForm = ({ id }: AddLinkFormProps) => {
  const { register, errors, watch } = useSubmit(LinkSchema);

  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (platform: PlatformProps) => {
    setSelectedPlatform(platform);
    setIsOpen(false);
  };

  const { updateLink, removeLink } = useLinkContext();

  const handleRemove = () => {
    removeLink(id);
  };

  const watchLink = watch('link');

  const handleUpdateLink = () => {
    updateLink(id, {
      url: watchLink,
      platform: {
        name: selectedPlatform.name,
        icon: selectedPlatform.icon,
        previewColor: selectedPlatform.previewColor
      }
    });
  };

  useEffect(() => {
    handleUpdateLink();
    console.log('watchLink', watchLink);
    console.log('selectedPlatform', selectedPlatform);
  }, [watchLink, selectedPlatform]);

  return (
    <div className="w-full p-5 rounded-xl bg-lightGrey gap-3 grid">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HiMiniBars2 size={25} />
          <p className="text-grey">Link {id ? `#${id}` : ''}</p>
        </div>
        <button onClick={handleRemove} className="text-grey">
          Remove
        </button>
      </div>
      <Dropdown
        selectedPlatform={selectedPlatform}
        handleSelect={handleSelect}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div>
        <Input
          name="link"
          type="text"
          register={register}
          errors={errors}
          label="Link"
          icon={<HiMiniLink size={25} />}
          placeholder="e.g. https://www.github.com/johnappleseed"
        />
      </div>
    </div>
  );
};

export default AddLinkForm;
