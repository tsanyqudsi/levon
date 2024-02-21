import type { Preview } from '@storybook/react';
import './assets/global.css';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
    },
  },
};

export default preview;