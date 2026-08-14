import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup for ES Modules (since your package.json has "type": "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to read JSON data from frontend

// Helper function to read the data.json file from the public folder
const getData = () => {
  // Points to C:\Users\dlaks01\hyundai-catalog\public\data.json
  const filePath = path.join(__dirname, 'public', 'data.json'); 
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

// ==========================================
// 🚗 VEHICLE API ROUTES
// ==========================================

// 1. GET ALL VEHICLES
// Endpoint: GET http://localhost:5000/api/vehicles
app.get('/api/vehicles', (req, res) => {
  try {
    const data = getData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading data.json:", error);
    res.status(500).json({ message: "Error reading vehicle data." });
  }
});

// 2. GET VEHICLES BY CATEGORY (e.g., 'Truck' or 'Bus')
// Endpoint: GET http://localhost:5000/api/vehicles/category/Truck
app.get('/api/vehicles/category/:categoryName', (req, res) => {
  try {
    const data = getData();
    const category = req.params.categoryName;
    
    if (data[category]) {
      res.status(200).json(data[category]);
    } else {
      res.status(404).json({ message: "Category not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error." });
  }
});

// 3. ADD A NEW INQUIRY (For a future Contact Form)
// Endpoint: POST http://localhost:5000/api/inquiries
app.post('/api/inquiries', (req, res) => {
  const { name, email, phone, vehicleOfInterest, message } = req.body;

  if (!name || !email || !vehicleOfInterest) {
    return res.status(400).json({ message: "Name, email, and vehicle of interest are required." });
  }

  const newInquiry = {
    id: Date.now(),
    name,
    email,
    phone: phone || "Not provided",
    vehicleOfInterest,
    message: message || "No message provided",
    date: new Date().toISOString()
  };

  console.log("🔔 New Inquiry Received:", newInquiry);

  res.status(201).json({ 
    message: "Inquiry submitted successfully! We will contact you soon.",
    inquiry: newInquiry 
  });
});
// ==========================================
// ADMIN INVENTORY CRUD API
// ==========================================
let inventoryData = [
  { id: 1, name: "XCIENT Fuel Cell", type: "Truck", price: "$120,000" },
  { id: 2, name: "County New Breeze", type: "Bus", price: "$65,000" },
];

// 1. GET (Read All)
app.get('/api/admin/inventory', (req, res) => {
  res.json(inventoryData);
});

// 2. POST (Create)
app.post('/api/admin/inventory', (req, res) => {
  
  // 1. Figure out the next ID (3, 4, 5, etc.)
  let nextId = 1; // Default to 1 if the list is completely empty
  
  if (inventoryData.length > 0) {
    // Look through all items, find the highest ID, and add 1
    const highestId = Math.max(...inventoryData.map(item => item.id));
    nextId = highestId + 1;
  }

  // 2. Create the new item with the clean sequential ID
  const newItem = { 
    ...req.body,    
    id: nextId  
  };
  
  inventoryData.push(newItem);
  res.status(201).json({ message: "Item added successfully", item: newItem });
});

// 3. PUT (Update)
app.put('/api/admin/inventory/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = inventoryData.findIndex(item => item.id === id);
  
  if (index !== -1) {
    inventoryData[index] = { ...inventoryData[index], ...req.body };
    res.json({ message: "Item updated", item: inventoryData[index] });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// 4. DELETE (Remove)
app.delete('/api/admin/inventory/:id', (req, res) => {
  const id = parseInt(req.params.id);
  inventoryData = inventoryData.filter(item => item.id !== id);
  res.json({ message: "Item deleted" });
});
// Start the server
app.listen(PORT, () => {
  console.log(`🚀 API Server is running on http://localhost:${PORT}`);
});