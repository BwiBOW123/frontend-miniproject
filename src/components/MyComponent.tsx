'use client';

import { Dropdown } from 'flowbite-react';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';

function MyComponent() {
  return (
    <Dropdown label="Dropdown">
      <Dropdown.Header>
        <span className="block truncate text-sm font-medium text-white">bonnie@flowbite.com</span>
      </Dropdown.Header>
      <Dropdown.Item className='text-white' icon={HiViewGrid}>Dashboard</Dropdown.Item>
      <Dropdown.Item className='text-white' icon={HiCog}>Settings</Dropdown.Item>
      <Dropdown.Item className='text-white' icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='text-white' icon={HiLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default MyComponent