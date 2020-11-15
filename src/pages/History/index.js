import ListItem from 'components/ListItem';
import { PHONE_NUMBER_LIST_STORAGE_NAME } from 'config'

const History = () => {
  let phoneNumbers = [];

  try {
    phoneNumbers = JSON.parse(localStorage.getItem(PHONE_NUMBER_LIST_STORAGE_NAME)) || [];
  } catch (error) {
    console.log('empty storage');
  }

  return (
    <div className="p-10 w-full" >
      <h1 className="font-bold mb-5 ">History</h1>

      {phoneNumbers.map(({phoneNumber, message}, index) => 
        <ListItem
          key={index}
          phoneNumber={phoneNumber}
          message={message}
        />
      )}
    </div>
  )
};

export default History;