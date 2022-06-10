/*
  Warnings:

  - You are about to drop the column `maximumNumberOfQuestions` on the `quizzes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "quizzes" DROP COLUMN "maximumNumberOfQuestions",
ADD COLUMN     "totalNumberOfQuestions" INTEGER NOT NULL DEFAULT 1;
