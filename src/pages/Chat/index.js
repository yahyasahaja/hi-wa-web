import React from 'react';
import { useMediaQuery } from 'react-responsive'

import texts from 'texts'
import TextField from 'components/TextField';
import TextFieldArea from 'components/TextFieldArea';
import Button from 'components/Button';
import { PHONE_NUMBER_LIST_STORAGE_NAME, DESKTOP_URL, MOBILE_URL } from 'config'

const Chat = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [message, setMessage] = React.useState('');

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  const onSubmitCallback = React.useCallback((e) => {
    e.preventDefault();

    const filteredPhoneNumber = phoneNumber.replace(/[- +]/g, '');
    let phoneNumbers = [];
    try {
      phoneNumbers = JSON.parse(localStorage.getItem(PHONE_NUMBER_LIST_STORAGE_NAME)) || [];
    } catch (error) {
      console.log('empty storage');
    }
    phoneNumbers.push({
      phoneNumber: filteredPhoneNumber,
      message,
    })

    localStorage.setItem(PHONE_NUMBER_LIST_STORAGE_NAME, JSON.stringify(phoneNumbers));
    const url = isDesktopOrLaptop ? DESKTOP_URL : MOBILE_URL;
    window.location = url.replace('{phoneNumber}', filteredPhoneNumber).replace('{message}', message);
  }, [phoneNumber, message, isDesktopOrLaptop]);

  const setPhoneNumberCallback = React.useCallback((value) => {
    setPhoneNumber(value.replace(/[^0-9- +]/g, ''));
  }, [setPhoneNumber]);

  return (
    <div className="p-10" >
      <div className="flex mb-5">
        <div className="object-contain mr-5">
          <img className="w-full h-full" src="/assets/intro.png" alt="intro"/>
        </div>
        <div>
          <h1 className="font-bold" >Hi WA</h1>
          <div className="text-sm" >
            {texts.intro}
          </div>
        </div>
      </div>

      <form onSubmit={onSubmitCallback}>
        <div className="mb-5" >
          <h1 className="font-bold">Chat</h1>
          <div className="text-gray-500 text-sm" >Start chatting with someone</div>
        </div>

        <div>
          <TextField
            label="Enter your Friend’s phone number"
            id="text-field-chat-phone-number"
            value={phoneNumber}
            onChange={setPhoneNumberCallback}
            placeholder="+62812422xxxx"
          />
          <TextFieldArea
            label="Message"
            id="text-field-chat-message"
            value={message}
            onChange={setMessage}
            placeholder="Enter your message here"
          />
        </div>

        <div className="flex justify-end" >
          <Button 
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
};

export default Chat;