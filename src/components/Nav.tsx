export const Nav = () => {
  return (
    <nav className='py-4'>
      <div className="layout flex justify-between">
        <p className="text-white">CompanyName</p>
        <ul className="[&>li>a]:text-white flex gap-5 items-center">
          <li>
            <a className="button-primary-light !py-[5px]" href="">Demo</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}