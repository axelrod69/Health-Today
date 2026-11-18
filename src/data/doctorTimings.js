// Hours are shared across locales; day labels and closed messages are translated.
export const doctorTimings = {
    partha: {
        name: 'common.drParthaPratimPaul',
        weekday: ['09:00 AM - 02:00 PM', '06:30 PM - 10:00 PM'],
        days: {
            saturday: [null, '05:00 PM - 10:00 PM'],
            sunday: ['09:00 AM - 02:00 PM', null],
        },
    },
    banya: {
        name: 'common.drBanyaGhoshPaul',
        weekday: [null, '07:30 PM - 09:00 PM'],
        days: {
            wednesday: ['12:00 PM - 02:00 PM', '07:30 PM - 09:00 PM'],
            friday: ['12:00 PM - 02:00 PM', '07:30 PM - 09:00 PM'],
            saturday: [null, '07:30 PM - 09:00 PM'],
            sunday: ['12:00 PM - 02:00 PM', null],
        },
    },
}
