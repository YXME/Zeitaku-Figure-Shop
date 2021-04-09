CREATE TABLE FIGURE (
	FIGUREID SERIAL NOT NULL PRIMARY KEY,
	FIGURETITLE VARCHAR(150) NOT NULL,
	FIGURESUBTITLE VARCHAR(150) NOT NULL,
	DESCRIPTION VARCHAR(1000) NOT NULL,
	URL VARCHAR(150) NOT NULL,
	EURPRICE FLOAT NOT NULL,
	JPYPRICE FLOAT NOT NULL,
	WEIGHT FLOAT NOT NULL,
	MANUFACTURER VARCHAR(50) NOT NULL,
	FIGURESCALE VARCHAR(5) NOT NULL,
	LIMITEDEDITION INT NOT NULL,
	DIMENSIONS VARCHAR(15) NOT NULL
);

CREATE TABLE REGION (
	REGIONID SERIAL NOT NULL PRIMARY KEY,
	REGIONNAME VARCHAR(50) NOT NULL
);


CREATE TABLE COUNTRY (
	COUNTRYID SERIAL NOT NULL PRIMARY KEY,
	COUNTRYNAME VARCHAR(50) NOT NULL
);

CREATE TABLE UTILISATEUR (
	USERID SERIAL NOT NULL PRIMARY KEY,
	EMAIL VARCHAR(100) NOT NULL,
	FIRSTNAME VARCHAR(50) NOT NULL,
	LASTNAME VARCHAR(50) NOT NULL,
	PASSWORD VARCHAR(64) NOT NULL,
	ADDRESS VARCHAR(200) NOT NULL,
	CITY VARCHAR(200) NOT NULL,
	ZIPCODE INT,
	COUNTRYID INT NOT NULL,
	REGIONID INT NOT NULL,
	CLEARANCE SMALLINT NOT NULL,

	CONSTRAINT FK_UTICOUNTRY
      FOREIGN KEY(COUNTRYID) 
	  REFERENCES COUNTRY(COUNTRYID),
	
	CONSTRAINT FK_UTIREGION
      FOREIGN KEY(REGIONID) 
	  REFERENCES REGION(REGIONID)
);

CREATE TABLE SHIPPER (
	SHIPPERID SERIAL NOT NULL PRIMARY KEY,
	SHIPPERNAME VARCHAR(50) NOT NULL
);

CREATE TABLE ORDERS (
	ORDERID SERIAL NOT NULL PRIMARY KEY,
	USERID INT NOT NULL,
	SHIPPERID INT NOT NULL,
	ORDERSTATUS VARCHAR(15) NOT NULL,
	ORDERDATE DATE NOT NULL,
	ORDERPAYMENTSTATUS VARCHAR(15) NOT NULL,
	GRANDTOTAL INT NOT NULL,
	
	CONSTRAINT FK_ORDER
      FOREIGN KEY(USERID) 
	  REFERENCES UTILISATEUR(USERID),

	CONSTRAINT FK_ORDER_2
      FOREIGN KEY(SHIPPERID) 
	  REFERENCES SHIPPER(SHIPPERID)
);

CREATE TABLE LKFIGUREORDER(
	ORDERID INT NOT NULL,
	FIGUREID INT NOT NULL,
	
	CONSTRAINT FK_LKFIGUREORDER_1
      FOREIGN KEY(ORDERID) 
	  REFERENCES ORDERS(ORDERID),
	  
	CONSTRAINT FK_LKFIGUREORDER_2
      FOREIGN KEY(FIGUREID) 
	  REFERENCES FIGURE(FIGUREID)
);

CREATE TABLE LKCOUNTRYREGION (
	COUNTRYID INT NOT NULL,
	REGIONID INT NOT NULL,
	
	CONSTRAINT FK_LKCOUNTRYREGION_1
      FOREIGN KEY(COUNTRYID) 
	  REFERENCES COUNTRY(COUNTRYID),
	  
	CONSTRAINT FK_LKCOUNTRYREGION_2
      FOREIGN KEY(REGIONID) 
	  REFERENCES REGION(REGIONID)
);


CREATE TABLE LKSHIPPINGREGION (
	REGIONID INT NOT NULL,
	SHIPPERID INT NOT NULL,
	
	CONSTRAINT FK_LKSHIPPINGREGIONFEES_1
      FOREIGN KEY(REGIONID)
	  REFERENCES REGION(REGIONID),
	  
	CONSTRAINT FK_LKSHIPPINGREGIONFEES_2
      FOREIGN KEY(SHIPPERID) 
	  REFERENCES SHIPPER(SHIPPERID)
);

CREATE TABLE SHIPPINGFEESREGION (
	REGIONID INT NOT NULL,
	MINWEIGHT INT NOT NULL,
	PRICE INT NOT NULL,

	CONSTRAINT FK_LKSHIPPINGREGIONFEES_1
      FOREIGN KEY(REGIONID)
	  REFERENCES REGION(REGIONID)
);

INSERT INTO REGION VALUES (1,'Europe'), (2,'Asie'), (3,'Amérique'), (4,'Afrique'), (5,'Océanie');

INSERT INTO COUNTRY VALUES (1,'Albanie'),(2,'Allemagne'),(3,'Andorre'),(4,'Autriche'),(5,'Belgique'),(6,'Biélorussie'),(7,'Bosnie-Herzégovine'),(8,'Bulgarie'),(9,'Chypre'),(10,'Croatie'),(11,'Danemark'),(12,'Espagne'),(13,'Estonie'),(14,'Féroé (îles)'),(15,'Finlande'),(16,'France'),(17,'Grèce'),(18,'Groenland'),(19,'Hongrie'),(20,'Irlande'),(21,'Islande'),(22,'Italie'),(23,'Jersey-Guernesey'),(24,'Kosovo'),(25,'Lettonie'),(26,'Liechtenstein'),(27,'Lituanie'),(28,'Luxembourg'),(29,'Macédoine'),(30,'Malte'),(31,'Moldavie'),(32,'Monaco'),(33,'Monténégro'),(34,'Norvège'),(35,'Pays-Bas'),(36,'Pologne'),(37,'Portugal'),(38,'République tchèque'),(39,'Roumanie'),(40,'Royaume-Uni'),(41,'Russie'),(42,'Saint Marin'),(43,'Serbie'),(44,'Slovaquie'),(45,'Slovénie'),(46,'Suède'),(47,'Suisse'),(48,'Ukraine'),(49,'Vatican'),
(50,'Afghanistan'),(51,'Arabie Saoudite'),(52,'Arménie'),(53,'Azerbaïdjan'),(54,'Bahrein'),(55,'Bangladesh'),(56,'Bhoutan'),(57,'Birmanie (Myanmar)'),(58,'Brunei'),(59,'Cambodge'),(60,'Chine'),(61,'Corée du Sud'),(62,'Emirats Arabe Unis'),(63,'Géorgie'),(64,'Hong Kong'),(65,'Inde'),(66,'Indonésie'),(67,'Irak'),(68,'Iran'),(69,'Israël'),(70,'Japon'),(71,'Jordanie'),(72,'Kazakhstan'),(73,'Kirghizstan'),(74,'Koweït'),(75,'Laos'),(76,'Liban'),(77,'Macao'),(78,'Malaisie'),(79,'Maldives'),(80,'Mongolie'),(81,'Népal'),(82,'Oman'),(83,'Ouzbekistan'),(84,'Pakistan'),(85,'Palestine'),(86,'Philippines'),(87,'Qatar'),(88,'Singapour'),(89,'Sri Lanka'),(90,'Syrie'),(91,'Tadjikistan'),(92,'Taiwan'),(93,'Thaïlande'),(94,'Tibet'),(95,'Timor Oriental'),(96,'Turkmenistan'),(97,'Turquie'),(98,'Vietnam'),(99,'Yémen'),
(100,'Antigua et Barbuda'),(101,'Bahamas'),(102,'Bermudes'),(103,'Canada'),(104,'Iles Cayman'),(105,'Cuba'),(106,'République Dominicaine'),(107,'Dominique'),(108,'Etats-Unis'),(109,'Haïti'),(110,'Jamaique'),(111,'Mexique'),(112,'Argentine'),(113,'Barbade'),(114,'Belize'),(115,'Bolivie'),(116,'Brésil'),(117,'Chili'),(118,'Colombie'),(119,'Costa Rica'),(120,'Equateur'),(121,'El Salvador'),(122,'Grenade'),(123,'Guadeloupe'),(124,'Guatémala'),(125,'Guyana'),(126,'Guyane'),(127,'Honduras'),(128,'Malouines'),(129,'Martinique'),(130,'Nicaragua'),(131,'Panama'),(132,'Paraguay'),(133,'Pérou'),(134,'Porto Rico'),(135,'Saint Christophe et Nevis'),(136,'Sainte Lucie'),(137,'Saint Vincent et les Grenadines'),(138,'Surinam'),(139,'Trinité et Tobago'),(140,'Uruguay'),(141,'Vénézuéla'),(142,'Vierges américaines'),
(143,'Afrique du Sud'),(144,'Algérie'),(145,'Angola'),(146,'Bénin'),(147,'Botswana'),(148,'Burkina Faso'),(149,'Burundi'),(150,'Cameroun'),(151,'Cap Vert'),(152,'Centrafrique'),(153,'Comores'),(154,'Congo'),(155,'Congo démocratique'),(156,'Côte d''Ivoire'),(157,'Djibouti'),(158,'Egypte'),(159,'Erythrée'),(160,'Ethiopie'),(161,'Gabon'),(162,'Gambie'),(163,'Ghana'),(164,'Guinée'),(165,'Guinée Bissau'),(166,'Guinée équatoriale'),(167,'Kenya'),(168,'Lesotho'),(169,'Liberia'),(170,'Libye'),(171,'Madagascar'),(172,'Malawi'),(173,'Mali'),(174,'Maroc'),(175,'Maurice'),(176,'Mauritanie'),(177,'Mozambique'),(178,'Namibie'),(179,'Niger'),(180,'Nigeria'),(181,'Ouganda'),(182,'Réunion'),(183,'Rwanda'),(184,'Sahara occidental'),(185,'Sainte Héléne'),(186,'São Tomé et Príncipe'),(187,'Sénégal'),(188,'Seychelles'),(189,'Sierra Leone'),(190,'Somalie'),(191,'Somaliland'),(192,'Soudan'),(193,'Swaziland'),(194,'Tanzanie'),(195,'Tchad'),(196,'Togo'),(197,'Tristan Da Cunha'),(198,'Tunisie'),(199,'Zambie'),(200,'Zimbabwe'),
(201,'Australie'),(202,'Fidji'),(203,'Kiribati'),(204,'Marshall'),(205,'Micronésie'),(206,'Nauru'),(207,'Nouvelle Calédonie'),(208,'Nouvelle Zélande'),(209,'Palau'),(210,'Papouasie Nouvelle Guinée'),(211,'Salomon'),(212,'Sanoa'),(213,'Tonga'),(214,'Tuvalu'),(215,'Vanuatu');

INSERT INTO LKCOUNTRYREGION VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,2),(51,2),(52,2),(53,2),(54,2),(55,2),(56,2),(57,2),(58,2),(59,2),(60,2),(61,2),(62,2),(63,2),(64,2),(65,2),(66,2),(67,2),(68,2),(69,2),(70,2),(71,2),(72,2),(73,2),(74,2),(75,2),(76,2),(77,2),(78,2),(79,2),(80,2),(81,2),(82,2),(83,2),(84,2),(85,2),(86,2),(87,2),(88,2),(89,2),(90,2),(91,2),(92,2),(93,2),(94,2),(95,2),(96,2),(97,2),(98,2),(99,2),(100,3),(101,3),(102,3),(103,3),(104,3),(105,3),(106,3),(107,3),(108,3),(109,3),(110,3),(111,3),(112,3),(113,3),(114,3),(115,3),(116,3),(117,3),(118,3),(119,3),(120,3),(121,3),(122,3),(123,3),(124,3),(125,3),(126,3),(127,3),(128,3),(129,3),(130,3),(131,3),(132,3),(133,3),(134,3),(135,3),(136,3),(137,3),(138,3),(139,3),(140,3),(141,3),(142,3),(143,4),(144,4),(145,4),(146,4),(147,4),(148,4),(149,4),(150,4),(151,4),(152,4),(153,4),(154,4),(155,4),(156,4),(157,4),(158,4),(159,4),(160,4),(161,4),(162,4),(163,4),(164,4),(165,4),(166,4),(167,4),(168,4),(169,4),(170,4),(171,4),(172,4),(173,4),(174,4),(175,4),(176,4),(177,4),(178,4),(179,4),(180,4),(181,4),(182,4),(183,4),(184,4),(185,4),(186,4),(187,4),(188,4),(189,4),(190,4),(191,4),(192,4),(193,4),(194,4),(195,4),(196,4),(197,4),(198,4),(199,4),(200,4),(201,5),(202,5),(203,5),(204,5),(205,5),(206,5),(207,5),(208,5),(209,5),(210,5),(211,5),(212,5),(213,5),(214,5),(215,5);


INSERT INTO SHIPPER VALUES (1,'DHL'), (2,'EMS'), (3,'Chronopost'), (4,'FEDEX');


INSERT INTO LKSHIPPINGREGION VALUES (1, 1), (1, 2), (1, 3), (1, 4), (2, 1), (2, 4), (3, 1), (3, 4), (4, 1), (5, 2);

INSERT INTO SHIPPINGFEESREGION VALUES 
(1,15,50), (1,25,150), (1,35,250), (1,45,300), (1,55,450), (1,65,500),
(2,15,280), (2,25,360), (2,35,420), (2,45,750), (2,55,850),	(2,65,1000),
(3,15,150),	(3,25,290),	(3,35,380), (3,45,510), (3,55,640), (3,65,700),		
(4,15,350), (4,25,490), (4,35,740), (4,45,820), (4,55,900),(4,65,1500),
(5,15,280),	(5,25,360),	(5,35,420),	(5,45,750),	(5,55,850),	(5,65,1000);


INSERT INTO FIGURE VALUES (1,'Broly Legendary Super Saiyan "King of Destruction"','ブロリー-伝説のスーパーサイヤ人「破壊の王」','Designé par Akira Toriyama mais créé par Shigeyasu Yamauchi, Broly apparaît pour la première fois dans le film "Dragon Ball Z : Broly le super guerrier". Sa popularité lui vaudra un retour dans un autre film : "Dragon Ball Z : Rivaux dangereux".  Nous avons voulu rendre hommage à sa puissance en adaptant la scène où il domine le combat contre Goku et maintient le héros inerte par la tête.  ','../assets/illu/1.jpg',1399,182107.83,50,'Tsume Art','1/4',1500,'76*44*68');
INSERT INTO FIGURE VALUES (2,'Madara Uchiwa','うちはマダラ','Madara fut jadis à la tête du clan Uchiwa, en guerre contre le clan Senju mené par Hashirama. Les deux hommes parvinrent néanmoins à instaurer la paix entre Senju et Uchiwa, et créent le village caché de Konoha. Évincé du pouvoir par le frère de Hashirama, puis abandonné par son propre clan, Madara décida de s''exiler. Il revint quelque temps plus tard attaquer le village, après avoir soumis Kyūbi – le renard à neuf queues – grâce au Kaléidoscope hypnotique (Mangekyō Sharingan).','../assets/illu/2.jpg',999,130039.83,50,'Tsume Art','1/4',1700,'52*61*63');
INSERT INTO FIGURE VALUES (3,'UFO Robot Grendizer','UFOロボットグレンダイザー','On ne présente plus Grendizer, robot imaginé par Go Nagai en 1975 et popularisé en France par la série diffusée en 1978 sous le nom de Goldorak. À l''occasion du 40e anniversaire du manga, Tsume est fier de présenter son projet le plus ambitieux dans le domaine de la statue de collection !','../assets/illu/3.jpg',1199.99,156202.6983,30,'Tsume Art','1/4',1000,'81*60*69');
INSERT INTO FIGURE VALUES (4,'Natsu Dragon Slayer','ナツドラゴンスレイヤー','La légende dit que les dragons se sont éteints le 7 juillet X777, mais l''âme d''Ignir reposait en vérité dans le corps de Natsu, jusqu''à ce que le moment soit venu pour lui de combattre le Dragon de l''Apocalypse Acnologia.  Ignir ayant appris à Natsu la Magie de Chasseur de Dragon de Feu, nous avons souhaité les représenter ensemble, tandis que Natsu s’apprête à frapper son ennemi avec un poing enflammé.  ','../assets/illu/4.jpg',1290,167919.3,56,'Tsume Art','1/4',777,'78*80*77');
INSERT INTO FIGURE VALUES (5,'Nosferatu Zodd','ゾッドゾッド','Nosferatu Zodd ou Zodd l''Immortel est un maître d''épée légendaire et un anti-méchant récurrent tout au long de la série. Toute bataille à laquelle il participe aboutit à des montagnes de morts. C''est un apôtre puissant qui voyage de champ de bataille en champ de bataille à la recherche d''adversaires toujours plus forts. Il sert à la fois de rival du Skull Knight et de Guts.','../assets/illu/5.jpg',2188,284811.96,65,'Prime 1 Studio ','1/4',150,'82*102*90');
INSERT INTO FIGURE VALUES (6,'Super Saiyan Son Goku','超サイヤ人孫悟空','Nous avons choisi son look populaire Super Saiyan dans une Kamehameha Pose dynamique avec une fonction d''éclairage LED qui donne de la vigueur à l''ensemble de la statue. Nous avons également ajouté de petites pièces très détaillées à la base et au corps entier, ce qui donne un effet étonnant d''une bataille féroce.','../assets/illu/6.jpg',1136,147873.12,20,'Prime 1 Studio ','1/4',4500,'66*48*47');
INSERT INTO FIGURE VALUES (7,'Super Saiyan Son Vegeta','スーパーサイヤ人ベジータ','Vegeta est originaire de la planète Vegeta, patrie des guerriers d''élite de la fière race Saiyan. Il est le véritable rival éternel de Son Goku et ne vit que pour devenir plus fort et vaincre ses ennemis. Quels que soient les alliés qu''il peut se faire en chemin, Vegeta est un fier guerrier qui reste fidèle à lui-même. Grâce à l''esprit de recherche de puissance, d''entraînement dédié et de véritable détermination, Vegeta est un Super Saiyan!','../assets/illu/7.jpg',1136,147873.12,15,'Prime 1 Studio ','1/4',4500,'65*45*48');
INSERT INTO FIGURE VALUES (8,'Dragon Shiryu','龍星座の紫龍 「ファイナルブロンズクロス」','Du créateur de manga légendaire, Masami Kurumada, vient le Dragon Shiryū de Saint Seiya! Le dragon Shiryū est considéré comme le plus sage de tous les saints. Son entraînement dans les Wulao Peaks de Lushan l''a forgé dans le magnifique combattant qui se tient devant vous.','../assets/illu/8.jpg',1093,142275.81,18,'Prime 1 Studio ','1/4',3000,'74*46*43');
INSERT INTO FIGURE VALUES (9,'Guts & Zodd vs Ganishka - Bloody Exclusive','ガッツ＆ゾッドVSガニシュカ','D''un point de vue technique, nous avons incorporé dans ce diorama de nombreux matériaux haut de gamme afin d''apporter au rendu global un réalisme accru. Ainsi, les parties peau de Guts sont réalisées en résine semi-translucide. La peau semble respirer, les veines subtilement peintes ajoutant au réalisme.','../assets/illu/9.jpg',1599,208141.83,65,'Oniri Creation','1/6',99,'70*92*89');
INSERT INTO FIGURE VALUES (10,'UFO Robot Grandizer Premium Statue','UFOロボグレンダイザー','Issu du tout premier épisode de la série, notre statue représente Grendizer lors de son combat contre le Golgoth 01 « Giru Giru ».  Sans doute notre projet le plus ambitieux à ce jour, la formidable machine de combat nous a demandé près d’un millier d’heures de sculpture et de peinture.','../assets/illu/10.jpg',1199,156073.83,20,'Oniri Creation','1/5',555,'62*60*60');
INSERT INTO FIGURE VALUES (11,'Light & Ryuk','ライト＆リューク','Nous sommes fiers de vous présenter notre seconde statue : la première basée sur l’anime Death Note, chef d’œuvre de l’animation japonaise adapté du manga culte de Tsugumi Ōba et Takeshi Obata. Le statue représente le personnage de Light accompagné de Ryuk, le Dieu de la mort.','../assets/illu/11.jpg',579,75368.43,10,'Oniri Creation','1/6',999,'48*29*28');
INSERT INTO FIGURE VALUES (12,'Livaï vs Female Titan','リヴァイVS女性タイタン','La statue met en scène le charismatique Caporal-Chef Levi lors de son combat contre le Titan Féminin. Assurément l’une des scènes les plus marquantes de la première saison de l’anime ou l’on peut voir toute la puissance du personnage qui mettra rapidement hors d’état de nuire son ennemi en portant des coups à la vitesse de l’éclair.','../assets/illu/12.jpg',579,75368.43,10,'Oniri Creation','1/6',999,'52*48*45');
INSERT INTO FIGURE VALUES (13,'L''attaque des Titans','進撃の巨人','S''élevant à une hauteur intimidante de 61 cm (24 po), les Shifters se battent dans une zone de guerre de 73,5 cm (29 po) de maisons en ruine et de tempêtes de poussière alors que de la vapeur translucide s''écoule de leurs corps en feu. Posés de manière dynamique comme des combattants professionnels au corps à corps, les Titans se préparent à un autre impact explosif avec leurs puissants muscles en plein écran. Volant dans son équipement de mobilité omnidirectionnelle, l''amie d''enfance d''Eren, Mikasa, s''attache au cou du Titan blindé avec ses lames fendeuses prêtes, sa petite forme révélant l''échelle massive des Titans. Une silhouette définie et une composition équilibrée permettent aux collectionneurs de voir la bataille inoubliable sous n''importe quel angle alors qu''elle se déroule sur une base représentant l''Attaque des villes fortifiées de Titan - un sombre rappel de l''impuissance de l''humanité contre les Titans. ','../assets/illu/13.jpg',1187,154511.79,20,'Figurama Collectors','1/3',850,'61*73*70');
INSERT INTO FIGURE VALUES (14,'Ichigo vs Ulquiorra','いちごVSウルキオラ','Né avec une immense énergie spirituelle, Ichigo Kurosaki accepte le pouvoir d''un Shinigami pour sauver sa famille. Désormais chargé de protéger le monde en tant que Shinigami substitut, Ichigo aide à guider les âmes perdues vers l''au-delà tout en purifiant les Hollows qui menacent de dévorer les vivants et les morts.','../assets/illu/14.jpg',829,107910.93,20,'Figurama Collectors','1/6',1300,'46*52*39');
INSERT INTO FIGURE VALUES (15,'ALUCARD DE HELLSING ULTIMATE','究極のヘルシングアーカード','Chroniquant les aventures d''Alucard, un vieux et puissant vampire qui sert l''organisation Hellsing en chassant d''autres forces surnaturelles, le scénario OVA «Hellsing: Ultimate» donne un coup de fouet à la populaire franchise de vampires. Qu''il éradique des goules, massacre des soldats ou détruit les forces aériennes du Vatican, Alucard est un chasseur férocement cruel qui adore humilier ses adversaires avec des railleries avant de les tuer brutalement.','../assets/illu/15.jpg',711,92550.87,25,'Figurama Collectors','1/6',400,'67*57*52');
INSERT INTO FIGURE VALUES (16,'Rurouni Kenshin','るろうに剣心-ケンシンVSシシオ','Le successeur de Kenshin, un ancien assassin du gouvernement nommé Shishio Makoto, entreprend une conquête brutale du Japon, prévoyant de détruire le gouvernement Meiji qui l''a trahi et brûlé vif. Déterminé à défier la tyrannie de Shishio, Kenshin surmonte son sombre assassin intérieur et fait face à son successeur qui brandit son homologue de sakabatō. Deux guerriers, deux époques et deux idéologies s''affrontent dans une bataille à mort qui détermine le sort du Japon. ','../assets/illu/16.jpg',926,120537.42,15,'Figurama Collectors','1/6',950,'60*60*55');

INSERT INTO UTILISATEUR VALUES (1, 'admin@zeitaku.fr', 'Admin', 'Admin', '$2y$12$YorYwLMWkadk.s1Fki8UQuNZKH2szUC6HZMabqxpw6jj5o7w7gEKu', '15 Rue Vaugirard, 75006 Paris', 16, 1, 1)
