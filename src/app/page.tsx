import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/Components/Hero";
import { MarqueeDemo } from "@/Components/artistList";

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 }
  }
};

const Home: FC = () => {
  return (
    <div>
      <Hero />

      {/* <motion.div className="framer-1mg6632">
        <motion.div 
          className="ssr-variant hidden-qkyii6 hidden-1oixshc"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <motion.div className="framer-1jka001" data-border="true" data-framer-name="img">
            <motion.div className="framer-otmbme" data-framer-name="img">
              <motion.div className="image-wrapper">
                <Image
                  decoding="async"
                  sizes="(max-inline-size: 512px) 512px, (max-inline-size: 1024px) 1024px, (max-inline-size: 2048px) 2048px, 2565px"
                  srcset="
                    https://framerusercontent.com/images/kP2MiG1J1UnzZDn6mLXGEcHRRa0.jpg?scale-down-to=512 512w,
                    https://framerusercontent.com/images/kP2MiG1J1UnzZDn6mLXGEcHRRa0.jpg?scale-down-to=1024 1024w,
                    https://framerusercontent.com/images/kP2MiG1J1UnzZDn6mLXGEcHRRa0.jpg?scale-down-to=2048 2048w,
                    https://framerusercontent.com/images/kP2MiG1J1UnzZDn6mLXGEcHRRa0.jpg 2565w
                  "
                  src="https://framerusercontent.com/images/kP2MiG1J1UnzZDn6mLXGEcHRRa0.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  style={{ borderRadius: 'inherit' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div> */}
      {/* <MarqueeDemo /> */}
    </div>
  );
};

export default Home;
