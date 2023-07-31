import { ComponentProps, useMemo } from 'react';
import { Image } from 'react-native';
import { Buffer } from 'buffer';

type SmartImageProps = {
  imgKey: string;
  width?: number;
  height?: number;
} & Omit<ComponentProps<typeof Image>, 'source'>;

const bucket = '';
const URL = '';

const SmartImage = ({
                      imgKey,
                      width,
                      height,
                      ...imageProps
                    }: SmartImageProps) => {
  const uri = useMemo(() => {
    const imageRequest = JSON.stringify({
      bucket,
      key: imgKey,
      edits: {
        resize: {
          width,
          height,
          fit: 'cover',
        },
      },
    });

    const encoded = Buffer.from(imageRequest).toString('base64');
    return `${URL}/${encoded}`;
  }, [imgKey]);

  return <Image source={{ uri }} {...imageProps} />;
};

export default SmartImage;
