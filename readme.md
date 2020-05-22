## Imm-ployed
* [General Info](#info)
* [Technologies](#technologies)
* [Team Information](#teaminformation)
* [Contents](#content)
* [Setup Instructions](#setup)

## Info
This application seeks to get recovered (patients who have developed immunity), unemployed British Columbians back to work by connecting them to employers and open job offerings. Employers and employees can create company and personal profile pages, while the latter can upload their resume, apply for jobs and chat with employers.
Sourcecode in messaging.js based on https://codelabs.developers.google.com/codelabs/firebase-web/#3.
	
## Technologies
Technologies that were used for this project:
* Firebase Cloud Firestore Database and Realtime Storage
* HTML, CSS
* JavaScript
* Bootstrap 
* Here Map and Geocoder API

## Team Information
We are BCIT Computer Systems Technology student driven to produce an app to fight the strains COVID-19 has caused on society.
* Kevin Kang - kevyukang@gmail.com
* Mattias Henders - henders.mattias@gmail.com 
* Mohib Mohib Hussain - h.mohib88@gmail.com 
* Shubhankar Sethi - shubhster12@gmail.com

## Content
The HTML pages are in the main folder, the JavaScript files are located in the "scripts" folder, the page stylings in the "styles" folder, and icons and "about us" photos in the "images" folder. The files are names such that the 
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               		# Git ignore file.
├── about_us.html            		# Page about the creators of the application.
├── browse_jobs.html         		# Browse/sort/search job postings page.
├── business_permit.html     		# Page for employers to upload their business permits.
├── doctors_note.html	     		# Page for employees to upload their proof of immunity.
├── employee_homepage.html   		# Home/landing page for employees.
├── employee_login.html      		# Login page for employees.
├── employee_post_review.html		# Page for employees to view specific job posts.
├── employee_profile.html       	# Employee profile page.
├── employer_all_posts.html     	# Page where employer can see all of their job postings.
├── employer_homepage.html      	# Employer home page.
├── employer_jobpost.html       	# Page for employers to add job listings.
├── employer_jobpost_review.html	# Review/confirmation page for job posting.
├── employer_login.html			# Login page for employers.
├── employer_profile.html		# Company profile page.
├── employer_specific_post.html		# Page for specific job listings.
├── index.html				# Landing page for signed-out users.
└── readme.md

 It has the following subfolders:
├── images                   		# Folder for icons and about_us photos.
├── scripts                  		# Folder for JavaScript files.
└── styles                   		# Folder for CSS files.

 Styles folder files: 
├── HTML -SAME NAME- JS FILES		# Scripts for their respective pages.
├── map.js                   		# Script for generating Here Map graphics.
└── messaging.js                   	# Script for Firebase chat feature.

 Styles folder files: 
├── HTML -SAME NAME- CSS FILES		# Styling for their respective pages.
└── master.css                 		# General styling for entire application.
```
## Setup
1. Clone the repo.

2. Navigate to the directory on console, then install firebase-tools and Firebase login by entering:
    >npm -g install firebase-tools
    >
    >firebase login

3. API keys for Firebase Database and Here Maps are listed in-file. For access to the database, including editing permission, privary rule changes, etc., please [email](#teaminformation) an existing team member.

4. Google drive spreadsheets are used for creating and tracking test cases. Access it here: https://docs.google.com/spreadsheets/d/1xYEHGAF82ZQYb9ksCz6K5WKyWNILThZAk9C6lfnAIxc/edit#gid=394496370
For editing permission, please [email](#teaminformation) an existing team member.
