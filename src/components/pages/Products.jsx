import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/molecules/ProductCard';
import SearchBar from '@/components/molecules/SearchBar';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { productService } from '@/services/api/productService';
import ApperIcon from '@/components/ApperIcon';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'Aerospace Components', label: 'Aerospace Components' },
    { value: 'Automotive Parts', label: 'Automotive Parts' },
    { value: 'Medical Devices', label: 'Medical Devices' },
    { value: 'Industrial Equipment', label: 'Industrial Equipment' }
  ];

  const materials = [
    { value: '', label: 'All Materials' },
    { value: 'Aluminum', label: 'Aluminum' },
    { value: 'Steel', label: 'Steel' },
    { value: 'Titanium', label: 'Titanium' },
    { value: 'Stainless Steel', label: 'Stainless Steel' },
    { value: 'Brass', label: 'Brass' }
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchTerm, selectedCategory, selectedMaterial]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await productService.getAll();
      setProducts(data);
    } catch (err) {
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedMaterial) {
      filtered = filtered.filter(product =>
        product.materials.includes(selectedMaterial)
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedMaterial('');
  };

  if (loading) {
    return <Loading type="grid" />;
  }

  if (error) {
    return <Error message={error} onRetry={loadProducts} />;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
          Our Products
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of precision-manufactured components designed 
          to meet the highest industry standards across multiple sectors.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-surface rounded-xl p-6">
        <div className="space-y-4">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search products by name or description..."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Category"
              options={categories}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            
            <Select
              label="Material"
              options={materials}
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
            />
            
            <div className="flex items-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                icon="X"
                className="flex-1"
              >
                Clear Filters
              </Button>
              
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  className={`p-2 transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-secondary text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <ApperIcon name="Grid3X3" className="h-4 w-4" />
                </button>
                <button
                  className={`p-2 transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-secondary text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  <ApperIcon name="List" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {(searchTerm || selectedCategory || selectedMaterial) && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Showing {filteredProducts.length} of {products.length} products</span>
              {searchTerm && (
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedCategory && (
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                  Category: {selectedCategory}
                </span>
              )}
              {selectedMaterial && (
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">
                  Material: {selectedMaterial}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <Empty
          type="search"
          title="No products found"
          description="Try adjusting your search terms or filters to find what you're looking for."
          action={clearFilters}
          actionLabel="Clear Filters"
        />
      ) : (
        <motion.div
          layout
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.Id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Products;