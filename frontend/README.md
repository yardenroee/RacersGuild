# Racer's Guild

Hi Truveris!
I have dployed this project to https://racers-guild.web.app/ to skip the process of having to clone and serve locally.

``Total time to complete: 2 hours``

## Dev Notes:
This project was a lot of fun to work on. I felt that the assignment and instructions were straight-forward but left a lot of room for imagination with how to implement the solution. I decided that, for the sake of time, I would maintain the design as layed out by the screenshots, but I also made some design decisions that were implied by the layout itself (transitions, flex, pointers, etc.) to smooth out the app.

I liked that there were nice little challenges within the provided data that required more complex logic rather than just plugging in values where they belong. I enjoyed writing a sorting function to sort players based upon score, I enjoyed creating a huamn readable date from the UTC format, and I liked that I had to add a color attribute to each player's object, as well as using the name from the object with a `.toLowerCase()` function to properly route the images. All of those little "quirks" made the assignment really enjoyable for me and I commend the creator of the assignment for thinking of those challanges.

### Technical Choices I Made:
  ``Vue.JS``
  Vue as a framework is my go to choice. I feel that it is the most digestible for both the developer and perhaps a peer who is looking/reviewing at the code as it is readable and aligns with a simple HTML construct rather than complex frameworks that are very syntax heavy.
  #
  ``Firebase``
  I used Firebase to deploy because it is a tool that I am very familiar with, as well as free to deploy. The Firebase CLI makes it easy to deploy from the local machine so long you have right configuration, which can be generated through simple shell prompts. 
  #
  ``SCSS``
  SCSS is perhaps the most intuitive understanding of CSS. The syntax is really light on the user, and is very flexible while allowing for clean code base through nesting.
  

## But if you'd like to install locally here is how:
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
