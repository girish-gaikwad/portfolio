'use client';
import { App, Leetcode, MDXEntry } from '@/lib/mdx';
import { selectExpanded, selectMenu, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import Explorer from './Explorer';
import Extensions from './Extensions';
import Search from './Search/Search';
import SourceControl from './git/SourceControl';
import RunAndDebug from './Debug/RunAndDebug';

export default function CollapsableMenu({ allApps, allLeetcode }: { allApps: MDXEntry<App>[], allLeetcode: MDXEntry<Leetcode>[] }) {
  const expanded = useSelector(selectExpanded);
  const currentMenu = useSelector(selectMenu);

  return (
    <div className={clsx(!expanded && 'hidden', 'z-10 bg-dark_bg absolute md:static left-full top-0 bottom-0 flex flex-col text-gray-500 border-r-2 border-r-dark_border min-w-[300px] max-w-[300px]')}>
      {currentMenu === 'explorer' && <Explorer allApps={allApps} allLeetcode={allLeetcode} />}
      {currentMenu === 'extensions' && <Extensions />}

      {currentMenu === 'search' && <Search />}
      {currentMenu === 'source-control' && <SourceControl />}
      {currentMenu === 'debug' && <RunAndDebug />}
    </div>
  );
}
