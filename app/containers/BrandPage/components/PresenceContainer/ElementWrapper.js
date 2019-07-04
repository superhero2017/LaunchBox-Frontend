import styled from 'styled-components';

const ElementWrapper = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  position: relative;

  &:hover {
    .element_delete {
      display: flex;
    }
  }
`;

export default ElementWrapper;
