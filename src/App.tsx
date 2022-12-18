import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import theatre from './assets/theatre.jpg';
import { MovieFrame } from './components/MovieFrame';

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchInput, setSearchInput]: [string | undefined, any] = useState();
  const [minNotice, setMinNotice]: any = useState();

  console.log(searchInput);
  useEffect(() => {
    let isMounted = true;
    if (searchInput && searchInput.length > 4) {
      setMinNotice();
      //movies
      fetch(`http://www.omdbapi.com/?apikey=f9aed5c&type=movie&s=${searchInput}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      ).then(res => {
        return res.json();
      }).then(resJson => {
        //console.log(resJson);
        if (isMounted && resJson.Response && resJson.Response === 'True') { setMovies(resJson.Search); }
        else { setMovies([]); }
      });
      //series
      fetch(`http://www.omdbapi.com/?apikey=f9aed5c&type=series&s=${searchInput}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      ).then(res => {
        return res.json();
      }).then(resJson => {
        //console.log(resJson);
        if (isMounted && resJson.Response && resJson.Response === 'True') { setSeries(resJson.Search); }
        else { setSeries([]); }
      });
    }
    else if (searchInput && searchInput.length < 5) { setMinNotice('Enter at least 5 letters to search'); }
    else { setMinNotice(); }
    return () => {
      isMounted = false;
    };
  }, [searchInput]);


  return (
    <div className="App text-left">
      <header className='w-full py-[16px] pro:py-[40px] pro:px-[40px] bg-[#292929]'>
        <span className='table mx-auto desktop:inline-block py-[7.83px] pro:py-[14px] px-[19px] pro:px-[10.63px] border border-white text-white text-[18.43px] pro:text-[32.94px]'>MyTestApp</span>
      </header>
      <section className='hero relative'>
        <span className='absolute right-0 left-0 w-full desktop:max-w-[490px] text-center desktop:text-left pt-[98px] pb-[87px] pro:pt-[109px] pro:pb-[159px] px-[77px] z-10 text-[28px] pro:text-[72px] leading-[36px] pro:leading-[94px] -tracking-[0.05em] text-white'>Watch something incredible.</span>
        <img className='h-[257px] pro:h-[550px] object-cover w-full' src={theatre} alt='hero' />
      </section>
      <main className='px-[28px] my-[33px] pro:px-[67px] pro:my-[63px]'>
        <section className='search flex flex-col p-0 gap-1  pro:pl-[10px]'>
          <label className='flex-none flex-grow-0'>Search{minNotice ? <span className='text-orange-300'>{(': ' + minNotice)}</span> : ''}</label>
          <input onChange={(e) => setSearchInput(e.target.value)} type='text' className='flex-none order-1 flex-grow-0 text-black h-[34px] pro:h-[54px] border border-black box-border px-3' />
        </section>
        <MovieFrame entities={movies} type='movies' empty={searchInput && searchInput.length > 4 ? false : true} />
        <MovieFrame entities={series} type='series' empty={searchInput && searchInput.length > 4 ? false : true} />
      </main>
    </div>
  );
}

export default App;
