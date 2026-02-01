import { Variants, motion } from "motion/react";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.8 },
    },
};

export const Effect7 = () => {
    return (
        <motion.div
            className="relative grid grid-cols-2 gap-6 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}>
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
