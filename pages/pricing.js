import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function pricing() {
  return (
    <>
      <div className="w-full bg-[#5ab963]  md:h-[53vh] text-center">
        <Navbar />
        <div className="flex flex-col mt-8 md:mt-24 mb-8  md:w-[1230px] mx-auto w-full md:pr-12 p-4">
          <div className="flex flex-row justify-end w-full gap-y-8 gap-x-2 pb-4">
            <p className="text-base font-bold text-white">Pricing</p>
            <div className="border-t-2 w-12 my-auto "></div>
          </div>
          <p className="md:text-[50px] text-3xl text-white font-[800] md:ml-0 md:mr-auto ml-0 mr-auto ">
            A payment plan for every occasion.
          </p>
          <p className="text-start font-mono text-white ml-0 mr-auto mt-8 ">
            At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico
            tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea
            qui congue patrioque, quo ei recteque consequuntur...
          </p>
        </div>
      </div>
      <div className="flex flex-col md:p-8 relative md:pb-20 ">
        <p className="text-[#666] text-lg text-center text-opacity-40 pb-8">
          <strong className="text-black">We offer multiple options.</strong>{" "}
          Kid’s birthday party? Yup, we can cover that. A wedding? No problem,
          we got you. You get the idea.
        </p>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row items-center justify-center gap-x-8 md:mb-60">
        <div className="w-[350px] h-[700px] flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <p className="text-green-500 font-bold text-2xl text-opacity-80 pb-2">
            SMALL PARTY
          </p>
          <img
            src="https://i.hizliresim.com/hcw5gba.jpg"
            alt="offer-1"
            className="w-[200px] h-[200px] py-8 object-cover mx-auto"
          />

          <p className="font-mono text-[#666] text-opacity-50 px-4 py-2 border-t-2 border-green-600 ">
            At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico
            tamquam perfecto usu id. Eu nec option perfecto vituperatoribus.
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <div className="flex flex-row justify-center text-green-600 font-bold py-8">
            <p className="text-xl">$</p>
            <p className="text-5xl">150</p>
            <p className="text-xl pt-6">/Month</p>
          </div>
          <button className="w-[150px] h-[40px] rounded-full bg-green-600 text-white font-bold hover:text-green-600 hover:bg-white hover:border-2 hover:border-green-500 ">
            BUY NOW
          </button>
        </div>
        <div className="w-[350px] h-[700px] flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <p className="text-green-500 font-bold text-2xl text-opacity-80 pb-2">
            MEDIUM PARTY
          </p>
          <img
            src="https://i.hizliresim.com/mn8lcf9.jpg"
            alt="offer-1"
            className="w-[200px] h-[200px] py-8 object-cover mx-auto "
          />

          <p className="font-mono text-[#666] text-opacity-50 px-4 py-2 border-t-2 border-green-600 ">
            At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico
            tamquam perfecto usu id. Eu nec option perfecto vituperatoribus.
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <div className="flex flex-row justify-center text-green-600 font-bold py-8">
            <p className="text-xl">$</p>
            <p className="text-5xl">150</p>
            <p className="text-xl pt-6">/Month</p>
          </div>
          <button className="w-[150px] h-[40px] rounded-full bg-green-600 text-white font-bold hover:text-green-600 hover:bg-white hover:border-2 hover:border-green-500 ">
            BUY NOW
          </button>
        </div>
        <div className="w-[350px] h-[700px] flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <p className="text-green-500 font-bold text-2xl text-opacity-80 pb-2">
            LARGE PARTY
          </p>

          <img
            src="https://i.hizliresim.com/8psfo18.jpg"
            alt="offer-1"
            className="w-[200px] h-[200px] py-8 object-cover mx-auto "
          />

          <p className="font-mono text-[#666] text-opacity-50 px-4 py-2 border-t-2 border-green-600 ">
            At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico
            tamquam perfecto usu id. Eu nec option perfecto vituperatoribus.
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <p className="text-[#666] text-lg text-center text-opacity-40 pb-2">
            <strong className="text-black">Guests</strong> 0-50
          </p>
          <div className="flex flex-row justify-center text-green-600 font-bold py-8">
            <p className="text-xl">$</p>
            <p className="text-5xl">150</p>
            <p className="text-xl pt-6">/Month</p>
          </div>
          <button className="w-[150px] h-[40px] rounded-full bg-green-600 text-white font-bold hover:text-green-600 hover:bg-white hover:border-2 hover:border-green-500 ">
            BUY NOW
          </button>
        </div>
      </div>
      <div className="bg-[#666] bg-opacity-40">
        <div className="md:relative flex flex-col mx-auto md:w-[1120px] md:py-0 py-10 h-auto md:h-[500px] items-center justify-center  md:flex-row md:gap-x-8 gap-y-8">
          <div className="md:absolute md:left-0 md:-top-[40px] border-[1px]  w-[350px] h-[400px] bg-white text-center flex flex-col items-center rounded-xl shadow-md justify-center gap-y-4">
            <img
              src="https://i.hizliresim.com/o60yqo4.jpg"
              alt="offer-1"
              className="w-[200px] h-[200px] py-8 object-contain mx-auto "
            />
            <p className="font-mono text-xl text-green-500 font-bold ">
              Pro ad constituto
            </p>
            <p>
              Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.
            </p>
          </div>
          <div className="md:absolute md:-top-[200px] border-[1px]  w-[350px] h-[400px] bg-white text-center flex flex-col items-center rounded-xl shadow-md justify-center gap-y-4">
            <img
              src="https://i.hizliresim.com/21v3kvn.jpg"
              alt="offer-1"
              className="w-[200px] h-[200px] py-8 object-contain mx-auto "
            />
            <p className="font-mono text-xl text-green-500 font-bold ">
              Pro ad constituto
            </p>
            <p>
              Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.
            </p>
          </div>
          <div className="md:absolute md:right-0 md:-top-[120px] border-[1px]  w-[350px] h-[400px] bg-white text-center flex flex-col items-center rounded-xl shadow-md justify-center gap-y-4">
            <img
              src="https://i.hizliresim.com/4vxvtpy.jpg"
              alt="offer-1"
              className="w-[200px] h-[200px] py-8 object-contain mx-auto "
            />
            <p className="font-mono text-xl text-green-500 font-bold ">
              Pro ad constituto
            </p>
            <p>
              Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.
            </p>
          </div>
        </div>
        <div className="px-4">
          <p className="text-[#666] text-2xl text-center text-opacity-40 pb-2">
            <strong className="text-black">
              Got a question about our pricing model?{" "}
            </strong>{" "}
            Te omnis oporteat vis, omnes reprehendunt <br /> nam in. Cum
            salutatus democritum argumentum an.
          </p>
          <div className="md:w-[1170px] w-full p-4 mx-auto">
            <div className="flex flex-col md:flex-row text-center gap-x-8 gap-y-12">
              <div>
                <div className="flex flex-col gap-y-4">
                  <p className="font-bold text-xl ">
                    Usu tractatos accommodare ei pri alii invidunt eu?
                  </p>
                  <p className="text-base text-white pb-4">
                    Molestiae adolescens his cu, ius facete scripta ad, ea ferri
                    fastidii iudicabit pri. Vim id soleat aliquip adipisci, at
                    qui discere denique salutatus, no appareat abhorreant quo.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="font-bold text-xl ">
                    Usu tractatos accommodare ei pri alii invidunt eu?
                  </p>
                  <p className="text-base text-white pb-4">
                    Molestiae adolescens his cu, ius facete scripta ad, ea ferri
                    fastidii iudicabit pri. Vim id soleat aliquip adipisci, at
                    qui discere denique salutatus, no appareat abhorreant quo.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="font-bold text-xl ">
                    Usu tractatos accommodare ei pri alii invidunt eu?
                  </p>
                  <p className="text-base text-white pb-4">
                    Molestiae adolescens his cu, ius facete scripta ad, ea ferri
                    fastidii iudicabit pri. Vim id soleat aliquip adipisci, at
                    qui discere denique salutatus, no appareat abhorreant quo.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="font-bold text-xl ">
                    Usu tractatos accommodare ei pri alii invidunt eu?
                  </p>
                  <p className="text-base text-white pb-4">
                    Molestiae adolescens his cu, ius facete scripta ad, ea ferri
                    fastidii iudicabit pri. Vim id soleat aliquip adipisci, at
                    qui discere denique salutatus, no appareat abhorreant quo.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-4">
                  <p className="font-bold text-xl ">
                    Usu tractatos accommodare ei pri alii invidunt eu?
                  </p>
                  <p className="text-base text-white pb-4">
                    Molestiae adolescens his cu, ius facete scripta ad, ea ferri
                    fastidii iudicabit pri. Vim id soleat aliquip adipisci, at
                    qui discere denique salutatus, no appareat abhorreant quo.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="font-bold text-xl ">
                    Usu tractatos accommodare ei pri alii invidunt eu?
                  </p>
                  <p className="text-base text-white pb-4">
                    Molestiae adolescens his cu, ius facete scripta ad, ea ferri
                    fastidii iudicabit pri. Vim id soleat aliquip adipisci, at
                    qui discere denique salutatus, no appareat abhorreant quo.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    Usu tractatos accommodare ei pri alii invidunt eu?
                  </p>
                  <p className="text-base text-white ">
                    Molestiae adolescens his cu, ius facete scripta ad, ea ferri
                    fastidii iudicabit pri. Vim id soleat aliquip adipisci, at
                    qui discere denique salutatus, no appareat abhorreant quo.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl ">
                    Usu tractatos accommodare ei pri alii invidunt eu?
                  </p>
                  <p className="text-base text-white ">
                    Molestiae adolescens his cu, ius facete scripta ad, ea ferri
                    fastidii iudicabit pri. Vim id soleat aliquip adipisci, at
                    qui discere denique salutatus, no appareat abhorreant quo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
