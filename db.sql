-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               PostgreSQL 13.1, compiled by Visual C++ build 1914, 64-bit
-- Server OS:                    
-- HeidiSQL Version:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for function public.uuid_generate_v1
DELIMITER //
CREATE FUNCTION "uuid_generate_v1"() RETURNS UUID AS $$ uuid_generate_v1 $$//
DELIMITER ;

-- Dumping structure for function public.uuid_generate_v1mc
DELIMITER //
CREATE FUNCTION "uuid_generate_v1mc"() RETURNS UUID AS $$ uuid_generate_v1mc $$//
DELIMITER ;

-- Dumping structure for function public.uuid_generate_v3
DELIMITER //
CREATE FUNCTION "uuid_generate_v3"(namespace UUID, name TEXT) RETURNS UUID AS $$ uuid_generate_v3 $$//
DELIMITER ;

-- Dumping structure for function public.uuid_generate_v4
DELIMITER //
CREATE FUNCTION "uuid_generate_v4"() RETURNS UUID AS $$ uuid_generate_v4 $$//
DELIMITER ;

-- Dumping structure for function public.uuid_generate_v5
DELIMITER //
CREATE FUNCTION "uuid_generate_v5"(namespace UUID, name TEXT) RETURNS UUID AS $$ uuid_generate_v5 $$//
DELIMITER ;

-- Dumping structure for function public.uuid_nil
DELIMITER //
CREATE FUNCTION "uuid_nil"() RETURNS UUID AS $$ uuid_nil $$//
DELIMITER ;

-- Dumping structure for function public.uuid_ns_dns
DELIMITER //
CREATE FUNCTION "uuid_ns_dns"() RETURNS UUID AS $$ uuid_ns_dns $$//
DELIMITER ;

-- Dumping structure for function public.uuid_ns_oid
DELIMITER //
CREATE FUNCTION "uuid_ns_oid"() RETURNS UUID AS $$ uuid_ns_oid $$//
DELIMITER ;

-- Dumping structure for function public.uuid_ns_url
DELIMITER //
CREATE FUNCTION "uuid_ns_url"() RETURNS UUID AS $$ uuid_ns_url $$//
DELIMITER ;

-- Dumping structure for function public.uuid_ns_x500
DELIMITER //
CREATE FUNCTION "uuid_ns_x500"() RETURNS UUID AS $$ uuid_ns_x500 $$//
DELIMITER ;

-- Dumping structure for table public.blogentries
CREATE TABLE IF NOT EXISTS "blogentries" (
	"id" UUID NOT NULL DEFAULT 'uuid_generate_v4()',
	"blogheading" VARCHAR(255) NOT NULL,
	"blogbody" TEXT NOT NULL,
	"postedby" VARCHAR(255) NOT NULL,
	"createddate" TIMESTAMP NULL DEFAULT NULL,
	"modifieddate" TIMESTAMP NULL DEFAULT NULL,
	"pictureurl" TEXT NULL DEFAULT NULL
);

-- Data exporting was unselected.

-- Dumping structure for table public.comments
CREATE TABLE IF NOT EXISTS "comments" (
	"id" UUID NOT NULL DEFAULT 'uuid_generate_v4()',
	"comment" TEXT NOT NULL,
	"blogentryid" VARCHAR(255) NOT NULL,
	"postedby" VARCHAR(255) NOT NULL,
	"status" BOOLEAN NOT NULL,
	"createddate" TIMESTAMP NOT NULL
);

-- Data exporting was unselected.

-- Dumping structure for table public.users
CREATE TABLE IF NOT EXISTS "users" (
	"id" UUID NOT NULL DEFAULT 'uuid_generate_v4()',
	"firstname" VARCHAR(100) NOT NULL,
	"lastname" VARCHAR(100) NOT NULL,
	"role" VARCHAR(100) NOT NULL,
	"emailid" VARCHAR(255) NOT NULL,
	"createddate" DATE NULL DEFAULT NULL,
	"modifieddate" DATE NULL DEFAULT NULL,
	"password" VARCHAR(255) NOT NULL
);

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
