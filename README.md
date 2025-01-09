# GlobalTrends
# HER ER LISTE OVER 180 LAND MED NAVN OG KANDINAT NUMMER 
const countries = [
    { name: "Afghanistan", coords: [33.93911, 67.709953] },
    { name: "Albania", coords: [41.1533, 20.1683] },
    { name: "Algeria", coords: [28.0339, 1.6596] },
    { name: "Andorra", coords: [42.5078, 1.5211] },
    { name: "Angola", coords: [-11.2027, 17.8735] },
    { name: "Antigua and Barbuda", coords: [17.0608, -61.7964] },
    { name: "Argentina", coords: [-38.4161, -63.6167] },
    { name: "Armenia", coords: [40.0691, 45.0382] },
    { name: "Australia", coords: [-25.2744, 133.7751] },
    { name: "Austria", coords: [47.5162, 14.5501] },
    { name: "Azerbaijan", coords: [40.1431, 47.5769] },
    { name: "Bahamas", coords: [25.0343, -77.3963] },
    { name: "Bahrain", coords: [25.9304, 50.6378] },
    { name: "Bangladesh", coords: [23.685, 90.3563] },
    { name: "Barbados", coords: [13.1939, -59.5432] },
    { name: "Belarus", coords: [53.7098, 27.9534] },
    { name: "Belgium", coords: [50.8503, 4.3517] },
    { name: "Belize", coords: [17.1899, -88.4976] },
    { name: "Benin", coords: [9.3075, 2.3158] },
    { name: "Bhutan", coords: [27.5142, 90.4336] },
    { name: "Bolivia", coords: [-16.2902, -63.5887] },
    { name: "Bosnia and Herzegovina", coords: [43.9159, 17.6791] },
    { name: "Botswana", coords: [-22.3285, 24.6849] },
    { name: "Brazil", coords: [-14.235, -51.9253] },
    { name: "Brunei", coords: [4.5353, 114.7277] },
    { name: "Bulgaria", coords: [42.7339, 25.4858] },
    { name: "Burkina Faso", coords: [12.2383, -1.5616] },
    { name: "Burundi", coords: [-3.3731, 29.9189] },
    { name: "Cabo Verde", coords: [16.5388, -23.0417] },
    { name: "Cambodia", coords: [12.5657, 104.9910] },
    { name: "Cameroon", coords: [3.8480, 11.5021] },
    { name: "Canada", coords: [56.1304, -106.3468] },
    { name: "Central African Republic", coords: [6.6111, 20.9394] },
    { name: "Chad", coords: [15.4542, 18.7322] },
    { name: "Chile", coords: [-35.6751, -71.5430] },
    { name: "China", coords: [35.8617, 104.1954] },
    { name: "Colombia", coords: [4.5709, -74.2973] },
    { name: "Comoros", coords: [-11.875, 43.8722] },
    { name: "Congo (Congo-Brazzaville)", coords: [-0.2280, 15.8277] },
    { name: "Congo (Democratic Republic)", coords: [-4.0383, 21.7587] },
    { name: "Costa Rica", coords: [9.7489, -83.7534] },
    { name: "Croatia", coords: [45.1, 15.2] },
    { name: "Cuba", coords: [21.5218, -77.7812] },
    { name: "Cyprus", coords: [35.1264, 33.4299] },
    { name: "Czech Republic", coords: [49.8175, 15.473] },
    { name: "Denmark", coords: [56.2639, 9.5018] },
    { name: "Djibouti", coords: [11.8251, 42.5903] },
    { name: "Dominica", coords: [15.415, -61.371] },
    { name: "Dominican Republic", coords: [18.7357, -70.1627] },
    { name: "Ecuador", coords: [-1.8312, -78.1834] },
    { name: "Egypt", coords: [26.8206, 30.8025] },
    { name: "El Salvador", coords: [13.7942, -88.8965] },
    { name: "Equatorial Guinea", coords: [1.6508, 10.2679] },
    { name: "Eritrea", coords: [15.1794, 39.7823] },
    { name: "Estonia", coords: [58.5953, 25.0136] },
    { name: "Eswatini", coords: [-26.5225, 31.4659] },
    { name: "Ethiopia", coords: [9.145, 40.4897] },
    { name: "Fiji", coords: [-16.5782, 179.4144] },
    { name: "Finland", coords: [61.9241, 25.7482] },
    { name: "France", coords: [46.6034, 1.8883] },
    { name: "Gabon", coords: [-0.8037, 11.6094] },
    { name: "Gambia", coords: [13.4432, -15.3101] },
    { name: "Georgia", coords: [42.3154, 43.3569] },
    { name: "Germany", coords: [51.1657, 10.4515] },
    { name: "Ghana", coords: [7.9465, -1.0232] },
    { name: "Greece", coords: [39.0742, 21.8243] },
    { name: "Grenada", coords: [12.2628, -61.6042] },
    { name: "Guatemala", coords: [15.7835, -90.2308] },
    { name: "Guinea", coords: [9.9456, -9.6966] },
    { name: "Guinea-Bissau", coords: [11.8037, -15.1804] },
    { name: "Guyana", coords: [4.8604, -58.9302] },
    { name: "Haiti", coords: [18.9712, -72.2852] },
    { name: "Honduras", coords: [13.9094, -83.4332] },
    { name: "Hungary", coords: [47.1625, 19.5033] },
    { name: "Iceland", coords: [64.9631, -19.0208] },
    { name: "India", coords: [20.5937, 78.9629] },
    { name: "Indonesia", coords: [-0.7893, 113.9213] },
    { name: "Iran", coords: [32.4279, 53.6880] },
    { name: "Iraq", coords: [33.2232, 43.6793] },
    { name: "Ireland", coords: [53.1424, -7.6921] },
    { name: "Israel", coords: [31.0461, 34.8516] },
    { name: "Italy", coords: [41.8719, 12.5674] },
    { name: "Jamaica", coords: [18.1096, -77.2975] },
    { name: "Japan", coords: [36.2048, 138.2529] },
    { name: "Jordan", coords: [30.5852, 36.2384] },
    { name: "Kazakhstan", coords: [48.0196, 66.9237] },
    { name: "Kenya", coords: [-1.2921, 36.8219] },
    { name: "Kiribati", coords: [-3.3704, -168.734] },
    { name: "Korea, North", coords: [40.3399, 127.5101] },
    { name: "Korea, South", coords: [35.9078, 127.7669] },
    { name: "Kuwait", coords: [29.3759, 47.9774] },
    { name: "Kyrgyzstan", coords: [41.2044, 74.7661] },
    { name: "Laos", coords: [19.8563, 102.4955] },
    { name: "Latvia", coords: [56.8796, 24.6032] },
    { name: "Lebanon", coords: [33.8547, 35.8623] },
    { name: "Lesotho", coords: [-29.6098, 28.2336] },
    { name: "Liberia", coords: [9.4295, -9.4295] },
    { name: "Libya", coords: [26.3351, 17.2283] },
    { name: "Liechtenstein", coords: [47.1415, 9.5215] },
    { name: "Lithuania", coords: [55.1694, 23.8813] },
    { name: "Luxembourg", coords: [49.6117, 6.13] },
    { name: "Madagascar", coords: [-18.7669, 46.8691] },
    { name: "Malawi", coords: [-13.2543, 34.3015] },
    { name: "Malaysia", coords: [4.2105, 101.9758] },
    { name: "Maldives", coords: [3.2028, 73.2207] },
    { name: "Mali", coords: [17.5707, -3.9962] },
    { name: "Malta", coords: [35.9375, 14.3754] },
    { name: "Marshall Islands", coords: [7.1315, 171.1845] },
    { name: "Mauritania", coords: [21.0079, -10.9400] },
    { name: "Mauritius", coords: [-20.348404, 57.5522] },
    { name: "Mexico", coords: [23.6345, -102.5528] },
    { name: "Micronesia", coords: [7.4256, 150.5508] },
    { name: "Moldova", coords: [47.4116, 28.3699] },
    { name: "Monaco", coords: [43.7333, 7.4167] },
    { name: "Mongolia", coords: [46.8625, 103.8467] },
    { name: "Montenegro", coords: [42.4411, 19.2636] },
    { name: "Morocco", coords: [31.7917, -7.0926] },
    { name: "Mozambique", coords: [-18.6657, 35.5296] },
    { name: "Myanmar (Burma)", coords: [21.9139, 95.9560] },
    { name: "Namibia", coords: [-22.9576, 18.4904] },
    { name: "Nauru", coords: [-0.5228, 166.9315] },
    { name: "Nepal", coords: [28.3949, 84.1240] },
    { name: "Netherlands", coords: [52.1326, 5.2913] },
    { name: "New Zealand", coords: [-40.9006, 174.886] },
    { name: "Nicaragua", coords: [12.8654, -85.2072] },
    { name: "Niger", coords: [17.6078, 8.0817] },
    { name: "Nigeria", coords: [9.082, 8.6753] },
    { name: "North Macedonia", coords: [41.6086, 21.7453] },
    { name: "Norway", coords: [60.472, 8.4689] },
    { name: "Oman", coords: [21.4735, 55.9754] },
    { name: "Pakistan", coords: [30.3753, 69.3451] },
    { name: "Palau", coords: [7.5149, 134.5825] },
    { name: "Panama", coords: [8.5375, -80.7821] },
    { name: "Papua New Guinea", coords: [-6.3149, 143.9555] },
    { name: "Paraguay", coords: [-23.4425, -58.4438] },
    { name: "Peru", coords: [-9.19, -75.0152] },
    { name: "Philippines", coords: [12.8797, 121.774] },
    { name: "Poland", coords: [51.9194, 19.1451] },
    { name: "Portugal", coords: [39.3999, -8.2245] },
    { name: "Qatar", coords: [25.3548, 51.1839] },
    { name: "Romania", coords: [45.9432, 24.9668] },
    { name: "Russia", coords: [55.7558, 37.6176] },
    { name: "Rwanda", coords: [-1.9403, 29.8739] },
    { name: "Saint Kitts and Nevis", coords: [17.3578, -62.7833] },
    { name: "Saint Lucia", coords: [13.9094, -60.9789] },
    { name: "Saint Vincent and the Grenadines", coords: [12.9843, -61.2872] },
    { name: "Samoa", coords: [-13.7590, -172.1046] },
    { name: "San Marino", coords: [43.9333, 12.45] },
    { name: "Sao Tome and Principe", coords: [0.1864, 6.6131] },
    { name: "Saudi Arabia", coords: [23.8859, 45.0792] },
    { name: "Senegal", coords: [14.4974, -14.4524] },
    { name: "Serbia", coords: [44.0165, 21.0059] },
    { name: "Seychelles", coords: [-4.6796, 55.4915] },
    { name: "Sierra Leone", coords: [8.4606, -11.7793] },
    { name: "Singapore", coords: [1.3521, 103.8198] },
    { name: "Slovakia", coords: [48.6690, 19.6990] },
    { name: "Slovenia", coords: [46.1512, 14.9955] },
    { name: "Solomon Islands", coords: [-29.324, 152.3833] },
    { name: "Somalia", coords: [5.1521, 46.1996] },
    { name: "South Africa", coords: [-30.5595, 22.9375] },
    { name: "South Sudan", coords: [6.8694, 31.5713] },
    { name: "Spain", coords: [40.4637, -3.7492] },
    { name: "Sri Lanka", coords: [7.8731, 80.7718] },
    { name: "Sudan", coords: [12.8628, 30.2176] },
    { name: "Suriname", coords: [3.9196, -56.0278] },
    { name: "Sweden", coords: [60.1282, 18.6435] },
    { name: "Switzerland", coords: [46.8182, 8.2275] },
    { name: "Syria", coords: [34.8021, 38.9968] },
    { name: "Taiwan", coords: [23.6978, 120.9605] },
    { name: "Tajikistan", coords: [38.8610, 71.2761] },
    { name: "Tanzania", coords: [-6.369028, 34.8888] },
    { name: "Thailand", coords: [15.8700, 100.9925] },
    { name: "Timor-Leste", coords: [-8.8742, 125.7275] },
    { name: "Togo", coords: [8.6195, 0.8248] },
    { name: "Tonga", coords: [-21.1781, -175.1982] },
    { name: "Trinidad and Tobago", coords: [10.6918, -61.2225] },
    { name: "Tunisia", coords: [33.8869, 9.5375] },
    { name: "Turkey", coords: [38.9637, 35.2433] },
    { name: "Turkmenistan", coords: [38.9697, 59.5563] },
    { name: "Tuvalu", coords: [-7.1095, 179.194] },
    { name: "Uganda", coords: [1.3733, 32.2903] },
    { name: "Ukraine", coords: [48.3794, 31.1656] },
    { name: "United Arab Emirates", coords: [23.4241, 53.8478] },
    { name: "United Kingdom", coords: [55.3781, -3.436] },
    { name: "United States of America", coords: [37.0902, -95.7129] },
    { name: "Uruguay", coords: [-32.9657, -56.0342] },
    { name: "Uzbekistan", coords: [41.3775, 64.5853] },
    { name: "Vanuatu", coords: [-15.3767, 166.9592] },
    { name: "Vatican City", coords: [41.9029, 12.4534] },
    { name: "Venezuela", coords: [6.4238, -66.5897] },
    { name: "Vietnam", coords: [14.0583, 108.2772] },
    { name: "Yemen", coords: [15.5520, 48.5164] },
    { name: "Zambia", coords: [-13.1339, 27.8493] },
    { name: "Zimbabwe", coords: [-19.0154, 29.1549] }
];

