/*
  Warnings:

  - You are about to drop the column `question_id` on the `questions` table. All the data in the column will be lost.
  - Added the required column `marksPerQuestion` to the `quizzes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "questions_question_id_key";

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "question_id";

-- AlterTable
ALTER TABLE "quizzes" ADD COLUMN     "marksPerQuestion" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "submitted_answers" (
    "id" SERIAL NOT NULL,
    "chosen_option" "Options" NOT NULL,
    "submission_id" TEXT NOT NULL,

    CONSTRAINT "submitted_answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz_results" (
    "id" SERIAL NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "submissionId" TEXT NOT NULL,

    CONSTRAINT "quiz_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "quiz_results_submissionId_key" ON "quiz_results"("submissionId");

-- AddForeignKey
ALTER TABLE "submitted_answers" ADD CONSTRAINT "submitted_answers_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submissions"("submissionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_results" ADD CONSTRAINT "quiz_results_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "submissions"("submissionId") ON DELETE RESTRICT ON UPDATE CASCADE;
