

/*
* Matches
*/

CREATE TABLE matches(
   "match_number"    INTEGER  NOT NULL PRIMARY KEY 
  ,"round_number"    INTEGER  NOT NULL
  ,"date"            VARCHAR(20) NOT NULL
  ,"location"        VARCHAR(29) NOT NULL
  ,"home_team"       VARCHAR(15) NOT NULL
  ,"away_team"       VARCHAR(15) NOT NULL
  ,"group"           VARCHAR(1)
  ,"home_team_score" VARCHAR(30)
  ,"away_team_score" VARCHAR(30)
);

INSERT INTO matches(match_number,round_number,date,location,home_team,away_team,"group",home_team_score,away_team_score) VALUES
 (1,1,'2022-11-20 16:00:00Z','Al Bayt Stadium','Qatar','Ecuador','A',NULL,NULL)
,(3,1,'2022-11-21 13:00:00Z','Khalifa International Stadium','England','Iran','B',NULL,NULL)
,(2,1,'2022-11-21 16:00:00Z','Al Thumama Stadium','Senegal','Netherlands','A',NULL,NULL)
,(4,1,'2022-11-21 19:00:00Z','Ahmad Bin Ali Stadium','USA','Wales','B',NULL,NULL)
,(8,1,'2022-11-22 10:00:00Z','Lusail Stadium','Argentina','Saudi Arabia','C',NULL,NULL)
,(6,1,'2022-11-22 13:00:00Z','Education City Stadium','Denmark','Tunisia','D',NULL,NULL)
,(7,1,'2022-11-22 16:00:00Z','Stadium 974','Mexico','Poland','C',NULL,NULL)
,(5,1,'2022-11-22 19:00:00Z','Al Janoub Stadium','France','Australia','D',NULL,NULL)
,(12,1,'2022-11-23 10:00:00Z','Al Bayt Stadium','Morocco','Croatia','F',NULL,NULL)
,(11,1,'2022-11-23 13:00:00Z','Khalifa International Stadium','Germany','Japan','E',NULL,NULL)
,(10,1,'2022-11-23 16:00:00Z','Al Thumama Stadium','Spain','Costa Rica','E',NULL,NULL)
,(9,1,'2022-11-23 19:00:00Z','Ahmad Bin Ali Stadium','Belgium','Canada','F',NULL,NULL)
,(13,1,'2022-11-24 10:00:00Z','Al Janoub Stadium','Switzerland','Cameroon','G',NULL,NULL)
,(14,1,'2022-11-24 13:00:00Z','Education City Stadium','Uruguay','Korea Republic','H',NULL,NULL)
,(15,1,'2022-11-24 16:00:00Z','Stadium 974','Portugal','Ghana','H',NULL,NULL)
,(16,1,'2022-11-24 19:00:00Z','Lusail Stadium','Brazil','Serbia','G',NULL,NULL)
,(17,2,'2022-11-25 10:00:00Z','Ahmad Bin Ali Stadium','Wales','Iran','B',NULL,NULL)
,(18,2,'2022-11-25 13:00:00Z','Al Thumama Stadium','Qatar','Senegal','A',NULL,NULL)
,(19,2,'2022-11-25 16:00:00Z','Khalifa International Stadium','Netherlands','Ecuador','A',NULL,NULL)
,(20,2,'2022-11-25 19:00:00Z','Al Bayt Stadium','England','USA','B',NULL,NULL)
,(21,2,'2022-11-26 10:00:00Z','Al Janoub Stadium','Tunisia','Australia','D',NULL,NULL)
,(22,2,'2022-11-26 13:00:00Z','Education City Stadium','Poland','Saudi Arabia','C',NULL,NULL)
,(23,2,'2022-11-26 16:00:00Z','Stadium 974','France','Denmark','D',NULL,NULL)
,(24,2,'2022-11-26 19:00:00Z','Lusail Stadium','Argentina','Mexico','C',NULL,NULL)
,(25,2,'2022-11-27 10:00:00Z','Ahmad Bin Ali Stadium','Japan','Costa Rica','E',NULL,NULL)
,(26,2,'2022-11-27 13:00:00Z','Al Thumama Stadium','Belgium','Morocco','F',NULL,NULL)
,(27,2,'2022-11-27 16:00:00Z','Khalifa International Stadium','Croatia','Canada','F',NULL,NULL)
,(28,2,'2022-11-27 19:00:00Z','Al Bayt Stadium','Spain','Germany','E',NULL,NULL)
,(29,2,'2022-11-28 10:00:00Z','Al Janoub Stadium','Cameroon','Serbia','G',NULL,NULL)
,(30,2,'2022-11-28 13:00:00Z','Education City Stadium','Korea Republic','Ghana','H',NULL,NULL)
,(31,2,'2022-11-28 16:00:00Z','Stadium 974','Brazil','Switzerland','G',NULL,NULL)
,(32,2,'2022-11-28 19:00:00Z','Lusail Stadium','Portugal','Uruguay','H',NULL,NULL)
,(35,3,'2022-11-29 15:00:00Z','Khalifa International Stadium','Ecuador','Senegal','A',NULL,NULL)
,(36,3,'2022-11-29 15:00:00Z','Al Bayt Stadium','Netherlands','Qatar','A',NULL,NULL)
,(33,3,'2022-11-29 19:00:00Z','Ahmad Bin Ali Stadium','Wales','England','B',NULL,NULL)
,(34,3,'2022-11-29 19:00:00Z','Al Thumama Stadium','Iran','USA','B',NULL,NULL)
,(37,3,'2022-11-30 15:00:00Z','Al Janoub Stadium','Australia','Denmark','D',NULL,NULL)
,(38,3,'2022-11-30 15:00:00Z','Education City Stadium','Tunisia','France','D',NULL,NULL)
,(39,3,'2022-11-30 19:00:00Z','Stadium 974','Poland','Argentina','C',NULL,NULL)
,(40,3,'2022-11-30 19:00:00Z','Lusail Stadium','Saudi Arabia','Mexico','C',NULL,NULL)
,(41,3,'2022-12-01 15:00:00Z','Ahmad Bin Ali Stadium','Croatia','Belgium','F',NULL,NULL)
,(42,3,'2022-12-01 15:00:00Z','Al Thumama Stadium','Canada','Morocco','F',NULL,NULL)
,(43,3,'2022-12-01 19:00:00Z','Khalifa International Stadium','Japan','Spain','E',NULL,NULL)
,(44,3,'2022-12-01 19:00:00Z','Al Bayt Stadium','Costa Rica','Germany','E',NULL,NULL)
,(45,3,'2022-12-02 15:00:00Z','Al Janoub Stadium','Ghana','Uruguay','H',NULL,NULL)
,(46,3,'2022-12-02 15:00:00Z','Education City Stadium','Korea Republic','Portugal','H',NULL,NULL)
,(47,3,'2022-12-02 19:00:00Z','Stadium 974','Serbia','Switzerland','G',NULL,NULL)
,(48,3,'2022-12-02 19:00:00Z','Lusail Stadium','Cameroon','Brazil','G',NULL,NULL)
,(49,4,'2022-12-03 15:00:00Z','TBA','1A','2B',NULL,NULL,NULL)
,(50,4,'2022-12-03 19:00:00Z','TBA','1C','2D',NULL,NULL,NULL)
,(52,4,'2022-12-04 15:00:00Z','TBA','1D','2C',NULL,NULL,NULL)
,(51,4,'2022-12-04 19:00:00Z','TBA','1B','2A',NULL,NULL,NULL)
,(53,4,'2022-12-05 15:00:00Z','TBA','1E','2F',NULL,NULL,NULL)
,(54,4,'2022-12-05 19:00:00Z','TBA','1G','2H',NULL,NULL,NULL)
,(55,4,'2022-12-06 15:00:00Z','TBA','1F','2E',NULL,NULL,NULL)
,(56,4,'2022-12-06 19:00:00Z','TBA','1H','2G',NULL,NULL,NULL)
,(58,5,'2022-12-09 15:00:00Z','TBA','To be announced','To be announced',NULL,NULL,NULL)
,(57,5,'2022-12-09 19:00:00Z','TBA','To be announced','To be announced',NULL,NULL,NULL)
,(60,5,'2022-12-10 15:00:00Z','TBA','To be announced','To be announced',NULL,NULL,NULL)
,(59,5,'2022-12-10 19:00:00Z','TBA','To be announced','To be announced',NULL,NULL,NULL)
,(61,6,'2022-12-13 19:00:00Z','TBA','To be announced','To be announced',NULL,NULL,NULL)
,(62,6,'2022-12-14 19:00:00Z','TBA','To be announced','To be announced',NULL,NULL,NULL)
,(63,7,'2022-12-17 15:00:00Z','TBA','To be announced','To be announced',NULL,NULL,NULL)
,(64,7,'2022-12-18 15:00:00Z','TBA','To be announced','To be announced',NULL,NULL,NULL);