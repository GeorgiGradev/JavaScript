class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.soldTickets = 0;
        this.totalProfit = 0;
    }

    newScreening(date, hall, description) {
        if (this.screenings.some(x => x.date === date && x.hall === hall) === true) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        this.screenings.push({ date, hall, description });
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        const currentScreening = this.screenings.find(x => x.date === date && x.hall === hall);
        if (!currentScreening) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        const currentProfit = this.ticketPrice * soldTickets;
        this.soldTickets += soldTickets;
        this.totalProfit += currentProfit;
        const index = this.screenings.indexOf(currentScreening);
        this.screenings.splice(index, 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;

    }

    toString() {
        const output = [];
        output.push(`${this.movieName} full information:`);
        output.push(`Total profit: ${this.totalProfit.toFixed(0)}$`);
        output.push(`Sold Tickets: ${this.soldTickets}`);

        if (this.screenings.length > 0) {
            output.push(`Remaining film screenings:`);
            for (const screening of this.screenings.sort((a, b) => a.hall.localeCompare(b.hall))) {
                output.push(`${screening.hall} - ${screening.date} - ${screening.description}`);

            }
        } else {
            output.push(`No more screenings!`);
        };

        return output.join('\n');

    }
}