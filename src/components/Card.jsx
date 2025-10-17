function Card({ title, description, image, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        )}
        
        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
