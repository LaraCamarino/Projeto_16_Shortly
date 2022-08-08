CREATE DATABASE "shortly";

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "sessions" (
	"id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "token" TEXT NOT NULL UNIQUE,
    "createdAt" TIMESTAMP DEFAULT NOW()	
);

CREATE TABLE "urls" (
	"id" SERIAL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL UNIQUE,
    "visitCount" INTEGER NOT NULL DEFAULT 0,
    "creatorId" INTEGER NOT NULL REFERENCES "users"("id"),
    "createdAt" TIMESTAMP DEFAULT NOW()	
);