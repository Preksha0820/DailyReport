/*
  Warnings:

  - A unique constraint covering the columns `[userId,reportDate]` on the table `Report` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Report_userId_reportDate_key` ON `Report`(`userId`, `reportDate`);
