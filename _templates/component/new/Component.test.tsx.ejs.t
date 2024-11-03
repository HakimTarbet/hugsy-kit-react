---
to: src/components/<%= name %>/<%= name %>.test.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import { <%= name %> } from './<%= name %>';

describe('<%= name %> Component should', () => {
  test('renders without crashing', () => {
    render(<<%= name %> />);
    expect(screen.getByText('<%= name %> Component')).toBeInTheDocument();
  })
})
