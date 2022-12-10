import { useState } from 'react';
import { RepoList, RepoProps } from '../src/RepoList';
import { SearchInput } from '../src/SearchInput'

export default function Home() {
  const [repositories, updateRepos] = useState<RepoProps[]>([]);

  return <>
    <SearchInput updateRepos={updateRepos} />
    <RepoList repos={repositories} />
  </>
}
