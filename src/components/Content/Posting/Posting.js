import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col, Input, Button} from 'reactstrap';

const Posting = ({ data, handleChangeTitle }) => {
  const { title } = data;
  console.log(handleChangeTitle)

  return (
    <ContainerWrap fluid={true}>
      <PaddingBox>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <MarginBottomRow>
              <Col>
                <CustomInput placeholder="타이틀을 입력해 주세요." bsSize="lg" onChange={handleChangeTitle} />
              </Col>
            </MarginBottomRow>
            <MarginBottomRow>
              <Col>
                <CustomInput type="textarea" placeholder="내용을 입력해 주세요." bsSize="lg" />
              </Col>
            </MarginBottomRow>
            <MarginBottomRow>
              <Col sm="2">
                <SubmitButton size="lg" block>업로드</SubmitButton>
              </Col>
            </MarginBottomRow>
          </Col>
        </Row>
      </PaddingBox>
    </ContainerWrap>
  )
}

const ContainerWrap = styled(Container)`
  background: #17181c;
  height: calc( 100vh - 110px );
`;

const PaddingBox = styled.div`
  padding: 2rem;
`;

const MarginBottomRow = styled(Row)`
  margin-bottom: 3rem;
`;

const CustomInput = styled(Input)`
  background: transparent;
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid #4e4e4e;
  color: #fff;
  font-weight: 700;
  padding: 2rem 0;
  
  ::placeholder {
    color: #fff;
    font-weight: 700;
  }
`;

const SubmitButton = styled(Button)`
  background: #000;
  border: 0;
  border-radius: 0;
  color: #054bb9;
  font-weight: 600;
  padding: 1rem;
  float: right;
  
  :hover {
    background: #054bb9;
    color: #000;
  }
`;

export default Posting;