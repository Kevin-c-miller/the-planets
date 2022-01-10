import { useState, useEffect } from 'react';
import api from '../services/apiConfig/userEntry';

export default function UserEntries() {
  const [userEntries, setUserEntries] = useState([]);

  useEffect(() => {
    const fetchUserEntries = async () => {
      const res = await api.get();
      console.log(res.data.records);
      setUserEntries(res.data.records);
    };
    fetchUserEntries();
  }, []);

  return (
    <>
      <div>
        <h2>User Entries</h2>
        <ul>
          {userEntries.map((userEntry) => {
            return (
              <li key={userEntry.id}>
                <div>
                  <h2>{userEntry.fields?.name}</h2>
                  <img
                    style={{ width: '500px', height: '350px' }}
                    src={userEntry.fields?.image}
                    alt={userEntry.fields?.name}
                  />
                  <p>Type of Astronomical Object: {userEntry.fields?.type}</p>
                  <p>Fun Fact: {userEntry.fields?.fact}</p>
                  <p>Submitted by: {userEntry.fields?.userEntryName}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
