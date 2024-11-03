---
to: src/components/<%= name %>/<%= name %>.tsx
---
import React from 'react';
import './<%= name %>.scss';

interface <%= name %>Props {}

export const <%= name %>: React.FC<<%= name %>Props> = () => {
  return (
    <div className="<%= name %>">
        <h1><%= name %> Component</h1>
    </div>
  )
};
