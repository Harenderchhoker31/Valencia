import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Product Details</h1>
      <p className="mt-4">Product ID: {productId}</p>
    </div>
  );
};

export default Product;