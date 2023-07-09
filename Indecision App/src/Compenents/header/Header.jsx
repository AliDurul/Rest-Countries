
const Header = ({title,subtitle,options}) => {
  return (
    <div>
        <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default Header