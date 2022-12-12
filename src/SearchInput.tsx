import {useCallback, useState} from 'react';
import _debounce from 'lodash/debounce';
import { getEntries } from '../lib/githubSearch';
import { InputSeachField } from './SearchInput.style';

interface eventProps {
    target: {
        value: string;
    }
}

interface SearchInputProps {
    updateRepos: (element:[])=>void,
    setLoading: (element:boolean)=>void
}

export const SearchInput = ({updateRepos, setLoading}:SearchInputProps)  => {
    const [value, setValue] = useState('');

    const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

    function updateStateRepos(repos: []) {
        updateRepos(repos)
    }

    async function handleDebounceFn(inputValue:string) {
        updateStateRepos([]);
        setLoading(true);
        const repos = await getEntries(inputValue);
        setLoading(false);
        updateStateRepos(repos);
    }

    function handleChange (event:eventProps) {
        setValue(event.target.value);
        debounceFn(event.target.value);
    };

    return <InputSeachField value={value} onChange={handleChange} />
}
