import { fileUpload } from '../../src/helpers/fileUpload';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dldbkuaqj',
  api_key: '289726249152939',
  api_secret: 'FVC8moG5HG-GKNIiA38_1htO6dc',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('debe de subir el archivo correctamente a clouddinary', async () => {
    const imageUrl =
      'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg';

    const resp = await fetch(imageUrl);
    if (!resp.ok) {
      throw new Error(
        `Error al descargar la imagen (${resp.status}): ${resp.statusText}`
      );
    }
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');

    await cloudinary.api.delete_resources(['journal/' + imageId]);
  });

  test('debe de retornar null', async () => {
    const file = new File([], 'foto.jpg');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
