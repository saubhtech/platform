/*
  Warnings:

  - A unique constraint covering the columns `[locale]` on the table `language` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `locale` to the `language` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "master"."district" DROP CONSTRAINT "district_country_code_fkey";

-- DropForeignKey
ALTER TABLE "master"."district" DROP CONSTRAINT "district_stateid_fkey";

-- DropForeignKey
ALTER TABLE "master"."field" DROP CONSTRAINT "field_sectorid_fkey";

-- DropForeignKey
ALTER TABLE "master"."place" DROP CONSTRAINT "place_country_code_fkey";

-- DropForeignKey
ALTER TABLE "master"."place" DROP CONSTRAINT "place_districtid_fkey";

-- DropForeignKey
ALTER TABLE "master"."place" DROP CONSTRAINT "place_stateid_fkey";

-- DropForeignKey
ALTER TABLE "master"."postal" DROP CONSTRAINT "postal_country_code_fkey";

-- DropForeignKey
ALTER TABLE "master"."postal" DROP CONSTRAINT "postal_districtid_fkey";

-- DropForeignKey
ALTER TABLE "master"."postal" DROP CONSTRAINT "postal_stateid_fkey";

-- DropForeignKey
ALTER TABLE "master"."state" DROP CONSTRAINT "state_country_code_fkey";

-- AlterTable
ALTER TABLE "master"."language" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_rtl" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "locale" VARCHAR(10) NOT NULL,
ADD COLUMN     "sort_order" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "language_locale_key" ON "master"."language"("locale");

-- AddForeignKey
ALTER TABLE "master"."state" ADD CONSTRAINT "state_country_code_fkey" FOREIGN KEY ("country_code") REFERENCES "master"."country"("country_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."district" ADD CONSTRAINT "district_stateid_fkey" FOREIGN KEY ("stateid") REFERENCES "master"."state"("stateid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."district" ADD CONSTRAINT "district_country_code_fkey" FOREIGN KEY ("country_code") REFERENCES "master"."country"("country_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."postal" ADD CONSTRAINT "postal_districtid_fkey" FOREIGN KEY ("districtid") REFERENCES "master"."district"("districtid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."postal" ADD CONSTRAINT "postal_stateid_fkey" FOREIGN KEY ("stateid") REFERENCES "master"."state"("stateid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."postal" ADD CONSTRAINT "postal_country_code_fkey" FOREIGN KEY ("country_code") REFERENCES "master"."country"("country_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."place" ADD CONSTRAINT "place_country_code_fkey" FOREIGN KEY ("country_code") REFERENCES "master"."country"("country_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."place" ADD CONSTRAINT "place_stateid_fkey" FOREIGN KEY ("stateid") REFERENCES "master"."state"("stateid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."place" ADD CONSTRAINT "place_districtid_fkey" FOREIGN KEY ("districtid") REFERENCES "master"."district"("districtid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "master"."field" ADD CONSTRAINT "field_sectorid_fkey" FOREIGN KEY ("sectorid") REFERENCES "master"."sector"("sectorid") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "master"."idx_district_country" RENAME TO "district_country_code_idx";

-- RenameIndex
ALTER INDEX "master"."idx_district_state" RENAME TO "district_stateid_idx";

-- RenameIndex
ALTER INDEX "master"."idx_field_sector" RENAME TO "field_sectorid_idx";

-- RenameIndex
ALTER INDEX "master"."idx_place_country" RENAME TO "place_country_code_idx";

-- RenameIndex
ALTER INDEX "master"."idx_place_district" RENAME TO "place_districtid_idx";

-- RenameIndex
ALTER INDEX "master"."idx_place_pincode" RENAME TO "place_pincode_idx";

-- RenameIndex
ALTER INDEX "master"."idx_place_state" RENAME TO "place_stateid_idx";

-- RenameIndex
ALTER INDEX "master"."idx_postal_country" RENAME TO "postal_country_code_idx";

-- RenameIndex
ALTER INDEX "master"."idx_postal_district" RENAME TO "postal_districtid_idx";

-- RenameIndex
ALTER INDEX "master"."idx_postal_pincode" RENAME TO "postal_pincode_idx";

-- RenameIndex
ALTER INDEX "master"."idx_postal_state" RENAME TO "postal_stateid_idx";

-- RenameIndex
ALTER INDEX "master"."idx_state_code_country" RENAME TO "state_state_code_country_code_idx";

-- RenameIndex
ALTER INDEX "master"."idx_state_country" RENAME TO "state_country_code_idx";
