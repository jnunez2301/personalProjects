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
  `sets` varchar(30) NOT NULL,
  `reps` varchar(30) NOT NULL,
  `rest` varchar(30) NOT NULL,
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
INSERT INTO `user_routines` VALUES (1,1,'FBB','calisthenics','3','8-12','1-2 minutes'),(1,3,'PPL','calisthenics','3-4','8-12','1-2 minutes'),(1,4,'Bro Split','calisthenics','3-4','8-12','1-2 minutes'),(2,1,'FBB','calisthenics','3','8-12','1-2 minutes'),(2,3,'PPL','calisthenics','3-4','8-12','1-2 minutes'),(3,3,'PPL','calisthenics','3-4','8-12','1-2 minutes'),(4,3,'PPL','calisthenics','3-4','8-12','1-2 minutes'),(4,4,'Bro Split','calisthenics','3-4','8-12','1-2 minutes'),(5,1,'FBB','weights','3','8-12','2-5 minutes'),(5,3,'PPL','weights','3-4','8-12','1-2 minutes'),(5,4,'Bro Split 2','weights','3-4','8-12','1-2 minutes'),(6,3,'PPL','weights','3-4','8-12','1-2 minutes'),(7,3,'PPL','weights','3-4','8-12','1-2 minutes'),(8,3,'PPL1','weights','3-4','8-12','1-2 minutes'),(9,1,'FBB','weights','3','8-12','2-3 minutes'),(9,3,'PPL1','weights','3-4','8-12','1-2 minutes'),(9,4,'Bro Split 2','weights','3-4','8-12','1-2 minutes'),(10,1,'FBB','weights','3','8-12','1-2 minutes'),(10,3,'PPL1','weights','3-4','8-12','1-2 minutes'),(11,3,'PPL1','calisthenics','3-4','8-12','1-2 minutes'),(11,4,'Bro Split','calisthenics','3-4','8-12','1-2 minutes'),(12,3,'PPL1','calisthenics','3-4','8-12','1-2 minutes'),(13,1,'FBB','calisthenics','3','8-12','1-2 minutes'),(13,3,'PPL1','calisthenics','3-4','8-12','1-2 minutes'),(13,4,'Bro Split','calisthenics','3-4','8-12','1-2 minutes'),(14,1,'FBB','weights','3','8-12','3-5 minutes'),(14,3,'PPL2','weights','3-4','8-12','1-2 minutes'),(14,4,'Bro Split 2','weights','3-4','8-12','1-2 minutes'),(15,1,'FBB','weights','3','8-12','1-2 minutes'),(15,3,'PPL2','weights','3-4','8-12','1-2 minutes'),(15,4,'Bro Split 2','weights','3-4','8-12','1-2 minutes'),(16,1,'FBB','weights','3','8-12','1-2 minutes'),(16,3,'PPL2','weights','3-4','8-12','1-2 minutes'),(16,4,'Bro Split 2','weights','3-4','8-12','1-2 minutes'),(18,3,'PPL2','weights','3-4','8-12','1-2 minutes'),(23,1,'FBB','weights','3','8-12','2-3 minutes'),(23,3,'PPL3','weights','3-4','8-12','1-2 minutes'),(23,4,'Bro Split 3','weights','3-4','8-12','1-2 minutes'),(24,3,'PPL3','weights','3-4','8-12','1-2 minutes'),(24,4,'Bro Split 3','weights','3-4','8-12','1-2 minutes'),(27,3,'PPL3','weights','3-4','8-12','1-2 minutes'),(27,4,'Bro Split 3','weights','3-4','8-12','1-2 minutes'),(33,1,'FBB','calisthenics','3','8-12','1-2 minutes'),(33,3,'PPL2','calisthenics','3-4','8-12','1-2 minutes'),(33,4,'Bro Split 2','calisthenics','3-4','8-12','1-2 minutes'),(34,3,'PPL2','calisthenics','3-4','8-12','1-2 minutes'),(34,4,'Bro Split 2','calisthenics','3-4','8-12','1-2 minutes'),(35,3,'PPL2','calisthenics','3-4','8-12','1-2 minutes'),(35,4,'Bro Split 2','calisthenics','3-4','8-12','1-2 minutes'),(38,3,'PPL','weights','3-4','8-12','1-2 minutes'),(39,3,'PPL','weights','3-4','8-12','1-2 minutes'),(41,3,'PPL1','weights','3-4','8-12','1-2 minutes'),(41,4,'Bro Split 2','weights','3-4','8-12','1-2 minutes'),(44,4,'Bro Split','calisthenics','3-4','8-12','1-2 minutes'),(48,3,'PPL2','weights','3-4','8-12','1-2 minutes'),(51,3,'PPL2','weights','3-4','8-12','1-2 minutes'),(54,3,'PPL','weights','3-4','8-12','1-2 minutes'),(55,3,'PPL1','weights','3-4','8-12','1-2 minutes'),(57,1,'FBB','calisthenics','3','8-12','1-2 minutes'),(57,3,'PPL1','calisthenics','3-4','8-12','1-2 minutes'),(57,4,'Bro Split','calisthenics','3-4','8-12','1-2 minutes'),(61,1,'FBB','weights','3','8-12','2-3 minutes'),(61,3,'PPL3','weights','3-4','8-12','1-2 minutes'),(61,4,'Bro Split 3','weights','3-4','8-12','1-2 minutes'),(62,1,'FBB','weights','3','8-12','2-3 minutes'),(62,3,'PPL3','weights','3-4','8-12','1-2 minutes'),(62,4,'Bro Split 3','weights','3-4','8-12','1-2 minutes'),(63,1,'FBB','calisthenics','3','8-12','1-2 minutes'),(63,3,'PPL','calisthenics','3-4','8-12','1-2 minutes'),(63,4,'Bro Split','calisthenics','3-4','8-12','1-2 minutes');
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

-- Dump completed on 2023-12-02 15:03:25
