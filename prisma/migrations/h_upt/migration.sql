-- CreateTable
CREATE TABLE "matchups" (
    "match_id" SERIAL NOT NULL,
    "game_id" VARCHAR(50),
    "home_team" VARCHAR(50),
    "home_team_id" INTEGER,
    "away_team" VARCHAR(50),
    "away_team_id" INTEGER,
    "home_score" REAL,
    "away_score" REAL,
    "playoff" BOOLEAN,

    CONSTRAINT "matchups_pkey" PRIMARY KEY ("match_id")
);

-- CreateTable
CREATE TABLE "results" (
    "result_id" SERIAL NOT NULL,
    "team_id" INTEGER,
    "final" INTEGER,
    "points_for" REAL,
    "points_against" REAL,
    "wins" INTEGER,
    "ties" INTEGER,
    "losses" INTEGER,
    "acqs" INTEGER,
    "trades" INTEGER,
    "year" INTEGER,

    CONSTRAINT "results_pkey" PRIMARY KEY ("result_id")
);

-- CreateTable
CREATE TABLE "teams" (
    "teamyear_id" SERIAL NOT NULL,
    "team_id" INTEGER,
    "team_name" VARCHAR(50),
    "team_owner" VARCHAR(50),
    "team_abbv" VARCHAR(50),
    "year" INTEGER,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("teamyear_id")
);

-- CreateTable
CREATE TABLE "headlines" (
    "h_id" SERIAL NOT NULL,
    "week" INTEGER,
    "headline" VARCHAR,
    "year" INTEGER,
    "archive" BOOLEAN,

    CONSTRAINT "headlines_pkey" PRIMARY KEY ("h_id")
);

