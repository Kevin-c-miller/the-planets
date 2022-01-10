import { useState, useEffect } from 'react';
import api from '../services/apiConfig/userEntry';

export default function UserEntries() {
  const [userEntries, setUserEntries] = useState([]);

  useEffect(() => {
    const fetchUserEntries = async () => {
      const res = await api.get();
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
                  <p>
                    <b>Type of Astronomical Object:</b> {userEntry.fields?.type}
                  </p>
                  <p>
                    <b>Fun Fact:</b> {userEntry.fields?.fact}
                  </p>
                  <p>
                    <b>Submitted by:</b> {userEntry.fields?.userEntryName}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
