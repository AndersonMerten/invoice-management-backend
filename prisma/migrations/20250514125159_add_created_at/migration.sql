-- AlterTable
ALTER TABLE "Balance" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "value" SET DEFAULT 0;
