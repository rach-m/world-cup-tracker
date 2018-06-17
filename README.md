# 🌍 🏆 Goal Tracker React Challenge

Your ...goal... is to add specified react components onto this existing react app which displays completed or in-progress 2018 World Cup games.

![Screenshot](screenshot.png)

The existing react app is fetching data from this open World Cup JSON api - http://worldcup.sfg.io/

You should do the following -

- make a "GoalTimeLine" component that takes the relevant props and displays a soccer ball emoji - ⚽️ - in a position that indicates the time it was scored in the game

- hovering over the soccer ball should display another component GoalDetails that shows the time of goal and who scored it

HINTS:

- You will need to only render the events for each team which are goal events. Think about which array method you could use to get just the events you want.

- You can position the soccer balls using absolute position (so long as you have them in a container with position relative), and give them a left position that is equal to the time of the goal.

- You will need to massage the goal time string from the JSON api, to remove the apostrophe indicating minutes, ie change _40'_ to _40_

- you can apply styles using react like so https://zhenyong.github.io/react/tips/inline-styles.html

- for the "tooltip" style goal detail you can use another absolute position element _ inside _ the element containing the positioned soccer ball

- you can use CSS to conditionally render the tooltip without javascript by using nested css like _.soccer-ball:.tooltip { display: none}_ and _.soccer-ball:hover .tooltip { display: block}_

- here is the color theme I used to start https://color.adobe.com/Soccer-Field-color-theme-598535/edit/

BONUSES:

- Further format the time string so that goals scored after regulation (in minutes after 90) display in the proper position

- Show games that are scheduled to happen at bottom of game list with differentiated styling

- Use a CSS Grid layout to display the games two to a row

- Have a total total goal count tracker at the top of the page

- Deploy your app to [https://www.netlify.com/](https://www.netlify.com/)
