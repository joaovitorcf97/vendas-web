import { Image } from 'antd';

import { ProductType } from '../../../shared/types/ProductType';

interface BoxImageProps {
  product: ProductType;
}

const BoxImage = ({ product }: BoxImageProps) => {
  return <Image width={160} src={product.image} />;
};

export default BoxImage;
