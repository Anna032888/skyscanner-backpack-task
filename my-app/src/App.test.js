import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('@skyscanner/backpack-web/bpk-component-button', () => {
  const React = require('react');

  return function MockButton({ children, ...props }) {
    return React.createElement('button', props, children);
  };
});

jest.mock('@skyscanner/backpack-web/bpk-component-calendar', () => {
  const React = require('react');

  return {
    __esModule: true,
    default: function MockCalendar() {
      return React.createElement('div', {
        'data-testid': 'flight-schedule-calendar',
      });
    },
    CALENDAR_SELECTION_TYPE: {
      single: 'single',
    },
  };
});

test('renders the application successfully', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /flight schedule/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /continue/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByTestId('flight-schedule-calendar'),
  ).toBeInTheDocument();
});