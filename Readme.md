###### ASSIGNMENT FOR SUBSPACE
## Backend Development internship

##### FOR API TESTING
Take help from the /testRestApi/testapi.http file there you test the api in your IDE using extensions FOR VSCODE prefer REST Client from #HuachaoMao

prerequisites
1.  nodejs   
2. npm or yarn package manager installed prefered yarn


### build and start the procjet
NOTE. 
*. yarn start
*. To change the PORT if you see error in logs the change in /bin/www file there you change the PORT or you can define the .env file with PORT variable





































####### ALERT-OLD SETUP CODE
# THIS IS DEVELOPMENT BRANCH FOR MINDA


Vplc Data-Visualizer 
========================


Requirements
------------

  * PHP 7.3.6 or higher;
  * xampp server 3.2.4 or higher
  * nodejs 10.16.0
  

Installation
------------
 first download the vplc project folder 
 
  install the nodejs and use below command to download dependencies of the project
   go to the project directory cd vplc
```npm 
$ npm install 
```
  'api' folder available in vplc project copy it to htdocs folder of xampp
  C:\xampp\htdocs
  
  for php socket connection 
  put php_sockets.dll file in xampp/apache/bin folder 
  and goto xampp control panel 
   click on config near apache server 
   and open  php.ini file in notepad  
   and past this like inside that file : extension=php_sockets.dll


Usage
-----
 after doing above installations 
 start the apache and mysql server from xampp controle panel
 then goto the project directory and run the project by following command

```npm
$ cd vplc/

$ npm start
```
this project will shows on https://localhost:3000



make mysql query tables case incesitive
sudo nano /etc/mysql/my.cnf
```
my.ini file on windows 
lower_case_table_names = 1

```

<!-- plc  service using nodejs at start setup commands -->
install pm2 package
- npm instlall -g pm2
install pm2 windows startup package
> npm install pm2-windows-startup -g
> pm2-startup install

the server is create in nodejs with express the file is in Script/app.js

start the service  in node server 
 - pm2 start  app.js --name vSmart(IOT)
 - pm2-startup install
 - pm2 save


 <!-- to -->
 --pm2 restart vSmartIOT(IOT)

 now your  server is running  after boot also

for enabling xamp server after boot 
run xamp  control panel as administrator and selected install as a service for apache and mysql from side icon 


<!-- deploying steps release version on workshop -->

<!-- mail config -->
To configure XAMPP to use sendmail.exe for email notifications, follow these steps:
Edit the php.ini file in the php\ subdirectory of your XAMPP installation directory (usually, C:\xampp). Within this file, find the [mail function] section and replace it with the following directives:
sendmail_path = "\"C:\xampp\sendmail\sendmail.exe\" -t"
For Win32 only.
SMTP = smtp.gmail.com
sendmail_from = your-gmail@gmail.com
sendmail_path = "\"C:\xampp\sendmail\sendmail.exe\" -t"
Note:  remove the semicolon before sendmail_path.
Edit the sendmail.ini file in the sendmail\ subdirectory of your XAMPP installation directory. Within this file, find the [sendmail] section and replace it with the following directives:
smtp_server=smtp.gmail.com
smtp_port=465
smtp_ssl=auto
error_logfile=error.log
auth_username=your-gmail-username@gmail.com
auth_password=your-gmail-password
Remember to replace the dummy values shown with your actual Gmail address and account password.


### CODE OVERVIEW
1. using 1 sec delay in plcGatway.php while calling the plc on hardware



-------------------  SETUP AND RUN  PROJECT STEPS---------------------------

1. start simulator from vsmart
2. start vplc server yarn docker:start-server
   check phpmyadmin at 8899 port on local to mamange db
3. start react ui : yarn docker:start-react
4. update your local ip  vplc device table  from phpmyadmin
5. if no values or old values in vshift and  vshift_register_target_value
6. create a week shift from configManager.http line number  4 api 
7. reset LAST_PLC_REGISTER_NUMBER_SUCCESSFULLY_READ colum value to 0 in vplc device table
8. clear summary and vplc_data tables
9. login to   ui pass: admin / vinnovate
10. hit testPlc api from testApi.http file  at line 229 with isOffline:true and check data on ui



