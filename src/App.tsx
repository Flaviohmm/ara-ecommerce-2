import React from 'react';
import Header from './components/Header.tsx';
import ImageSection from './components/ImageSection.tsx';
import ProductSection from './components/ProductSection.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ImageSection />
      <ProductSection />
    </div>
  )
}

export default App;
