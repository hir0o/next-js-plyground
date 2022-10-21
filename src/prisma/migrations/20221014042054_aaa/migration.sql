/*
  Warnings:

  - You are about to drop the column `detauil` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "detauil",
ADD COLUMN     "detail" TEXT;
