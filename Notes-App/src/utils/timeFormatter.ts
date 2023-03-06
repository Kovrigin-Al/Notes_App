export const timeFormatter = (time: number): string => {
    const timeDifferenceUnix = Date.now() - time;
    const timeDifference = new Date(timeDifferenceUnix); // Thu Jan 01 1970 04:00:00...

    const pluralize = (noun: string, count: number, suffix = 's') =>
        `${count} ${noun}${count !== 1 ? suffix : ''}`;

    // returns date in format dd.mm.yyyy
    const dateFormater = new Intl.DateTimeFormat(undefined, {
        dateStyle: "short",
    });

    //returns time in format hh:mm
    const timeFormater = new Intl.DateTimeFormat(undefined, {
        timeStyle: "short",
    });

    //if less than a minute ago
    if (timeDifference.getTime() < 60 * 1000) {
        return timeFormater.format(time)
    }

    // if less than an hour ago
    if (timeDifference.getTime() < 60 * 60 * 1000) {
        return `${pluralize("minute", timeDifference.getMinutes(), 's')} ago`
    }

    // if less than a day ago
    if (timeDifference.getTime() < 60 * 60 * 24 * 1000) {
        return `${pluralize("hour", timeDifference.getHours(), 's')} ago`
    }

    // if more than a day ago
    return dateFormater.format(time)
}