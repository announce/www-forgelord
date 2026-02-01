import { stagger } from "motion";
import { Variants, motion } from "motion/react";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { delayChildren: stagger(0.2) },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.6,
        rotate: -10,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 150,
        },
    },
};

export const Effect4 = () => {
    return (
        <motion.div
            className="relative grid grid-cols-2 gap-6 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={containerVariants}>
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
