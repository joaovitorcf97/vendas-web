import Screen from '../../../shared/components/screen/screen';
import { useCategory } from '../hooks/useCategory';

const Category = () => {
  const { categories } = useCategory();
  return (
    <Screen>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </Screen>
  );
};

export default Category;
