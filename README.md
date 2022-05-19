
<!-- 290794Jc -->

# models

 
## client
<!-- BASIC INFORMATION -->
- name * 
    - string
- image 
    - string
- email * 
    - string
    - use regex to check if its a westmec email
    - must be unique
- visits * 
    - array of visit refs 
- service * 
    - string
    - what does the client want
- address * 
    - string
- number * 
    - string
    - must be unique
    - regex


## stylist
- name * 
    - string
- teacher *
    - string
- clients *
    - array of client refs
- email *
    - string 
    - regex
    - unique
- password *
    - string
- hours * 
    - number
    - after a visit is finished (aka the stylist checks them out), the time it took adds to the stylist's hours


## visit
<!-- BASIC INFORMATION -->
- client * 
    - client ref
- stylist * 
    - stylist ref
- date *
    - Date
- service * 
    - string
- notes 
    - string
<!-- ADVANCED INFORMATION -->
- hair condition
- hair classification
- scalp condition
- hair texture
- growth patterns
- hair density
- hair porosity
- hair elasticity
- hair length
- allergies
- health conditions
    - all strings, use the same options that were listed on the example site

# routes

## home page
- get new visit
- find client
- find stylist
