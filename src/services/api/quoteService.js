const API_DELAY = 400;

// Mock quote data with proper Id field (capital I, lowercase d)
const mockQuotes = [
  {
    Id: 1,
    contactInfo: {
      name: "John Smith",
      email: "john@example.com",
      company: "Example Corp",
      phone: "(555) 123-4567"
    },
    projectName: "Custom Brackets Project",
    industry: "aerospace",
    timeline: "standard",
    selectedProducts: [1, 3],
    customRequirements: "Need custom mounting holes",
    quantity: "500",
    material: "aluminum",
    tolerances: "±0.001 inches",
    finishRequirements: "Anodized finish",
    additionalNotes: "Critical delivery date",
    submitted: new Date().toISOString(),
    status: "pending"
  }
];

export const quoteService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    return [...mockQuotes]; // Return copy to prevent mutations
  },

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    const quote = mockQuotes.find(q => q.Id === id);
    if (!quote) {
      throw new Error('Quote not found');
    }
    return { ...quote }; // Return copy to prevent mutations
  },

  async create(quoteData) {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    const maxId = mockQuotes.length > 0 ? Math.max(...mockQuotes.map(q => q.Id)) : 0;
    const newQuote = {
      ...quoteData,
      Id: maxId + 1,
      submitted: new Date().toISOString(),
      status: "pending"
    };
    mockQuotes.push(newQuote);
    return { ...newQuote };
  },

  async update(id, quoteData) {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    const index = mockQuotes.findIndex(q => q.Id === id);
    if (index === -1) {
      throw new Error('Quote not found');
    }
    mockQuotes[index] = { ...mockQuotes[index], ...quoteData, Id: id };
    return { ...mockQuotes[index] };
  },

  async delete(id) {
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    const index = mockQuotes.findIndex(q => q.Id === id);
    if (index === -1) {
      throw new Error('Quote not found');
    }
    const deletedQuote = mockQuotes.splice(index, 1)[0];
    return { ...deletedQuote };
  }
};