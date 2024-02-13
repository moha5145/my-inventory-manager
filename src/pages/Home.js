import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../shared/data'

const Home = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-left mb-8 border-b-2 border-gray-100 pb-4">My Invontery Manager</h1>
      <div className="grid sm:grid-cols-2  md:grid-cols-3 w-full h-[calc(100vh-300px)] gap-6">
        {data.map((item, index) => {
          return (
            <Link to={item.path} key={item.path}
              className="flex justify-center items-center h-[100%]
                flex-1 bg-slate-100 hover:opacity-50 cursor-pointer rounded-md shadow-sm"
                >
              <h2>{item.name}</h2>
            </Link>
          )
        })}
      </div>
    </div>
  );
};
export default Home;
