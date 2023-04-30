import { parse, formatISO } from 'date-fns';

// from question
const dateString = '5 May 2021 at 2pm';

const dateObject = parse(dateString, 'd MMM yyyy \'at\' ha', new Date());
export const TODAY_ISO_DATE = formatISO(dateObject); // Output: 2021-05-05T14:00:00+05:30
