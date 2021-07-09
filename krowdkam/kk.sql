-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: KrowdKam
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add user',7,'add_user'),(26,'Can change user',7,'change_user'),(27,'Can delete user',7,'delete_user'),(28,'Can view user',7,'view_user'),(29,'Can add organization',8,'add_organization'),(30,'Can change organization',8,'change_organization'),(31,'Can delete organization',8,'delete_organization'),(32,'Can view organization',8,'view_organization'),(33,'Can add zone',9,'add_zone'),(34,'Can change zone',9,'change_zone'),(35,'Can delete zone',9,'delete_zone'),(36,'Can view zone',9,'view_zone'),(37,'Can add cct vcam',10,'add_cctvcam'),(38,'Can change cct vcam',10,'change_cctvcam'),(39,'Can delete cct vcam',10,'delete_cctvcam'),(40,'Can view cct vcam',10,'view_cctvcam'),(41,'Can add analysis report',11,'add_analysisreport'),(42,'Can change analysis report',11,'change_analysisreport'),(43,'Can delete analysis report',11,'delete_analysisreport'),(44,'Can view analysis report',11,'view_analysisreport');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$260000$OjcQoCllo91AqlMIafc8Rq$AbucLDLpEAGwyMWmwwpDrbLEuTyPTIcP8njY9i/jNBo=','2021-07-09 16:41:28.758004',1,'admin','','','',1,1,'2021-07-09 15:29:35.125469');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_analysisreport`
--

DROP TABLE IF EXISTS `client_analysisreport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_analysisreport` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `num_of_infringements` int NOT NULL,
  `status` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `organization_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_analysisrepor_organization_id_03596ff0_fk_client_or` (`organization_id`),
  CONSTRAINT `client_analysisrepor_organization_id_03596ff0_fk_client_or` FOREIGN KEY (`organization_id`) REFERENCES `client_organization` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_analysisreport`
--

LOCK TABLES `client_analysisreport` WRITE;
/*!40000 ALTER TABLE `client_analysisreport` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_analysisreport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_cctvcam`
--

DROP TABLE IF EXISTS `client_cctvcam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_cctvcam` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `recording` varchar(100) DEFAULT NULL,
  `position` varchar(1000) NOT NULL,
  `status` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `organization_id` bigint DEFAULT NULL,
  `zone_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_cctvcam_organization_id_a7cb3a14_fk_client_or` (`organization_id`),
  KEY `client_cctvcam_zone_id_ae5c60db_fk_client_zone_id` (`zone_id`),
  CONSTRAINT `client_cctvcam_organization_id_a7cb3a14_fk_client_or` FOREIGN KEY (`organization_id`) REFERENCES `client_organization` (`id`),
  CONSTRAINT `client_cctvcam_zone_id_ae5c60db_fk_client_zone_id` FOREIGN KEY (`zone_id`) REFERENCES `client_zone` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_cctvcam`
--

LOCK TABLES `client_cctvcam` WRITE;
/*!40000 ALTER TABLE `client_cctvcam` DISABLE KEYS */;
INSERT INTO `client_cctvcam` VALUES (1,'','Inside Trial Room according to Manager Chopra\'s instructions',1,'2021-07-09 19:17:14.085777','2021-07-09 19:17:14.085777',3,1);
/*!40000 ALTER TABLE `client_cctvcam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_organization`
--

DROP TABLE IF EXISTS `client_organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_organization` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `description` varchar(600) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `long` decimal(9,6) NOT NULL,
  `lat` decimal(9,6) NOT NULL,
  `status` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_organization`
--

LOCK TABLES `client_organization` WRITE;
/*!40000 ALTER TABLE `client_organization` DISABLE KEYS */;
INSERT INTO `client_organization` VALUES (1,'Inorbit Mall','Vashi\'s Best Mall (Not a great achievement though)','Inorbit Mall, Vashi, Navi Mumbai',73.000900,19.065800,1,'2021-07-09 15:33:15.593283','2021-07-09 15:33:15.593283'),(2,'Viviana Mall','Viviana Mall is a shopping mall located in Thane West, Thane, Maharashtra. Located on the Eastern Express Highway, it is well-connected with all areas of the city. It has a wide range of retail and entertainment outlets at the mall.','Viviana Mall, Thane',72.971500,19.208700,1,'2021-07-09 15:35:16.059585','2021-07-09 15:35:16.059585'),(3,'Infiniti Mall','Infiniti Mall is a chain of shopping malls in India. It is a subsidiary of K. Raheja Constructions, which has been in the business of construction and property development since the 1960s. The first Infiniti Mall opened in 2004, in Andheri, Mumbai. This is the third oldest shopping mall in Mumbai.','Infiniti Mall, Andheri West, Mumbai',72.830900,19.141200,1,'2021-07-09 15:36:47.583300','2021-07-09 15:36:47.583300');
/*!40000 ALTER TABLE `client_organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_zone`
--

DROP TABLE IF EXISTS `client_zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_zone` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `description` varchar(600) NOT NULL,
  `location` varchar(1000) NOT NULL,
  `status` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `organization_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_zone_organization_id_bf113deb_fk_client_organization_id` (`organization_id`),
  CONSTRAINT `client_zone_organization_id_bf113deb_fk_client_organization_id` FOREIGN KEY (`organization_id`) REFERENCES `client_organization` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_zone`
--

LOCK TABLES `client_zone` WRITE;
/*!40000 ALTER TABLE `client_zone` DISABLE KEYS */;
INSERT INTO `client_zone` VALUES (1,'Westside','Trent Limited is the retail hand of Tata group. Started in 1998, Trent operates Westside, one of the many growing retail chains in India based in Mumbai, Maharashtra, and Landmark, a bookstore chain with brick and mortar stores in various locations of India.','On your left, after entering the mall',1,'2021-07-09 18:25:44.588424','2021-07-09 18:25:44.588424',3),(2,'Big Bazaar','Big Bazaar is an Indian retail chain of hypermarkets, discount department stores, and grocery stores.','Upper Left Corner on 1st floor',1,'2021-07-09 19:00:43.652785','2021-07-09 19:00:43.652785',3);
/*!40000 ALTER TABLE `client_zone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2021-07-09 15:33:15.601282','1','Organization object (1)',1,'[{\"added\": {}}]',8,1),(2,'2021-07-09 15:35:16.059585','2','Organization object (2)',1,'[{\"added\": {}}]',8,1),(3,'2021-07-09 15:36:47.587304','3','Organization object (3)',1,'[{\"added\": {}}]',8,1),(4,'2021-07-09 18:25:44.597741','1','Zone object (1)',1,'[{\"added\": {}}]',9,1),(5,'2021-07-09 19:01:31.878788','3','Zone object (3)',3,'',9,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(11,'client','analysisreport'),(10,'client','cctvcam'),(8,'client','organization'),(9,'client','zone'),(5,'contenttypes','contenttype'),(7,'guser','user'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2021-07-09 15:11:30.751156'),(2,'auth','0001_initial','2021-07-09 15:11:31.727534'),(3,'admin','0001_initial','2021-07-09 15:11:31.963700'),(4,'admin','0002_logentry_remove_auto_add','2021-07-09 15:11:31.987707'),(5,'admin','0003_logentry_add_action_flag_choices','2021-07-09 15:11:32.007714'),(6,'contenttypes','0002_remove_content_type_name','2021-07-09 15:11:32.195761'),(7,'auth','0002_alter_permission_name_max_length','2021-07-09 15:11:32.315891'),(8,'auth','0003_alter_user_email_max_length','2021-07-09 15:11:32.383909'),(9,'auth','0004_alter_user_username_opts','2021-07-09 15:11:32.404100'),(10,'auth','0005_alter_user_last_login_null','2021-07-09 15:11:32.579944'),(11,'auth','0006_require_contenttypes_0002','2021-07-09 15:11:32.587944'),(12,'auth','0007_alter_validators_add_error_messages','2021-07-09 15:11:32.615952'),(13,'auth','0008_alter_user_username_max_length','2021-07-09 15:11:32.740003'),(14,'auth','0009_alter_user_last_name_max_length','2021-07-09 15:11:32.872019'),(15,'auth','0010_alter_group_name_max_length','2021-07-09 15:11:32.916032'),(16,'auth','0011_update_proxy_permissions','2021-07-09 15:11:32.944049'),(17,'auth','0012_alter_user_first_name_max_length','2021-07-09 15:11:33.036060'),(18,'client','0001_initial','2021-07-09 15:11:33.648399'),(19,'guser','0001_initial','2021-07-09 15:11:33.712416'),(20,'sessions','0001_initial','2021-07-09 15:11:33.768429');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('8wchuqs8rsckfrl6xaadjz1wcmtek0j9','.eJxVjDsOwjAQBe_iGln2-k9Jzxksf3ZxADlSnFSIu0OkFNC-mXkvFtO2trgNXOJU2ZlJdvrdcioP7Duo99RvMy9zX5cp813hBx38Old8Xg7376Cl0b61NbKAM0RSUyAXnIOMJBVSEIG0R-WrNmAtAlhJTklSVaO3IqFwAOz9AdJINzE:1m1tZA:P3xip9tj-Gi52iDaSA9aGoAS7DD9Xx3SSZnM9TaZz18','2021-07-23 16:41:28.764008');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guser_user`
--

DROP TABLE IF EXISTS `guser_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guser_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `gender` varchar(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `age` int NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `email` varchar(500) NOT NULL,
  `country_code` varchar(10) NOT NULL,
  `status` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guser_user`
--

LOCK TABLES `guser_user` WRITE;
/*!40000 ALTER TABLE `guser_user` DISABLE KEYS */;
INSERT INTO `guser_user` VALUES (1,'Male','Cokehead Chopra',20,'99300 89269','abhishek.chopra@spit.ac.in','+91',1,'2021-07-09 16:40:44.037286','2021-07-09 16:40:44.037286');
/*!40000 ALTER TABLE `guser_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-10  1:05:55
