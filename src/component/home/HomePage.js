import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { changeFil } from '../../router/provider/Dispatcher';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMount = true;

    if (isMount) {
      dispatch(changeFil([]));
    }

    return () => { isMount = false };
  }, [])
  
  return (
    <div>
      
    </div>
  );
};

export default HomePage;