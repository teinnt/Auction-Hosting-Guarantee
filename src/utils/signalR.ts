/* eslint-disable no-console */
import { HubConnectionBuilder, IHttpConnectionOptions } from '@microsoft/signalr'

import * as sessions from './sessions'

const startSignalRConnection = (connection: any) =>
  connection
    .start()
    .then(() => console.info('Websocket Connection Established'))
    .catch((err: any) => console.error('SignalR Connection Error: ', err))

const buildAuctionHubConnection = async (auctionId: string) => {
  const build = new HubConnectionBuilder()

  const token = sessions.retrieveToken()
  const options = {
    accessTokenFactory: () => token,
  }

  build.withUrl(
    `http://localhost:63145/auction/bid?auctionId=${auctionId}&token=${token}`,
    options as IHttpConnectionOptions
  )

  const connection = build.withAutomaticReconnect([0, 0, 10000]).build()

  return connection
}

export { startSignalRConnection, buildAuctionHubConnection }
