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
        filter: "blur(10px)", // Initial blur
        scale: 0.9, // Slightly smaller
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)", // Remove blur
        scale: 1, // Scale to normal
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const Effect2 = () => {
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
