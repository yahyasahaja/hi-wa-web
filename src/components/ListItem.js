import React from 'react';

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData("Text", text);

  }
  else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
          return document.execCommand("copy");  // Security exception may be thrown by some browsers.
      }
      catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
      }
      finally {
          document.body.removeChild(textarea);
      }
  }
}

const ListItem = ({phoneNumber, message}) => {
  const onClickCallback = React.useCallback(() => {
    copyToClipboard(phoneNumber);
    alert(`${phoneNumber} has been coppied`)
  }, [phoneNumber]);

  return (
    <div onClick={onClickCallback} className="mb-4 border border-gray-400 border-solid rounded p-3 cursor-pointer flex justify-between" >
      <div>
        <div>{phoneNumber}</div>
        <div className="text-gray-500 text-sm" >{message}</div>
      </div>

      <div className="flex items-center" >
        <div>
          <img src="/assets/copy-icon.png" alt="copy-icon"/>
        </div>
      </div>
    </div>
  )
}

export default ListItem;
