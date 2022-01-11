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

  const renderUserEntry = (userEntry, index) => {
    return (
      <div className="card text-center shadow" key={index}>
        <div className="overflow">
          <img
            src={userEntry.fields?.image}
            alt={userEntry.fields?.name}
            style={{ width: '315px', height: '315px' }}
            className="card-img-top"
          />
          <div className="card-body text-dark">
            <h4 className="card-title">{userEntry.fields?.name}</h4>
            <div className="user-entry-fields">
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
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <h2 style={{ color: 'white' }}>User Entries</h2>
        <div className="grid">{userEntries.map(renderUserEntry)}</div>
      </div>
    </>
  );
}
