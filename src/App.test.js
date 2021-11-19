import { render } from '@testing-library/react';
import App from './App';

test('renders front page with no error message', () => {
  render(<App />);
});
