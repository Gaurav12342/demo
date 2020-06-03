import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Sample = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('react');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {console.log("data", data)}
        {data && data.hits && data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
export default withRouter(Sample);



