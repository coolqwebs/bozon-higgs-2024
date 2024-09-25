import {
  HubConnectionBuilder,
  HubConnection,
  LogLevel,
} from "@microsoft/signalr";

export const createSignalRConnection = (): HubConnection => {
  const connection = new HubConnectionBuilder()
    .withUrl("https://back.boson-higgs.link/marqueesHub")
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build();

  connection
    .start()
    .then(() => console.log("SignalR Connected"))
    .catch((error: any) => console.error("SignalR Connection Error:", error));

  connection.onclose(() => console.log("SignalR Disconnected"));

  return connection;
};
