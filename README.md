# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

In this code 
###
 `var currentTime = new Date().toLocaleTimeString();`

This line initializes the currentTime variable with the current time in the format based on the user's locale settings. For example, it might look like "12:34:56 PM" or "14:34:56" depending on the user's system settings.

`console.log(currentTime);`

This line prints the initial value of currentTime to the console.

`const [clock, setClock] = useState(currentTime);`

This line declares a state variable clock using the useState hook and sets its initial value to currentTime. The setClock function is used to update the value of clock.

`const updatedTime = () => { ... }`

This line declares a function called updatedTime. This function will be used to update the clock state variable.

`var currentTime = new Date().toLocaleTimeString();`

Inside the updatedTime function, this line updates the currentTime variable with the current time.

`setClock(currentTime);`

This line calls the setClock function to update the value of the clock state variable with the new currentTime value.

`setInterval(updatedTime, 1000);`

This line sets up an interval that calls the updatedTime function every 1000 milliseconds (1 second). It ensures that the clock state variable is updated with the current time every second.

Overall, this code initializes the clock state variable with the current time and then updates it every second using setInterval and the updatedTime function. This allows you to display a live clock that continuously shows the current time and updates dynamically.