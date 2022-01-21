import React, { useEffect, useState } from 'react';

import { getAllVersionName } from '../../../services/scripts/game/getAllVersionName';

const GameSprite = ({ games, sprites }) => {
  const [listGame, setListGame] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await getAllVersionName(games)
        .then((data) => {
          setListGame(data)
        });
    }

    fetchData()
  }, [games]);


  return (
    <div className='game_container info_container_2'>
      <div className='games_title'>
        {listGame.map((val) => {
          return (
            <div key={val}>
              {val}
            </div>
          );
        })}
      </div>

      <div className='game_sprites'>

      </div>
    </div>
  );
};

export default GameSprite;