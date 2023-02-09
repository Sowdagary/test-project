export interface ITimeZone {
  abbreviation: string
  gmtOffset: number
  gmtOffsetName: string
  tzName: string
}

export interface ILocation {
  capital: string
  created_at: string
  currency: string
  currency_name: string
  currency_symbol: string
  emoji: string
  emojiU: string
  flag: number
  id: number
  iso2: string
  iso3: string
  latitude: string
  longitude: string
  name: string
  native: string
  numeric_code: string
  phonecode: string
  region: string
  subregion: string
  timezones: ITimeZone[]
  tld: string
  updated_at: string
  wikiDataId: string
}
