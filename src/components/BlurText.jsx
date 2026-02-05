import { motion } from 'framer-motion';

const BlurText = ({ text, delay = 0.2, className = '' }) => {
    const words = text.split(' ');
    return (
        <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: delay + i * 0.1,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

export default BlurText;
