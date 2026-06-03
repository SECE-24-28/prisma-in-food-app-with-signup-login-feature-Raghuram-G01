/*
  Warnings:

  - You are about to drop the column `type` on the `food_items` table. All the data in the column will be lost.
  - Added the required column `description` to the `food_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "food_items" DROP COLUMN "type",
ADD COLUMN     "description" TEXT NOT NULL;
