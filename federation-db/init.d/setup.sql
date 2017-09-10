-- accounts
drop table if exists `accounts`;
create table `accounts` (
  `id` int(11) not null auto_increment,
  `first_name` varchar(255) not null default '',
  `last_name` varchar(255) not null default '',
  `friendly_id` varchar(125) not null,
  primary key (`id`),
  unique indx_accounts_01 (`friendly_id`)
) engine=innodb default character set utf8mb4;

insert into `accounts` (`first_name`, `last_name`, `friendly_id`) values
  ("Tunde", "Adebayo", "tunde_adebayo"),
  ("Amy", "Smith", "amy_smith"),
  ("Jack", "Brown", "jack_brown"),
  ("Steintór", "Jákupsson", "steintor_jakupsson"),
  ("Sneha", "Kapoor", "sneha_kapoor")
;