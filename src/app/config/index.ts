import { config as dotEnvConfig } from 'dotenv';
import { join } from 'path';

dotEnvConfig({ path: join(process.cwd(), '.env') });

const config = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV as 'development' | 'production',
    DB_URI: process.env.DB_URI,
    DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD,
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
};

export default config;
