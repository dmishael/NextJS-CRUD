// Import PrismaClient from the generated Prisma client
import { PrismaClient } from "@prisma/client";

// Declare global type for prisma to avoid multiple instances in development
declare global {
  let prisma: PrismaClient | undefined;
}

// Create a single PrismaClient instance to be used throughout the application
const prismadb = globalThis.prisma || new PrismaClient();

// In development, store the PrismaClient instance in the global scope
// This prevents multiple instances during hot reloading
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
