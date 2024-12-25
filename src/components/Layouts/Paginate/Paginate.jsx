import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { images } from '../AllImgData/AllImgData';
import ProductCard from '../ProductCard/ProductCard';


// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  
function Items({ currentItems }) {
    console.log(currentItems)
    return (
      <>
        {currentItems &&
          currentItems.map((image) => (
            <div>
                <ProductCard key={items} src={image.img} alt={image.title}/>
            </div>
          ))}
      </>
    );
  }
  




const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = images.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(images.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % images.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='relative'>
      <div className='flex flex-wrap gap-x-10'>
      <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-x-[15px]"
        activeClassName="bg-primary "
        breakClassName="page-item"
        pageClassName=" py-3 shadow-md border border-[#F0F0F0]"
        pageLinkClassName="text-sm text-[#767676] font-normal font-dmSans bg-transparent   px-4"
      />
      <p className='absolute right-0 bottom-0 font-dmSans font-normal text-sm text-[#767676]'>Products from {itemOffset+1} to {Math.min(endOffset, images.length)} of {images.length}</p>
    </div>
  )
}

export default Paginate