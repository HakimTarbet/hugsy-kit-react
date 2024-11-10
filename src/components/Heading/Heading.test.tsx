import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Heading } from './Heading';

describe('Heading Component', () => {
  it('renders an h1 element when level is 1', () => {
    const { getByText } = render(<Heading level={1}>Heading Level 1</Heading>);
    expect(getByText('Heading Level 1').tagName).toBe('H1');
  });

  it('renders an h2 element when level is 2', () => {
    const { getByText } = render(<Heading level={2}>Heading Level 2</Heading>);
    expect(getByText('Heading Level 2').tagName).toBe('H2');
  });

  it('renders an h3 element when level is 3', () => {
    const { getByText } = render(<Heading level={3}>Heading Level 3</Heading>);
    expect(getByText('Heading Level 3').tagName).toBe('H3');
  });

  it('renders an h4 element when level is 4', () => {
    const { getByText } = render(<Heading level={4}>Heading Level 4</Heading>);
    expect(getByText('Heading Level 4').tagName).toBe('H4');
  });

  it('renders an h5 element when level is 5', () => {
    const { getByText } = render(<Heading level={5}>Heading Level 5</Heading>);
    expect(getByText('Heading Level 5').tagName).toBe('H5');
  });

  it('renders an h6 element when level is 6', () => {
    const { getByText } = render(<Heading level={6}>Heading Level 6</Heading>);
    expect(getByText('Heading Level 6').tagName).toBe('H6');
  });

  it('defaults to an h1 element if no level is provided', () => {
    const { getByText } = render(<Heading>Default Heading Level</Heading>);
    expect(getByText('Default Heading Level').tagName).toBe('H1');
  });

  it('renders the correct text content', () => {
    const textContent = 'This is a test heading';
    const { getByText } = render(<Heading level={3}>{textContent}</Heading>);
    expect(getByText(textContent)).toHaveTextContent(textContent);
  });
});