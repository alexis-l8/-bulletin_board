# Carebnb Bulletin Board

## User Story
As a user (potential tenant), I want to be able to see a list of properties in London with a spare room so I can get in contact if I like the description and look of it.

As a user (homeowner), I want to be able to upload a profile of my property so that potential tenants can get in touch.

## Requirements

### General
- [ ] Anyone can see a list of all properties on login
- [ ] All users can login via Oauth 
- [ ] User details are saved in a dynamic database
- [ ] See my profile picture and name once logged in

### Homeowner
- [ ] Can create boards for their spare rooms - Photo, Description, Contact Details
- [ ] Can delete boards from the homescreen and therefore database
- [ ] Can upload multiple room and property images

### Tenant
- [ ] Can reveal contact details of boards once logged in
- [ ] Can scroll through property images

## Stretch Goals
- [ ] Google map of London with pins above property locations

## Tech Implementations
- [ ] Oauth Login - Facebook, Google
- [ ] Validate front end input on back end using Joi

## Wireframes

### Home - Property bulletin feed
### Submit New Board 
### View Individual Board

## Database Schema

### Users
Column | Type | Modifiers
--- | --- | ---
id | integer | not null default
facebook_id | integer | not null default
google_id | integer | not null default
username | character varying(20) | not null
display_name | character varying(64) | not null
password | character varying(64) | not null
avatar_url | character varying(500) | not null

### Boards
Column | Type | Modifiers
--- | --- | ---
id | integer | not null default
author_id | integer | REFERENCES users(id)
title | character varying(100) | not null
location | character varying(100) | not null
body_text | character varying(20000) | not null
image1_url | character varying(500) | not null
image2_url | character varying(500) | not null
date_posted | character varying(50) | not null

## Learnings

1.  
