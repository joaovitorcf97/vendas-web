import { Divider } from 'antd';

import Breadcrumb, { ListBreadbrumb } from '../breadcrumb/Breadcrumb';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb: ListBreadbrumb[];
}

const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <ScreenContainer>
      {listBreadcrumb && (
        <>
          <Breadcrumb listBreadcrumb={listBreadcrumb}></Breadcrumb>
          <Divider />
        </>
      )}
      {children}
    </ScreenContainer>
  );
};

export default Screen;
