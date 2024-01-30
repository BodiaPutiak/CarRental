import { Link as ScrollLink } from 'react-scroll';

function MobileNavBar(props) {
    const linksData = [
        {
          id: 1,
          name: 'Home',
          to: 'features', 
        },
        {
          id: 2,
          name: 'About',
          to: 'faq', 
        },
        {
          id: 3,
          name: 'Vehicle Models',
          to: 'contact', 
        },
        {
            id: 4,
            name: 'Testemonials',
            to: 'features', 
          },
          {
            id: 5,
            name: 'Our Team',
            to: 'faq', 
          },
          {
            id: 6,
            name: 'Contact',
            to: 'contact', 
          },
      ];
    return (
        <>
            {linksData.map((item) => (
                <ScrollLink
                    className='mobile-link'
                    to={item.to}
                    spy={true}
                    smooth={true}
                    activeClass='active'
                    key={item.id}
                    onClick={props.closeMobileNavBar}
                >
                    {item.name}
                </ScrollLink>
            ))}
        </>
    )
}
export default MobileNavBar;