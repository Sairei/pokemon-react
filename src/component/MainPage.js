import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router';
import { Affix, AppShell, Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

import Header from './UI/navigation/Header';
import Navigation from './UI/navigation/Navigation';

const MainPage = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="main_container">
      <AppShell
        fixed
        classNames={{
          main: "main_body"
        }}
        navbar={<Navigation />}
        header={<Header />}>

        <Outlet />

      </AppShell>

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </Button>
          )}
        </Transition>
      </Affix>
    </div>
  );
}

export default MainPage;