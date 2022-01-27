import React, { useEffect, useState } from 'react';

import { getAllVersionName } from '../../../services/scripts/game/getAllVersionName';
import { convertGameToColor } from '../../../services/utils/ColorGameUtil';
import Sprite from './Sprite';

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

  if (sprites['animated']["front_default"]) {
    sprites = sprites['animated'];
  }
  return (
    <div className='game_container info_container_2'>
      <div className='games_title'>
        {listGame.map((val, index) => {
          let classname = `title_${index+1}`
          if (listGame.length < 2) {
            classname = `title_1_2`
          }

          return (
            <div key={val}
              style={{
                backgroundColor: convertGameToColor(val).background,
                color: convertGameToColor(val).text}}
              className={classname}
            >
              {val}
            </div>
          );
        })}
      </div>

      <div className='game_sprites'>
        <div className='sprite_and_desc'>
          <div>
            {
              sprites['front_default'] &&
              <Sprite img={sprites['front_default']} />
            }
            {
              sprites['back_default'] &&
              <Sprite img={sprites['back_default']} />
            }
          </div>
          <div>
            Default sprite
          </div>
        </div>

        {
          (sprites['front_shiny'] || sprites['front_shiny']) &&
          <div>
            <div>
              {
                sprites['front_shiny'] &&
                <Sprite img={sprites['front_shiny']} />
              }
              {
                sprites['back_shiny'] &&
                <Sprite img={sprites['back_shiny']} />
              }
            </div>
            <div>
              Shiny sprite
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default GameSprite;