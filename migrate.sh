#!/bin/bash

#scp -i ~/work/personal-software-projects/fotoliciousServer/fotolicious.pem ./dist/fotolicious/* ec2-user@ec2-3-25-2-216.ap-southeast-2.compute.amazonaws.com:~/angular/
scp -i ~/work/personal-software-projects/fotoliciousServer/fotolicious.pem ./dist/fotolicious/* ec2-user@ec2-3-25-2-216.ap-southeast-2.compute.amazonaws.com:/usr/share/nginx/html/
