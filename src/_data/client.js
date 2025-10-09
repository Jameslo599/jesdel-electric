module.exports = {
  name: 'Jesdel Electric',
  email: 'jesdelectric@gmail.com',
  phoneForTel: '469-951-1877',
  phoneFormatted: '(469) 951-1877',
  address: {
    lineOne: '1209 North Saginaw Blvd',
    lineTwo: 'Suite G #224',
    city: 'Saginaw',
    state: 'TX',
    zip: '76179',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/RDDADveM515Ebrhp6',
  },
  socials: {
    facebook: 'https://www.facebook.com/p/Jesdel-Electric-LLC-100054672044726/',
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: 'https://www.jesdelectric.com',
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === 'PROD',
};
