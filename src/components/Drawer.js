import { Link, useRouteMatch } from 'react-router-dom'

const menuList = [
  {
    label: 'Chat',
    path: '/chat',
    icon: 'chat-icon',
  },
  {
    label: 'History',
    path: '/history',
    icon: 'history-icon',
  },
  {
    label: 'About',
    path: '/about',
    icon: 'info-icon',
  },
]
const Drawer = ({isActive, permanent = false, setIsActive}) => {
  let matchHistory = useRouteMatch("/history");
  let matchAbout = useRouteMatch("/about");
  const currentPath = matchAbout ? '/about' : matchHistory ? '/history' : '/chat';

  let styles = {}

  if (!permanent) {
    styles = {
      position: 'fixed',
      height: '100vh',
      width: '100%',
      background: 'white',
    }
  }
  
  if (isActive || permanent) return (
    <div style={{minWidth: 250, ...styles}}>
      <div className="p-5">
        <img src="/assets/logo.png" alt="logo"/>
      </div>

      {menuList.map(({label, path, icon}, index) => {
        const iconImage = `/assets/${icon}${currentPath === path ? '-green' : '-gray'}.png`;
        return (
          <Link key={index} className="flex cursor-pointer py-2" to={path} onClick={() => {
            if (setIsActive) setIsActive(false);
          }}>
            <div className="ml-5 mr-2" >
              <img src={iconImage} alt="list-icon" />
            </div>

            <div>
              {label}
            </div>
          </Link>
        )
      })}
    </div>
  )

  return <div></div>
};

export default Drawer;