import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/components/screen/screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limeted.styled';
import { UseInsertCategory } from '../hooks/useInsertCategory';
import { CategoryRoutesEnum } from '../routes';

const CategoryInsert = () => {
  const { name, loading, handleaOnChangeName, insertCategory, disableButton } = UseInsertCategory();
  const navigate = useNavigate();

  const handleOnclickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  return (
    <Screen
      listBreadcrumb={[
        { name: 'HOME' },
        {
          name: 'CATEGORIAS',
          navigateTo: CategoryRoutesEnum.CATEGORY,
        },
        {
          name: 'ENSERIR CATEGORIAS',
        },
      ]}
    >
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => handleaOnChangeName(event)}
            value={name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button danger onClick={handleOnclickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={160}>
              <Button
                loading={loading}
                disabled={disableButton}
                onClick={insertCategory}
                type="primary"
              >
                Inserir Categoria
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default CategoryInsert;
