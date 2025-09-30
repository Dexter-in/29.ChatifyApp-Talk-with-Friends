import "dotenv/config";

export const ENV = {
PORT: process.env.PORT,
MONGO_URI: process.env.MONGO_URI,
JWT_SECRET: process.env.JWT_SECRET,
CLIENT_URL: process.env.CLIENT_URL,
RESEND_API_KEY: process.env.RESEND_API_KEY,
EMAIL_FROM: process.env.EMAIL_FROM,
EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
NODE_ENV: process.env.NODE_ENV,
CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,



}

// PORT =3000
// MONGO_URI = mongodb+srv://arjunarjunk88_db_user:yPaZrcBFB6bb6YGG@cluster0.4xqgena.mongodb.net/chatify_db?retryWrites=true&w=majority&appName=Cluster0

// NODE_ENV=development


// JWT_SECRET =myjwtsecret


// RESEND_API_KEY =re_DvbCZdXK_963STxY7brAFVpcDahJtjD9J

// EMAIL_FROM="onboarding@resend.dev"
// EMAIL_FROM_NAME="Arjun"