import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/apiConfig/userEntry';
import Accordion from 'react-bootstrap/Accordion';
import './InputFields.css';
import DeleteButton from './DeleteButton';

export default function UserEntries() {
  const [userEntries, setUserEntries] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserEntries = async () => {
      const res = await api.get();
      setUserEntries(res.data.records);
    };
    fetchUserEntries();
  }, [userEntries]);

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
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Type of Astronomical Object
                  </Accordion.Header>
                  <Accordion.Body>{userEntry.fields?.type}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Fun Fact</Accordion.Header>
                  <Accordion.Body>{userEntry.fields?.fact}</Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <br />
              <div>
                <p className="entry-name">
                  <b>Submitted by:</b> {userEntry.fields?.userEntryName}
                </p>
                <DeleteButton id={id} userEntry={userEntry} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 style={{ color: 'white' }}>User Entries</h2>
      <div className="grid">{userEntries.map(renderUserEntry)}</div>
    </>
  );
}
