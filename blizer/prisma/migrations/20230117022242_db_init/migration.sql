-- CreateEnum
CREATE TYPE "Options" AS ENUM ('option_a', 'option_b', 'option_c', 'option_d');

-- CreateTable
CREATE TABLE "users" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "profiles" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profile_image" TEXT,
    "user_pk" INTEGER NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "quizzes" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "timed" BOOLEAN NOT NULL DEFAULT false,
    "timeLimit" INTEGER NOT NULL DEFAULT 0,
    "expire" INTEGER NOT NULL DEFAULT 86400000,
    "totalNumberOfQuestions" INTEGER NOT NULL DEFAULT 1,
    "marksPerQuestion" INTEGER NOT NULL,
    "creator_pk" INTEGER NOT NULL,
    "creator_id" UUID NOT NULL,

    CONSTRAINT "quizzes_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "submissions" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "profile_pk" INTEGER NOT NULL,
    "profile_id" TEXT NOT NULL,
    "quiz_pk" INTEGER NOT NULL,
    "quiz_id" UUID NOT NULL,

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "submitted_answers" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "selected_option" "Options" NOT NULL,
    "submission_pk" INTEGER NOT NULL,
    "submission_id" UUID NOT NULL,

    CONSTRAINT "submitted_answers_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "quiz_results" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "submission_pk" INTEGER NOT NULL,
    "submission_id" UUID NOT NULL,

    CONSTRAINT "quiz_results_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "questions" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "question" TEXT NOT NULL,
    "quizPk" INTEGER NOT NULL,
    "quiz_id" UUID NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "question_options" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "option_a" TEXT NOT NULL,
    "option_b" TEXT NOT NULL,
    "option_c" TEXT NOT NULL,
    "option_d" TEXT NOT NULL,
    "question_pk" INTEGER NOT NULL,
    "question_id" UUID NOT NULL,

    CONSTRAINT "question_options_pkey" PRIMARY KEY ("pk")
);

-- CreateTable
CREATE TABLE "answers" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "option" "Options" NOT NULL,
    "answer" TEXT NOT NULL,
    "question_pk" INTEGER NOT NULL,
    "question_id" UUID NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("pk")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_pk_id_key" ON "users"("pk", "id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_id_key" ON "profiles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_email_key" ON "profiles"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_user_id_key" ON "profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_pk_id_key" ON "profiles"("pk", "id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_user_pk_user_id_key" ON "profiles"("user_pk", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "quizzes_pk_id_key" ON "quizzes"("pk", "id");

-- CreateIndex
CREATE UNIQUE INDEX "submissions_id_key" ON "submissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "submissions_pk_id_key" ON "submissions"("pk", "id");

-- CreateIndex
CREATE UNIQUE INDEX "quiz_results_submission_id_key" ON "quiz_results"("submission_id");

-- CreateIndex
CREATE UNIQUE INDEX "quiz_results_submission_pk_submission_id_key" ON "quiz_results"("submission_pk", "submission_id");

-- CreateIndex
CREATE UNIQUE INDEX "questions_id_key" ON "questions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "questions_pk_id_key" ON "questions"("pk", "id");

-- CreateIndex
CREATE UNIQUE INDEX "answers_question_pk_question_id_key" ON "answers"("question_pk", "question_id");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_pk_user_id_fkey" FOREIGN KEY ("user_pk", "user_id") REFERENCES "users"("pk", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_creator_pk_creator_id_fkey" FOREIGN KEY ("creator_pk", "creator_id") REFERENCES "profiles"("pk", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_profile_pk_fkey" FOREIGN KEY ("profile_pk") REFERENCES "profiles"("pk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_quiz_pk_quiz_id_fkey" FOREIGN KEY ("quiz_pk", "quiz_id") REFERENCES "quizzes"("pk", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submitted_answers" ADD CONSTRAINT "submitted_answers_submission_pk_submission_id_fkey" FOREIGN KEY ("submission_pk", "submission_id") REFERENCES "submissions"("pk", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_results" ADD CONSTRAINT "quiz_results_submission_pk_submission_id_fkey" FOREIGN KEY ("submission_pk", "submission_id") REFERENCES "submissions"("pk", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_quizPk_quiz_id_fkey" FOREIGN KEY ("quizPk", "quiz_id") REFERENCES "quizzes"("pk", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_options" ADD CONSTRAINT "question_options_question_pk_question_id_fkey" FOREIGN KEY ("question_pk", "question_id") REFERENCES "questions"("pk", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_question_pk_question_id_fkey" FOREIGN KEY ("question_pk", "question_id") REFERENCES "questions"("pk", "id") ON DELETE RESTRICT ON UPDATE CASCADE;
