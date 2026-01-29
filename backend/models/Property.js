const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            'commercial-plots',
            'commercial-shops',
            'corporate-plots',
            'residential-flats',
            'plots-in-noida',
            'plots-in-vrindavan',
            'jewar-airport-land',
            'industrial-plots',
            'institutional-plots',
            'logistics-park-land',
            'medical-devices-park',
            'residential-plots',
            'land-for-hotel',
            'raya-heritage-city'
        ]
    },
    price: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Storing URL for now
        required: true,
    },
    // Optional fields based on Property interface
    beds: Number,
    baths: Number,
    isPlot: Boolean,
    isShop: Boolean,
    features: [String],
    plotType: String,
    facing: String,
    width: String,
    depth: String,
}, { timestamps: true });

// Add a method to transform to frontend structure if needed
propertySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model('Property', propertySchema);
