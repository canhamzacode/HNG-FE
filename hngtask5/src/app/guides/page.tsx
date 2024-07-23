'use client';

import { Button } from '@/components';
import React from 'react';

const Guides = () => (
  <div className="container">
    <h1>Guides</h1>
    <p>Guides content goes here ...</p>
    <div className="mt-4">
      <h2 className="bold">Buttons</h2>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <h3>Primary</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Button type="primary" text="Default" />
              <p>Default</p>
            </div>
            <div>
              <Button type="primary" text="Active" state="active" />
              <p>Active</p>
            </div>
            <div>
              <Button type="primary" text="Disabled" state="disabled" />
              <p>Disabled</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="bold">Secondary</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Button type="secondary" text="Default" />
              <p>Default</p>
            </div>
            <div>
              <Button type="secondary" text="Active" state="active" />
              <p>Active</p>
            </div>
            <div>
              <Button type="secondary" text="Disabled" state="disabled" />
              <p>Disabled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <h3 className="bold">Input</h3>
      <div className="grid grid-cols-3"></div>
    </div>
  </div>
);

export default Guides;
