import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants"; // Assuming you have an achievements data source
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({
  index,
  name,
  description,
  tags = [], // Default to an empty array if tags are not provided
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='achievement_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Achievement = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-6xl leading-[33px]'
        >
          Showcase of my certifications and courses, highlighting expertise gained through rigorous training and study. 
          Each certification and course reflects dedication to continuous learning and mastery of essential skills. 
          These accomplishments demonstrate my ability to stay current with industry standards, tackle complex challenges, 
          and apply learned concepts to real-world scenarios. The diverse range of topics covered in these courses and 
          certifications has equipped me with a versatile skill set, enabling me to contribute effectively to various projects and initiatives.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievement, "");
