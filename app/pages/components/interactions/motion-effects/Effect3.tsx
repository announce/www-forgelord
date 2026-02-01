import { stagger } from "motion";
import { Variants, motion } from "motion/react";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { delayChildren: stagger(0.2) },
    },
};

const itemVariants: Variants = {
    hidden: (i) => ({
        opacity: 0,
        y: 50, // Moves up from below
        x: i % 3 === 0 ? -30 : i % 3 === 2 ? 30 : 0, // Left, Center, Right shift
        rotate: i % 2 === 0 ? -5 : 5, // Small rotation
    }),
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const Effect3 = () => {
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
