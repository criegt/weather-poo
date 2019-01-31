export class Weather {

    constructor(city, countryCode) {
        this.api = '4c1264e704b36afc61e777128632990b'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.api}&units=metric`
        const response = await fetch(URI)
        const data = await response.json()
        return data
    }

    changeLocation(city, countryCode) {
        this.city = city
        this.countryCode = countryCode
    }

}