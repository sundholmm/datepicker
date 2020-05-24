const appSelectors = {
  singleDatepickerInput: '[data-cy="single-datepicker-input"]',
  daterangeInputStart: '[data-cy="daterange-input-start"]',
  daterangeInputEnd: '[data-cy="daterange-input-end"]',
  singleDatepickerInputParent: '[data-cy="single-datepicker-input-parent"]',
  daterangeInputsParent: '[data-cy="daterange-inputs-parent"]',
}

const dpContainer = '.qs-datepicker-container'
const dpCalendar =  '.qs-datepicker'

const datepickerSelectors = {
  single: {
    calendarContainer: `${appSelectors.singleDatepickerInputParent}${dpContainer}`,
    calendar: `${appSelectors.singleDatepickerInputParent}${dpCalendar}`,
  },
  range: {
    calendarContainer: `${appSelectors.daterangeInputsParent}${dpContainer}`,
    calendar: `${appSelectors.daterangeInputsParent}${dpCalendar}`,
  },
}

const selectors = {
  ...appSelectors,
  ...datepickerSelectors
}

export default selectors
