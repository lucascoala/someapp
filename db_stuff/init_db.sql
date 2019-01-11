CREATE DATABASE IF NOT EXISTS employees;
GRANT ALL PRIVILEGES on employees.*
TO 'awesomeness'@'%' IDENTIFIED BY 'lamepassword'
WITH GRANT OPTION;