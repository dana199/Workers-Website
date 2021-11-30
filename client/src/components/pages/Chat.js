/*import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYXV0dW1uLWNha2UtMCIsImV4cCI6MTYzNzUzNTQzNH0.cVSnEoN_zwhXLEJnmgjffsiYbMckoujsNZ6vbO5GwI0';

chatClient.connectUser(
  {
    id: 'autumn-cake-0',
    name: 'autumn',
    image: 'https://getstream.io/random_png/?id=autumn-cake-0&name=autumn',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['autumn-cake-0'],
});

const chat = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default chat;*/