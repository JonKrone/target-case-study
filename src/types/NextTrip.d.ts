module NextTrip {
  interface Route {
    Description: string
    ProviderID: string
    Route: string
  }

  interface RouteDirection {
    Text: string
    Value: string // 1 = South, 2 = East, 3 = West, 4 = North
  }

  interface Stop {
    Text: string
    Value: string
  }
}
