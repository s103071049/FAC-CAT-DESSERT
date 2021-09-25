import { AiFillHome } from "react-icons/ai";

const HomeIcon = ( {pageName} ) => {
  const style = {
    'justify-content':'center',
    'padding':'12px'
  }
  return (
    <div style={style}><AiFillHome /> {'>'} {pageName} </div>
  );
}

export default HomeIcon;