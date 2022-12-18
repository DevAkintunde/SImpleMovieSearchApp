import React from 'react';

export const MovieFrame = ({ entities, type, empty }: any) => {
    return (
        entities && entities.length > 0 ?
            <section className='movie-grid movie-sets mt-[48px]'>
                <label className='capitalize text-[18px] pro:[24px]'>{type}</label>
                <div className='overflow-x-scroll scrollbar'>
                    <div className='flex order-none flex-grow-0 gap-[10px] w-fit'>
                        {entities.map((entity: any, index: number) => {
                            return <div key={index} className='relative overflow-hidden w-[200px] h-[200px] pro:w-[300px] pro:h-[300px] p-[10px] rounded-[12px] bg-black'>
                                <span className='absolute capitalize text-[18px] pro:[24px] z-10 text-white top-[50%] bottom-[50%] left-0 right-0 text-center'>{entity.Title}</span>
                                {entity.Poster &&entity.Poster !== 'N/A' ?
                                    <img className='absolute object-cover top-0 left-0' src={entity.Poster} alt={entity.Title} />
                                    : null}
                            </div>;
                        })}
                    </div>
                </div>
            </section>
            : <section className=' mt-[48px]'>
                <label className='capitalize'>{type}</label>
                {empty ? <div>Search by title in the search box above</div> :
                    <div>No {type} with search title available</div>}
            </section>
    );
};
