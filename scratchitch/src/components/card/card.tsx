import React from 'react';
import {CardContainer} from './card.styles';

interface CardProps {
  isQuestion?: boolean;
  isAnswer?: boolean;
}


export const Card = (props: CardProps) => {
  const {isQuestion, isAnswer} = props;
  return <CardContainer>
    {isQuestion && <span>Question</span>}
    {isAnswer && <span>Solution</span>}
    {isQuestion && <span></span>}
  </CardContainer>;
};
