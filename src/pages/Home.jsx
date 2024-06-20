import React from 'react'
import { ORDER_DATA, TRENDING_MENUS } from '../store';
import OrderSummary from '../components/dashboard/OrderSummary';
import TrendingMenuCard from '../components/dashboard/TrendingMenuCard';
import TodayChart from '../components/dashboard/TodayChart';
import ItemPriceList from '../components/dashboard/ItemPriceList';
import ItemTable from '../components/dashboard/ItemTable';

const Home = () => {
  const orders = ORDER_DATA;
  return (
    <div className="container mx-auto flex flex-wrap mb-20">
      <div className="tile flex-grow md:flex-grow-0 md:w-2/5 lg:w-2/8">
        <h2 className="text-2xl font-bold mb-4">Overall Details</h2>
        <OrderSummary orders={orders} />
      </div>
      <div className="tile flex-grow md:w-3/5 lg:w-6/8">
        <h2 className="text-2xl font-bold mb-4">Today's Income, Expenses, and Other</h2>

        <TodayChart />
      </div>

      <div className="tile flex-grow md:flex-grow-0 mt-4 md:w-2/5 lg:w-2/8">
        <h2 className="text-2xl font-bold mb-4">Price Details</h2>
        <ItemPriceList />
      </div>
      <div className="tile flex-grow md:w-3/5 mt-4 lg:w-6/8">
        <h2 className="text-2xl font-bold mb-4">Recent orders</h2>
        <div className="flex flex-wrap">
          <ItemTable order={orders} />
        </div>
      </div>
      <div className="tile w-full mt-6">
        <h2 className="text-2xl font-bold mb-4">Daily Trending Menus</h2>
        <div className="flex flex-wrap gap-4">
          {TRENDING_MENUS?.map((menu, index) => (
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

    </div>

  );
}

export default Home