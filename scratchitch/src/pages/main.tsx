import React from 'react';
import {Card} from '../components/card/card';
import {MainContainer} from './main.styles';


export const MainComponent = () => {
  return <MainContainer>
    <Card isQuestion={true}/>
    <Card isAnswer={true}/>
  </MainContainer>;
};
