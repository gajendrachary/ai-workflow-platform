// Shared configuration for the AI Workflow Platform

export const APP_NAME = 'AI Workflow Platform';
export const APP_VERSION = '0.1.0';

export const config = {
  app: {
    name: APP_NAME,
    version: APP_VERSION,
    baseUrl: process.env.APP_BASE_URL || 'http://localhost:3000',
  },
  api: {
    port: Number(process.env.PORT || 4000),
    host: process.env.HOST || '0.0.0.0',
  },
  database: {
    url: process.env.DATABASE_URL || '',
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'change-me-in-production',
    jwtExpiresIn: '7d',
  },
  ai: {
    provider: process.env.AI_PROVIDER || 'openai',
    apiKey: process.env.AI_API_KEY || '',
  },
  storage: {
    bucket: process.env.STORAGE_BUCKET || '',
  },
} as const;

export type Config = typeof config;
