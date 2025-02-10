import { motion, AnimatePresence } from "framer-motion";

interface GallerySectionProps {
  title: string;
  subtitle?: string;
  images: {
    url: string;
    alt: string;
  }[];
  onImageClick: (image: { url: string; alt: string }) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function GallerySection({ 
  title, 
  subtitle, 
  images, 
  onImageClick, 
  isExpanded,
  onToggle 
}: GallerySectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-8"
    >
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={onToggle}
      >
        <motion.h2 
          className="text-2xl md:text-3xl tracking-tight font-medium"
          layout
        >
          {title}
        </motion.h2>
        <motion.button 
          className="p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            layout
            className="overflow-hidden"
          >
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-neutral-600 text-lg md:text-xl mb-4"
              >
                {subtitle}
              </motion.p>
            )}
            <div className="h-px w-16 bg-neutral-200 my-6"></div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="break-inside-avoid"
                >
                  <div 
                    className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                    onClick={(e) => {
                      e.stopPropagation();
                      onImageClick(image);
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 