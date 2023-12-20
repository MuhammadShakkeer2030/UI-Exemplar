import { BsChevronRight } from 'react-icons/bs'


export const Profile = () => {
  const profileImg = "https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
  return (
    <div className='w-[200px] h-[200px] text-center shadow-2xl flex flex-col items-center justify-center'>
      <img src={profileImg} alt="profile image" className='rounded-full w-[50px] md:w-[100px] h-[50px] md:h-[100px]' />
      <div className='flex gap-2 items-center '>
        <h4 className='text-[13px] font-bold'>Ram Mohan</h4>
        <BsChevronRight className="text-[15px]" />
      </div>
      <p className='text-[10px]'>rammohan@gmail.com</p>
    </div>
  );
};
