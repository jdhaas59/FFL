-- CreateTable
CREATE TABLE "matchups" (
    "match_id" SERIAL NOT NULL,
    "game_id" TEXT NOT NULL,
    "home_team" TEXT NOT NULL,
    "home_team_id" INTEGER NOT NULL,
    "away_team" TEXT NOT NULL,
    "away_team_id" INTEGER NOT NULL,
    "home_score" DOUBLE PRECISION NOT NULL,
    "away_score" DOUBLE PRECISION NOT NULL,
    "playoff" BOOLEAN NOT NULL,

    CONSTRAINT "matchups_pkey" PRIMARY KEY ("match_id")
);

-- CreateTable
CREATE TABLE "results" (
    "result_id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "final" INTEGER NOT NULL,
    "points_for" DOUBLE PRECISION NOT NULL,
    "points_against" DOUBLE PRECISION NOT NULL,
    "wins" INTEGER NOT NULL,
    "ties" INTEGER NOT NULL,
    "losses" INTEGER NOT NULL,
    "acqs" INTEGER NOT NULL,
    "trades" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "results_pkey" PRIMARY KEY ("result_id")
);

-- CreateTable
CREATE TABLE "teams" (
    "teamyear_id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "team_name" TEXT NOT NULL,
    "team_owner" TEXT NOT NULL,
    "team_abbv" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("teamyear_id")
);

