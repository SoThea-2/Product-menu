import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar(){
    const[isopenMenu,IsopenMenu]=useState(false)
    return(
        <>
        <header className="max-w-full shadow-md">

            <div className="w-10/12 mx-auto flex justify-between items-center">
                <div className="w-30 h-auto p-2">
                    <img src  ="../src/assets/Layer 0.png" alt="" className="" />
                </div>

                <div className="hidden md:flex text-sm md:space-x-8">
                    <a href="" className="hover:bg-red-500 transition-colors duration-300 px-2 py-1 transform rounded-md hover:text-white hover:scale-120 ">Home</a>
                    <a href="" className="hover:bg-red-500 transition-colors duration-300 px-2 py-1 transform rounded-md hover:text-white hover:scale-120 ">Blog</a>
                    <a href="" className="hover:bg-red-500 transition-colors duration-300 px-2 py-1 transform rounded-md hover:text-white hover:scale-120 ">Contact</a>
                    <a href="" className="hover:bg-red-500 transition-colors duration-300 px-2 py-1 transform rounded-md hover:text-white hover:scale-120 ">About</a>

                </div>

                {
                    isopenMenu &&(
                    <div className="shadow-lg w-4/6 h-auto p-4 rounded-md flex-col space-y-4 absolute top-20 left-20 flex bg-amber-50">
                    <a href=""className="hover:bg-red-500 transition-all duration-300 px-2 hover:text-white py-1 rounded-md">Home</a>
                    <a href=""className="hover:bg-red-500 transition-all duration-300 px-2 hover:text-white py-1 rounded-md">Blog</a>
                    <a href=""className="hover:bg-red-500 transition-all duration-300 px-2 hover:text-white py-1 rounded-md">Contact</a>
                    <a href=""className="hover:bg-red-500 transition-all duration-300 px-2 hover:text-white py-1 rounded-md">About</a>

                    
                    </div>
                        )
                    }

                    <div className="flex space-x-3">
                        
                        <button className="inline-block" onClick={()=>IsopenMenu(!isopenMenu)}>
                        <Menu className="h-4 w-4 "/>
                        </button>

                        <button className="bg-gradient-to-r from-red-400 to-red-600 px-4 py-1.5 rounded-full text-white hover:ring-1 ring-red-600 transition duration-300 transform active:scale-110 text-shadow-md md:px-8">Login</button>
                    
                    </div>

                    



            </div>

        </header>
        <div className="lg:pl-70 lg:pr-70 lg:pt-25 md:pt-25 sm:pl-20 sm:pr-20 pr-10 pl-10">
                        <div className="lg:flex lg:justify-between md:flex md:justify-between">
                            <div className="pt-20 ">
                                <h1 className="font-bold text-4xl pb-3">Welcome To Our Car Store</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt necessitatibus mollitia possimus corporis inventore!</p>
                            <div className="flex pt-4 ">
                                <div className="">
                                <input type="text" placeholder="Quick Search" className="p-2 border-2 border-red-400 rounded-3xl"/>
                                </div>
                                <div className="pl-2 ">
                                <button className=" bg-gradient-to-r from-red-400 to-red-600 px-4 py-1.5 rounded-full text-white hover:ring-1 ring-red-600 transition duration-300 transform active:scale-110 text-shadow-md md:px-8">Sreach</button>
                                </div>
                            </div>
                            </div>
                            <div className="lg:w-200 md:150 sm:pt-10 pt-5 ">
                            <img src="https://lh5.googleusercontent.com/p/AF1QipN4SJzjYCjhUWRvQRdXO1wSl0iju-8pOdJWA67R=s1024" alt="" className="rounded-3xl border-2 border-red-400" />
                            
                            </div>
                        </div>

                        <div className="flex justify-between pt-10">
                            <p className="font-bold pb-3">Popular Post</p>
                            <a href="aa" className="text-red-500 border-b border-red-400 ">More</a>
                        </div>


                    <picture className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-3 pt-3 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 ">
                        <div className="rounded-2xl border-2 border-red-400 shadow-md shadow-gray-400  hover:scale-105 transition-all duration-300 p-3  ">
                            <div>
                                <img src="https://freepngimg.com/thumb/audi/31679-5-audi.png" alt="" className="" /></div>
                            <div className="font-bold pb-3">
                                <h1> 2012 Audi TTS Consumer Reviews</h1>
                            </div>
                            <div className="pb-3">
                                <p>Price 20000$</p>
                            </div>
                            <div className="text-red-500 pb-3 font-bold">
                                <p>2012</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border-2 border-red-400 shadow-md shadow-gray-400  hover:scale-105 transition-all duration-300 p-3 ">
                            <div>
                                <img src="https://th.bing.com/th/id/R.4cb29324312aeaabb81027a8ecb1a463?rik=3uRfDvsiJW%2f%2b5w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fCar-PNG.png&ehk=SoOjr6RPcL7N83NsDiI7KCFoYEkJHDQLbTT8A9dEZzY%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                            <div className="font-bold pb-3">
                                <h1> 2012 Audi TTS Consumer Reviews</h1>
                            </div>
                            <div className="pb-3">
                                <p>Price 20000$</p>
                            </div>
                            <div className="text-red-500 pb-3 font-bold">
                                <p>2012</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border-2 border-red-400 shadow-md shadow-gray-400  hover:scale-105 transition-all duration-300 p-3 ">
                            <div>
                                <img src="https://th.bing.com/th/id/R.4cb29324312aeaabb81027a8ecb1a463?rik=3uRfDvsiJW%2f%2b5w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fCar-PNG.png&ehk=SoOjr6RPcL7N83NsDiI7KCFoYEkJHDQLbTT8A9dEZzY%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                            <div className="font-bold pb-3">
                                <h1> 2012 Audi TTS Consumer Reviews</h1>
                            </div>
                            <div className="pb-3">
                                <p>Price 20000$</p>
                            </div>
                            <div className="text-red-500 pb-3 font-bold">
                                <p>2012</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border-2 border-red-400 shadow-md shadow-gray-400  hover:scale-105 transition-all duration-300 p-3 ">
                            <div>
                                <img src="https://th.bing.com/th/id/R.4cb29324312aeaabb81027a8ecb1a463?rik=3uRfDvsiJW%2f%2b5w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fCar-PNG.png&ehk=SoOjr6RPcL7N83NsDiI7KCFoYEkJHDQLbTT8A9dEZzY%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                            <div className="font-bold pb-3">
                                <h1> 2012 Audi TTS Consumer Reviews</h1>
                            </div>
                            <div className="pb-3">
                                <p>Price 20000$</p>
                            </div>
                            <div className="text-red-500 pb-3 font-bold">
                                <p>2012</p>
                            </div>
                        </div>

                        

                    

                        
                    </picture>

                    <div className="flex justify-between pt-10">
                            <p className="font-bold">Latest Post</p>
                            <a href="aa" className="text-red-500 border-b border-red-400 ">More</a>
                        </div>

                        <picture className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-3 pt-3 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 ">
                        <div className="rounded-2xl border-2 border-red-400 shadow-md shadow-gray-400  hover:scale-105 transition-all duration-300 p-3  ">
                            <div>
                                <img src="https://freepngimg.com/thumb/audi/31679-5-audi.png" alt="" className="" /></div>
                            <div className="font-bold pb-3">
                                <h1> 2012 Audi TTS Consumer Reviews</h1>
                            </div>
                            <div className="pb-3">
                                <p>Price 20000$</p>
                            </div>
                            <div className="text-red-500 pb-3 font-bold">
                                <p>2012</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border-2 border-red-400 shadow-md shadow-gray-400  hover:scale-105 transition-all duration-300 p-3 ">
                            <div>
                                <img src="https://th.bing.com/th/id/R.4cb29324312aeaabb81027a8ecb1a463?rik=3uRfDvsiJW%2f%2b5w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fCar-PNG.png&ehk=SoOjr6RPcL7N83NsDiI7KCFoYEkJHDQLbTT8A9dEZzY%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                            <div className="font-bold pb-3">
                                <h1> 2012 Audi TTS Consumer Reviews</h1>
                            </div>
                            <div className="pb-3">
                                <p>Price 20000$</p>
                            </div>
                            <div className="text-red-500 pb-3 font-bold">
                                <p>2012</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border-2 border-red-400 shadow-md shadow-gray-400  hover:scale-105 transition-all duration-300 p-3 ">
                            <div>
                                <img src="https://th.bing.com/th/id/R.4cb29324312aeaabb81027a8ecb1a463?rik=3uRfDvsiJW%2f%2b5w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fCar-PNG.png&ehk=SoOjr6RPcL7N83NsDiI7KCFoYEkJHDQLbTT8A9dEZzY%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                            <div className="font-bold pb-3">
                                <h1> 2012 Audi TTS Consumer Reviews</h1>
                            </div>
                            <div className="pb-3">
                                <p>Price 20000$</p>
                            </div>
                            <div className="text-red-500 pb-3 font-bold">
                                <p>2012</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border-2 border-red-400 shadow-md shadow-gray-400  hover:scale-105 transition-all duration-300 p-3 ">
                            <div>
                                <img src="https://th.bing.com/th/id/R.4cb29324312aeaabb81027a8ecb1a463?rik=3uRfDvsiJW%2f%2b5w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fCar-PNG.png&ehk=SoOjr6RPcL7N83NsDiI7KCFoYEkJHDQLbTT8A9dEZzY%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                            <div className="font-bold pb-3">
                                <h1> 2012 Audi TTS Consumer Reviews</h1>
                            </div>
                            <div className="pb-3">
                                <p>Price 20000$</p>
                            </div>
                            <div className="text-red-500 pb-3 font-bold">
                                <p>2012</p>
                            </div>
                        </div>

                        

                    

                        
                    </picture>
                        

                        <div className="">
                            <h1 className="items-center justify-center flex p-10 font-bold text-3xl">Contact Us</h1>
                        </div>

                        <div>
                            <h1 className="pb-1">Email</h1>
                            <input type="Email" placeholder="Enter Your email" className="border-2 border-red-500 w-full focus:outline-none rounded-3xl p-1"/>
                            <h1 className="pb-1">Sunject</h1>
                            <input type="text" placeholder="Good" className="border-2 border-red-500 w-full focus:outline-none rounded-3xl p-1"/>
                            <h1 className="pb-1">Message</h1>
                            <textarea name="" id="" cols={30} className="border-2 border-red-500 w-full focus:outline-none "></textarea>
                            <button className=" bg-gradient-to-r from-red-400 to-red-600 px-4 py-1.5 rounded-full text-white hover:ring-1 ring-red-600 transition duration-300 transform active:scale-110 text-shadow-md md:px-8 mt-3 mb-10">Summit</button>
                        </div>


                    
                    </div>
                
                <div className="bg-amber-950 w-full h-50 flex justify-between">
                    <div>
                        <h1 className="text-white text-2xl font-bold lg:ml-70 md:ml-30 pt-10 sm:ml-20 text-[10px] ml-10 lg:text-2xl">CARE STORE</h1>

                        
                    </div>
                <div className="text-white  lg:mr-30 md:mr-10 pt-10 text-[10px]">
                        <h1 className="font-bold lg:text-2xl text-[15px]">Quick Link</h1>
                        <ul >
                        <li><a href="" className="hover:text-red-400">Home</a></li>
                        <li><a href="" className="hover:text-red-400">Popular</a></li>
                        <li><a href="" className="hover:text-red-400">Latest</a></li>
                        <li><a href="" className="hover:text-red-400">About us</a></li>
                        </ul>
                    </div>
                    <div className="text-white   lg:mr-90 md:mr-70 pt-10 sm:mr-20 text-20 mr-10 text-[10px]">
                        <h1 className="font-bold lg:text-2xl text-[15px]">Quick Link</h1>
                        <ul >
                        <li><a href="" className="hover:text-red-400">Disclaimer</a></li>
                        <li><a href="" className="hover:text-red-400">Privicy Policy</a></li>
                        <li><a href="" className="hover:text-red-400">Term of Use</a></li>
                        <li><a href="" className="hover:text-red-400">Contact us</a></li>
                        </ul>
                    </div>
                
                </div>

        </>
    )
}