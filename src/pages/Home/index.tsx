import { useEffect, useState } from 'react';

import Input from '~/components/UI/Input';
import Select from '~/components/UI/Select';
import Textarea from '~/components/UI/Textarea';
import { ruleType } from '~/utils/validate/ruleType';

const RADIOLIST = [
  {
    id: '<18',
    value: '<18',
    label: '<18',
  },
  {
    id: '19-35',
    value: '19-35',
    label: '19-35',
  },
  {
    id: '36-48',
    value: '36-48',
    label: '36-48',
  },
  {
    id: '>49',
    value: '>49',
    label: '>49',
  },
];

const COUNTRYLIST = [
  { label: 'Afghanistan', value: 'AF', id: 1 },
  { label: 'Aland Islands', value: 'AX', id: 2 },
  { label: 'Albania', value: 'AL', id: 3 },
  { label: 'Algeria', value: 'DZ', id: 4 },
  { label: 'American Samoa', value: 'AS', id: 5 },
  { label: 'Andorra', value: 'AD', id: 6 },
  { label: 'Angola', value: 'AO', id: 7 },
  { label: 'Anguilla', value: 'AI', id: 8 },
  { label: 'Antarctica', value: 'AQ', id: 9 },
  { label: 'Antigua and Barbuda', value: 'AG', id: 10 },
  { label: 'Argentina', value: 'AR', id: 11 },
  { label: 'Armenia', value: 'AM', id: 12 },
  { label: 'Aruba', value: 'AW', id: 13 },
  { label: 'Australia', value: 'AU', id: 14 },
  { label: 'Austria', value: 'AT', id: 15 },
  { label: 'Azerbaijan', value: 'AZ', id: 16 },
  { label: 'Bahamas', value: 'BS', id: 17 },
  { label: 'Bahrain', value: 'BH', id: 18 },
  { label: 'Bangladesh', value: 'BD', id: 19 },
  { label: 'Barbados', value: 'BB', id: 20 },
  { label: 'Belarus', value: 'BY', id: 21 },
  { label: 'Belgium', value: 'BE', id: 22 },
  { label: 'Belize', value: 'BZ', id: 23 },
  { label: 'Benin', value: 'BJ', id: 24 },
  { label: 'Bermuda', value: 'BM', id: 25 },
  { label: 'Bhutan', value: 'BT', id: 26 },
  { label: 'Bolivia', value: 'BO', id: 27 },
  { label: 'Bonaire, Sint Eustatius and Saba', value: 'BQ', id: 28 },
  { label: 'Bosnia and Herzegovina', value: 'BA', id: 29 },
  { label: 'Botswana', value: 'BW', id: 30 },
  { label: 'Bouvet Island', value: 'BV', id: 31 },
  { label: 'Brazil', value: 'BR', id: 32 },
  { label: 'British Indian Ocean Territory', value: 'IO', id: 33 },
  { label: 'Brunei Darussalam', value: 'BN', id: 34 },
  { label: 'Bulgaria', value: 'BG', id: 35 },
  { label: 'Burkina Faso', value: 'BF', id: 36 },
  { label: 'Burundi', value: 'BI', id: 37 },
  { label: 'Cambodia', value: 'KH', id: 38 },
  { label: 'Cameroon', value: 'CM', id: 39 },
  { label: 'Canada', value: 'CA', id: 40 },
  { label: 'Cape Verde', value: 'CV', id: 41 },
  { label: 'Cayman Islands', value: 'KY', id: 42 },
  { label: 'Central African Republic', value: 'CF', id: 43 },
  { label: 'Chad', value: 'TD', id: 44 },
  { label: 'Chile', value: 'CL', id: 45 },
  { label: 'China', value: 'CN', id: 46 },
  { label: 'Christmas Island', value: 'CX', id: 47 },
  { label: 'Cocos (Keeling) Islands', value: 'CC', id: 48 },
  { label: 'Colombia', value: 'CO', id: 49 },
  { label: 'Comoros', value: 'KM', id: 50 },
  { label: 'Congo', value: 'CG', id: 51 },
  { label: 'Congo, Democratic Republic of the Congo', value: 'CD', id: 52 },
  { label: 'Cook Islands', value: 'CK', id: 53 },
  { label: 'Costa Rica', value: 'CR', id: 54 },
  { label: "Cote D'Ivoire", value: 'CI', id: 55 },
  { label: 'Croatia', value: 'HR', id: 56 },
  { label: 'Cuba', value: 'CU', id: 57 },
  { label: 'Curacao', value: 'CW', id: 58 },
  { label: 'Cyprus', value: 'CY', id: 59 },
  { label: 'Czech Republic', value: 'CZ', id: 60 },
  { label: 'Denmark', value: 'DK', id: 61 },
  { label: 'Djibouti', value: 'DJ', id: 62 },
  { label: 'Dominica', value: 'DM', id: 63 },
  { label: 'Dominican Republic', value: 'DO', id: 64 },
  { label: 'Ecuador', value: 'EC', id: 65 },
  { label: 'Egypt', value: 'EG', id: 66 },
  { label: 'El Salvador', value: 'SV', id: 67 },
  { label: 'Equatorial Guinea', value: 'GQ', id: 68 },
  { label: 'Eritrea', value: 'ER', id: 69 },
  { label: 'Estonia', value: 'EE', id: 70 },
  { label: 'Ethiopia', value: 'ET', id: 71 },
  { label: 'Falkland Islands (Malvinas)', value: 'FK', id: 72 },
  { label: 'Faroe Islands', value: 'FO', id: 73 },
  { label: 'Fiji', value: 'FJ', id: 74 },
  { label: 'Finland', value: 'FI', id: 75 },
  { label: 'France', value: 'FR', id: 76 },
  { label: 'French Guiana', value: 'GF', id: 77 },
  { label: 'French Polynesia', value: 'PF', id: 78 },
  { label: 'French Southern Territories', value: 'TF', id: 79 },
  { label: 'Gabon', value: 'GA', id: 80 },
  { label: 'Gambia', value: 'GM', id: 81 },
  { label: 'Georgia', value: 'GE', id: 82 },
  { label: 'Germany', value: 'DE', id: 83 },
  { label: 'Ghana', value: 'GH', id: 84 },
  { label: 'Gibraltar', value: 'GI', id: 85 },
  { label: 'Greece', value: 'GR', id: 86 },
  { label: 'Greenland', value: 'GL', id: 87 },
  { label: 'Grenada', value: 'GD', id: 88 },
  { label: 'Guadeloupe', value: 'GP', id: 89 },
  { label: 'Guam', value: 'GU', id: 90 },
  { label: 'Guatemala', value: 'GT', id: 91 },
  { label: 'Guernsey', value: 'GG', id: 92 },
  { label: 'Guinea', value: 'GN', id: 93 },
  { label: 'Guinea-Bissau', value: 'GW', id: 94 },
  { label: 'Guyana', value: 'GY', id: 95 },
  { label: 'Haiti', value: 'HT', id: 96 },
  { label: 'Heard Island and McDonald Islands', value: 'HM', id: 97 },
  { label: 'Holy See (Vatican City State)', value: 'VA', id: 98 },
  { label: 'Honduras', value: 'HN', id: 99 },
  { label: 'Hong Kong', value: 'HK', id: 100 },
  { label: 'Hungary', value: 'HU', id: 101 },
  { label: 'Iceland', value: 'IS', id: 102 },
  { label: 'India', value: 'IN', id: 103 },
  { label: 'Indonesia', value: 'ID', id: 104 },
  { label: 'Iran, Islamic Republic of', value: 'IR', id: 105 },
  { label: 'Iraq', value: 'IQ', id: 106 },
  { label: 'Ireland', value: 'IE', id: 107 },
  { label: 'Isle of Man', value: 'IM', id: 108 },
  { label: 'Israel', value: 'IL', id: 109 },
  { label: 'Italy', value: 'IT', id: 110 },
  { label: 'Jamaica', value: 'JM', id: 111 },
  { label: 'Japan', value: 'JP', id: 112 },
  { label: 'Jersey', value: 'JE', id: 113 },
  { label: 'Jordan', value: 'JO', id: 114 },
  { label: 'Kazakhstan', value: 'KZ', id: 115 },
  { label: 'Kenya', value: 'KE', id: 116 },
  { label: 'Kiribati', value: 'KI', id: 117 },
  { label: "Korea, Democratic People's Republic of", value: 'KP', id: 118 },
  { label: 'Korea, Republic of', value: 'KR', id: 119 },
  { label: 'Kosovo', value: 'XK', id: 120 },
  { label: 'Kuwait', value: 'KW', id: 121 },
  { label: 'Kyrgyzstan', value: 'KG', id: 122 },
  { label: "Lao People's Democratic Republic", value: 'LA', id: 123 },
  { label: 'Latvia', value: 'LV', id: 124 },
  { label: 'Lebanon', value: 'LB', id: 125 },
  { label: 'Lesotho', value: 'LS', id: 126 },
  { label: 'Liberia', value: 'LR', id: 127 },
  { label: 'Libyan Arab Jamahiriya', value: 'LY', id: 128 },
  { label: 'Liechtenstein', value: 'LI', id: 129 },
  { label: 'Lithuania', value: 'LT', id: 130 },
  { label: 'Luxembourg', value: 'LU', id: 131 },
  { label: 'Macao', value: 'MO', id: 132 },
  { label: 'Macedonia, the Former Yugoslav Republic of', value: 'MK', id: 133 },
  { label: 'Madagascar', value: 'MG', id: 134 },
  { label: 'Malawi', value: 'MW', id: 135 },
  { label: 'Malaysia', value: 'MY', id: 136 },
  { label: 'Maldives', value: 'MV', id: 137 },
  { label: 'Mali', value: 'ML', id: 138 },
  { label: 'Malta', value: 'MT', id: 139 },
  { label: 'Marshall Islands', value: 'MH', id: 140 },
  { label: 'Martinique', value: 'MQ', id: 141 },
  { label: 'Mauritania', value: 'MR', id: 142 },
  { label: 'Mauritius', value: 'MU', id: 143 },
  { label: 'Mayotte', value: 'YT', id: 144 },
  { label: 'Mexico', value: 'MX', id: 145 },
  { label: 'Micronesia, Federated States of', value: 'FM', id: 146 },
  { label: 'Moldova, Republic of', value: 'MD', id: 147 },
  { label: 'Monaco', value: 'MC', id: 148 },
  { label: 'Mongolia', value: 'MN', id: 149 },
  { label: 'Montenegro', value: 'ME', id: 150 },
  { label: 'Montserrat', value: 'MS', id: 151 },
  { label: 'Morocco', value: 'MA', id: 152 },
  { label: 'Mozambique', value: 'MZ', id: 153 },
  { label: 'Myanmar', value: 'MM', id: 154 },
  { label: 'Namibia', value: 'NA', id: 155 },
  { label: 'Nauru', value: 'NR', id: 156 },
  { label: 'Nepal', value: 'NP', id: 157 },
  { label: 'Netherlands', value: 'NL', id: 158 },
  { label: 'Netherlands Antilles', value: 'AN', id: 159 },
  { label: 'New Caledonia', value: 'NC', id: 160 },
  { label: 'New Zealand', value: 'NZ', id: 161 },
  { label: 'Nicaragua', value: 'NI', id: 162 },
  { label: 'Niger', value: 'NE', id: 163 },
  { label: 'Nigeria', value: 'NG', id: 164 },
  { label: 'Niue', value: 'NU', id: 165 },
  { label: 'Norfolk Island', value: 'NF', id: 166 },
  { label: 'Northern Mariana Islands', value: 'MP', id: 167 },
  { label: 'Norway', value: 'NO', id: 168 },
  { label: 'Oman', value: 'OM', id: 169 },
  { label: 'Pakistan', value: 'PK', id: 170 },
  { label: 'Palau', value: 'PW', id: 171 },
  { label: 'Palestinian Territory, Occupied', value: 'PS', id: 172 },
  { label: 'Panama', value: 'PA', id: 173 },
  { label: 'Papua New Guinea', value: 'PG', id: 174 },
  { label: 'Paraguay', value: 'PY', id: 175 },
  { label: 'Peru', value: 'PE', id: 176 },
  { label: 'Philippines', value: 'PH', id: 177 },
  { label: 'Pitcairn', value: 'PN', id: 178 },
  { label: 'Poland', value: 'PL', id: 179 },
  { label: 'Portugal', value: 'PT', id: 180 },
  { label: 'Puerto Rico', value: 'PR', id: 181 },
  { label: 'Qatar', value: 'QA', id: 182 },
  { label: 'Reunion', value: 'RE', id: 183 },
  { label: 'Romania', value: 'RO', id: 184 },
  { label: 'Russian Federation', value: 'RU', id: 185 },
  { label: 'Rwanda', value: 'RW', id: 186 },
  { label: 'Saint Barthelemy', value: 'BL', id: 187 },
  { label: 'Saint Helena', value: 'SH', id: 188 },
  { label: 'Saint Kitts and Nevis', value: 'KN', id: 189 },
  { label: 'Saint Lucia', value: 'LC', id: 190 },
  { label: 'Saint Martin', value: 'MF', id: 191 },
  { label: 'Saint Pierre and Miquelon', value: 'PM', id: 192 },
  { label: 'Saint Vincent and the Grenadines', value: 'VC', id: 193 },
  { label: 'Samoa', value: 'WS', id: 194 },
  { label: 'San Marino', value: 'SM', id: 195 },
  { label: 'Sao Tome and Principe', value: 'ST', id: 196 },
  { label: 'Saudi Arabia', value: 'SA', id: 197 },
  { label: 'Senegal', value: 'SN', id: 198 },
  { label: 'Serbia', value: 'RS', id: 199 },
  { label: 'Serbia and Montenegro', value: 'CS', id: 200 },
  { label: 'Seychelles', value: 'SC', id: 201 },
  { label: 'Sierra Leone', value: 'SL', id: 202 },
  { label: 'Singapore', value: 'SG', id: 203 },
  { label: 'St Martin', value: 'SX', id: 204 },
  { label: 'Slovakia', value: 'SK', id: 205 },
  { label: 'Slovenia', value: 'SI', id: 206 },
  { label: 'Solomon Islands', value: 'SB', id: 207 },
  { label: 'Somalia', value: 'SO', id: 208 },
  { label: 'South Africa', value: 'ZA', id: 209 },
  { label: 'South Georgia and the South Sandwich Islands', value: 'GS', id: 210 },
  { label: 'South Sudan', value: 'SS', id: 211 },
  { label: 'Spain', value: 'ES', id: 212 },
  { label: 'Sri Lanka', value: 'LK', id: 213 },
  { label: 'Sudan', value: 'SD', id: 214 },
  { label: 'Surilabel', value: 'SR', id: 215 },
  { label: 'Svalbard and Jan Mayen', value: 'SJ', id: 216 },
  { label: 'Swaziland', value: 'SZ', id: 217 },
  { label: 'Sweden', value: 'SE', id: 218 },
  { label: 'Switzerland', value: 'CH', id: 219 },
  { label: 'Syrian Arab Republic', value: 'SY', id: 220 },
  { label: 'Taiwan, Province of China', value: 'TW', id: 221 },
  { label: 'Tajikistan', value: 'TJ', id: 222 },
  { label: 'Tanzania, United Republic of', value: 'TZ', id: 223 },
  { label: 'Thailand', value: 'TH', id: 224 },
  { label: 'Timor-Leste', value: 'TL', id: 225 },
  { label: 'Togo', value: 'TG', id: 226 },
  { label: 'Tokelau', value: 'TK', id: 227 },
  { label: 'Tonga', value: 'TO', id: 228 },
  { label: 'Trinidad and Tobago', value: 'TT', id: 229 },
  { label: 'Tunisia', value: 'TN', id: 230 },
  { label: 'Turkey', value: 'TR', id: 231 },
  { label: 'Turkmenistan', value: 'TM', id: 232 },
  { label: 'Turks and Caicos Islands', value: 'TC', id: 233 },
  { label: 'Tuvalu', value: 'TV', id: 234 },
  { label: 'Uganda', value: 'UG', id: 235 },
  { label: 'Ukraine', value: 'UA', id: 236 },
  { label: 'United Arab Emirates', value: 'AE', id: 237 },
  { label: 'United Kingdom', value: 'GB', id: 238 },
  { label: 'United States', value: 'US', id: 239 },
  { label: 'United States Minor Outlying Islands', value: 'UM', id: 240 },
  { label: 'Uruguay', value: 'UY', id: 241 },
  { label: 'Uzbekistan', value: 'UZ', id: 242 },
  { label: 'Vanuatu', value: 'VU', id: 243 },
  { label: 'Venezuela', value: 'VE', id: 244 },
  { label: 'Viet Nam', value: 'VN', id: 245 },
  { label: 'Virgin Islands, British', value: 'VG', id: 246 },
  { label: 'Virgin Islands, U.s.', value: 'VI', id: 247 },
  { label: 'Wallis and Futuna', value: 'WF', id: 248 },
  { label: 'Western Sahara', value: 'EH', id: 249 },
  { label: 'Yemen', value: 'YE', id: 250 },
  { label: 'Zambia', value: 'ZM', id: 251 },
  { label: 'Zimbabwe', value: 'ZW', id: 252 },
];

const INTERESTLIST = [
  {
    label: 'Sports',
    value: 'sports',
  },
  {
    label: 'Travel',
    value: 'travel',
  },
  {
    label: 'Music',
    value: 'music',
  },
];

function Home() {
  const [name, setName] = useState({ inputValue: '', isValid: false });
  const [age, setAge] = useState({ inputValue: '', isValid: false });
  const [profession, setProfession] = useState({ inputValue: '', isValid: false });
  const [country, setCountry] = useState<{ inputValue: string | string[]; isValid: boolean }>({
    inputValue: '',
    isValid: false,
  });
  const [interests, setInterests] = useState<{ inputValue: string | string[]; isValid: boolean }>({
    inputValue: ['sports'],
    isValid: false,
  });
  const [message, setMessage] = useState({ inputValue: '', isValid: false });

  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <div>
      <form method="POST">
        <Input
          type="text"
          label="Name"
          name="name"
          placeholder="Your full name..."
          state={name}
          setState={setName}
          validateSchema={[{ type: ruleType.Required, errorMsg: 'This field is required' }]}
        />
        <Input
          type="radio"
          label="Age"
          name="age"
          radioList={RADIOLIST}
          state={age}
          setState={setAge}
          validateSchema={[{ type: ruleType.Required }]}
        />
        <Input
          type="text"
          label="Profession"
          name="profession"
          placeholder="e.g. Software Engineer"
          state={profession}
          setState={setProfession}
          validateSchema={[{ type: ruleType.Required }]}
        />
        <Select label="Country" name="country" optionList={COUNTRYLIST} state={country} setState={setCountry} />
        <Select
          label="Interests"
          name="interests"
          optionList={INTERESTLIST}
          multiple
          state={interests}
          setState={setInterests}
        />
        <Textarea label="Message" name="message" maxLength={2000} state={message} setState={setMessage} />
        <input type="submit" value={'submit'} />
      </form>
    </div>
  );
}

export default Home;
