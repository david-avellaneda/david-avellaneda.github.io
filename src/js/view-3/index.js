import { APICountries } from './api_countries.js';
import { countryInfo } from './country_info.js';
import { customSelect } from './custom_select.js';
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('index')) {
        customSelect();
        APICountries();
    };
    if (document.body.classList.contains('country')) {
        countryInfo();
    };
});