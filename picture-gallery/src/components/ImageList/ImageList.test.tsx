import { render, screen } from '@testing-library/react';
import ImageList from './index';
test('renders learn react link', () => {
    let imagesListData:any = [{
        id:'12',
        secret:'',
        farm:'',
        server:''
    }]
  render(<ImageList imagesListData={imagesListData} />);
  const ImageListElementArray = screen.getByRole('img');
  expect(ImageListElementArray).toBeInTheDocument();
});