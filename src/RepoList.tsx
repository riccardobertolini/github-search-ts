import { RepoWrapper, RepoElement } from "./RepoList.style"

export interface RepoProps {
    id: number,
    name: string,
    description: string,
    html_url: string,
    owner: {
        avatar_url: string,
        login: string,
    },
    stargazers_count: number,
}

export const RepoList = ({repos}: {repos: RepoProps[]}) => {
    return <RepoWrapper>
            {repos?.map(repo => <RepoElement key={repo.id}><img src={repo.owner.avatar_url} /><div><a href={repo.html_url}>{repo.name}</a><br/>by {repo.owner.login}</div><span>⭐ {repo.stargazers_count}</span></RepoElement>)}
        </RepoWrapper>
    
}