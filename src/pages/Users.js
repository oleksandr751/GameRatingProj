import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('https://randomuser.me/api/');
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(url);

      setData(result.data.results.map(user => ({ ...user, id: user.id })));
      setIsLoading(false);
      console.log(data);
    };

    fetchData();
  }, [url]);

  return (
    <div>
      {isLoading ? (
        <div>Loading.........</div>
      ) : (
        data.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name.first}</h1>
              <p>age{user.dob.age}</p>
              <img src={user.picture.large} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Users;
