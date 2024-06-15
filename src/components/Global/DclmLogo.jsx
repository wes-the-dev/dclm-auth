import dclmLogo from '../../assets/img/dclm_logo.png'

const DclmLogo = () => {
  return (
    <div className='flex gap-2 items-center'>
        <img className='w-[32px] h-[28px]' src={dclmLogo} alt="dclm-logo" />
        <span className='font-medium text-[28px]'>Deeper Christian Life Ministry</span>
    </div>
  )
}

export default DclmLogo