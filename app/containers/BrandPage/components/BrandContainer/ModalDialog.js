import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const ModalText = styled.div`
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: normal;
  text-align: center;
  color: #1b367c;
  margin-bottom: 28px;
`;

const ModalContent = styled.div`
  border-radius: 7px;
  border: 1px solid #d6dbe9;
  overflow: hidden;
`;

const ModalAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top 38px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-family: Muli;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 7px;
`;

const AddButton = styled(Button)`
  border: 2px solid #1b367c;
  background: #1b367c;
  color: #fff;
  margin-left: 1rem;

  &:hover {
    color: #1b367c;
    background: #fff;
  }
`;

const CancelButton = styled(Button)`
  border: 2px solid #ececf6;
  color: #1b367c;

  &:hover {
    color: #fff;
    background: #1b367c;
  }
`;

class ModalDialog extends React.Component {
  handleClickAdd = () => {
    this.props.onAdd(`Add${this.props.type}`);
  };

  render() {
    const { type, children } = this.props;
    const title =
      type === 'Brand' ? 'Select Brand' : 'Members of Ketchup Creative';
    return (
      <Wrapper>
        <ModalHeader>
          <ModalText>{title}</ModalText>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalAction>
          <CancelButton onClick={this.props.onClose}>CANCEL</CancelButton>
          <AddButton onClick={this.handleClickAdd}>ADD NEW</AddButton>
        </ModalAction>
      </Wrapper>
    );
  }
}

ModalDialog.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  onAdd: PropTypes.func,
};

export default ModalDialog;