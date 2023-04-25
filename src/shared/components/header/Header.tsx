import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../functions/connections/auth';
import { HeaderContainer, LogoExit } from './header.style';

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <HeaderContainer>
      <LogoExit onClick={showModal} />
      <Modal
        title="Fazer Logout"
        open={open}
        onOk={() => logout(navigate)}
        onCancel={hideModal}
        cancelText="Cancelar"
        okText="Sair"
      >
        <p>Tem certeza que deseja sair?</p>
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
