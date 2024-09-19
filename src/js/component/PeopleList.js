import React, { useEffect, useState, useContext } from 'react';
import { fetchPeople } from '../api/swapi';
import { StoreContext } from '../context/Store';
import { Card, Button } from 'react-bootstrap';

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const { favorites, addFavorite, removeFavorite } = useContext(StoreContext);

  useEffect(() => {
    fetchPeople().then(setPeople);
  }, []);

  const toggleFavorite = (person) => {
    favorites.includes(person) ? removeFavorite(person) : addFavorite(person);
  };

  return (
    <div className="row">
      {people.map((person) => (
        <div className="col-md-4 mb-3" key={person.uid}>
          <Card>
            <Card.Body>
              <Card.Title>{person.name}</Card.Title>
              <Button
                variant={favorites.includes(person) ? 'danger' : 'primary'}
                onClick={() => toggleFavorite(person)}
              >
                {favorites.includes(person) ? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
