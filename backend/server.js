const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/propertyRoutes');

const PORT = process.env.PORT || 5000;
console.log("Loading environment variables...");
console.log("MONGO_URI present:", !!process.env.MONGO_URI);
if (process.env.MONGO_URI) {
    console.log("MONGO_URI starts with:", process.env.MONGO_URI.substring(0, 15) + "...");
} else {
    console.log("Using fallback localhost URI");
}

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nexarealty'; // Fallback for local


// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage });

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    // Return full URL
    const fullUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ imageUrl: fullUrl });
});

app.use('/api/properties', propertyRoutes);

app.get('/', (req, res) => {
    res.send('NexaRealty Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
