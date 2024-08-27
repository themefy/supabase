export type CloudProvider = 'FLY' | 'AWS'
export type Region = typeof AWS_REGIONS | typeof FLY_REGIONS

export const AWS_REGIONS = {
  WEST_US: { code: 'us-west-1', displayName: 'West US (North California)' },
  EAST_US: { code: 'us-east-1', displayName: 'East US (North Virginia)' },
  EAST_US_2: { code: 'us-east-2', displayName: 'East US (Ohio)' },
  CENTRAL_CANADA: { code: 'ca-central-1', displayName: 'Canada (Central)' },
  WEST_EU: { code: 'eu-west-1', displayName: 'West EU (Ireland)' },
  WEST_EU_2: { code: 'eu-west-2', displayName: 'West EU (London)' },
  WEST_EU_3: { code: 'eu-west-3', displayName: 'West EU (Paris)' },
  CENTRAL_EU: { code: 'eu-central-1', displayName: 'Central EU (Frankfurt)' },
  CENTRAL_EU_2: { code: 'eu-central-2', displayName: 'Central Europe (Zurich)' },
  NORTH_EU: { code: 'eu-north-1', displayName: 'North EU (Stockholm)' },
  SOUTH_ASIA: { code: 'ap-south-1', displayName: 'South Asia (Mumbai)' },
  SOUTHEAST_ASIA: { code: 'ap-southeast-1', displayName: 'Southeast Asia (Singapore)' },
  NORTHEAST_ASIA: { code: 'ap-northeast-1', displayName: 'Northeast Asia (Tokyo)' },
  NORTHEAST_ASIA_2: { code: 'ap-northeast-2', displayName: 'Northeast Asia (Seoul)' },
  OCEANIA: { code: 'ap-southeast-2', displayName: 'Oceania (Sydney)' },
  SOUTH_AMERICA: { code: 'sa-east-1', displayName: 'South America (São Paulo)' },
} as const

export type AWS_REGIONS_KEYS = keyof typeof AWS_REGIONS

export const FLY_REGIONS = {
  SOUTHEAST_ASIA: { code: 'sin', displayName: 'Singapore' },
} as const

export const AWS_REGIONS_DEFAULT =
  process.env.NEXT_PUBLIC_ENVIRONMENT !== 'prod' ? AWS_REGIONS.SOUTHEAST_ASIA : AWS_REGIONS.EAST_US

// TO DO, change default to US region for prod
export const FLY_REGIONS_DEFAULT = FLY_REGIONS.SOUTHEAST_ASIA
