# classnames, BEM and Sass

We will create a small UI library here which will use classnames, BEM and Sass for styling

## Tasks

### Voting buttons

- Create a `VotingButtons` component with five voting buttons Camel, Duck, Donut, Potato and Mash Potato.
- When a button is clicked, display it in different style to mark it as `selected`.
- Ensure that no more than one voting button can be selected at a time.

### Country selector

- Create a `CountrySelector` component. It should have 2 parts
  - A text input which displays the country selected
  - A popup div underneath which displays a list of countries
- You may want to use `{overflow-y: scroll}` and `{position: absolute}` on the popup to display it correctly with a fixed height and a scroll bar.
- When the `CountrySelector` component receives a `focus` event it should display the popup with list of countries underneath.
- When the `CountrySelector` component receives a `blur` event it should hide the popup.
- When a country in the popup is clicked, set the name of the country as the value in the input.

**Stretch goals**

- When the `CountrySelector` is in focus and the country list is displayed, allow the user to navigate the list of countries using the up and down arrows.
- Allow the user to pick a country selected using above by pressing the 'Enter' key.
- Allow the user to filter the list of countries displayed using by the text entered into the input and implement it using a filter method

You can see an example of country input at [https://semantic-ui.com/modules/dropdown.html](https://semantic-ui.com/modules/dropdown.html) with all above features implemented in the `Search Selection` section.

### Datepicker

- Create a `Datepicker` component. It should have 2 parts
  - A text input which displays the date selected
  - A popup div underneath which displays a list of dates for current month
- When the component receives a blur event display the popup div underneath it. Hide the popup when component receives a blur event.
- Display current month name and a list of dates for current month in the popup. You may want to use the `moment` library to help you.
- When a date in popup is clicked display the date selected date in the text input part of the component in 'DD-MM-YYYY' format.
- When the input already has a date value, display the date in popup with a dark background
- Ensure that days in the past cannot be selected. Display days in the past as greyed out.
- Add arrow buttons on either side of the popup. Clicking the right button should change current month to next month and left button to previous month. Update the dates displayed on month changes.
- When the month selected is not the current month, make sure that when the popup opens the month is set to month selected rather than current month.

## Stretch goals
- Display days of the week as two letters at the top of the popup. Make sure that the dates displayed underneath correspond to days of the week above. Ensure this behaviour is consistent as months change.
- Create a date range selector which uses two date pickers to allow users to select a start date and an end date. An end date should not be selectable after an end date and an end date should not be selectable before a start date.
