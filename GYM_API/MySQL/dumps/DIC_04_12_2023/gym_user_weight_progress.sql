-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gym
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `user_weight_progress`
--

DROP TABLE IF EXISTS `user_weight_progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_weight_progress` (
  `progress_id` int NOT NULL AUTO_INCREMENT,
  `weight_progress` varchar(50) NOT NULL,
  `user_id` int NOT NULL,
  `created_at` date NOT NULL DEFAULT (curdate()),
  PRIMARY KEY (`progress_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_weight_progress_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_weight_progress`
--

LOCK TABLES `user_weight_progress` WRITE;
/*!40000 ALTER TABLE `user_weight_progress` DISABLE KEYS */;
INSERT INTO `user_weight_progress` VALUES (1,'70',1,'2023-12-04'),(2,'68',1,'2023-12-04'),(3,'75',1,'2023-12-04'),(4,'72',1,'2023-12-04'),(5,'68',1,'2023-12-04'),(6,'65',1,'2023-12-04'),(7,'74',1,'2023-12-04'),(8,'69',1,'2023-12-04'),(9,'71',1,'2023-12-04'),(10,'73',1,'2023-12-04'),(11,'100',1,'2023-12-04'),(12,'35',1,'2023-12-04'),(13,'222',1,'2023-12-04'),(14,'35',1,'2023-12-04'),(15,'65',1,'2023-12-04'),(16,'66',1,'2023-12-04'),(17,'55',1,'2023-12-04'),(18,'45',1,'2023-12-04'),(19,'45',1,'2023-12-04');
/*!40000 ALTER TABLE `user_weight_progress` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-04 17:23:51
