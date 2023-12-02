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
-- Table structure for table `routines`
--

DROP TABLE IF EXISTS `routines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `routines` (
  `routine_id` int NOT NULL AUTO_INCREMENT,
  `routine_name` varchar(100) NOT NULL,
  `user_id` int NOT NULL,
  `routine_img` varchar(255) NOT NULL,
  `routine_description` varchar(255) NOT NULL,
  `uses_weights` int NOT NULL,
  `routine_alias` varchar(50) NOT NULL,
  PRIMARY KEY (`routine_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `routines_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routines`
--

LOCK TABLES `routines` WRITE;
/*!40000 ALTER TABLE `routines` DISABLE KEYS */;
INSERT INTO `routines` VALUES (1,'Push Pull Legs | Calisthenics',3,'https://barbend.com/wp-content/uploads/2021/06/Barbend.com-Featured-Image-Calisthenics-Pull-ups.jpg','The \"Push, Pull, Legs\" (PPL) workout routine is a popular training split that divides exercises into three main categories: push, pull, and legs. This type of routine is often used in weightlifting, but it can be adapted for calisthenics as well.',0,'PPL'),(2,'Bro Split | Calisthenics',4,'https://megastar-cdnmed.megastar.fm/resources/jpg/4/1/1592474293714.jpg','A \"bro split\" typically refers to a weightlifting training split where you train different muscle groups on different days throughout the week.',0,'Bro Split'),(3,'Bro Split | Weights',4,'https://www.workoutforless.co.uk/cdn/shop/articles/luis-reyes-mTorQ9gFfOg-unsplash_2_640x.jpg?v=1657122621','A \"bro split\" typically refers to a weightlifting training split where you train different muscle groups on different days throughout the week.',1,'Bro Split'),(4,'Full Body for Beginners',1,'https://www.verywellfit.com/thmb/O6Cn_kBvb1hZAn0jl2GaerNUaoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1194421817-98e975827ad14c588646ae40470bf488.jpg','For a beginner-friendly full-body routine with calisthenics, focus on exercises that use your body weight.',0,'FBB'),(5,'Push Pull Legs | Weights',3,'https://www.workoutforless.co.uk/cdn/shop/articles/luis-reyes-mTorQ9gFfOg-unsplash_2_640x.jpg?v=1657122621','The \"Push, Pull, Legs\" (PPL) workout routine is a popular training split that divides exercises into three main categories: push, pull, and legs.',1,'PPL'),(6,'Full Body | Weights',1,'https://www.workoutforless.co.uk/cdn/shop/articles/luis-reyes-mTorQ9gFfOg-unsplash_2_640x.jpg?v=1657122621','A Beginner friendly routine where you workout 3 days a week like monday, wednesday, friday and the others you rest, perfect when you do not have that much time',1,'FBB');
/*!40000 ALTER TABLE `routines` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-02 15:03:24
