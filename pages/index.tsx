import { useState } from 'react';
import { RepoList, RepoProps } from '../src/RepoList';
import { SearchInput } from '../src/SearchInput'
import { ContainerWrapper } from './../src/index.style';

export default function Home() {
  const [repositories, updateRepos] = useState<RepoProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return <ContainerWrapper>
    <h2>Search for Repos 🔎</h2>
    <SearchInput updateRepos={updateRepos} setLoading={setLoading} />
    {loading && <h4>Loading...</h4>}
    <RepoList repos={repositories} />
  </ContainerWrapper>
}
