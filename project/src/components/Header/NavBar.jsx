import {  NavLink } from 'react-router-dom';

function NavBar() {
    const linksData = [
        {
          id: 1,
          name: 'Home',
          to: '/', 
        },
        {
          id: 2,
          name: 'About',
          to: '/about', 
        },
        {
          id: 3,
          name: 'Vehicle Models',
          to: '/models', 
        },
        {
            id: 4,
            name: 'Testemonials',
            to: '/testemonials', 
          },
          {
            id: 5,
            name: 'Our Team',
            to: '/our-team', 
          },
          {
            id: 6,
            name: 'Contact',
            to: '/contact', 
          },
      ];
    return (
        <>
            {linksData.map((item) => (
                <NavLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    activeClass='active'
                    key={item.id}
                >
                    {item.name}
                </NavLink>
            ))}
        </>
    )
}
export default NavBar;