"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Flag from 'react-flagkit';

const countries = [
  { name: 'Afghanistan', flag: 'AF', link: '/afghanistan' },
  { name: 'Albania', flag: 'AL', link: '/albania' },
  { name: 'Algeria', flag: 'DZ', link: '/algeria' },
  { name: 'Andorra', flag: 'AD', link: '/andorra' },
  { name: 'Angola', flag: 'AO', link: '/angola' },
  { name: 'Antigua', flag: 'AG', link: '/antigua-and-barbuda' },
  { name: 'Argentina', flag: 'AR', link: '/argentina' },
  { name: 'Armenia', flag: 'AM', link: '/armenia' },
  { name: 'Australia', flag: 'AU', link: '/australia' },
  { name: 'Austria', flag: 'AT', link: '/austria' },
  { name: 'Bahamas', flag: 'BS', link: '/bahamas' },
  { name: 'Bahrain', flag: 'BH', link: '/bahrain' },
  { name: 'Bangladesh', flag: 'BD', link: '/bangladesh' },
  { name: 'Barbados', flag: 'BB', link: '/barbados' },
  { name: 'Belarus', flag: 'BY', link: '/belarus' },
  { name: 'Belgium', flag: 'BE', link: '/belgium' },
  { name: 'Belize', flag: 'BZ', link: '/belize' },
  { name: 'Benin', flag: 'BJ', link: '/benin' },
  { name: 'Bhutan', flag: 'BT', link: '/bhutan' },
  { name: 'Bolivia', flag: 'BO', link: '/bolivia' },
  { name: 'Botswana', flag: 'BW', link: '/botswana' },
  { name: 'Brazil', flag: 'BR', link: '/brazil' },
  { name: 'Brunei', flag: 'BN', link: '/brunei' },
  { name: 'Bulgaria', flag: 'BG', link: '/bulgaria' },
  { name: 'Burkina Faso', flag: 'BF', link: '/burkina-faso' },
  { name: 'Burundi', flag: 'BI', link: '/burundi' },
  { name: 'Cabo Verde', flag: 'CV', link: '/cabo-verde' },
  { name: 'Cambodia', flag: 'KH', link: '/cambodia' },
  { name: 'Cameroon', flag: 'CM', link: '/cameroon' },
  { name: 'Canada', flag: 'CA', link: '/canada' },
  { name: 'Cf Republic', flag: 'CF', link: '/central-african-republic' },
  { name: 'Chad', flag: 'TD', link: '/chad' },
  { name: 'Chile', flag: 'CL', link: '/chile' },
  { name: 'China', flag: 'CN', link: '/china' },
  { name: 'Colombia', flag: 'CO', link: '/colombia' },
  { name: 'Comoros', flag: 'KM', link: '/comoros' },
  { name: 'Congo', flag: 'CG', link: '/congo' },
  { name: 'Costa Rica', flag: 'CR', link: '/costa-rica' },
  { name: 'Croatia', flag: 'HR', link: '/croatia' },
  { name: 'Cuba', flag: 'CU', link: '/cuba' },
  { name: 'Cyprus', flag: 'CY', link: '/cyprus' },
  { name: 'Czech Republic', flag: 'CZ', link: '/czech-republic' },
  { name: 'Denmark', flag: 'DK', link: '/denmark' },
  { name: 'Djibouti', flag: 'DJ', link: '/djibouti' },
  { name: 'Dominica', flag: 'DM', link: '/dominica' },
  { name: 'Ecuador', flag: 'EC', link: '/ecuador' },
  { name: 'Egypt', flag: 'EG', link: '/egypt' },
  { name: 'El Salvador', flag: 'SV', link: '/el-salvador' },
  { name: 'Eritrea', flag: 'ER', link: '/eritrea' },
  { name: 'Estonia', flag: 'EE', link: '/estonia' },
  { name: 'Eswatini', flag: 'SZ', link: '/eswatini' },
  { name: 'Ethiopia', flag: 'ET', link: '/ethiopia' },
  { name: 'Fiji', flag: 'FJ', link: '/fiji' },
  { name: 'Finland', flag: 'FI', link: '/finland' },
  { name: 'France', flag: 'FR', link: '/france' },
  { name: 'Gabon', flag: 'GA', link: '/gabon' },
  { name: 'Gambia', flag: 'GM', link: '/gambia' },
  { name: 'Georgia', flag: 'GE', link: '/georgia' },
  { name: 'Germany', flag: 'DE', link: '/germany' },
  { name: 'Ghana', flag: 'GH', link: '/ghana' },
  { name: 'Greece', flag: 'GR', link: '/greece' },
  { name: 'Grenada', flag: 'GD', link: '/grenada' },
  { name: 'Guatemala', flag: 'GT', link: '/guatemala' },
  { name: 'Guinea', flag: 'GN', link: '/guinea' },
  { name: 'Guinea-Bissau', flag: 'GW', link: '/guinea-bissau' },
  { name: 'Guyana', flag: 'GY', link: '/guyana' },
  { name: 'Haiti', flag: 'HT', link: '/haiti' },
  { name: 'Honduras', flag: 'HN', link: '/honduras' },
  { name: 'Hungary', flag: 'HU', link: '/hungary' },
  { name: 'Iceland', flag: 'IS', link: '/iceland' },
  { name: 'India', flag: 'IN', link: '/india' },
  { name: 'Indonesia', flag: 'ID', link: '/indonesia' },
  { name: 'Iran', flag: 'IR', link: '/iran' },
  { name: 'Iraq', flag: 'IQ', link: '/iraq' },
  { name: 'Ireland', flag: 'IE', link: '/ireland' },
  { name: 'Israel', flag: 'IL', link: '/israel' },
  { name: 'Italy', flag: 'IT', link: '/italy' },
  { name: 'Jamaica', flag: 'JM', link: '/jamaica' },
  { name: 'Japan', flag: 'JP', link: '/japan' },
  { name: 'Jordan', flag: 'JO', link: '/jordan' },
  { name: 'Kazakhstan', flag: 'KZ', link: '/kazakhstan' },
  { name: 'Kenya', flag: 'KE', link: '/kenya' },
  { name: 'Kiribati', flag: 'KI', link: '/kiribati' },
  { name: 'Kuwait', flag: 'KW', link: '/kuwait' },
  { name: 'Kyrgyzstan', flag: 'KG', link: '/kyrgyzstan' },
  { name: 'Laos', flag: 'LA', link: '/laos' },
  { name: 'Latvia', flag: 'LV', link: '/latvia' },
  { name: 'Lebanon', flag: 'LB', link: '/lebanon' },
  { name: 'Lesotho', flag: 'LS', link: '/lesotho' },
  { name: 'Liberia', flag: 'LR', link: '/liberia' },
  { name: 'Libya', flag: 'LY', link: '/libya' },
  { name: 'Liechtenstein', flag: 'LI', link: '/liechtenstein' },
  { name: 'Lithuania', flag: 'LT', link: '/lithuania' },
  { name: 'Luxembourg', flag: 'LU', link: '/luxembourg' },
  { name: 'Madagascar', flag: 'MG', link: '/madagascar' },
  { name: 'Malawi', flag: 'MW', link: '/malawi' },
  { name: 'Malaysia', flag: 'MY', link: '/malaysia' },
  { name: 'Maldives', flag: 'MV', link: '/maldives' },
  { name: 'Mali', flag: 'ML', link: '/mali' },
  { name: 'Malta', flag: 'MT', link: '/malta' },
  { name: 'Marshall Islands', flag: 'MH', link: '/marshall-islands' },
  { name: 'Mauritania', flag: 'MR', link: '/mauritania' },
  { name: 'Mauritius', flag: 'MU', link: '/mauritius' },
  { name: 'Mexico', flag: 'MX', link: '/mexico' },
  { name: 'Micronesia', flag: 'FM', link: '/micronesia' },
  { name: 'Moldova', flag: 'MD', link: '/moldova' },
  { name: 'Monaco', flag: 'MC', link: '/monaco' },
  { name: 'Mongolia', flag: 'MN', link: '/mongolia' },
  { name: 'Montenegro', flag: 'ME', link: '/montenegro' },
  { name: 'Morocco', flag: 'MA', link: '/morocco' },
  { name: 'Mozambique', flag: 'MZ', link: '/mozambique' },
  { name: 'Myanmar', flag: 'MM', link: '/myanmar' },
  { name: 'Namibia', flag: 'NA', link: '/namibia' },
  { name: 'Nauru', flag: 'NR', link: '/nauru' },
  { name: 'Nepal', flag: 'NP', link: '/nepal' },
  { name: 'Netherlands', flag: 'NL', link: '/netherlands' },
  { name: 'New Zealand', flag: 'NZ', link: '/new-zealand' },
  { name: 'Nicaragua', flag: 'NI', link: '/nicaragua' },
  { name: 'Niger', flag: 'NE', link: '/niger' },
  { name: 'Nigeria', flag: 'NG', link: '/nigeria' },
  { name: 'North Korea', flag: 'KP', link: '/north-korea' },
  { name: 'North Macedonia', flag: 'MK', link: '/north-macedonia' },
  { name: 'Norway', flag: 'NO', link: '/norway' },
  { name: 'Oman', flag: 'OM', link: '/oman' },
  { name: 'Pakistan', flag: 'PK', link: '/pakistan' },
  { name: 'Palau', flag: 'PW', link: '/palau' },
  { name: 'Palestine', flag: 'PS', link: '/palestine' },
  { name: 'Panama', flag: 'PA', link: '/panama' },
  { name: 'Papua New Guinea', flag: 'PG', link: '/papua-new-guinea' },
  { name: 'Paraguay', flag: 'PY', link: '/paraguay' },
  { name: 'Peru', flag: 'PE', link: '/peru' },
  { name: 'Philippines', flag: 'PH', link: '/philippines' },
  { name: 'Poland', flag: 'PL', link: '/poland' },
  { name: 'Portugal', flag: 'PT', link: '/portugal' },
  { name: 'Qatar', flag: 'QA', link: '/qatar' },
  { name: 'Romania', flag: 'RO', link: '/romania' },
  { name: 'Russia', flag: 'RU', link: '/russia' },
  { name: 'Rwanda', flag: 'RW', link: '/rwanda' },
  { name: 'Saint Kitts and Nevis', flag: 'KN', link: '/saint-kitts-and-nevis' },
  { name: 'Saint Lucia', flag: 'LC', link: '/saint-lucia' },
  { name: 'Saint Vincent', flag: 'VC', link: '/saint-vincent-and-the-grenadines' },
  { name: 'Samoa', flag: 'WS', link: '/samoa' },
  { name: 'San Marino', flag: 'SM', link: '/san-marino' },
  { name: 'Sao Tome and Principe', flag: 'ST', link: '/sao-tome-and-principe' },
  { name: 'Saudi Arabia', flag: 'SA', link: '/saudi-arabia' },
  { name: 'Senegal', flag: 'SN', link: '/senegal' },
  { name: 'Serbia', flag: 'RS', link: '/serbia' },
  { name: 'Seychelles', flag: 'SC', link: '/seychelles' },
  { name: 'Sierra Leone', flag: 'SL', link: '/sierra-leone' },
  { name: 'Singapore', flag: 'SG', link: '/singapore' },
  { name: 'Slovakia', flag: 'SK', link: '/slovakia' },
  { name: 'Slovenia', flag: 'SI', link: '/slovenia' },
  { name: 'Solomon Islands', flag: 'SB', link: '/solomon-islands' },
  { name: 'Somalia', flag: 'SO', link: '/somalia' },
  { name: 'South Africa', flag: 'ZA', link: '/south-africa' },
  { name: 'South Korea', flag: 'KR', link: '/south-korea' },
  { name: 'South Sudan', flag: 'SS', link: '/south-sudan' },
  { name: 'Spain', flag: 'ES', link: '/spain' },
  { name: 'Sri Lanka', flag: 'LK', link: '/sri-lanka' },
  { name: 'Sudan', flag: 'SD', link: '/sudan' },
  { name: 'Suriname', flag: 'SR', link: '/suriname' },
  { name: 'Sweden', flag: 'SE', link: '/sweden' },
  { name: 'Switzerland', flag: 'CH', link: '/switzerland' },
  { name: 'Syria', flag: 'SY', link: '/syria' },
  { name: 'Taiwan', flag: 'TW', link: '/taiwan' },
  { name: 'Tajikistan', flag: 'TJ', link: '/tajikistan' },
  { name: 'Tanzania', flag: 'TZ', link: '/tanzania' },
  { name: 'Thailand', flag: 'TH', link: '/thailand' },
  { name: 'Timor-Leste', flag: 'TL', link: '/timor-leste' },
  { name: 'Togo', flag: 'TG', link: '/togo' },
  { name: 'Tonga', flag: 'TO', link: '/tonga' },
  { name: 'Trinidad and Tobago', flag: 'TT', link: '/trinidad-and-tobago' },
  { name: 'Tunisia', flag: 'TN', link: '/tunisia' },
  { name: 'Turkey', flag: 'TR', link: '/turkey' },
  { name: 'Turkmenistan', flag: 'TM', link: '/turkmenistan' },
  { name: 'Tuvalu', flag: 'TV', link: '/tuvalu' },
  { name: 'Uganda', flag: 'UG', link: '/uganda' },
  { name: 'Ukraine', flag: 'UA', link: '/ukraine' },
  { name: 'United Arab Emirates', flag: 'AE', link: '/united-arab-emirates' },
  { name: 'United Kingdom', flag: 'GB', link: '/united-kingdom' },
  { name: 'United States', flag: 'US', link: '/united-states' },
  { name: 'Uruguay', flag: 'UY', link: '/uruguay' },
  { name: 'Uzbekistan', flag: 'UZ', link: '/uzbekistan' },
  { name: 'Vanuatu', flag: 'VU', link: '/vanuatu' },
  { name: 'Vatican City', flag: 'VA', link: '/vatican-city' },
  { name: 'Venezuela', flag: 'VE', link: '/venezuela' },
  { name: 'Vietnam', flag: 'VN', link: '/vietnam' },
  { name: 'Yemen', flag: 'YE', link: '/yemen' },
  { name: 'Zambia', flag: 'ZM', link: '/zambia' },
  { name: 'Zimbabwe', flag: 'ZW', link: '/zimbabwe' },
];

const ITEMS_PER_PAGE = 12; // Number of items to show per page

const CountryList = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  return (
    <div className="container mx-auto px-4 w-[95%] md:w-[60%] pt-5">
      <h1 className="text-3xl font-bold text-center my-8">Shop eSIM by country</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {countries.slice(0, visibleItems).map((country, index) => (
          <Link key={index} href={country.link}>
            <div className="border rounded-lg hover:border-blue-300 border-gray-300 p-4 flex items-center justify-center text-center transition-colors duration-200 hover:bg-blue-100">
              <Flag country={country.flag} className="mr-2" />
              <span>{country.name}</span>
            </div>
          </Link>
        ))}
      </div>
      {visibleItems < countries.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};


export default CountryList;
