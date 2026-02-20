-- Seed all states/provinces/territories for all countries
-- state_code is 2-char ISO 3166-2 where possible

BEGIN;

-- ─── INDIA (IN) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Andhra Pradesh','AP','IN','South'),('Arunachal Pradesh','AR','IN','Northeast'),('Assam','AS','IN','Northeast'),('Bihar','BR','IN','East'),('Chhattisgarh','CG','IN','Central'),('Goa','GA','IN','West'),('Gujarat','GJ','IN','West'),('Haryana','HR','IN','North'),('Himachal Pradesh','HP','IN','North'),('Jharkhand','JH','IN','East'),('Karnataka','KA','IN','South'),('Kerala','KL','IN','South'),('Madhya Pradesh','MP','IN','Central'),('Maharashtra','MH','IN','West'),('Manipur','MN','IN','Northeast'),('Meghalaya','ML','IN','Northeast'),('Mizoram','MZ','IN','Northeast'),('Nagaland','NL','IN','Northeast'),('Odisha','OD','IN','East'),('Punjab','PB','IN','North'),('Rajasthan','RJ','IN','North'),('Sikkim','SK','IN','Northeast'),('Tamil Nadu','TN','IN','South'),('Telangana','TG','IN','South'),('Tripura','TR','IN','Northeast'),('Uttar Pradesh','UP','IN','North'),('Uttarakhand','UK','IN','North'),('West Bengal','WB','IN','East'),
('Andaman and Nicobar Islands','AN','IN','UT'),('Chandigarh','CH','IN','UT'),('Dadra Nagar Haveli and Daman Diu','DD','IN','UT'),('Delhi','DL','IN','UT'),('Jammu and Kashmir','JK','IN','UT'),('Ladakh','LA','IN','UT'),('Lakshadweep','LD','IN','UT'),('Puducherry','PY','IN','UT');

-- ─── UNITED STATES (US) ────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Alabama','AL','US','South'),('Alaska','AK','US','West'),('Arizona','AZ','US','West'),('Arkansas','AR','US','South'),('California','CA','US','West'),('Colorado','CO','US','West'),('Connecticut','CT','US','Northeast'),('Delaware','DE','US','Northeast'),('Florida','FL','US','South'),('Georgia','GA','US','South'),('Hawaii','HI','US','West'),('Idaho','ID','US','West'),('Illinois','IL','US','Midwest'),('Indiana','IN','US','Midwest'),('Iowa','IA','US','Midwest'),('Kansas','KS','US','Midwest'),('Kentucky','KY','US','South'),('Louisiana','LA','US','South'),('Maine','ME','US','Northeast'),('Maryland','MD','US','Northeast'),('Massachusetts','MA','US','Northeast'),('Michigan','MI','US','Midwest'),('Minnesota','MN','US','Midwest'),('Mississippi','MS','US','South'),('Missouri','MO','US','Midwest'),('Montana','MT','US','West'),('Nebraska','NE','US','Midwest'),('Nevada','NV','US','West'),('New Hampshire','NH','US','Northeast'),('New Jersey','NJ','US','Northeast'),('New Mexico','NM','US','West'),('New York','NY','US','Northeast'),('North Carolina','NC','US','South'),('North Dakota','ND','US','Midwest'),('Ohio','OH','US','Midwest'),('Oklahoma','OK','US','South'),('Oregon','OR','US','West'),('Pennsylvania','PA','US','Northeast'),('Rhode Island','RI','US','Northeast'),('South Carolina','SC','US','South'),('South Dakota','SD','US','Midwest'),('Tennessee','TN','US','South'),('Texas','TX','US','South'),('Utah','UT','US','West'),('Vermont','VT','US','Northeast'),('Virginia','VA','US','South'),('Washington','WA','US','West'),('West Virginia','WV','US','South'),('Wisconsin','WI','US','Midwest'),('Wyoming','WY','US','West'),('District of Columbia','DC','US','Northeast');

-- ─── UNITED KINGDOM (GB) ───────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('England','EN','GB','England'),('Scotland','SC','GB','Scotland'),('Wales','WA','GB','Wales'),('Northern Ireland','NI','GB','Northern Ireland');

-- ─── CANADA (CA) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Alberta','AB','CA','West'),('British Columbia','BC','CA','West'),('Manitoba','MB','CA','Central'),('New Brunswick','NB','CA','Atlantic'),('Newfoundland and Labrador','NL','CA','Atlantic'),('Nova Scotia','NS','CA','Atlantic'),('Ontario','ON','CA','Central'),('Prince Edward Island','PE','CA','Atlantic'),('Quebec','QC','CA','Central'),('Saskatchewan','SK','CA','West'),('Northwest Territories','NT','CA','North'),('Nunavut','NU','CA','North'),('Yukon','YT','CA','North');

-- ─── AUSTRALIA (AU) ────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('New South Wales','NS','AU','East'),('Victoria','VI','AU','Southeast'),('Queensland','QL','AU','Northeast'),('South Australia','SA','AU','Central'),('Western Australia','WA','AU','West'),('Tasmania','TA','AU','South'),('Northern Territory','NT','AU','North'),('Australian Capital Territory','AC','AU','East');

-- ─── CHINA (CN) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Anhui','AH','CN','East'),('Beijing','BJ','CN','North'),('Chongqing','CQ','CN','Southwest'),('Fujian','FJ','CN','East'),('Gansu','GS','CN','Northwest'),('Guangdong','GD','CN','South'),('Guangxi','GX','CN','South'),('Guizhou','GZ','CN','Southwest'),('Hainan','HI','CN','South'),('Hebei','HE','CN','North'),('Heilongjiang','HL','CN','Northeast'),('Henan','HA','CN','Central'),('Hong Kong','HK','CN','South'),('Hubei','HB','CN','Central'),('Hunan','HN','CN','Central'),('Inner Mongolia','NM','CN','North'),('Jiangsu','JS','CN','East'),('Jiangxi','JX','CN','East'),('Jilin','JL','CN','Northeast'),('Liaoning','LN','CN','Northeast'),('Macau','MO','CN','South'),('Ningxia','NX','CN','Northwest'),('Qinghai','QH','CN','Northwest'),('Shaanxi','SN','CN','Northwest'),('Shandong','SD','CN','East'),('Shanghai','SH','CN','East'),('Shanxi','SX','CN','North'),('Sichuan','SC','CN','Southwest'),('Tianjin','TJ','CN','North'),('Tibet','XZ','CN','Southwest'),('Xinjiang','XJ','CN','Northwest'),('Yunnan','YN','CN','Southwest'),('Zhejiang','ZJ','CN','East');

-- ─── JAPAN (JP) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Hokkaido','01','JP','Hokkaido'),('Aomori','02','JP','Tohoku'),('Iwate','03','JP','Tohoku'),('Miyagi','04','JP','Tohoku'),('Akita','05','JP','Tohoku'),('Yamagata','06','JP','Tohoku'),('Fukushima','07','JP','Tohoku'),('Ibaraki','08','JP','Kanto'),('Tochigi','09','JP','Kanto'),('Gunma','10','JP','Kanto'),('Saitama','11','JP','Kanto'),('Chiba','12','JP','Kanto'),('Tokyo','13','JP','Kanto'),('Kanagawa','14','JP','Kanto'),('Niigata','15','JP','Chubu'),('Toyama','16','JP','Chubu'),('Ishikawa','17','JP','Chubu'),('Fukui','18','JP','Chubu'),('Yamanashi','19','JP','Chubu'),('Nagano','20','JP','Chubu'),('Gifu','21','JP','Chubu'),('Shizuoka','22','JP','Chubu'),('Aichi','23','JP','Chubu'),('Mie','24','JP','Kansai'),('Shiga','25','JP','Kansai'),('Kyoto','26','JP','Kansai'),('Osaka','27','JP','Kansai'),('Hyogo','28','JP','Kansai'),('Nara','29','JP','Kansai'),('Wakayama','30','JP','Kansai'),('Tottori','31','JP','Chugoku'),('Shimane','32','JP','Chugoku'),('Okayama','33','JP','Chugoku'),('Hiroshima','34','JP','Chugoku'),('Yamaguchi','35','JP','Chugoku'),('Tokushima','36','JP','Shikoku'),('Kagawa','37','JP','Shikoku'),('Ehime','38','JP','Shikoku'),('Kochi','39','JP','Shikoku'),('Fukuoka','40','JP','Kyushu'),('Saga','41','JP','Kyushu'),('Nagasaki','42','JP','Kyushu'),('Kumamoto','43','JP','Kyushu'),('Oita','44','JP','Kyushu'),('Miyazaki','45','JP','Kyushu'),('Kagoshima','46','JP','Kyushu'),('Okinawa','47','JP','Kyushu');

-- ─── SOUTH KOREA (KR) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Seoul','11','KR','Capital'),('Busan','26','KR','Southeast'),('Daegu','27','KR','Southeast'),('Incheon','28','KR','Capital'),('Gwangju','29','KR','Southwest'),('Daejeon','30','KR','Central'),('Ulsan','31','KR','Southeast'),('Sejong','36','KR','Central'),('Gyeonggi','41','KR','Capital'),('Gangwon','42','KR','East'),('North Chungcheong','43','KR','Central'),('South Chungcheong','44','KR','Central'),('North Jeolla','45','KR','Southwest'),('South Jeolla','46','KR','Southwest'),('North Gyeongsang','47','KR','Southeast'),('South Gyeongsang','48','KR','Southeast'),('Jeju','49','KR','South');

-- ─── GERMANY (DE) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Baden-Wurttemberg','BW','DE','South'),('Bavaria','BY','DE','South'),('Berlin','BE','DE','East'),('Brandenburg','BB','DE','East'),('Bremen','HB','DE','North'),('Hamburg','HH','DE','North'),('Hesse','HE','DE','Central'),('Lower Saxony','NI','DE','North'),('Mecklenburg-Vorpommern','MV','DE','East'),('North Rhine-Westphalia','NW','DE','West'),('Rhineland-Palatinate','RP','DE','West'),('Saarland','SL','DE','West'),('Saxony','SN','DE','East'),('Saxony-Anhalt','ST','DE','East'),('Schleswig-Holstein','SH','DE','North'),('Thuringia','TH','DE','East');

-- ─── FRANCE (FR) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Auvergne-Rhone-Alpes','AR','FR','Southeast'),('Bourgogne-Franche-Comte','BF','FR','East'),('Brittany','BR','FR','Northwest'),('Centre-Val de Loire','CV','FR','Central'),('Corsica','CO','FR','South'),('Grand Est','GE','FR','Northeast'),('Hauts-de-France','HF','FR','North'),('Ile-de-France','IF','FR','Central'),('Normandy','NO','FR','Northwest'),('Nouvelle-Aquitaine','NA','FR','Southwest'),('Occitanie','OC','FR','South'),('Pays de la Loire','PL','FR','West'),('Provence-Alpes-Cote d''Azur','PA','FR','Southeast');

-- ─── ITALY (IT) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Abruzzo','65','IT','South'),('Aosta Valley','23','IT','Northwest'),('Apulia','75','IT','South'),('Basilicata','77','IT','South'),('Calabria','78','IT','South'),('Campania','72','IT','South'),('Emilia-Romagna','45','IT','North'),('Friuli Venezia Giulia','36','IT','Northeast'),('Lazio','62','IT','Central'),('Liguria','42','IT','Northwest'),('Lombardy','25','IT','Northwest'),('Marche','57','IT','Central'),('Molise','67','IT','South'),('Piedmont','21','IT','Northwest'),('Sardinia','88','IT','Islands'),('Sicily','82','IT','Islands'),('Trentino-South Tyrol','32','IT','Northeast'),('Tuscany','52','IT','Central'),('Umbria','55','IT','Central'),('Veneto','34','IT','Northeast');

-- ─── SPAIN (ES) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Andalusia','AN','ES','South'),('Aragon','AR','ES','Northeast'),('Asturias','AS','ES','North'),('Balearic Islands','IB','ES','East'),('Basque Country','PV','ES','North'),('Canary Islands','CN','ES','South'),('Cantabria','CB','ES','North'),('Castile and Leon','CL','ES','Central'),('Castilla-La Mancha','CM','ES','Central'),('Catalonia','CT','ES','Northeast'),('Ceuta','CE','ES','Africa'),('Extremadura','EX','ES','West'),('Galicia','GA','ES','Northwest'),('La Rioja','RI','ES','North'),('Community of Madrid','MD','ES','Central'),('Melilla','ML','ES','Africa'),('Murcia','MC','ES','Southeast'),('Navarre','NC','ES','North'),('Valencian Community','VC','ES','East');

-- ─── RUSSIA (RU) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Moscow','MO','RU','Central'),('Saint Petersburg','SP','RU','Northwest'),('Moscow Oblast','MS','RU','Central'),('Krasnodar Krai','KD','RU','South'),('Sverdlovsk Oblast','SV','RU','Urals'),('Rostov Oblast','RO','RU','South'),('Bashkortostan','BA','RU','Volga'),('Tatarstan','TA','RU','Volga'),('Chelyabinsk Oblast','CH','RU','Urals'),('Nizhny Novgorod Oblast','NN','RU','Volga'),('Samara Oblast','SA','RU','Volga'),('Dagestan','DA','RU','Caucasus'),('Novosibirsk Oblast','NV','RU','Siberia'),('Krasnoyarsk Krai','KY','RU','Siberia'),('Kemerovo Oblast','KE','RU','Siberia'),('Perm Krai','PR','RU','Volga'),('Volgograd Oblast','VG','RU','South'),('Irkutsk Oblast','IR','RU','Siberia'),('Voronezh Oblast','VR','RU','Central'),('Saratov Oblast','SR','RU','Volga');

-- ─── BRAZIL (BR) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Acre','AC','BR','North'),('Alagoas','AL','BR','Northeast'),('Amapa','AP','BR','North'),('Amazonas','AM','BR','North'),('Bahia','BA','BR','Northeast'),('Ceara','CE','BR','Northeast'),('Distrito Federal','DF','BR','Central-West'),('Espirito Santo','ES','BR','Southeast'),('Goias','GO','BR','Central-West'),('Maranhao','MA','BR','Northeast'),('Mato Grosso','MT','BR','Central-West'),('Mato Grosso do Sul','MS','BR','Central-West'),('Minas Gerais','MG','BR','Southeast'),('Para','PA','BR','North'),('Paraiba','PB','BR','Northeast'),('Parana','PR','BR','South'),('Pernambuco','PE','BR','Northeast'),('Piaui','PI','BR','Northeast'),('Rio de Janeiro','RJ','BR','Southeast'),('Rio Grande do Norte','RN','BR','Northeast'),('Rio Grande do Sul','RS','BR','South'),('Rondonia','RO','BR','North'),('Roraima','RR','BR','North'),('Santa Catarina','SC','BR','South'),('Sao Paulo','SP','BR','Southeast'),('Sergipe','SE','BR','Northeast'),('Tocantins','TO','BR','North');

-- ─── MEXICO (MX) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Aguascalientes','AG','MX','Central'),('Baja California','BC','MX','Northwest'),('Baja California Sur','BS','MX','Northwest'),('Campeche','CM','MX','Southeast'),('Chiapas','CS','MX','Southeast'),('Chihuahua','CH','MX','Northwest'),('Coahuila','CO','MX','Northeast'),('Colima','CL','MX','West'),('Durango','DG','MX','Northwest'),('Guanajuato','GT','MX','Central'),('Guerrero','GR','MX','South'),('Hidalgo','HG','MX','Central'),('Jalisco','JA','MX','West'),('Mexico State','EM','MX','Central'),('Mexico City','DF','MX','Central'),('Michoacan','MI','MX','West'),('Morelos','MO','MX','Central'),('Nayarit','NA','MX','West'),('Nuevo Leon','NL','MX','Northeast'),('Oaxaca','OA','MX','South'),('Puebla','PU','MX','Central'),('Queretaro','QT','MX','Central'),('Quintana Roo','QR','MX','Southeast'),('San Luis Potosi','SL','MX','Central'),('Sinaloa','SI','MX','Northwest'),('Sonora','SO','MX','Northwest'),('Tabasco','TB','MX','Southeast'),('Tamaulipas','TM','MX','Northeast'),('Tlaxcala','TL','MX','Central'),('Veracruz','VE','MX','East'),('Yucatan','YU','MX','Southeast'),('Zacatecas','ZA','MX','Central');

-- ─── PAKISTAN (PK) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Balochistan','BA','PK','West'),('Khyber Pakhtunkhwa','KP','PK','Northwest'),('Punjab','PB','PK','East'),('Sindh','SD','PK','South'),('Islamabad Capital Territory','IS','PK','Capital'),('Azad Kashmir','AK','PK','North'),('Gilgit-Baltistan','GB','PK','North');

-- ─── BANGLADESH (BD) ───────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Barishal','BA','BD','South'),('Chattogram','CG','BD','Southeast'),('Dhaka','DA','BD','Central'),('Khulna','KH','BD','Southwest'),('Mymensingh','MY','BD','Central'),('Rajshahi','RA','BD','Northwest'),('Rangpur','RN','BD','North'),('Sylhet','SY','BD','Northeast');

-- ─── INDONESIA (ID) ────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Aceh','AC','ID','Sumatra'),('Bali','BA','ID','Bali-Nusa'),('Banten','BT','ID','Java'),('Bengkulu','BE','ID','Sumatra'),('Central Java','JT','ID','Java'),('Central Kalimantan','KT','ID','Kalimantan'),('Central Sulawesi','ST','ID','Sulawesi'),('East Java','JI','ID','Java'),('East Kalimantan','KI','ID','Kalimantan'),('East Nusa Tenggara','NT','ID','Bali-Nusa'),('Gorontalo','GO','ID','Sulawesi'),('Jakarta','JK','ID','Java'),('Jambi','JA','ID','Sumatra'),('Lampung','LA','ID','Sumatra'),('Maluku','ML','ID','Maluku'),('North Kalimantan','KU','ID','Kalimantan'),('North Maluku','MU','ID','Maluku'),('North Sulawesi','SA','ID','Sulawesi'),('North Sumatra','SU','ID','Sumatra'),('Papua','PA','ID','Papua'),('Riau','RI','ID','Sumatra'),('Riau Islands','KR','ID','Sumatra'),('South Kalimantan','KS','ID','Kalimantan'),('South Sulawesi','SN','ID','Sulawesi'),('South Sumatra','SS','ID','Sumatra'),('Southeast Sulawesi','SG','ID','Sulawesi'),('West Java','JB','ID','Java'),('West Kalimantan','KB','ID','Kalimantan'),('West Nusa Tenggara','NB','ID','Bali-Nusa'),('West Papua','PB','ID','Papua'),('West Sulawesi','SR','ID','Sulawesi'),('West Sumatra','SB','ID','Sumatra'),('Yogyakarta','YO','ID','Java');

-- ─── TURKEY (TR) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Adana','01','TR','Mediterranean'),('Ankara','06','TR','Central'),('Antalya','07','TR','Mediterranean'),('Bursa','16','TR','Marmara'),('Diyarbakir','21','TR','Southeast'),('Gaziantep','27','TR','Southeast'),('Istanbul','34','TR','Marmara'),('Izmir','35','TR','Aegean'),('Kayseri','38','TR','Central'),('Kocaeli','41','TR','Marmara'),('Konya','42','TR','Central'),('Mersin','33','TR','Mediterranean'),('Samsun','55','TR','Black Sea'),('Trabzon','61','TR','Black Sea');

-- ─── IRAN (IR) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Alborz','32','IR','Central'),('Ardabil','03','IR','Northwest'),('Bushehr','06','IR','South'),('East Azerbaijan','01','IR','Northwest'),('Esfahan','04','IR','Central'),('Fars','07','IR','South'),('Gilan','14','IR','North'),('Golestan','27','IR','Northeast'),('Hamadan','13','IR','West'),('Hormozgan','22','IR','South'),('Ilam','05','IR','West'),('Kerman','08','IR','Southeast'),('Kermanshah','09','IR','West'),('Khorasan Razavi','10','IR','Northeast'),('Khuzestan','11','IR','Southwest'),('Kurdistan','12','IR','West'),('Lorestan','15','IR','West'),('Markazi','00','IR','Central'),('Mazandaran','02','IR','North'),('North Khorasan','28','IR','Northeast'),('Qazvin','26','IR','Central'),('Qom','25','IR','Central'),('Semnan','20','IR','Central'),('South Khorasan','29','IR','East'),('Sistan-Baluchestan','18','IR','Southeast'),('Tehran','23','IR','Central'),('West Azerbaijan','16','IR','Northwest'),('Yazd','21','IR','Central'),('Zanjan','19','IR','Northwest');

-- ─── SAUDI ARABIA (SA) ─────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Riyadh','01','SA','Central'),('Makkah','02','SA','West'),('Madinah','03','SA','West'),('Eastern Province','04','SA','East'),('Asir','06','SA','South'),('Tabuk','07','SA','Northwest'),('Hail','13','SA','North'),('Northern Borders','08','SA','North'),('Jazan','09','SA','South'),('Najran','10','SA','South'),('Al Bahah','11','SA','South'),('Al Jawf','12','SA','North'),('Qassim','05','SA','Central');

-- ─── UAE (AE) ───────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Abu Dhabi','AZ','AE','Central'),('Dubai','DU','AE','East'),('Sharjah','SH','AE','East'),('Ajman','AJ','AE','East'),('Umm Al Quwain','UQ','AE','East'),('Ras Al Khaimah','RK','AE','North'),('Fujairah','FU','AE','East');

-- ─── THAILAND (TH) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Bangkok','10','TH','Central'),('Chiang Mai','50','TH','North'),('Chiang Rai','57','TH','North'),('Chonburi','20','TH','East'),('Khon Kaen','40','TH','Northeast'),('Krabi','81','TH','South'),('Nakhon Ratchasima','30','TH','Northeast'),('Nonthaburi','12','TH','Central'),('Pathum Thani','13','TH','Central'),('Phuket','83','TH','South'),('Samut Prakan','11','TH','Central'),('Songkhla','90','TH','South'),('Surat Thani','84','TH','South'),('Udon Thani','41','TH','Northeast');

-- ─── VIETNAM (VN) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('An Giang','44','VN','South'),('Ba Ria-Vung Tau','43','VN','South'),('Binh Duong','57','VN','South'),('Can Tho','CT','VN','South'),('Da Nang','DN','VN','Central'),('Dong Nai','39','VN','South'),('Ha Noi','HN','VN','North'),('Hai Phong','HP','VN','North'),('Ho Chi Minh City','SG','VN','South'),('Khanh Hoa','34','VN','Central'),('Lam Dong','35','VN','Central'),('Nghe An','22','VN','Central'),('Quang Ninh','13','VN','North'),('Thanh Hoa','21','VN','Central');

-- ─── MALAYSIA (MY) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Johor','01','MY','Peninsula'),('Kedah','02','MY','Peninsula'),('Kelantan','03','MY','Peninsula'),('Kuala Lumpur','14','MY','Peninsula'),('Labuan','15','MY','Borneo'),('Malacca','04','MY','Peninsula'),('Negeri Sembilan','05','MY','Peninsula'),('Pahang','06','MY','Peninsula'),('Penang','07','MY','Peninsula'),('Perak','08','MY','Peninsula'),('Perlis','09','MY','Peninsula'),('Putrajaya','16','MY','Peninsula'),('Sabah','12','MY','Borneo'),('Sarawak','13','MY','Borneo'),('Selangor','10','MY','Peninsula'),('Terengganu','11','MY','Peninsula');

-- ─── PHILIPPINES (PH) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Abra','AB','PH','Luzon'),('Agusan del Norte','AN','PH','Mindanao'),('Albay','AL','PH','Luzon'),('Batangas','BT','PH','Luzon'),('Bulacan','BU','PH','Luzon'),('Cavite','CV','PH','Luzon'),('Cebu','CB','PH','Visayas'),('Davao del Sur','DS','PH','Mindanao'),('Iloilo','IL','PH','Visayas'),('Laguna','LG','PH','Luzon'),('Manila','MN','PH','Luzon'),('Negros Occidental','NO','PH','Visayas'),('Pampanga','PM','PH','Luzon'),('Pangasinan','PN','PH','Luzon'),('Rizal','RI','PH','Luzon'),('Zambales','ZM','PH','Luzon'),('Zamboanga del Sur','ZS','PH','Mindanao');

-- ─── SOUTH AFRICA (ZA) ─────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Eastern Cape','EC','ZA','East'),('Free State','FS','ZA','Central'),('Gauteng','GT','ZA','Northeast'),('KwaZulu-Natal','KZ','ZA','East'),('Limpopo','LP','ZA','North'),('Mpumalanga','MP','ZA','Northeast'),('North West','NW','ZA','North'),('Northern Cape','NC','ZA','West'),('Western Cape','WC','ZA','West');

-- ─── NIGERIA (NG) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Abia','AB','NG','Southeast'),('Adamawa','AD','NG','Northeast'),('Akwa Ibom','AK','NG','South South'),('Anambra','AN','NG','Southeast'),('Bauchi','BA','NG','Northeast'),('Bayelsa','BY','NG','South South'),('Benue','BE','NG','North Central'),('Borno','BO','NG','Northeast'),('Cross River','CR','NG','South South'),('Delta','DE','NG','South South'),('Ebonyi','EB','NG','Southeast'),('Edo','ED','NG','South South'),('Ekiti','EK','NG','Southwest'),('Enugu','EN','NG','Southeast'),('FCT Abuja','FC','NG','North Central'),('Gombe','GO','NG','Northeast'),('Imo','IM','NG','Southeast'),('Jigawa','JI','NG','Northwest'),('Kaduna','KD','NG','Northwest'),('Kano','KN','NG','Northwest'),('Katsina','KT','NG','Northwest'),('Kebbi','KE','NG','Northwest'),('Kogi','KO','NG','North Central'),('Kwara','KW','NG','North Central'),('Lagos','LA','NG','Southwest'),('Nasarawa','NA','NG','North Central'),('Niger','NI','NG','North Central'),('Ogun','OG','NG','Southwest'),('Ondo','ON','NG','Southwest'),('Osun','OS','NG','Southwest'),('Oyo','OY','NG','Southwest'),('Plateau','PL','NG','North Central'),('Rivers','RI','NG','South South'),('Sokoto','SO','NG','Northwest'),('Taraba','TA','NG','Northeast'),('Yobe','YO','NG','Northeast'),('Zamfara','ZA','NG','Northwest');

-- ─── EGYPT (EG) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Alexandria','AL','EG','North'),('Aswan','AS','EG','South'),('Asyut','AT','EG','Central'),('Beheira','BH','EG','North'),('Beni Suef','BN','EG','Central'),('Cairo','CA','EG','Central'),('Dakahlia','DK','EG','North'),('Damietta','DT','EG','North'),('Faiyum','FY','EG','Central'),('Gharbia','GH','EG','North'),('Giza','GZ','EG','Central'),('Ismailia','IS','EG','East'),('Kafr El Sheikh','KF','EG','North'),('Luxor','LX','EG','South'),('Matrouh','MT','EG','West'),('Minya','MN','EG','Central'),('Monufia','MF','EG','North'),('New Valley','WA','EG','West'),('North Sinai','SI','EG','East'),('Port Said','PT','EG','East'),('Qalyubia','QB','EG','North'),('Qena','QN','EG','South'),('Red Sea','BA','EG','East'),('Sharqia','SH','EG','North'),('Sohag','SG','EG','South'),('South Sinai','JS','EG','East'),('Suez','SZ','EG','East');

-- ─── KENYA (KE) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Nairobi','30','KE','Central'),('Mombasa','01','KE','Coast'),('Kisumu','42','KE','West'),('Nakuru','32','KE','Rift Valley'),('Kiambu','22','KE','Central'),('Machakos','23','KE','East'),('Kajiado','34','KE','Rift Valley'),('Uasin Gishu','27','KE','Rift Valley'),('Kilifi','03','KE','Coast'),('Meru','12','KE','East');

-- ─── ETHIOPIA (ET) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Addis Ababa','AA','ET','Central'),('Afar','AF','ET','East'),('Amhara','AM','ET','Northwest'),('Benishangul-Gumuz','BE','ET','West'),('Dire Dawa','DD','ET','East'),('Gambela','GA','ET','West'),('Harari','HA','ET','East'),('Oromia','OR','ET','Central'),('Sidama','SI','ET','South'),('Somali','SO','ET','East'),('South Ethiopia','SE','ET','South'),('Southwest Ethiopia','SW','ET','Southwest'),('Tigray','TI','ET','North');

-- ─── NEPAL (NP) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Koshi','P1','NP','East'),('Madhesh','P2','NP','Southeast'),('Bagmati','P3','NP','Central'),('Gandaki','P4','NP','West'),('Lumbini','P5','NP','West'),('Karnali','P6','NP','Northwest'),('Sudurpashchim','P7','NP','Far West');

-- ─── SRI LANKA (LK) ────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central','CP','LK','Central'),('Eastern','EP','LK','East'),('North Central','NC','LK','North'),('Northern','NP','LK','North'),('North Western','NW','LK','Northwest'),('Sabaragamuwa','SG','LK','South'),('Southern','SP','LK','South'),('Uva','UP','LK','East'),('Western','WP','LK','West');

-- ─── POLAND (PL) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Greater Poland','WP','PL','West'),('Kuyavian-Pomeranian','KP','PL','North'),('Lesser Poland','MA','PL','South'),('Lodz','LD','PL','Central'),('Lower Silesian','DS','PL','Southwest'),('Lublin','LU','PL','East'),('Lubusz','LB','PL','West'),('Masovian','MZ','PL','Central'),('Opole','OP','PL','South'),('Podkarpackie','PK','PL','Southeast'),('Podlaskie','PD','PL','Northeast'),('Pomeranian','PM','PL','North'),('Silesian','SL','PL','South'),('Swietokrzyskie','SK','PL','Central'),('Warmian-Masurian','WN','PL','North'),('West Pomeranian','ZP','PL','Northwest');

-- ─── NETHERLANDS (NL) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Drenthe','DR','NL','North'),('Flevoland','FL','NL','Central'),('Friesland','FR','NL','North'),('Gelderland','GE','NL','East'),('Groningen','GR','NL','North'),('Limburg','LI','NL','South'),('North Brabant','NB','NL','South'),('North Holland','NH','NL','West'),('Overijssel','OV','NL','East'),('South Holland','ZH','NL','West'),('Utrecht','UT','NL','Central'),('Zeeland','ZE','NL','Southwest');

-- ─── SWITZERLAND (CH) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Aargau','AG','CH','German'),('Appenzell Ausserrhoden','AR','CH','German'),('Appenzell Innerrhoden','AI','CH','German'),('Basel-Landschaft','BL','CH','German'),('Basel-Stadt','BS','CH','German'),('Bern','BE','CH','German'),('Fribourg','FR','CH','French'),('Geneva','GE','CH','French'),('Glarus','GL','CH','German'),('Graubunden','GR','CH','German'),('Jura','JU','CH','French'),('Lucerne','LU','CH','German'),('Neuchatel','NE','CH','French'),('Nidwalden','NW','CH','German'),('Obwalden','OW','CH','German'),('Schaffhausen','SH','CH','German'),('Schwyz','SZ','CH','German'),('Solothurn','SO','CH','German'),('St. Gallen','SG','CH','German'),('Thurgau','TG','CH','German'),('Ticino','TI','CH','Italian'),('Uri','UR','CH','German'),('Valais','VS','CH','French'),('Vaud','VD','CH','French'),('Zug','ZG','CH','German'),('Zurich','ZH','CH','German');

-- ─── PORTUGAL (PT) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Aveiro','01','PT','Central'),('Beja','02','PT','South'),('Braga','03','PT','North'),('Braganca','04','PT','North'),('Castelo Branco','05','PT','Central'),('Coimbra','06','PT','Central'),('Evora','07','PT','South'),('Faro','08','PT','South'),('Guarda','09','PT','Central'),('Leiria','10','PT','Central'),('Lisbon','11','PT','Central'),('Portalegre','12','PT','Central'),('Porto','13','PT','North'),('Santarem','14','PT','Central'),('Setubal','15','PT','South'),('Viana do Castelo','16','PT','North'),('Vila Real','17','PT','North'),('Viseu','18','PT','Central'),('Azores','20','PT','Islands'),('Madeira','30','PT','Islands');

-- ─── SWEDEN (SE) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Blekinge','BL','SE','South'),('Dalarna','DA','SE','Central'),('Gavleborg','GA','SE','Central'),('Gotland','GO','SE','South'),('Halland','HA','SE','West'),('Jamtland','JA','SE','North'),('Jonkoping','JO','SE','South'),('Kalmar','KA','SE','South'),('Kronoberg','KR','SE','South'),('Norrbotten','NO','SE','North'),('Orebro','OR','SE','Central'),('Ostergotland','OG','SE','South'),('Skane','SK','SE','South'),('Sodermanland','SO','SE','Central'),('Stockholm','ST','SE','Central'),('Uppsala','UP','SE','Central'),('Varmland','VA','SE','West'),('Vasterbotten','VB','SE','North'),('Vasternorrland','VN','SE','North'),('Vastmanland','VM','SE','Central'),('Vastra Gotaland','VG','SE','West');

-- ─── NORWAY (NO) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Agder','42','NO','South'),('Innlandet','34','NO','East'),('More og Romsdal','15','NO','West'),('Nordland','18','NO','North'),('Oslo','03','NO','East'),('Rogaland','11','NO','West'),('Troms og Finnmark','54','NO','North'),('Trondelag','50','NO','Central'),('Vestfold og Telemark','38','NO','South'),('Vestland','46','NO','West'),('Viken','30','NO','East');

-- ─── DENMARK (DK) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Capital Region','84','DK','East'),('Central Denmark','82','DK','Central'),('North Denmark','81','DK','North'),('Region Zealand','85','DK','East'),('Southern Denmark','83','DK','South');

-- ─── FINLAND (FI) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Aland Islands','AL','FI','Southwest'),('Central Finland','CF','FI','Central'),('Central Ostrobothnia','CO','FI','West'),('Kainuu','KA','FI','East'),('Kanta-Hame','KH','FI','South'),('Kymenlaakso','KY','FI','South'),('Lapland','LA','FI','North'),('North Karelia','NK','FI','East'),('North Ostrobothnia','NO','FI','North'),('Ostrobothnia','OB','FI','West'),('Paijat-Hame','PH','FI','South'),('Pirkanmere','PI','FI','Central'),('Satakunta','SA','FI','West'),('South Karelia','SK','FI','Southeast'),('South Ostrobothnia','SO','FI','West'),('Southwest Finland','SF','FI','Southwest'),('Uusimaa','UU','FI','South');

-- ─── IRELAND (IE) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Carlow','CW','IE','Leinster'),('Cavan','CN','IE','Ulster'),('Clare','CE','IE','Munster'),('Cork','CO','IE','Munster'),('Donegal','DL','IE','Ulster'),('Dublin','DU','IE','Leinster'),('Galway','GA','IE','Connacht'),('Kerry','KY','IE','Munster'),('Kildare','KE','IE','Leinster'),('Kilkenny','KK','IE','Leinster'),('Laois','LS','IE','Leinster'),('Leitrim','LM','IE','Connacht'),('Limerick','LK','IE','Munster'),('Longford','LD','IE','Leinster'),('Louth','LH','IE','Leinster'),('Mayo','MO','IE','Connacht'),('Meath','MH','IE','Leinster'),('Monaghan','MN','IE','Ulster'),('Offaly','OY','IE','Leinster'),('Roscommon','RN','IE','Connacht'),('Sligo','SO','IE','Connacht'),('Tipperary','TA','IE','Munster'),('Waterford','WD','IE','Munster'),('Westmeath','WH','IE','Leinster'),('Wexford','WX','IE','Leinster'),('Wicklow','WW','IE','Leinster');

-- ─── AUSTRIA (AT) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Burgenland','BU','AT','East'),('Carinthia','KA','AT','South'),('Lower Austria','NO','AT','East'),('Salzburg','SA','AT','West'),('Styria','ST','AT','South'),('Tyrol','TI','AT','West'),('Upper Austria','OO','AT','North'),('Vienna','WI','AT','East'),('Vorarlberg','VO','AT','West');

-- ─── GREECE (GR) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Attica','AT','GR','Central'),('Central Greece','CE','GR','Central'),('Central Macedonia','CM','GR','North'),('Crete','CR','GR','South'),('East Macedonia and Thrace','EM','GR','Northeast'),('Epirus','EP','GR','Northwest'),('Ionian Islands','II','GR','West'),('North Aegean','NA','GR','East'),('Peloponnese','PE','GR','South'),('South Aegean','SA','GR','Southeast'),('Thessaly','TH','GR','Central'),('West Greece','WG','GR','West'),('West Macedonia','WM','GR','North');

-- ─── CZECH REPUBLIC (CZ) ──────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central Bohemian','CB','CZ','Central'),('Hradec Kralove','HK','CZ','Northeast'),('Karlovy Vary','KV','CZ','West'),('Liberec','LI','CZ','North'),('Moravian-Silesian','MS','CZ','East'),('Olomouc','OL','CZ','East'),('Pardubice','PA','CZ','East'),('Plzen','PL','CZ','West'),('Prague','PR','CZ','Central'),('South Bohemian','SB','CZ','South'),('South Moravian','SM','CZ','South'),('Usti nad Labem','UL','CZ','North'),('Vysocina','VY','CZ','Central'),('Zlin','ZL','CZ','Southeast');

-- ─── ARGENTINA (AR) ────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Buenos Aires','BA','AR','Pampas'),('Buenos Aires City','CF','AR','Pampas'),('Catamarca','CT','AR','Northwest'),('Chaco','CC','AR','Northeast'),('Chubut','CH','AR','Patagonia'),('Cordoba','CB','AR','Central'),('Corrientes','CR','AR','Northeast'),('Entre Rios','ER','AR','Northeast'),('Formosa','FO','AR','Northeast'),('Jujuy','JY','AR','Northwest'),('La Pampa','LP','AR','Central'),('La Rioja','LR','AR','Northwest'),('Mendoza','MZ','AR','West'),('Misiones','MI','AR','Northeast'),('Neuquen','NQ','AR','Patagonia'),('Rio Negro','RN','AR','Patagonia'),('Salta','SA','AR','Northwest'),('San Juan','SJ','AR','West'),('San Luis','SL','AR','Central'),('Santa Cruz','SC','AR','Patagonia'),('Santa Fe','SF','AR','Central'),('Santiago del Estero','SE','AR','North'),('Tierra del Fuego','TF','AR','Patagonia'),('Tucuman','TU','AR','Northwest');

-- ─── COLOMBIA (CO) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Amazonas','AM','CO','South'),('Antioquia','AN','CO','Northwest'),('Arauca','AR','CO','East'),('Atlantico','AT','CO','North'),('Bogota D.C.','DC','CO','Central'),('Bolivar','BL','CO','North'),('Boyaca','BY','CO','Central'),('Caldas','CL','CO','West'),('Caqueta','CQ','CO','South'),('Casanare','CS','CO','East'),('Cauca','CA','CO','Southwest'),('Cesar','CE','CO','North'),('Choco','CH','CO','West'),('Cordoba','CO','CO','North'),('Cundinamarca','CU','CO','Central'),('Guainia','GN','CO','East'),('Guaviare','GV','CO','South'),('Huila','HU','CO','South'),('La Guajira','LG','CO','North'),('Magdalena','MA','CO','North'),('Meta','ME','CO','East'),('Narino','NA','CO','Southwest'),('Norte de Santander','NS','CO','Northeast'),('Putumayo','PU','CO','South'),('Quindio','QD','CO','West'),('Risaralda','RI','CO','West'),('San Andres','SA','CO','Islands'),('Santander','SN','CO','Northeast'),('Sucre','SU','CO','North'),('Tolima','TO','CO','Central'),('Valle del Cauca','VC','CO','West'),('Vaupes','VA','CO','South'),('Vichada','VI','CO','East');

-- ─── CHILE (CL) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Arica y Parinacota','AP','CL','North'),('Tarapaca','TA','CL','North'),('Antofagasta','AN','CL','North'),('Atacama','AT','CL','North'),('Coquimbo','CO','CL','Central'),('Valparaiso','VS','CL','Central'),('Santiago Metropolitan','RM','CL','Central'),('O''Higgins','LI','CL','Central'),('Maule','ML','CL','Central'),('Nuble','NB','CL','Central'),('Biobio','BI','CL','South'),('Araucania','AR','CL','South'),('Los Rios','LR','CL','South'),('Los Lagos','LL','CL','South'),('Aysen','AI','CL','South'),('Magallanes','MA','CL','South');

-- ─── PERU (PE) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Amazonas','AM','PE','North'),('Ancash','AN','PE','Central'),('Apurimac','AP','PE','South'),('Arequipa','AR','PE','South'),('Ayacucho','AY','PE','South'),('Cajamarca','CA','PE','North'),('Callao','CL','PE','Central'),('Cusco','CU','PE','South'),('Huancavelica','HV','PE','Central'),('Huanuco','HU','PE','Central'),('Ica','IC','PE','South'),('Junin','JU','PE','Central'),('La Libertad','LL','PE','North'),('Lambayeque','LA','PE','North'),('Lima','LI','PE','Central'),('Loreto','LO','PE','East'),('Madre de Dios','MD','PE','East'),('Moquegua','MO','PE','South'),('Pasco','PA','PE','Central'),('Piura','PI','PE','North'),('Puno','PU','PE','South'),('San Martin','SM','PE','North'),('Tacna','TA','PE','South'),('Tumbes','TU','PE','North'),('Ucayali','UC','PE','East');

-- ─── NEW ZEALAND (NZ) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Auckland','AU','NZ','North Island'),('Bay of Plenty','BP','NZ','North Island'),('Canterbury','CA','NZ','South Island'),('Gisborne','GI','NZ','North Island'),('Hawke''s Bay','HB','NZ','North Island'),('Manawatu-Whanganui','MW','NZ','North Island'),('Marlborough','MA','NZ','South Island'),('Nelson','NE','NZ','South Island'),('Northland','NO','NZ','North Island'),('Otago','OT','NZ','South Island'),('Southland','SO','NZ','South Island'),('Taranaki','TK','NZ','North Island'),('Tasman','TS','NZ','South Island'),('Waikato','WK','NZ','North Island'),('Wellington','WG','NZ','North Island'),('West Coast','WC','NZ','South Island');

-- ─── ISRAEL (IL) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central','CE','IL','Central'),('Haifa','HA','IL','North'),('Jerusalem','JE','IL','Central'),('Northern','NO','IL','North'),('Southern','SO','IL','South'),('Tel Aviv','TA','IL','Central');

-- ─── SINGAPORE (SG) ────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central Region','CR','SG','Central'),('East Region','ER','SG','East'),('North Region','NR','SG','North'),('North-East Region','NE','SG','Northeast'),('West Region','WR','SG','West');

-- ─── SMALL COUNTRIES (single subdivision) ──────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Monaco','MC','MC'),('Vatican City','VA','VA'),('San Marino','SM','SM'),('Liechtenstein','LI','LI'),('Andorra','AD','AD'),('Malta','MT','MT'),('Luxembourg','LU','LU'),('Bahrain','BH','BH'),('Brunei','BN','BN'),('Maldives','MV','MV'),('Iceland','IS','IS'),('Cyprus','CY','CY'),('Qatar','QA','QA'),('Kuwait','KW','KW');

COMMIT;
