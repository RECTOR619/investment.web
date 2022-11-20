import React from 'react';
import img1 from './../../assets/about/mission.png';
import img2 from './../../assets/about/vision.png';

const Goals = () => {
    return (
        <div
            data-testid="goals"
            className="flex flex-col bg-white p-5 md:pl-[50px] md:pr-[50px] lg:pl-[100px] ] lg:pr-[100px]"
        >
            <h1 className="text-2xl font-semibold text-center leading-[23px] md:text-left mb-4 md:leading-[50px] lg:text-[40px]">
                Company with a difference in Innovation.
            </h1>
            <div className="flex flex-col md:flex-row w-full gap-5 lg:gap-10 xl:gap-[90px">
                <div className="bg-[#F4F5F6] md:bg-white rounded-2xl md:rounded-none md:w-[50%]">
                    <img className="w-full" src={img1} alt="mission " />
                    <div className="p-4 md:p-0 text-center">
                        <h3 className="mt-3 mb-2 text-2xl md:text-left font-medium">Mission</h3>
                        <p>
                            To enable investors, both newbies and seasoned alike, to make
                            well-informed stock investment decisions that will yield great ROI
                            without the stress that comes with investing.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F4F5F6] md:bg-white rounded-2xl md:rounded-none ">
                <img className="w-full" src={img2} alt="mission " />
                <div className="p-4 md:p-0 text-center md:text-left">
                    <h3 className="mt-3 mb-2 text-2xl md:text-left font-medium">Vision</h3>
                    <p>
                        To be the go-to platform for prospective investors to know what stocks to
                        buy. We do this by providing them with well-curated information that will
                        help them make smarter decisions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Goals;
