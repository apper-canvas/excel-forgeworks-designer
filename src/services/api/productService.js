const API_DELAY = 300;

// Mock product data with proper Id field (capital I, lowercase d)
const mockProducts = [
  {
    Id: 1,
    name: "Precision Aerospace Bracket",
    category: "Aerospace Components",
    description: "High-precision aluminum bracket designed for aerospace applications with critical tolerances and surface finish requirements.",
    specifications: {
      material: "6061-T6 Aluminum",
      tolerance: "±0.0005 inches",
      surfaceFinish: "32 Ra",
      dimensions: "4.5 x 2.3 x 1.2 inches"
    },
    images: [
      "https://images.unsplash.com/photo-1581092580497-e26f4b5b47a8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop"
    ],
    materials: ["Aluminum", "Titanium", "Steel"]
  },
  {
    Id: 2,
    name: "Automotive Gear Housing",
    category: "Automotive Parts",
    description: "Precision-machined gear housing for automotive transmission systems with integrated mounting points and fluid passages.",
    specifications: {
      material: "Cast Iron",
      tolerance: "±0.001 inches",
      surfaceFinish: "63 Ra",
      dimensions: "8.0 x 6.0 x 4.5 inches"
    },
    images: [
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    ],
    materials: ["Steel", "Cast Iron", "Aluminum"]
  },
  {
    Id: 3,
    name: "Medical Device Component",
    category: "Medical Devices",
    description: "Biocompatible surgical instrument component manufactured to FDA standards with stringent quality requirements.",
    specifications: {
      material: "316L Stainless Steel",
      tolerance: "±0.0002 inches",
      surfaceFinish: "16 Ra",
      dimensions: "2.1 x 1.8 x 0.5 inches"
    },
    images: [
      "https://images.unsplash.com/photo-1581092580497-e26f4b5b47a8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop"
    ],
    materials: ["Stainless Steel", "Titanium", "Brass"]
  },
  {
    Id: 4,
    name: "Industrial Pump Impeller",
    category: "Industrial Equipment",
    description: "High-performance pump impeller designed for industrial fluid handling applications with optimized flow characteristics.",
    specifications: {
      material: "Bronze",
      tolerance: "±0.003 inches",
      surfaceFinish: "125 Ra",
      dimensions: "12.0 x 12.0 x 3.0 inches"
    },
    images: [
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    ],
    materials: ["Bronze", "Stainless Steel", "Aluminum"]
  },
  {
    Id: 5,
    name: "Precision Valve Body",
    category: "Industrial Equipment",
    description: "Custom valve body with complex internal passages and precision-machined sealing surfaces for hydraulic systems.",
    specifications: {
      material: "17-4 PH Stainless Steel",
      tolerance: "±0.0008 inches",
      surfaceFinish: "32 Ra",
      dimensions: "6.5 x 4.2 x 3.8 inches"
    },
    images: [
      "https://images.unsplash.com/photo-1581092580497-e26f4b5b47a8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop"
    ],
    materials: ["Stainless Steel", "Steel", "Aluminum"]
  },
  {
    Id: 6,
    name: "Aerospace Fitting",
    category: "Aerospace Components",
    description: "Critical aerospace fitting component with complex geometry and strict material traceability requirements.",
    specifications: {
      material: "Ti-6Al-4V Titanium",
      tolerance: "±0.0003 inches",
      surfaceFinish: "63 Ra",
      dimensions: "3.2 x 2.8 x 1.9 inches"
    },
    images: [
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    ],
    materials: ["Titanium", "Aluminum", "Steel"]
  }
];

export const productService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    return [...mockProducts]; // Return copy to prevent mutations
  },

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    const product = mockProducts.find(p => p.Id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return { ...product }; // Return copy to prevent mutations
  },

  async create(productData) {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    const maxId = Math.max(...mockProducts.map(p => p.Id));
    const newProduct = {
      ...productData,
      Id: maxId + 1
    };
    mockProducts.push(newProduct);
    return { ...newProduct };
  },

  async update(id, productData) {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    const index = mockProducts.findIndex(p => p.Id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    mockProducts[index] = { ...mockProducts[index], ...productData, Id: id };
    return { ...mockProducts[index] };
  },

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    const index = mockProducts.findIndex(p => p.Id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const deletedProduct = mockProducts.splice(index, 1)[0];
    return { ...deletedProduct };
  }
};