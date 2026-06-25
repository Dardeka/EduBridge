import { InlineMath } from 'react-katex';

function Materi(){

    return(
        <div className="">
            <header className="bg-white h-[75px] w-full px-[50px] flex flex-row items-center justify-between">
                {/* Logo */}
                <div className="flex flex-row items-center gap-2">
                    <img src="/public/temp_logo.png" alt="" className="w-15"/>
                    <h1 className="text-xl font-semibold">EduBridge</h1>
                </div>
                {/* Nav Links */}
                <div className="flex flex-row items-center gap-10">
                    <button className="border-b-3 border-[#2557D6] font-medium p-3 hover:bg-gray-200 hover:border-b-3 hover:border-[#2557D6] rounded-t-md cursor-pointer">
                        <a>Beranda</a>
                    </button>
                    <button className="font-medium p-3 hover:bg-gray-200 hover:border-b-3 hover:border-[#2557D6] rounded-t-md cursor-pointer">
                        <a>Tingkat SD</a>
                    </button>
                    <button className="font-medium p-3 hover:bg-gray-200 hover:border-b-3 hover:border-[#2557D6] rounded-t-md cursor-pointer">
                        <a>Tingkat SMP</a>
                    </button>
                    <button className="font-medium p-3 hover:bg-gray-200 hover:border-b-3 hover:border-[#2557D6] rounded-t-md cursor-pointer">
                        <a>Tingkat SMA</a>
                    </button>
                </div>
                <div className="flex flex-row items-center gap-10">
                    <button className="cursor-pointer rounded-full hover:bg-gray-200 p-2">
                        <img src="/public/bell.png" alt="" className="w-6" />
                    </button>
                    <button className="flex flex-row gap-5 px-5 font-medium p-3 bg-gray-200 rounded-md cursor-pointer">
                        <img src="/public/avatar.webp" alt="" className="w-7 rounded-xl"/>
                        <a>Username</a>
                    </button>
                </div>
            </header>
            <main className="mt-10 mx-[50px]">
                {/* Button */}
                <div className="flex flex-row gap-3 items-center cursor-pointer hover:bg-gray-200 w-fit p-2 rounded-md">
                    <img src="/public/back.png" alt="" className="w-5 h-5" />
                    <p>Kembali</p>
                </div>

                {/* Materi */}
                <div className="flex flex-row mt-5 gap-30 bg-white p-10 rounded-md shadow-md">
                    {/* Penjelasan Materi */}
                    <div className="flex flex-col text-justify gap-5 w-[50%]">
                        <h1 className="text-2xl font-bold">Konsep Aljabar</h1>
                        <p>Aljabar adalah cabang matematika yang menggunakan simbol, terutama huruf, untuk merepresentasikan bilangan dan hubungan antara mereka. Berikut ini adalah rumus dasar dari aljabar:</p>
                        <div className="bg-gray-200 px-10 py-5 rounded-md shadow-md">
                            <InlineMath math="3x + 7 = 12" />
                        </div>
                        <i>
                            Keterangan:
                            <ul className="list-disc list-inside">
                                <li><b>x</b> adalah variabel</li>
                                <li><b>3</b> adalah koefisien</li>
                                <li><b>7</b> dan <b>12</b> adalah konstanta</li>
                            </ul>
                        </i>
                        <p className='text-sm'>Silahkan tonton video disamping untuk memahami konsep aljabar lebih lanjut.</p>
                    </div>
                    {/* Video Materi */}
                    <div className="w-[50%] flex flex-col items-center justify-center p-5">
                        <video controls className="w-full h-auto">
                            <source src="/public/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <button className='bg-[#2557D6] text-white px-5 py-3 rounded-md mt-5 hover:bg-[#1E3C9D] mt-auto ml-auto'>
                            Lanjut ke Kuis
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Materi