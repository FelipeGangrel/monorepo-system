import { render, screen } from '@testing-library/react';

import { AspectRatio } from './aspect-ratio';

type ImageProps = {
  width?: number;
  height?: number;
};

const ImageComponent = ({ height = 400, width = 400 }: ImageProps) => {
  return (
    <img src={`https://picsum.photos/${width}/${height}`} alt="Test Image" />
  );
};

describe('AspectRatio component', () => {
  it('should render its child', () => {
    render(
      <AspectRatio>
        <ImageComponent />
      </AspectRatio>
    );

    const image = screen.getByRole('img', {
      name: /test image/i,
    });

    expect(image).toBeInTheDocument();
  });
});
