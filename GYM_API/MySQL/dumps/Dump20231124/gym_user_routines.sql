-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gym
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user_routines`
--

DROP TABLE IF EXISTS `user_routines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_routines` (
  `exercise_id` int NOT NULL,
  `user_id` int NOT NULL,
  `routine_name` varchar(100) NOT NULL,
  `weights_calisthenics` varchar(50) NOT NULL,
  PRIMARY KEY (`exercise_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_routines_ibfk_1` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`exercise_id`),
  CONSTRAINT `user_routines_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_routines`
--

LOCK TABLES `user_routines` WRITE;
/*!40000 ALTER TABLE `user_routines` DISABLE KEYS */;
INSERT INTO `user_routines` VALUES (1,3,'PPL','calisthenics'),(1,4,'Bro Split','calisthenics'),(2,3,'PPL','calisthenics'),(3,3,'PPL','calisthenics'),(4,3,'PPL','calisthenics'),(4,4,'Bro Split','calisthenics'),(5,3,'PPL','weights'),(5,4,'Bro Split 2','weights'),(6,3,'PPL','weights'),(7,3,'PPL','weights'),(8,3,'PPL1','weights'),(9,3,'PPL1','weights'),(9,4,'Bro Split 2','weights'),(10,3,'PPL1','weights'),(11,3,'PPL1','calisthenics'),(11,4,'Bro Split','calisthenics'),(12,3,'PPL1','calisthenics'),(13,3,'PPL1','calisthenics'),(13,4,'Bro Split','calisthenics'),(14,3,'PPL2','weights'),(14,4,'Bro Split 2','weights'),(15,3,'PPL2','weights'),(15,4,'Bro Split 2','weights'),(16,3,'PPL2','weights'),(16,4,'Bro Split 2','weights'),(18,3,'PPL2','weights'),(23,3,'PPL3','weights'),(23,4,'Bro Split 3','weights'),(24,3,'PPL3','weights'),(24,4,'Bro Split 3','weights'),(27,3,'PPL3','weights'),(27,4,'Bro Split 3','weights'),(33,3,'PPL2','calisthenics'),(33,4,'Bro Split 2','calisthenics'),(34,3,'PPL2','calisthenics'),(34,4,'Bro Split 2','calisthenics'),(35,3,'PPL2','calisthenics'),(35,4,'Bro Split 2','calisthenics'),(38,3,'PPL','weights'),(39,3,'PPL','weights'),(41,3,'PPL1','weights'),(41,4,'Bro Split 2','weights'),(44,4,'Bro Split','calisthenics'),(48,3,'PPL2','weights'),(51,3,'PPL2','weights'),(54,3,'PPL','weights'),(55,3,'PPL1','weights'),(57,3,'PPL1','calisthenics'),(57,4,'Bro Split','calisthenics'),(61,3,'PPL3','weights'),(61,4,'Bro Split 3','weights'),(62,3,'PPL3','weights'),(62,4,'Bro Split 3','weights'),(63,3,'PPL','calisthenics'),(63,4,'Bro Split','calisthenics');
/*!40000 ALTER TABLE `user_routines` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-24 14:03:34
