import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Results from './Results';

test('renders the loading spinner', () => {
  render(<Results />);
  const loadingDivElement = screen.getByTestId('loading');
  expect(loadingDivElement).toBeInTheDocument();
});

test('renders null for results before subitting Url', () => {
  render(<Results />);
  const resultsPreElement = screen.getByTestId('results');
  expect(resultsPreElement).toBeInTheDocument();
  expect(resultsPreElement).toContainHTML('<div data-testid="results" />');
  expect(resultsPreElement).toHaveTextContent('');
});
