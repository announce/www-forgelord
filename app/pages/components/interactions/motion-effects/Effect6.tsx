import { Variants, motion } from "motion/react";

const itemVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px) brightness(0)" },
    visible: (i) => ({
        opacity: 1,
        filter: "blur(0px) brightness(1)",
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
};

export const Effect6 = () => {
    return (
        <motion.div
            className="relative grid grid-cols-2 gap-6 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}>
            {Array.from({ length: 6 }).map((item, index) => (
                <motion.div
                    className="card bg-base-200 cursor-pointer p-6 shadow"
                    custom={index}
                    variants={itemVariants}
                    key={index}>
                    <div className="flex items-center justify-center py-16 text-lg font-medium">{index + 1}</div>
                </motion.div>
            ))}
        </motion.div>
    );
};
