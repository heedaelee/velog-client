import React from 'react';
import HomeTemplate from '../../components/home/HomeTemplate';
import HomeHeader from '../../components/home/HomeHeader';
import HomeTab from '../../components/home/HomeTab';
import HomeResponsive from '../../components/home/HomeResponsive';
import HomeLayout from '../../components/home/HomeLayout';
import { Route } from 'react-router-dom';
import TrendingPostsPage from './TrendingPostsPage';
import RecentPostsPage from './RecentPostsPage';
import HomeSidebar from '../../components/home/HomeSidebar';
import FloatingHomeHeader from '../../components/home/FloatingHomeHeader';

export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <HomeTemplate>
      <HomeHeader />
      <FloatingHomeHeader />
      <HomeResponsive>
        <HomeTab />
        <HomeLayout
          main={
            <>
              <Route
                path={['/', '/trending']}
                component={TrendingPostsPage}
                exact
              />
              <Route path={['/recent']} component={RecentPostsPage} />
            </>
          }
          side={<HomeSidebar />}
        />
      </HomeResponsive>
    </HomeTemplate>
  );
}

export default HomePage;
