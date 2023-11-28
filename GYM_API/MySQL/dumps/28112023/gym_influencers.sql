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
-- Table structure for table `influencers`
--

DROP TABLE IF EXISTS `influencers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `influencers` (
  `influencer_id` int NOT NULL AUTO_INCREMENT,
  `influencer_name` varchar(200) NOT NULL,
  `influencer_url` varchar(255) NOT NULL,
  `influencer_img` varchar(255) NOT NULL,
  PRIMARY KEY (`influencer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `influencers`
--

LOCK TABLES `influencers` WRITE;
/*!40000 ALTER TABLE `influencers` DISABLE KEYS */;
INSERT INTO `influencers` VALUES (1,'Same Sulek','https://www.tiktok.com/@sam_sulek','https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c1db51f445e510a8e122bdf17399fd63~c5_100x100.jpeg?x-expires=1701205200&x-signature=Vxs0FH8oB%2B%2BbeTi2Z3Q9fkXpFW4%3D'),(2,'Greg Doucette','https://www.youtube.com/channel/UCLqH-U2TXzj1h7lyYQZLNQQ','https://ucarecdn.com/bc404507-e49d-45ba-a1d6-7ea4c8045252/-/format/auto/-/preview/3000x3000/-/quality/lighter/'),(3,'Max Euceda','https://www.youtube.com/@MaxEuceda7','https://yt3.googleusercontent.com/5oa2kn0aHGH76Xpmv93xm7ynvIRIl1vOZFLZKqIZHj0DdAgKYxgG_8oo2Qj3-_4cOSBhONdIXvE=s176-c-k-c0x00ffffff-no-rj'),(4,'FitnessFAQs','https://www.youtube.com/@FitnessFAQs','https://yt3.googleusercontent.com/2bArFFkQkZf0GHaO_84ONztD86tECRmvlmxzbcQNVBejPvc7mH71soSR-j7x7JJgDv0m6_OMNg=s176-c-k-c0x00ffffff-no-rj'),(5,'Calisthenic Move','https://www.youtube.com/@calimove','https://yt3.googleusercontent.com/ytc/APkrFKaOKKo9Gj36dI5Nqil4z_MpXm5wLREwJLxZuoJZxQ=s176-c-k-c0x00ffffff-no-rj'),(6,'Scott Herman','https://www.youtube.com/channel/UCEtMRF1ywKMc4sf3EXYyDzw','https://yt3.googleusercontent.com/ytc/APkrFKbqVWypysCC9DzVuKp_Pbg1Auy0soMPxJrr-DIO=s176-c-k-c0x00ffffff-no-rj'),(7,'Hybrid Calisthenics','https://www.youtube.com/channel/UCeJFgNahi--FKs0oJyeRDEw','https://pbs.twimg.com/profile_images/1423102173546618884/3rpYl-7l_400x400.jpg');
/*!40000 ALTER TABLE `influencers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-28 15:23:39
