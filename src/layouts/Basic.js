import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Drawer from 'components/Drawer';

const BasicLayout = ({children}) => {
  const [isActive, setIsActive] = React.useState(false);
  const toggleIsActive = React.useCallback(() => {
    setIsActive(!isActive);
  }, [setIsActive, isActive]);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  if (isDesktopOrLaptop) return (
    <div className="flex" >
      <Drawer permanent={true} />
      <div className="bg-white py-10 min-h-screen w-full pr-16">
        <div style={{minHeight: 'calc(100vh - 5rem)'}} className="bg-gray-400 px-16 py-5 rounded-lg flex items-center" >
          <div className="bg-white rounded-lg w-full" >
            {children}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <Drawer setIsActive={setIsActive} isActive={isActive} />
      <div>
        <div className="bg-white relative flex justify-center items-center py-3" >
          <div onClick={toggleIsActive} className="cursor-pointer absolute left-0 ml-4" >
            <img src="/assets/burger-icon.png" alt="menu" />
          </div>
          <div>
            <img src="/assets/logo.png" alt="logo"/>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BasicLayout;