-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CashUp" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "pix" DOUBLE PRECISION NOT NULL,
    "card" DOUBLE PRECISION NOT NULL,
    "others" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CashUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balance" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);
