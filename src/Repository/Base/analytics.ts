export interface Analytics {
  logEvent: (name: string, params: object) => void
}

export type UpsertItemData = {
  useExtCode: boolean // Event to register if an item was added by an extension b64 code
  store: string // Store of the item
}

export const EventTypes = {
  "GoFreeApp": "GO_FREE_APP", // Event to register the use of a button that redirects to free app
  "GetChromeExt": "GET_CHROME_EXTENSION", // Event to register the user clicks a link to get the chrome extension
  "GetFirefoxExt": "GET_FIREFOX_EXTENSION", // Event to register the user clicks a link to get the firefox extension
  "UpsertItem": "UPSERT_ITEM", // Event to register an addition of an item, it may register UpserItemData
}