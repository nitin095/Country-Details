# CountryDetails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Problem Statement
Check out the following API documentation -
https://restcountries.eu/
This Public API documentation gives you detailed information about various countries.
As a solution to this problem statement, you are supposed to create an Angular
application with following views -

### 1) All regions view 
A beautiful looking view displaying all the regions in the
world(you may use free images/icon available on web). On clicking one of the
regions, All Countries view should open

### 2) All countries view
This should display all the countries of the selected
region. There should be option to go back to previous view as well. This view
should should display countries in format of bootstrap cards with country flags
(image link available with api) as the image of the card and should display only
the important details of that particular country like Name, Capital, timezone,
Currency, Subregions etc. (you may choose to include more details as long as
the view doesn’t become too big). On clicking on a particular country in country
view, a detailed view of that country should open.

### 3) Single Country view
This view should use the flag of the country as cover
image and display all the information about the countries in different and well
differentiated sections of the page.

### 4) Currency Filter 
On clicking on currency name in any of the above view, all
countries view should open again but this time with a currency filter applied. I.e
it will display that currency filter has been applied, show the selected currency
and will should the country list which have the same currency(irrespective of the
region)

### 5) Language Filter 
On clicking a particular language in any of the above views,
All countries view should open again, but this time with a language filter applied.
I.e it will display the countries which have the selected language (irrespective of
the region).

### Here are some important points -

1. The given API comes with filter response feature. You must limit the response of
your API call to the data that you need.

2. You have to get data using HTTP request. Do not just download the JSON and
use it. You must create proper services to fetch the data and give it necessary
manipulations and then components to display it to the user.

3. Extra marks will be given for creating UI filters(dropdowns or search boxes) for
currency, language and region.

4. You must define proper Interfaces for all the expected data types and apply the
interfaces at all the points necessary. Codes without proper interfaces will loose
marks.
