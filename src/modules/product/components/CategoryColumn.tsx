import { Tag } from 'antd';

import { CategoryType } from '../../../shared/types/categoryType';

interface CategoryColumnProps {
  category?: CategoryType;
}

const colors: string[] = [
  'green',
  'red',
  'orange',
  'gold',
  'volcano',
  'cyan',
  'magenta',
  'blue',
  'geekblue',
  'purple',
  'lime',
];

const Categorycolumn = ({ category }: CategoryColumnProps) => {
  if (!category) {
    return null;
  }

  const currentColor = colors[category.id - 1] || colors[0];

  return <Tag color={currentColor}>{category.name}</Tag>;
};

export default Categorycolumn;
