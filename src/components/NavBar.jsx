import { Link } from 'react-router-dom';

const NavBar = () => {
  const categories = ["remeras", "pantalones", "calzado"];

  return (
    <nav>
      <Link to="/">Inicio</Link>
      
      {categories.map((category) => (
        <Link key={category} to={`/category/${category}`}>
          {category}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;