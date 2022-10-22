import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map(stat => (
      <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
        <h4 
          className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white w-fit">
            {stat.value}
        </h4>
        <p className="font-poppins 
          font-normal xs:text-[20px] text-[15px] xs:leading-[26px] 
          leading-[21px] text-gradient uppercase ml-3 w-fit">
            {stat.title}
        </p>
        <div className={`${stat.id === 'stats-3' ? 'hidden' : 'w-[1px] h-[24px] bg-gray-300'} lg:block hidden ml-20`}></div>
      </div>
    ))}
  </section>
)


export default Stats