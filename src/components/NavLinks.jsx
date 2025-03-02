import { navigation } from './navigation-data';
import { NavLink } from './NavLink';

export function NavLinks({ className, onClick }) {
  return (
    <div className={className}>
      {navigation.map((item) => (
        <NavLink key={item.name} to={item.path} onClick={onClick}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}