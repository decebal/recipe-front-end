import React from 'react';
import { Mug } from 'react-kawaii';
import { Headline, Paragraph } from './layout';

const GenericNotFound = () => (
  <div>
    <Headline>Not Found</Headline>
    <Paragraph>
      Apologise for the inconvenience, the current page does not exist yet.
    </Paragraph>
    <Mug size={170} mood="shocked" color="#A6E191" />
  </div>
);

export default GenericNotFound;
