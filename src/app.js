import express from 'express';
import bodyParser from 'body-parser';
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import dotenv from 'dotenv';
import connectDb from './db/index.js';
import serviceAccount from './serviceAccountKey.json';

dotenv.config(); // Default path is `.env`

// Initialize Firebase Admin SDK
initializeApp({
    credential: cert(serviceAccount),
});

const app = express();

// Middleware
app.use(bodyParser.json());

// API Endpoint
app.post('/api/auth/validateToken', async (req, res) => {
    const { idToken } = req.body;

    if (!idToken) {
        return res.status(400).json({ error: 'ID token is required' });
    }

    try {
        const decodedToken = await getAuth().verifyIdToken(idToken);
        const { uid, email } = decodedToken;

        return res.status(200).json({
            valid: true,
            uid,
            email,
            decodedToken,
        });
    } catch (error) {
        return res.status(401).json({
            valid: false,
            error: 'Invalid token',
        });
    }
});

// Connect to MongoDB and start the server
connectDb()
    .then(() => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MONGODB connection failed:', err);
        process.exit(1);
    });
