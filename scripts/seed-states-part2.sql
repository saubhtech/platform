-- Seed states Part 2: remaining countries not covered in seed-states.sql
-- Countries already covered: IN,US,GB,CA,AU,CN,JP,KR,DE,FR,IT,ES,RU,BR,MX,PK,BD,ID,TR,IR,SA,AE,TH,VN,MY,PH,ZA,NG,EG,KE,ET,NP,LK,PL,NL,CH,PT,SE,NO,DK,FI,IE,AT,GR,CZ,AR,CO,CL,PE,NZ,IL,SG,MC,VA,SM,LI,AD,MT,LU,BH,BN,MV,IS,CY,QA,KW

BEGIN;

-- ─── AFGHANISTAN (AF) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Badakhshan','BD','AF','Northeast'),('Badghis','BG','AF','Northwest'),('Baghlan','BL','AF','North'),('Balkh','BK','AF','North'),('Bamyan','BM','AF','Central'),('Daykundi','DY','AF','Central'),('Farah','FR','AF','West'),('Faryab','FY','AF','Northwest'),('Ghazni','GZ','AF','Southeast'),('Ghor','GO','AF','Central'),('Helmand','HE','AF','Southwest'),('Herat','HR','AF','West'),('Jowzjan','JW','AF','North'),('Kabul','KB','AF','Central'),('Kandahar','KD','AF','South'),('Kapisa','KP','AF','Central'),('Khost','KH','AF','Southeast'),('Kunar','KN','AF','East'),('Kunduz','KZ','AF','Northeast'),('Laghman','LG','AF','East'),('Logar','LO','AF','Central'),('Nangarhar','NG','AF','East'),('Nimroz','NM','AF','Southwest'),('Nuristan','NR','AF','East'),('Paktia','PK','AF','Southeast'),('Paktika','PT','AF','Southeast'),('Panjshir','PJ','AF','Central'),('Parwan','PW','AF','Central'),('Samangan','SM','AF','North'),('Sar-e Pol','SP','AF','North'),('Takhar','TK','AF','Northeast'),('Uruzgan','UZ','AF','Central'),('Wardak','WD','AF','Central'),('Zabul','ZB','AF','South');

-- ─── ALBANIA (AL) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Berat','BR','AL','South'),('Diber','DI','AL','North'),('Durres','DR','AL','Central'),('Elbasan','EL','AL','Central'),('Fier','FR','AL','South'),('Gjirokaster','GJ','AL','South'),('Korce','KO','AL','Southeast'),('Kukes','KU','AL','North'),('Lezhe','LE','AL','North'),('Shkoder','SH','AL','North'),('Tirana','TR','AL','Central'),('Vlore','VL','AL','South');

-- ─── ALGERIA (DZ) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Algiers','16','DZ','North'),('Oran','31','DZ','Northwest'),('Constantine','25','DZ','Northeast'),('Annaba','23','DZ','Northeast'),('Blida','09','DZ','North'),('Batna','05','DZ','East'),('Setif','19','DZ','East'),('Tlemcen','13','DZ','Northwest'),('Bejaia','06','DZ','North'),('Tizi Ouzou','15','DZ','North');

-- ─── ANGOLA (AO) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Benguela','BG','AO','West'),('Bie','BI','AO','Central'),('Cabinda','CB','AO','North'),('Cunene','CN','AO','South'),('Huambo','HB','AO','Central'),('Huila','HL','AO','South'),('Luanda','LU','AO','Northwest'),('Lunda Norte','LN','AO','Northeast'),('Lunda Sul','LS','AO','East'),('Malanje','MJ','AO','Central'),('Moxico','MX','AO','East'),('Namibe','NM','AO','Southwest'),('Uige','UI','AO','North'),('Zaire','ZA','AO','Northwest');

-- ─── ANTIGUA AND BARBUDA (AG) ──────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Antigua and Barbuda','AG','AG');

-- ─── ARMENIA (AM) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Aragatsotn','AG','AM','North'),('Ararat','AR','AM','Central'),('Armavir','AV','AM','West'),('Gegharkunik','GR','AM','East'),('Kotayk','KT','AM','Central'),('Lori','LO','AM','North'),('Shirak','SH','AM','Northwest'),('Syunik','SU','AM','South'),('Tavush','TV','AM','Northeast'),('Vayots Dzor','VD','AM','South'),('Yerevan','ER','AM','Central');

-- ─── AZERBAIJAN (AZ) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Baku','BA','AZ','East'),('Ganja','GA','AZ','West'),('Sumgait','SM','AZ','East'),('Lankaran','LA','AZ','South'),('Mingachevir','MI','AZ','Central'),('Nakhchivan','NK','AZ','Southwest'),('Shirvan','SR','AZ','Central'),('Sheki','SA','AZ','Northwest'),('Yevlakh','YE','AZ','Central');

-- ─── BAHAMAS (BS) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('New Providence','NP','BS'),('Grand Bahama','GB','BS'),('Exuma','EX','BS'),('Abaco','AB','BS');

-- ─── BARBADOS (BB) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Barbados','BB','BB');

-- ─── BELARUS (BY) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Brest','BR','BY','West'),('Gomel','GO','BY','Southeast'),('Grodno','GR','BY','West'),('Minsk City','MI','BY','Central'),('Minsk Oblast','MO','BY','Central'),('Mogilev','MG','BY','East'),('Vitebsk','VI','BY','North');

-- ─── BELGIUM (BE) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Brussels-Capital','BR','BE','Central'),('Antwerp','AN','BE','Flanders'),('East Flanders','EF','BE','Flanders'),('Flemish Brabant','FB','BE','Flanders'),('Hainaut','HT','BE','Wallonia'),('Liege','LG','BE','Wallonia'),('Limburg','LI','BE','Flanders'),('Luxembourg','LX','BE','Wallonia'),('Namur','NA','BE','Wallonia'),('Walloon Brabant','WB','BE','Wallonia'),('West Flanders','WF','BE','Flanders');

-- ─── BELIZE (BZ) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Belize','BZ','BZ'),('Cayo','CY','BZ'),('Corozal','CZ','BZ'),('Orange Walk','OW','BZ'),('Stann Creek','SC','BZ'),('Toledo','TO','BZ');

-- ─── BENIN (BJ) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Alibori','AL','BJ','North'),('Atakora','AK','BJ','North'),('Atlantique','AQ','BJ','South'),('Borgou','BO','BJ','North'),('Collines','CO','BJ','Central'),('Donga','DO','BJ','North'),('Kouffo','KO','BJ','South'),('Littoral','LI','BJ','South'),('Mono','MO','BJ','South'),('Oueme','OU','BJ','South'),('Plateau','PL','BJ','South'),('Zou','ZO','BJ','Central');

-- ─── BHUTAN (BT) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Bumthang','BU','BT','Central'),('Chhukha','CK','BT','West'),('Paro','PA','BT','West'),('Punakha','PU','BT','Central'),('Thimphu','TH','BT','West'),('Trashigang','TG','BT','East');

-- ─── BOLIVIA (BO) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Beni','BE','BO','North'),('Chuquisaca','CH','BO','Central'),('Cochabamba','CB','BO','Central'),('La Paz','LP','BO','West'),('Oruro','OR','BO','West'),('Pando','PA','BO','North'),('Potosi','PO','BO','Southwest'),('Santa Cruz','SC','BO','East'),('Tarija','TJ','BO','South');

-- ─── BOSNIA AND HERZEGOVINA (BA) ──────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Federation of Bosnia and Herzegovina','FB','BA','Central'),('Republika Srpska','RS','BA','East'),('Brcko District','BD','BA','North');

-- ─── BOTSWANA (BW) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central','CE','BW','Central'),('Gaborone','GA','BW','Southeast'),('Kgalagadi','KG','BW','Southwest'),('Kgatleng','KL','BW','East'),('Kweneng','KW','BW','Central'),('North-East','NE','BW','North'),('North-West','NW','BW','North'),('South-East','SE','BW','South'),('Southern','SO','BW','South');

-- ─── BULGARIA (BG) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Blagoevgrad','BL','BG','Southwest'),('Burgas','BU','BG','Southeast'),('Dobrich','DO','BG','Northeast'),('Gabrovo','GB','BG','North Central'),('Lovech','LO','BG','North Central'),('Montana','MN','BG','Northwest'),('Plovdiv','PD','BG','South Central'),('Ruse','RU','BG','North Central'),('Shumen','SH','BG','Northeast'),('Sofia City','SF','BG','Southwest'),('Sofia Province','SO','BG','Southwest'),('Stara Zagora','SZ','BG','South Central'),('Varna','VR','BG','Northeast'),('Veliko Tarnovo','VT','BG','North Central');

-- ─── BURKINA FASO (BF) ─────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Boucle du Mouhoun','BM','BF','West'),('Cascades','CA','BF','Southwest'),('Centre','CE','BF','Central'),('Centre-Est','CE','BF','East'),('Centre-Nord','CN','BF','Central'),('Centre-Ouest','CO','BF','Central'),('Centre-Sud','CS','BF','Central'),('Est','ES','BF','East'),('Hauts-Bassins','HB','BF','West'),('Nord','NO','BF','North'),('Plateau-Central','PC','BF','Central'),('Sahel','SH','BF','North'),('Sud-Ouest','SW','BF','Southwest');

-- ─── BURUNDI (BI) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Bujumbura Mairie','BM','BI'),('Gitega','GI','BI'),('Ngozi','NG','BI'),('Muyinga','MY','BI'),('Bururi','BR','BI');

-- ─── CABO VERDE (CV) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Praia','PR','CV'),('Mindelo','MI','CV'),('Santa Catarina','SC','CV'),('Sal','SL','CV');

-- ─── CAMBODIA (KH) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Phnom Penh','PP','KH','Central'),('Battambang','BB','KH','Northwest'),('Siem Reap','SR','KH','Northwest'),('Kampong Cham','KC','KH','Central'),('Kandal','KD','KH','Central'),('Preah Sihanouk','PS','KH','South'),('Banteay Meanchey','BM','KH','Northwest'),('Takeo','TK','KH','South');

-- ─── CAMEROON (CM) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Adamaoua','AD','CM','North'),('Centre','CE','CM','Central'),('East','ES','CM','East'),('Far North','EN','CM','North'),('Littoral','LT','CM','Coast'),('North','NO','CM','North'),('Northwest','NW','CM','West'),('South','SU','CM','South'),('Southwest','SW','CM','West'),('West','OU','CM','West');

-- ─── CENTRAL AFRICAN REPUBLIC (CF) ────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Bangui','BG','CF'),('Ombella-M''Poko','OM','CF'),('Ouham','OU','CF'),('Nana-Mambere','NM','CF');

-- ─── CHAD (TD) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('N''Djamena','ND','TD'),('Logone Occidental','LO','TD'),('Ouaddai','OD','TD'),('Mayo-Kebbi Est','ME','TD'),('Lac','LC','TD');

-- ─── COMOROS (KM) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Grande Comore','GC','KM'),('Anjouan','AJ','KM'),('Moheli','MO','KM');

-- ─── CONGO (CG) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Brazzaville','BZ','CG'),('Pointe-Noire','PN','CG'),('Pool','PO','CG'),('Sangha','SA','CG');

-- ─── DR CONGO (CD) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Kinshasa','KN','CD','West'),('Haut-Katanga','HK','CD','Southeast'),('Lualaba','LU','CD','South'),('Nord-Kivu','NK','CD','East'),('Sud-Kivu','SK','CD','East'),('Kasai-Central','KC','CD','Central'),('Kongo Central','KG','CD','West'),('Tshopo','TS','CD','Northeast'),('Equateur','EQ','CD','Northwest'),('Maniema','MA','CD','East');

-- ─── COSTA RICA (CR) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('San Jose','SJ','CR','Central'),('Alajuela','AL','CR','Central'),('Cartago','CA','CR','Central'),('Heredia','HE','CR','Central'),('Guanacaste','GU','CR','Northwest'),('Puntarenas','PU','CR','Pacific'),('Limon','LI','CR','Caribbean');

-- ─── COTE D''IVOIRE (CI) ──────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Abidjan','AB','CI','South'),('Bouake','BK','CI','Central'),('Daloa','DL','CI','West'),('Yamoussoukro','YM','CI','Central'),('San Pedro','SP','CI','Southwest'),('Korhogo','KR','CI','North');

-- ─── CROATIA (HR) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Zagreb City','ZG','HR','Central'),('Zagreb County','ZA','HR','Central'),('Split-Dalmatia','SD','HR','South'),('Istria','IS','HR','West'),('Primorje-Gorski Kotar','PG','HR','West'),('Osijek-Baranja','OB','HR','East'),('Vukovar-Srijem','VS','HR','East'),('Dubrovnik-Neretva','DN','HR','South'),('Varazdin','VZ','HR','North'),('Sisak-Moslavina','SM','HR','Central');

-- ─── CUBA (CU) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Pinar del Rio','PR','CU','West'),('Artemisa','AR','CU','West'),('La Habana','LH','CU','West'),('Mayabeque','MY','CU','West'),('Matanzas','MT','CU','West'),('Villa Clara','VC','CU','Central'),('Cienfuegos','CF','CU','Central'),('Sancti Spiritus','SS','CU','Central'),('Camaguey','CM','CU','Central'),('Holguin','HO','CU','East'),('Santiago de Cuba','SC','CU','East'),('Granma','GR','CU','East'),('Guantanamo','GT','CU','East'),('Las Tunas','LT','CU','East'),('Isla de la Juventud','IJ','CU','West');

-- ─── DJIBOUTI (DJ) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Djibouti','DJ','DJ'),('Ali Sabieh','AS','DJ'),('Arta','AR','DJ'),('Dikhil','DI','DJ'),('Obock','OB','DJ'),('Tadjourah','TA','DJ');

-- ─── DOMINICA (DM) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Dominica','DM','DM');

-- ─── DOMINICAN REPUBLIC (DO) ──────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Distrito Nacional','DN','DO','South'),('Santiago','SA','DO','North'),('Santo Domingo','SD','DO','South'),('La Vega','LV','DO','Central'),('San Cristobal','SC','DO','South'),('Puerto Plata','PP','DO','North'),('La Altagracia','LA','DO','East'),('San Pedro de Macoris','SP','DO','East');

-- ─── ECUADOR (EC) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Azuay','AZ','EC','Sierra'),('Bolivar','BO','EC','Sierra'),('Canar','CA','EC','Sierra'),('Carchi','CR','EC','Sierra'),('Chimborazo','CH','EC','Sierra'),('Cotopaxi','CO','EC','Sierra'),('El Oro','EO','EC','Costa'),('Esmeraldas','ES','EC','Costa'),('Galapagos','GA','EC','Insular'),('Guayas','GU','EC','Costa'),('Imbabura','IM','EC','Sierra'),('Loja','LO','EC','Sierra'),('Los Rios','LR','EC','Costa'),('Manabi','MN','EC','Costa'),('Morona Santiago','MS','EC','Amazonia'),('Napo','NA','EC','Amazonia'),('Orellana','OR','EC','Amazonia'),('Pastaza','PA','EC','Amazonia'),('Pichincha','PI','EC','Sierra'),('Santa Elena','SE','EC','Costa'),('Santo Domingo','SD','EC','Costa'),('Sucumbios','SU','EC','Amazonia'),('Tungurahua','TU','EC','Sierra'),('Zamora Chinchipe','ZC','EC','Amazonia');

-- ─── EL SALVADOR (SV) ─────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('San Salvador','SS','SV','Central'),('Santa Ana','SA','SV','West'),('San Miguel','SM','SV','East'),('La Libertad','LL','SV','Central'),('Sonsonate','SO','SV','West'),('Usulutan','US','SV','East'),('Ahuachapan','AH','SV','West');

-- ─── EQUATORIAL GUINEA (GQ) ──────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Bioko Norte','BN','GQ'),('Bioko Sur','BS','GQ'),('Litoral','LI','GQ'),('Wele-Nzas','WN','GQ');

-- ─── ERITREA (ER) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Anseba','AN','ER'),('Central','CE','ER'),('Gash-Barka','GB','ER'),('Northern Red Sea','NR','ER'),('Southern','SU','ER'),('Southern Red Sea','SR','ER');

-- ─── ESWATINI (SZ) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Hhohho','HH','SZ'),('Lubombo','LU','SZ'),('Manzini','MA','SZ'),('Shiselweni','SH','SZ');

-- ─── FIJI (FJ) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Central','CE','FJ'),('Eastern','EA','FJ'),('Northern','NO','FJ'),('Western','WE','FJ');

-- ─── GABON (GA) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Estuaire','ES','GA'),('Haut-Ogooue','HO','GA'),('Moyen-Ogooue','MO','GA'),('Ogooue-Maritime','OM','GA'),('Woleu-Ntem','WN','GA');

-- ─── GAMBIA (GM) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Banjul','BJ','GM'),('Kanifing','KA','GM'),('Brikama','BR','GM'),('Kerewan','KE','GM'),('Kuntaur','KU','GM');

-- ─── GEORGIA (GE) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Tbilisi','TB','GE','East'),('Adjara','AJ','GE','West'),('Guria','GU','GE','West'),('Imereti','IM','GE','West'),('Kakheti','KA','GE','East'),('Kvemo Kartli','KK','GE','South'),('Mtskheta-Mtianeti','MM','GE','East'),('Racha-Lechkhumi','RL','GE','West'),('Samegrelo-Zemo Svaneti','SZ','GE','West'),('Samtskhe-Javakheti','SJ','GE','South'),('Shida Kartli','SK','GE','Central');

-- ─── GHANA (GH) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Ashanti','AH','GH','Central'),('Bono','BO','GH','West'),('Bono East','BE','GH','Central'),('Central','CP','GH','South'),('Eastern','EP','GH','East'),('Greater Accra','AA','GH','South'),('North East','NE','GH','North'),('Northern','NP','GH','North'),('Oti','OT','GH','East'),('Savannah','SV','GH','North'),('Upper East','UE','GH','North'),('Upper West','UW','GH','North'),('Volta','TV','GH','East'),('Western','WP','GH','West'),('Western North','WN','GH','West'),('Ahafo','AF','GH','Central');

-- ─── GRENADA (GD) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Grenada','GD','GD');

-- ─── GUATEMALA (GT) ────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Guatemala','GU','GT','Central'),('Alta Verapaz','AV','GT','North'),('Baja Verapaz','BV','GT','North'),('Chimaltenango','CM','GT','Central'),('Chiquimula','CQ','GT','East'),('Escuintla','ES','GT','South'),('Huehuetenango','HU','GT','West'),('Izabal','IZ','GT','East'),('Peten','PE','GT','North'),('Quetzaltenango','QZ','GT','West'),('Quiche','QC','GT','West'),('Sacatepequez','SA','GT','Central'),('San Marcos','SM','GT','West'),('Santa Rosa','SR','GT','South'),('Solola','SO','GT','West'),('Suchitepequez','SU','GT','South'),('Zacapa','ZA','GT','East');

-- ─── GUINEA (GN) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Conakry','CK','GN'),('Boke','BK','GN'),('Faranah','FR','GN'),('Kankan','KA','GN'),('Kindia','KD','GN'),('Labe','LA','GN'),('Mamou','MM','GN'),('Nzerekore','NZ','GN');

-- ─── GUINEA-BISSAU (GW) ──────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Bissau','BS','GW'),('Bafata','BA','GW'),('Gabu','GA','GW');

-- ─── GUYANA (GY) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Demerara-Mahaica','DM','GY'),('Essequibo Islands-West Demerara','EW','GY'),('East Berbice-Corentyne','EB','GY'),('Upper Demerara-Berbice','UD','GY');

-- ─── HAITI (HT) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Artibonite','AR','HT','North'),('Centre','CE','HT','Central'),('Grand''Anse','GA','HT','South'),('Nippes','NI','HT','South'),('Nord','ND','HT','North'),('Nord-Est','NE','HT','North'),('Nord-Ouest','NO','HT','North'),('Ouest','OU','HT','West'),('Sud','SD','HT','South'),('Sud-Est','SE','HT','South');

-- ─── HONDURAS (HN) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Atlantida','AT','HN','North'),('Choluteca','CH','HN','South'),('Colon','CL','HN','North'),('Comayagua','CM','HN','Central'),('Copan','CP','HN','West'),('Cortes','CR','HN','Northwest'),('Francisco Morazan','FM','HN','Central'),('Gracias a Dios','GD','HN','East'),('La Paz','LP','HN','Central'),('Lempira','LE','HN','West'),('Olancho','OL','HN','East'),('Santa Barbara','SB','HN','West'),('Yoro','YO','HN','North');

-- ─── HUNGARY (HU) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Budapest','BU','HU','Central'),('Baranya','BA','HU','South'),('Bacs-Kiskun','BK','HU','South'),('Bekes','BE','HU','Southeast'),('Borsod-Abauj-Zemplen','BZ','HU','Northeast'),('Csongrad-Csanad','CS','HU','South'),('Fejer','FE','HU','Central'),('Gyor-Moson-Sopron','GS','HU','West'),('Hajdu-Bihar','HB','HU','East'),('Heves','HE','HU','North'),('Jasz-Nagykun-Szolnok','JN','HU','Central'),('Komarom-Esztergom','KE','HU','Central'),('Nograd','NO','HU','North'),('Pest','PE','HU','Central'),('Somogy','SO','HU','South'),('Szabolcs-Szatmar-Bereg','SB','HU','East'),('Tolna','TO','HU','South'),('Vas','VA','HU','West'),('Veszprem','VE','HU','Central'),('Zala','ZA','HU','West');

-- ─── IRAQ (IQ) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Baghdad','BG','IQ','Central'),('Basra','BA','IQ','South'),('Erbil','AR','IQ','Kurdistan'),('Sulaymaniyah','SU','IQ','Kurdistan'),('Nineveh','NI','IQ','North'),('Najaf','NA','IQ','South'),('Dhi Qar','DQ','IQ','South'),('Duhok','DA','IQ','Kurdistan'),('Karbala','KA','IQ','Central'),('Kirkuk','KI','IQ','North'),('Anbar','AN','IQ','West'),('Babylon','BB','IQ','Central'),('Diyala','DI','IQ','East'),('Maysan','MA','IQ','South'),('Muthanna','MU','IQ','South'),('Qadisiyyah','QA','IQ','South'),('Saladin','SD','IQ','Central'),('Wasit','WA','IQ','Central');

-- ─── JAMAICA (JM) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Kingston','KN','JM','East'),('St. Andrew','SA','JM','East'),('St. Catherine','SC','JM','South'),('Clarendon','CL','JM','South'),('Manchester','MA','JM','Central'),('St. Ann','SN','JM','North'),('St. James','SJ','JM','West'),('Westmoreland','WM','JM','West'),('Hanover','HA','JM','West'),('Trelawny','TR','JM','North'),('Portland','PO','JM','East'),('St. Elizabeth','SE','JM','South'),('St. Mary','SM','JM','North'),('St. Thomas','ST','JM','East');

-- ─── JORDAN (JO) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Amman','AM','JO','Central'),('Irbid','IR','JO','North'),('Zarqa','ZA','JO','Central'),('Balqa','BA','JO','Central'),('Mafraq','MA','JO','North'),('Karak','KA','JO','South'),('Jerash','JR','JO','North'),('Ajloun','AJ','JO','North'),('Madaba','MD','JO','Central'),('Aqaba','AQ','JO','South'),('Maan','MN','JO','South'),('Tafilah','TF','JO','South');

-- ─── KAZAKHSTAN (KZ) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Almaty City','AL','KZ','South'),('Astana','AS','KZ','Central'),('Shymkent','SH','KZ','South'),('Almaty Region','AM','KZ','South'),('Aktobe','AK','KZ','West'),('East Kazakhstan','EK','KZ','East'),('Karaganda','KR','KZ','Central'),('Kostanay','KS','KZ','North'),('Mangystau','MG','KZ','West'),('North Kazakhstan','NK','KZ','North'),('Pavlodar','PV','KZ','Northeast'),('South Kazakhstan','SK','KZ','South'),('West Kazakhstan','WK','KZ','West'),('Zhambyl','ZH','KZ','South');

-- ─── KIRIBATI (KI) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Gilbert Islands','GI','KI'),('Line Islands','LI','KI'),('Phoenix Islands','PI','KI');

-- ─── NORTH KOREA (KP) ─────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Pyongyang','PY','KP','West'),('South Pyongan','PN','KP','West'),('North Pyongan','PB','KP','Northwest'),('South Hamgyong','HN','KP','East'),('North Hamgyong','HB','KP','Northeast'),('South Hwanghae','HW','KP','South'),('North Hwanghae','HN','KP','Central'),('Kangwon','KW','KP','East'),('Chagang','CG','KP','North'),('Ryanggang','RG','KP','Northeast');

-- ─── KYRGYZSTAN (KG) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Bishkek','GB','KG','North'),('Batken','BA','KG','South'),('Chuy','CU','KG','North'),('Issyk-Kul','IK','KG','East'),('Jalal-Abad','JA','KG','South'),('Naryn','NA','KG','Central'),('Osh','OS','KG','South'),('Talas','TL','KG','West');

-- ─── LAOS (LA) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Vientiane Capital','VT','LA','Central'),('Champasak','CH','LA','South'),('Luang Prabang','LP','LA','North'),('Savannakhet','SV','LA','Central'),('Vientiane Province','VI','LA','Central'),('Oudomxay','OU','LA','North'),('Khammouane','KH','LA','Central');

-- ─── LATVIA (LV) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Riga','RI','LV'),('Daugavpils','DA','LV'),('Jelgava','JE','LV'),('Jurmala','JU','LV'),('Liepaja','LI','LV'),('Ventspils','VE','LV');

-- ─── LEBANON (LB) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Beirut','BA','LB','Central'),('Mount Lebanon','ML','LB','Central'),('North Lebanon','NL','LB','North'),('South Lebanon','SL','LB','South'),('Bekaa','BK','LB','East'),('Nabatieh','NA','LB','South'),('Akkar','AK','LB','North'),('Baalbek-Hermel','BH','LB','East');

-- ─── LESOTHO (LS) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Maseru','MS','LS'),('Berea','BE','LS'),('Leribe','LR','LS'),('Mafeteng','MF','LS'),('Butha-Buthe','BB','LS');

-- ─── LIBERIA (LR) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Montserrado','MO','LR'),('Bong','BG','LR'),('Nimba','NI','LR'),('Margibi','MG','LR'),('Lofa','LO','LR');

-- ─── LIBYA (LY) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Tripoli','TB','LY','West'),('Benghazi','BA','LY','East'),('Misrata','MI','LY','West'),('Sabha','SB','LY','South'),('Zawiya','ZW','LY','West'),('Zliten','ZL','LY','West');

-- ─── LITHUANIA (LT) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Vilnius','VL','LT'),('Kaunas','KU','LT'),('Klaipeda','KL','LT'),('Siauliai','SA','LT'),('Panevezys','PN','LT'),('Alytus','AL','LT'),('Marijampole','MR','LT'),('Taurage','TA','LT'),('Telsiai','TE','LT'),('Utena','UT','LT');

-- ─── MADAGASCAR (MG) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Analamanga','AN','MG'),('Atsinanana','AT','MG'),('Vakinankaratra','VK','MG'),('Diana','DI','MG'),('Boeny','BO','MG'),('Atsimo-Andrefana','AA','MG');

-- ─── MALAWI (MW) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central','CE','MW','Central'),('Northern','NO','MW','North'),('Southern','SO','MW','South');

-- ─── MALI (ML) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Bamako','BK','ML'),('Kayes','KY','ML'),('Koulikoro','KL','ML'),('Mopti','MO','ML'),('Segou','SG','ML'),('Sikasso','SK','ML'),('Tombouctou','TB','ML');

-- ─── MARSHALL ISLANDS (MH) ────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Majuro','MA','MH'),('Kwajalein','KW','MH');

-- ─── MAURITANIA (MR) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Nouakchott','NK','MR'),('Dakhlet Nouadhibou','DN','MR'),('Hodh Ech Chargui','HC','MR'),('Assaba','AS','MR');

-- ─── MAURITIUS (MU) ───────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Port Louis','PL','MU'),('Plaines Wilhems','PW','MU'),('Pamplemousses','PA','MU'),('Flacq','FL','MU'),('Riviere du Rempart','RR','MU');

-- ─── MICRONESIA (FM) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Chuuk','CH','FM'),('Kosrae','KO','FM'),('Pohnpei','PO','FM'),('Yap','YA','FM');

-- ─── MOLDOVA (MD) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Chisinau','CU','MD','Central'),('Balti','BA','MD','North'),('Cahul','CA','MD','South'),('Gagauzia','GA','MD','South'),('Transnistria','SN','MD','East');

-- ─── MONGOLIA (MN) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Ulaanbaatar','UB','MN','Central'),('Darkhan-Uul','DA','MN','North'),('Orkhon','OR','MN','North'),('Arkhangai','AR','MN','Central'),('Selenge','SE','MN','North'),('Dornod','DO','MN','East'),('Khovd','KO','MN','West');

-- ─── MONTENEGRO (ME) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Podgorica','PG','ME'),('Niksic','NK','ME'),('Herceg Novi','HN','ME'),('Bijelo Polje','BP','ME'),('Bar','BR','ME'),('Budva','BD','ME');

-- ─── MOROCCO (MA) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Casablanca-Settat','CS','MA','Central'),('Rabat-Sale-Kenitra','RK','MA','Northwest'),('Marrakech-Safi','MS','MA','Central'),('Fes-Meknes','FM','MA','North'),('Tanger-Tetouan-Al Hoceima','TT','MA','North'),('Souss-Massa','SM','MA','South'),('Oriental','OR','MA','East'),('Beni Mellal-Khenifra','BK','MA','Central'),('Draa-Tafilalet','DT','MA','South'),('Guelmim-Oued Noun','GO','MA','South'),('Laayoune-Sakia El Hamra','LS','MA','South'),('Dakhla-Oued Ed-Dahab','DO','MA','South');

-- ─── MOZAMBIQUE (MZ) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Maputo City','MP','MZ','South'),('Maputo Province','MR','MZ','South'),('Gaza','GA','MZ','South'),('Inhambane','IN','MZ','South'),('Sofala','SO','MZ','Central'),('Manica','MA','MZ','Central'),('Zambezia','ZA','MZ','Central'),('Nampula','NA','MZ','North'),('Cabo Delgado','CD','MZ','North'),('Niassa','NI','MZ','North');

-- ─── MYANMAR (MM) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Yangon','YA','MM','South'),('Mandalay','MD','MM','Central'),('Sagaing','SG','MM','Northwest'),('Ayeyarwady','AY','MM','Southwest'),('Bago','BG','MM','South'),('Magway','MG','MM','Central'),('Shan','SH','MM','East'),('Chin','CH','MM','West'),('Kachin','KC','MM','North'),('Kayah','KH','MM','East'),('Kayin','KN','MM','Southeast'),('Mon','MN','MM','South'),('Rakhine','RK','MM','West'),('Tanintharyi','TN','MM','South');

-- ─── NAMIBIA (NA) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Khomas','KH','NA','Central'),('Erongo','ER','NA','West'),('Oshana','ON','NA','North'),('Ohangwena','OH','NA','North'),('Kavango East','KE','NA','Northeast'),('Oshikoto','OT','NA','North'),('Otjozondjupa','OD','NA','Central');

-- ─── NAURU (NR) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Nauru','NR','NR');

-- ─── NICARAGUA (NI) ───────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Managua','MN','NI','West'),('Leon','LE','NI','West'),('Chinandega','CI','NI','Northwest'),('Matagalpa','MT','NI','Central'),('Jinotega','JI','NI','North'),('Masaya','MS','NI','West'),('Esteli','ES','NI','North'),('Granada','GR','NI','West');

-- ─── NIGER (NE) ─────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Niamey','NI','NE'),('Zinder','ZI','NE'),('Maradi','MA','NE'),('Tahoua','TH','NE'),('Agadez','AG','NE'),('Dosso','DO','NE'),('Tillaberi','TI','NE');

-- ─── NORTH MACEDONIA (MK) ─────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Skopje','SK','MK'),('Bitola','BT','MK'),('Kumanovo','KU','MK'),('Prilep','PR','MK'),('Tetovo','TE','MK'),('Ohrid','OH','MK');

-- ─── OMAN (OM) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Muscat','MA','OM','Northeast'),('Dhofar','DH','OM','South'),('North Al Batinah','NB','OM','North'),('South Al Batinah','SB','OM','North'),('Ad Dakhiliyah','DA','OM','Central'),('Ash Sharqiyah North','SN','OM','East'),('Ash Sharqiyah South','SS','OM','East'),('Al Buraimi','BU','OM','North'),('Al Wusta','WU','OM','Central'),('Musandam','MU','OM','North'),('Ad Dhahirah','DZ','OM','West');

-- ─── PALAU (PW) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Koror','KO','PW'),('Melekeok','ME','PW');

-- ─── PANAMA (PA) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Panama','PN','PA','Central'),('Colon','CL','PA','North'),('Chiriqui','CH','PA','West'),('Bocas del Toro','BT','PA','West'),('Cocle','CC','PA','Central'),('Darien','DA','PA','East'),('Herrera','HE','PA','Central'),('Los Santos','LS','PA','South'),('Veraguas','VR','PA','West');

-- ─── PAPUA NEW GUINEA (PG) ───────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('National Capital District','NC','PG'),('Eastern Highlands','EH','PG'),('Morobe','MR','PG'),('Western Highlands','WH','PG'),('East Sepik','ES','PG'),('Madang','MD','PG');

-- ─── PARAGUAY (PY) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Asuncion','AS','PY','Central'),('Central','CE','PY','Central'),('Alto Parana','AP','PY','East'),('Itapua','IT','PY','South'),('Caaguazu','CG','PY','East'),('San Pedro','SP','PY','North'),('Canindeyu','CN','PY','East');

-- ─── ROMANIA (RO) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Bucharest','BU','RO','South'),('Cluj','CJ','RO','Northwest'),('Timis','TM','RO','West'),('Iasi','IS','RO','Northeast'),('Constanta','CT','RO','Southeast'),('Brasov','BV','RO','Central'),('Dolj','DJ','RO','Southwest'),('Galati','GL','RO','East'),('Prahova','PH','RO','South'),('Arges','AG','RO','South'),('Bihor','BH','RO','Northwest'),('Bacau','BC','RO','Northeast'),('Mures','MS','RO','Central'),('Sibiu','SB','RO','Central'),('Suceava','SV','RO','Northeast');

-- ─── RWANDA (RW) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Kigali','KV','RW'),('Eastern','ES','RW'),('Northern','NO','RW'),('Southern','SU','RW'),('Western','OU','RW');

-- ─── SAINT KITTS AND NEVIS (KN) ──────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Saint Kitts','SK','KN'),('Nevis','NV','KN');

-- ─── SAINT LUCIA (LC) ─────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Saint Lucia','LC','LC');

-- ─── SAINT VINCENT AND THE GRENADINES (VC) ───────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Saint Vincent and the Grenadines','VC','VC');

-- ─── SAMOA (WS) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Tuamasaga','TU','WS'),('Atua','AT','WS'),('Aana','AA','WS');

-- ─── SAO TOME AND PRINCIPE (ST) ─────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Sao Tome','ST','ST'),('Principe','PR','ST');

-- ─── SENEGAL (SN) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Dakar','DK','SN','West'),('Diourbel','DB','SN','Central'),('Fatick','FK','SN','Central'),('Kaffrine','KA','SN','Central'),('Kaolack','KL','SN','Central'),('Kedougou','KD','SN','Southeast'),('Kolda','KO','SN','South'),('Louga','LG','SN','North'),('Matam','MT','SN','North'),('Saint-Louis','SL','SN','North'),('Sedhiou','SD','SN','South'),('Tambacounda','TC','SN','East'),('Thies','TH','SN','West'),('Ziguinchor','ZG','SN','Southwest');

-- ─── SERBIA (RS) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Belgrade','BG','RS','Central'),('Vojvodina','VO','RS','North'),('Sumadija and Western Serbia','SW','RS','West'),('Southern and Eastern Serbia','SE','RS','South'),('Kosovo','KO','RS','South');

-- ─── SEYCHELLES (SC) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Seychelles','SC','SC');

-- ─── SIERRA LEONE (SL) ───────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Eastern','EA','SL'),('Northern','NO','SL'),('North West','NW','SL'),('Southern','SO','SL'),('Western Area','WE','SL');

-- ─── SLOVAKIA (SK) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Bratislava','BL','SK','West'),('Trnava','TA','SK','West'),('Trencin','TC','SK','Central'),('Nitra','NI','SK','West'),('Zilina','ZI','SK','North'),('Banska Bystrica','BC','SK','Central'),('Presov','PV','SK','East'),('Kosice','KI','SK','East');

-- ─── SLOVENIA (SI) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central Slovenia','CS','SI','Central'),('Drava','DR','SI','Northeast'),('Gorizia','GO','SI','West'),('Coastal-Karst','CK','SI','Southwest'),('Savinja','SA','SI','Central'),('Mura','MU','SI','Northeast'),('Upper Carniola','UC','SI','Northwest');

-- ─── SOLOMON ISLANDS (SB) ────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Guadalcanal','GU','SB'),('Malaita','ML','SB'),('Western','WE','SB');

-- ─── SOMALIA (SO) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Banaadir','BN','SO','South'),('Puntland','PL','SO','Northeast'),('Somaliland','SL','SO','Northwest'),('Jubaland','JB','SO','South'),('South West','SW','SO','Southwest'),('Galmudug','GM','SO','Central'),('Hirshabelle','HS','SO','Central');

-- ─── SOUTH SUDAN (SS) ─────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central Equatoria','CE','SS','South'),('Eastern Equatoria','EE','SS','Southeast'),('Jonglei','JG','SS','East'),('Lakes','LK','SS','Central'),('Northern Bahr el Ghazal','NB','SS','North'),('Unity','UY','SS','North'),('Upper Nile','UN','SS','Northeast'),('Warrap','WR','SS','Central'),('Western Bahr el Ghazal','WB','SS','Northwest'),('Western Equatoria','WE','SS','Southwest');

-- ─── SUDAN (SD) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Khartoum','KH','SD','Central'),('Al Jazirah','GZ','SD','Central'),('Blue Nile','BN','SD','Southeast'),('Kassala','KA','SD','East'),('North Darfur','DN','SD','West'),('North Kordofan','KN','SD','Central'),('Red Sea','RS','SD','Northeast'),('River Nile','NR','SD','North'),('South Darfur','DS','SD','West'),('South Kordofan','KS','SD','Central'),('West Darfur','DW','SD','West'),('White Nile','NW','SD','Central');

-- ─── SURINAME (SR) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Paramaribo','PM','SR'),('Wanica','WA','SR'),('Nickerie','NI','SR'),('Commewijne','CM','SR');

-- ─── SYRIA (SY) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Damascus','DI','SY','South'),('Aleppo','HL','SY','North'),('Homs','HM','SY','Central'),('Latakia','LA','SY','West'),('Hama','HA','SY','Central'),('Rif Dimashq','RD','SY','South'),('Deir ez-Zor','DZ','SY','East'),('Idlib','ID','SY','Northwest'),('Tartus','TA','SY','West'),('Daraa','DR','SY','South'),('Al-Hasakah','HK','SY','Northeast'),('Ar-Raqqah','RQ','SY','North'),('As-Suwayda','SU','SY','South'),('Quneitra','QU','SY','South');

-- ─── TAJIKISTAN (TJ) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Dushanbe','DU','TJ','Central'),('Sughd','SU','TJ','North'),('Khatlon','KT','TJ','South'),('Gorno-Badakhshan','GB','TJ','East'),('Districts of Republican Subordination','DR','TJ','Central');

-- ─── TANZANIA (TZ) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Dar es Salaam','DS','TZ','East'),('Dodoma','DO','TZ','Central'),('Arusha','AR','TZ','North'),('Mwanza','MW','TZ','Northwest'),('Mbeya','MB','TZ','South'),('Morogoro','MR','TZ','East'),('Tanga','TN','TZ','Northeast'),('Kilimanjaro','KI','TZ','North'),('Zanzibar','ZN','TZ','Islands'),('Iringa','IR','TZ','South');

-- ─── TIMOR-LESTE (TL) ─────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Dili','DI','TL'),('Baucau','BA','TL'),('Ermera','ER','TL'),('Bobonaro','BO','TL');

-- ─── TOGO (TG) ──────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Maritime','MA','TG','South'),('Plateaux','PL','TG','Central'),('Centrale','CE','TG','Central'),('Kara','KA','TG','North'),('Savanes','SA','TG','North');

-- ─── TONGA (TO) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Tongatapu','TO','TO'),('Vava''u','VA','TO'),('Ha''apai','HA','TO');

-- ─── TRINIDAD AND TOBAGO (TT) ────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Port of Spain','PS','TT'),('San Fernando','SF','TT'),('Chaguanas','CH','TT'),('Tobago','TO','TT');

-- ─── TUNISIA (TN) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Tunis','TU','TN','North'),('Sfax','SF','TN','Central'),('Sousse','SO','TN','Central'),('Gabes','GB','TN','South'),('Kairouan','KR','TN','Central'),('Bizerte','BZ','TN','North'),('Nabeul','NA','TN','North'),('Ariana','AR','TN','North'),('Ben Arous','BA','TN','North'),('Manouba','MN','TN','North'),('Gafsa','GF','TN','South'),('Medenine','ME','TN','South');

-- ─── TURKMENISTAN (TM) ───────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Ashgabat','AS','TM','Central'),('Ahal','AH','TM','Central'),('Balkan','BK','TM','West'),('Dashoguz','DZ','TM','North'),('Lebap','LB','TM','East'),('Mary','MR','TM','South');

-- ─── TUVALU (TV) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Funafuti','FU','TV');

-- ─── UGANDA (UG) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Central','CE','UG','Central'),('Eastern','EA','UG','East'),('Northern','NO','UG','North'),('Western','WE','UG','West');

-- ─── UKRAINE (UA) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Kyiv City','KC','UA','Central'),('Kyiv Oblast','KI','UA','Central'),('Kharkiv','KH','UA','East'),('Odessa','OD','UA','South'),('Dnipropetrovsk','DP','UA','Central'),('Donetsk','DT','UA','East'),('Zaporizhzhia','ZP','UA','South'),('Lviv','LV','UA','West'),('Mykolaiv','MK','UA','South'),('Luhansk','LU','UA','East'),('Vinnytsia','VI','UA','Central'),('Kherson','KS','UA','South'),('Poltava','PL','UA','Central'),('Chernihiv','CN','UA','North'),('Cherkasy','CK','UA','Central'),('Sumy','SM','UA','Northeast'),('Zhytomyr','ZT','UA','Central'),('Rivne','RV','UA','West'),('Ivano-Frankivsk','IF','UA','West'),('Ternopil','TP','UA','West'),('Volyn','VO','UA','West'),('Khmelnytskyi','KM','UA','West'),('Chernivtsi','CV','UA','West'),('Zakarpattia','ZK','UA','West'),('Crimea','CR','UA','South');

-- ─── URUGUAY (UY) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Montevideo','MO','UY','South'),('Canelones','CA','UY','South'),('Maldonado','MA','UY','Southeast'),('Salto','SA','UY','North'),('Paysandu','PA','UY','West'),('Rivera','RI','UY','North'),('Colonia','CO','UY','Southwest');

-- ─── UZBEKISTAN (UZ) ──────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Tashkent City','TK','UZ','Central'),('Tashkent Region','TO','UZ','Central'),('Samarkand','SA','UZ','Central'),('Bukhara','BU','UZ','Central'),('Fergana','FA','UZ','East'),('Andijan','AN','UZ','East'),('Namangan','NA','UZ','East'),('Kashkadarya','QA','UZ','South'),('Surxondaryo','SU','UZ','South'),('Karakalpakstan','QR','UZ','West'),('Jizzakh','JI','UZ','Central'),('Navoiy','NW','UZ','Central'),('Khorezm','XO','UZ','West');

-- ─── VANUATU (VU) ──────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code) VALUES
('Shefa','SH','VU'),('Sanma','SA','VU'),('Tafea','TA','VU'),('Malampa','MA','VU'),('Penama','PE','VU'),('Torba','TO','VU');

-- ─── VENEZUELA (VE) ───────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Distrito Capital','DC','VE','Central'),('Aragua','AR','VE','Central'),('Bolivar','BO','VE','South'),('Carabobo','CA','VE','Central'),('Falcon','FA','VE','Northwest'),('Lara','LA','VE','West'),('Merida','ME','VE','West'),('Miranda','MI','VE','Central'),('Monagas','MO','VE','East'),('Sucre','SU','VE','Northeast'),('Tachira','TA','VE','West'),('Zulia','ZU','VE','Northwest'),('Anzoategui','AN','VE','Northeast'),('Barinas','BA','VE','West'),('Portuguesa','PO','VE','West');

-- ─── YEMEN (YE) ────────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Sana''a City','SA','YE','West'),('Aden','AD','YE','South'),('Taiz','TA','YE','Southwest'),('Hodeidah','HU','YE','West'),('Ibb','IB','YE','Central'),('Hadramaut','HD','YE','East'),('Dhamar','DH','YE','Central'),('Marib','MA','YE','Central'),('Hajjah','HJ','YE','Northwest'),('Amran','AM','YE','North');

-- ─── ZAMBIA (ZM) ───────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Lusaka','LU','ZM','Central'),('Copperbelt','CB','ZM','North'),('Central','CE','ZM','Central'),('Eastern','EA','ZM','East'),('Luapula','LP','ZM','North'),('Muchinga','MU','ZM','Northeast'),('Northern','NO','ZM','North'),('North-Western','NW','ZM','Northwest'),('Southern','SO','ZM','South'),('Western','WE','ZM','West');

-- ─── ZIMBABWE (ZW) ─────────────────────────────────────────────────
INSERT INTO master.state (state, state_code, country_code, region) VALUES
('Harare','HA','ZW','Central'),('Bulawayo','BU','ZW','Southwest'),('Manicaland','MA','ZW','East'),('Mashonaland Central','MC','ZW','North'),('Mashonaland East','ME','ZW','East'),('Mashonaland West','MW','ZW','West'),('Masvingo','MV','ZW','South'),('Matabeleland North','MN','ZW','Northwest'),('Matabeleland South','MS','ZW','Southwest'),('Midlands','MI','ZW','Central');

COMMIT;
