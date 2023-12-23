import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image.asset_id}>
          <img
            srcSet={`${image.secure_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image.secure_url}?w=164&h=164&fit=crop&auto=format`}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
