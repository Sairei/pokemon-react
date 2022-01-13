import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { changeFil } from '../../router/provider/Dispatcher';
import WelcomeTo from './WelcomeTo';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMount = true;

    if (isMount) {
      dispatch(changeFil([]));
    }

    return () => { isMount = false };
  }, [dispatch])
  
  return (
    <div>
      <WelcomeTo />
    </div>
  );
};

export default HomePage;