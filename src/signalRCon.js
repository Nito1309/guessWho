import signalR from '@microsoft/signalr'
const API= 'https://gameguesswho.azurewebsites.net/'
const connection = new signalR.HubConnectionBuilder()
        .withUrl(API + '/api')
        .configureLogging(signalR.LogLevel.Information)
        .build();
        connection.on('newMessage', (message) => {
        document.getElementById("messages").innerHTML = message;
        });

        connection.start()
        .catch(console.error);

