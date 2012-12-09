SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Table structure for table `DEVELOPER`
--

CREATE TABLE IF NOT EXISTS `DEVELOPER` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(48) NOT NULL,
  `email` varchar(320) NOT NULL,
  `password` varchar(32) NOT NULL,
  `github` tinytext,
  `lanyard` tinytext,
  `bio` text,
  `signupdate` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


--
-- Table structure for table `DEV_PROJECT`
--

CREATE TABLE IF NOT EXISTS `DEV_PROJECT` (
  `dev_id` int(11) NOT NULL,
  `proj_id` int(11) NOT NULL,
  `dev_status` tinyint(4) NOT NULL default '1',
  `beneficiary_rating` decimal(3,2) default NULL,
  `beneficiary_comment` text,
  `dev_comment` text,
  PRIMARY KEY  (`dev_id`,`proj_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


--
-- Table structure for table `DEV_STATUS`
--

CREATE TABLE IF NOT EXISTS `DEV_STATUS` (
  `id` int(11) NOT NULL auto_increment,
  `status` char(10) character set utf8 NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;


INSERT INTO `DEV_STATUS` (`id`, `status`) VALUES
(1, 'interested'),
(2, 'inprogress'),
(3, 'completed');