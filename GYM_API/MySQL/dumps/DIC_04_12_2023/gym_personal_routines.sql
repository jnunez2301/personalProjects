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
-- Table structure for table `personal_routines`
--

DROP TABLE IF EXISTS `personal_routines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_routines` (
  `routine_id` int NOT NULL AUTO_INCREMENT,
  `routine_name` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  `routine_img` varchar(255) NOT NULL,
  `routine_description` varchar(255) NOT NULL,
  `uses_weights` int NOT NULL,
  `routine_alias` varchar(255) NOT NULL,
  `exercise_id` int NOT NULL,
  `sets` varchar(50) DEFAULT NULL,
  `reps` varchar(50) DEFAULT NULL,
  `rest` varchar(50) DEFAULT NULL,
  `deleted_routine` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`routine_id`),
  KEY `user_id` (`user_id`),
  KEY `exercise_id` (`exercise_id`),
  CONSTRAINT `personal_routines_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `personal_routines_ibfk_2` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`exercise_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_routines`
--

LOCK TABLES `personal_routines` WRITE;
/*!40000 ALTER TABLE `personal_routines` DISABLE KEYS */;
INSERT INTO `personal_routines` VALUES (1,'Personal Routine',1,'https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K','This is an example of a personal routine where i choose random exercises',1,'PR',5,'2','8-12','1-2 minutes',1),(2,'Personal Routine',1,'https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K','This is an example of a personal routine where i choose random exercises',1,'PR',6,'2','3-5','1-2 minutes',1),(3,'Personal Routine',1,'https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K','This is an example of a personal routine where i choose random exercises',1,'PR',7,'2','8-12','3-5 minutes',1),(4,'Personal Routine',1,'https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K','This is an example of a personal routine where i choose random exercises',1,'PR',8,'1','3-5','1-2 minutes',1),(5,'Personal Routine',1,'https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K','This is an example of a personal routine where i choose random exercises',1,'PR',9,'2','3-5','1-2 minutes',1),(6,'A Cool Routine Name',1,'https://imagenes.lainformacion.com/files/image_656_370/files/fp/uploads/imagenes/2022/01/19/un-joven-realiza-ejercicios-en-un-gimnasio.r_d.1718-953.jpeg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in purus risus. Sed et leo rutrum felis dapibus laoreet sit amet nec urna. Nam et enim a urna commodo bibendum sit amet quis turpis. Proin vestibulum purus eget magna dignissim blandit.',1,'ACRN',18,'1','3-5','1-2 minutes',1),(7,'A Cool Routine Name',1,'https://imagenes.lainformacion.com/files/image_656_370/files/fp/uploads/imagenes/2022/01/19/un-joven-realiza-ejercicios-en-un-gimnasio.r_d.1718-953.jpeg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in purus risus. Sed et leo rutrum felis dapibus laoreet sit amet nec urna. Nam et enim a urna commodo bibendum sit amet quis turpis. Proin vestibulum purus eget magna dignissim blandit.',1,'ACRN',19,'2','3-5','3-5 minutes',1),(8,'A Cool Routine Name',1,'https://imagenes.lainformacion.com/files/image_656_370/files/fp/uploads/imagenes/2022/01/19/un-joven-realiza-ejercicios-en-un-gimnasio.r_d.1718-953.jpeg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in purus risus. Sed et leo rutrum felis dapibus laoreet sit amet nec urna. Nam et enim a urna commodo bibendum sit amet quis turpis. Proin vestibulum purus eget magna dignissim blandit.',1,'ACRN',20,'3','3-5','1-2 minutes',1),(9,'A Cool Routine Name',1,'https://imagenes.lainformacion.com/files/image_656_370/files/fp/uploads/imagenes/2022/01/19/un-joven-realiza-ejercicios-en-un-gimnasio.r_d.1718-953.jpeg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in purus risus. Sed et leo rutrum felis dapibus laoreet sit amet nec urna. Nam et enim a urna commodo bibendum sit amet quis turpis. Proin vestibulum purus eget magna dignissim blandit.',1,'ACRN',21,'2','3-5','3-5 minutes',1),(10,'A Cool Routine Name',1,'https://imagenes.lainformacion.com/files/image_656_370/files/fp/uploads/imagenes/2022/01/19/un-joven-realiza-ejercicios-en-un-gimnasio.r_d.1718-953.jpeg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in purus risus. Sed et leo rutrum felis dapibus laoreet sit amet nec urna. Nam et enim a urna commodo bibendum sit amet quis turpis. Proin vestibulum purus eget magna dignissim blandit.',1,'ACRN',22,'2','3-5','3-5 minutes',1),(11,'Chest, Back and Legs Routine',1,'https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg','A perfect routine to focus on all body parts for atleast 1-3 days a week.',1,'AR',5,'3','3-5','3-5 minutes',1),(12,'Chest, Back and Legs Routine',1,'https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg','A perfect routine to focus on all body parts for atleast 1-3 days a week.',1,'AR',9,'3','8-12','1-2 minutes',1),(13,'Chest, Back and Legs Routine',1,'https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg','A perfect routine to focus on all body parts for atleast 1-3 days a week.',1,'AR',14,'3','3-5','3-5 minutes',1),(14,'Chest, Back and Legs Routine',1,'https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg','A perfect routine to focus on all body parts for atleast 1-3 days a week.',1,'AR',15,'3','8-12','1-2 minutes',1),(15,'Chest, Back and Legs Routine',1,'https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg','A perfect routine to focus on all body parts for atleast 1-3 days a week.',1,'AR',16,'3','8-12','1-2 minutes',1),(16,'Chest, Back and Legs Routine',1,'https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg','A perfect routine to focus on all body parts for atleast 1-3 days a week.',1,'AR',23,'3','3-5','3-5 minutes',1),(17,'Chest, Back and Legs Routine',1,'https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg','A perfect routine to focus on all body parts for atleast 1-3 days a week.',1,'AR',61,'3','8-12','1-2 minutes',1);
/*!40000 ALTER TABLE `personal_routines` ENABLE KEYS */;
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
