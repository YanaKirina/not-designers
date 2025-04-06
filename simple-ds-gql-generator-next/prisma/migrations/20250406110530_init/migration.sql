-- CreateEnum
CREATE TYPE "sber_volunteers"."Role" AS ENUM ('ADMIN', 'ORGANIZER', 'VOLUNTEER');

-- CreateTable
CREATE TABLE "sber_volunteers"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "sber_volunteers"."Role" NOT NULL DEFAULT 'VOLUNTEER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "sber_volunteers"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "sber_volunteers"."User"("login");
