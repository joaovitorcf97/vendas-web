import Tooltip from '../../../shared/components/tooltip/Tooltip';
import { ProductType } from '../../../shared/types/ProductType';
import { ImageProduct } from '../styles/toottipImage';

interface TootipImageProps {
  product: ProductType;
}

const TootipImage = ({ product }: TootipImageProps) => {
  return (
    <Tooltip tooltip={<ImageProduct src={product.image} />}>
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TootipImage;
