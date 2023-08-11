/*
  Warnings:

  - Made the column `year` on table `teams` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "teams" ALTER COLUMN "year" SET NOT NULL;
