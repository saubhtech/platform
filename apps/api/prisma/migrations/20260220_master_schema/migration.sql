-- Create master schema
CREATE SCHEMA IF NOT EXISTS master;

-- Country
CREATE TABLE master.country (
  country_code CHAR(2) PRIMARY KEY,
  country VARCHAR(100) NOT NULL,
  iso3 CHAR(3) NOT NULL,
  isd VARCHAR(10) NOT NULL,
  flag VARCHAR(8) NOT NULL
);

-- State
CREATE TABLE master.state (
  stateid SERIAL PRIMARY KEY,
  state VARCHAR(100) NOT NULL,
  state_code CHAR(2) NOT NULL,
  country_code CHAR(2) NOT NULL REFERENCES master.country(country_code) ON DELETE CASCADE,
  region VARCHAR(100)
);
CREATE INDEX idx_state_country ON master.state(country_code);
CREATE INDEX idx_state_code_country ON master.state(state_code, country_code);

-- District
CREATE TABLE master.district (
  districtid SERIAL PRIMARY KEY,
  district VARCHAR(100) NOT NULL,
  stateid INTEGER NOT NULL REFERENCES master.state(stateid) ON DELETE CASCADE,
  country_code CHAR(2) NOT NULL REFERENCES master.country(country_code) ON DELETE CASCADE
);
CREATE INDEX idx_district_state ON master.district(stateid);
CREATE INDEX idx_district_country ON master.district(country_code);

-- Postal
CREATE TABLE master.postal (
  postid SERIAL PRIMARY KEY,
  pincode VARCHAR(10) NOT NULL,
  postoffice VARCHAR(150) NOT NULL,
  districtid INTEGER NOT NULL REFERENCES master.district(districtid) ON DELETE CASCADE,
  stateid INTEGER NOT NULL REFERENCES master.state(stateid) ON DELETE CASCADE,
  country_code CHAR(2) NOT NULL REFERENCES master.country(country_code) ON DELETE CASCADE
);
CREATE INDEX idx_postal_pincode ON master.postal(pincode);
CREATE INDEX idx_postal_district ON master.postal(districtid);
CREATE INDEX idx_postal_state ON master.postal(stateid);
CREATE INDEX idx_postal_country ON master.postal(country_code);

-- Place
CREATE TABLE master.place (
  placeid BIGSERIAL PRIMARY KEY,
  country_code CHAR(2) NOT NULL REFERENCES master.country(country_code) ON DELETE CASCADE,
  stateid INTEGER NOT NULL REFERENCES master.state(stateid) ON DELETE CASCADE,
  districtid INTEGER NOT NULL REFERENCES master.district(districtid) ON DELETE CASCADE,
  pincode VARCHAR(10) NOT NULL,
  place VARCHAR(200) NOT NULL,
  userid BIGINT
);
CREATE INDEX idx_place_country ON master.place(country_code);
CREATE INDEX idx_place_state ON master.place(stateid);
CREATE INDEX idx_place_district ON master.place(districtid);
CREATE INDEX idx_place_pincode ON master.place(pincode);

-- Locality
CREATE TABLE master.locality (
  localityid SERIAL PRIMARY KEY,
  locality VARCHAR(200) NOT NULL,
  placeid INTEGER[] DEFAULT '{}',
  local_agency BIGINT
);

-- Area
CREATE TABLE master.area (
  areaid SERIAL PRIMARY KEY,
  area VARCHAR(200) NOT NULL,
  localityid INTEGER[] DEFAULT '{}',
  area_agency BIGINT
);

-- Division
CREATE TABLE master.division (
  divisionid SERIAL PRIMARY KEY,
  division VARCHAR(200) NOT NULL,
  areaid INTEGER[] DEFAULT '{}',
  division_agency BIGINT
);

-- Region
CREATE TABLE master.region (
  regionid SERIAL PRIMARY KEY,
  region VARCHAR(200) NOT NULL,
  divisionid INTEGER[] DEFAULT '{}',
  region_agency BIGINT
);

-- Zone
CREATE TABLE master.zone (
  zoneid SERIAL PRIMARY KEY,
  zone_code CHAR(2) NOT NULL,
  zone VARCHAR(200) NOT NULL,
  regionid INTEGER[] DEFAULT '{}',
  zone_agency BIGINT
);

-- Sector
CREATE TABLE master.sector (
  sectorid SERIAL PRIMARY KEY,
  sector VARCHAR(200) NOT NULL
);

-- Field
CREATE TABLE master.field (
  fieldid SERIAL PRIMARY KEY,
  field VARCHAR(200) NOT NULL,
  sectorid INTEGER NOT NULL REFERENCES master.sector(sectorid) ON DELETE CASCADE
);
CREATE INDEX idx_field_sector ON master.field(sectorid);
