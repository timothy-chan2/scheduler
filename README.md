# Interview Scheduler

Interview Scheduler is a React application that allows users to book, edit, and cancel interviews. The spots remaining is automatically updated after booking or cancelling an interview.

## Final Product

!["screenshot of main page"](https://github.com/timothy-chan2/scheduler/blob/master/docs/scheduler.png?raw=true)

!["screenshot of new filled form"](https://github.com/timothy-chan2/scheduler/blob/master/docs/appointment-form-new.png?raw=true)

!["screenshot of saved appointment"](https://github.com/timothy-chan2/scheduler/blob/master/docs/appointment-form-saved.png?raw=true)

!["screenshot of confirm delete"](https://github.com/timothy-chan2/scheduler/blob/master/docs/appointment-confirm-cancel.png?raw=true)

## Getting Started

1. Fork the repository to your GitHub account.
2. Clone the repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>.
5. In a second terminal, start the scheduler API using the `npm start` command and will be listening on port 8001.
6. If your PostgreSQL database is on your virtual machine then in a third terminal start your virtual machine.
7. Go to <http://localhost:8000/> in your browser.

## Dependencies

- axios
- classnames
- react
- react-dom
- react-scripts
- normalize.css



## Development

The following were used in the testing of the app:

- Jest
- Storybook
- Cypress