import dotenv from 'dotenv';

dotenv.config();
const config = {
    dbUrl: process.env.DATABASE_URL
}

export { config }