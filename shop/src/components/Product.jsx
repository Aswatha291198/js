import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductMiddleware } from '../redux/slices/middleware/productMiddleware';

const Product = () => {
  const { product, error, loading } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductMiddleware());
  }, [dispatch]);

  if (loading) {
    return <h2 className="text-center text-xl mt-10">Loading.....</h2>;
  }

  if (error) {
    return <h2 className="text-center text-xl mt-10 text-red-600">Some Error</h2>;
  }

  if (!product || product.length === 0) {
    return <h2 className="text-center text-xl mt-10 text-yellow-600">No Products Found</h2>;
  }

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.map((item) => (
        <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
          <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto" />
          <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">${item.price}</p>
          <button className="bg-blue-400 border rounded-md w-24 border-white border-2 text-white mt-2 hover:bg-blue-500 transition-all">
            Notify me
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
