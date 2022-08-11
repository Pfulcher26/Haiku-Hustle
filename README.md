# ***HAIKU HUSTLE!***

*Endless chances at perfection.*

## What is Haiku Hustle? 

Haiku Hustle is an educational game that presents users with three lines of haiku sorted into a random order. It is up to the user to arrange the lines in the correct order. Gameplay takes place across nine rounds with a point awarded for every correct ordering.     

Although this may seem like an easy game to win, consider that many haikus can be rearranged in random order and still read correctly.

For example: 
>From time to time

>The clouds give rest

>To the moon-beholders

This could be written in any of the following ways and still make sense: 

1
>From time to time 

>the clouds give rest

>to the moon-beholders

2
>The clouds give rest 

>To the moon-beholders 

>From time to time 

3
>To the moon-beholders

>From time to time

>The clouds give rest

## Game as Education 

Haiku Hustle provides users with an immersive and relaxing puzzle-based experience, as well as a mechanism by which the user can absorb the structure of haiku and the variety within its structure.  The ultimate goal is for users to become more aware of haiku through intuitive repetition-based tasks in a low stress environment.  

As a former educator and language instructor, my goal is the harmonization of humanities and tech.  I am interested in developing products that help others grow through learning and hopefully sparking people's interest in the arts.  


## Aesthetic Philosophy 

Haiku Hustle is designed with a minimal aesthetic that relies on precise design to guide the user along using their intuition without needing to bluntly state what is expected.  There are many easter eggs built into the design that allows for a deeper level of immersion.  The use of Japanese kanyo ongaku, or environmental music, notably the song Feet from Hiroshi Yoshimura's seminal work Green, creates a sublime space in which learning can be achieved on an almost subconscious level.  

Follow <a  href="https://whimsical.com/haiku-hustle-7irmdD9BYZ5TQtgc2UZ25t" target="_blank">this</a> link to see a rough draft of the UI created with Whimsical. 

![Screenshot of gameplay of wireframe for Haiku Hustle made using Whimsical](https://i.imgur.com/VvksbBm.png)



See the finished UI in the screenshot below: 

![Screenshot of gameplay screen for Haiku Hustle](https://i.imgur.com/VvDRhtd.png)


## Technologies Used

Haiku Hustle is created with HTML, CSS, CSS Bootstrap and vanilla Javascript.  The aspect of code development that I found most engaging was creating code from scratch that allowed users to freely sort the lines of haiku.  Originally I researched templates for a sortable list, but in the end decided to make my own.  I hope to refactor my code further, so that it appears as lapidary and elegant as a good haiku. 

## Installation 

Simply open <a  href="https://haiku-hustle.netlify.app/"  target="_blank">this link</a> and start haiku-ing to your heart's content. 

## Project Hurdles

As aforementioned, I needed to develop a sortable list.  While there were many templates online, I wanted to create my own.  The solution I came up with utilizes a loop to add event listeners to the DOM elements containing the haiku lines.  The logic relies on caching the innerHTML of the current element and assigning it to a global variable.  The current element is then assigned to a series of variables that store different properties of the current element under the heading of previous element, previous index, etc.  These are then used to swap the content of the next element selected with the content of the previous element to effectively allow the two DOM elements to exchange their ids and HTML content.  

![Screenshot showing code for sortable list laid out in VS Code](https://i.imgur.com/KvAicM8.png
)

## Future Development Plans
I would like to incorporate more haiku to choose from, additional functionality in the form of lightning rounds that challenge a user's knowledge within a timed setting, as well as create responsiveness for mobile devices and potentially even develop the core idea further into a full-fledged app. 

## Contact 
Please feel free to contact me with any ideas regarding this project.  I enthusiastically encourage any outside contributions!  

[Github Repository](https://github.com/Pfulcher26/Project-One-)

Email: pfulcher26@gmail.com 

[LinkedIn](https://www.linkedin.com/in/payne-fulcher/)




