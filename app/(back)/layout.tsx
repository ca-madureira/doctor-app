import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>I am Dashboard only pages layout</h2>
      {children}
    </div>
  );
}
