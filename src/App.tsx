import React from 'react';
import Header from './components/Header.tsx';
import ImageSection from './components/ImageSection.tsx';
import ProductSection from './components/ProductSection.tsx';
import TopProductsSection from './components/TopProductsSection.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ImageSection />
      <ProductSection />
      <TopProductsSection />
    </div>
  )
}

export default App;
