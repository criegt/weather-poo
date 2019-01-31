export class Store {

    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'Moscow'
        this.defaultCountry = 'ru'
    }

    getLocationData() {
        let city = localStorage.getItem('city')
        let countryCode = localStorage.getItem('countryCode')
        if(!city) {
            this.city = this.defaultCity
        } else {
            this.city = city
        }

        if(!countryCode) {
            this.countryCode = this.defaultCountry
        } else {
            this.countryCode = countryCode
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city', city)
        localStorage.setItem('countryCode', countryCode)
    }
}