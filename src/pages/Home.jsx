import React from 'react'
import { ORDER_DATA, TRENDING_MENUS } from '../store';
import OrderSummary from '../components/dashboard/OrderSummary';
import TrendingMenuCard from '../components/dashboard/TrendingMenuCard';
import TodayChart from '../components/dashboard/TodayChart';
import ItemPriceList from '../components/dashboard/ItemPriceList';
import ItemTable from '../components/dashboard/ItemTable';
import Footer from '../components/common/Footer';

const Home = () => {
  const orders = ORDER_DATA;
  return (
    <div className="container mx-auto flex flex-wrap mb-10">
      <div className="tile xl:w-2/4 lg:w-full">
        <h2 className="text-2xl font-bold my-5">Overall Details</h2>
        <OrderSummary orders={orders} />
      </div>
      <div className="tile xl:w-2/4 lg:w-full">
        <h2 className="text-2xl font-bold my-5">Today's Income, Expenses, and Other</h2>
        <TodayChart />
      </div>
      <div className="tile xl:w-2/5 lg:w-full">
        <h2 className="text-2xl font-bold my-5">Price Details</h2>
        <ItemPriceList />
      </div>
      <div className="tile xl:w-3/5 lg:w-full">
        <h2 className="text-2xl font-bold my-5">Recent orders</h2>
        <div className="flex flex-wrap">
          <ItemTable order={orders} />
        </div>
      </div>
      <div className="tile w-full">
        <h2 className="text-2xl font-bold my-5">Daily Trending Menus</h2>
        <div className="flex flex-wrap gap-4">
          {TRENDING_MENUS?.map((menu) => (
            <TrendingMenuCard
              key={menu?.id}
              title={menu?.title}
              description={menu?.description}
              imageSrc={menu?.imageSrc}
              className="flex-auto"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home