import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
  currentImage: string;
  onImageChange: (imageUrl: string) => void;
  label?: string;
  aspectRatio?: string;
}

const ImageUpload = ({ currentImage, onImageChange, label, aspectRatio = 'aspect-[3/4]' }: ImageUploadProps) => {
  const [preview, setPreview] = useState(currentImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  return (
    <div className="relative group">
      <div className={`${aspectRatio} overflow-hidden bg-gray-100 relative`}>
        <img 
          src={preview} 
          alt={label || 'Загрузить изображение'}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <Button
            type="button"
            onClick={handleButtonClick}
            variant="secondary"
            className="gap-2"
          >
            <Icon name="Upload" size={18} />
            Загрузить фото
          </Button>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      {label && (
        <p className="text-sm text-gray-500 mt-2">{label}</p>
      )}
    </div>
  );
};

export default ImageUpload;