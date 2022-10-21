/*
  Warnings:

  - You are about to drop the column `detaul` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "detaul",
ADD COLUMN     "detauil" TEXT;
