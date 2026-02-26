'use client';
import { Ellipsis, Refresh } from '@/icons';
import Header from '../Header';
import InstalledExtensions from './InstalledExtensions';

export default function Extensions() {
  return (
    <>
      <Header menuTitle="EXTENSIONS : HOBBIES & INTERESTS">
        <button className="hover:bg-gray-300 p-1 rounded-md" title="Refresh">
          <Refresh />
        </button>
        <button className="hover:bg-gray-300 p-1 rounded-md" title="More actions">
          <Ellipsis />
        </button>
      </Header>
      <div className="divide-dark_border divide-y-2 flex flex-col mx-[1px] flex-1 select-none">
        <InstalledExtensions />
      </div>
    </>
  );
}
