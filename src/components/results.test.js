import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Results from './Results';

test('renders the loading spinner', () => {
  render(<Results />);
  const loadingDivElement = screen.getByTestId('loading');
  expect(loadingDivElement).toBeInTheDocument();
});

test('renders null for results before submitting Url', () => {
  render(<Results />);
  const resultsPreElement = screen.getByTestId('results');
  expect(resultsPreElement).toBeInTheDocument();
  expect(resultsPreElement).toContainHTML('<pre data-testid="results">');
  expect(resultsPreElement).toHaveTextContent('');
});

// test('renders fake values for results on invalid Url', () => {
//   render(<Results />);
//   const resultsPreElement = screen.getByTestId('results');

// });

// test('renders the right values for results on a valid Url', () => {
//   render(<Results />);
//   const resultsPreElement = screen.getByTestId('results');
// });
