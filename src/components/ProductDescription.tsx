interface ProductDescriptionProps {
  title: string;
  description: string;
  imageUrl: string;
  swap?: boolean; // If true, image appears first
}

export const ProductDescription = ({ title, description, imageUrl = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=', swap = false }: ProductDescriptionProps) => (
  <div className='py-20 border-b'>
    <div className='layout flex flex-col md:flex-row gap-8 items-center'>
      {swap && (
        <div className='flex-1'>
          <img src={imageUrl} alt={title} className='max-h-[300px] w-full h-auto object-cover rounded-lg' />
        </div>
      )}
      <div className='flex-1'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-4 text-gray-600'>{description}</p>
        <a className="flex items-center gap-2" href="">
          <svg fill="#000" width="10px" height="10px" viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"/></svg>
          Get Started
        </a>
      </div>
      {!swap && (
        <div className='flex-1'>
          <img src={imageUrl} alt={title} className='max-h-[300px] w-full h-auto object-cover rounded-lg' />
        </div>
      )}
    </div>
  </div>
);
