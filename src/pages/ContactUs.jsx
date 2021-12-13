import Input from "../components/Input";

const ContactUs = () => (
    <div className="flex flex-col max-w-7xl sm:p-8">
        <h1 className="text-4xl font-bold text-gray-800">Get in touch</h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem tenetur inventore eligendi mollitia cum nostrum ad dignissimos omnis optio. Voluptates modi iste quis placeat dolor eaque consequatur beatae omnis corporis.</p>

        <div className="flex-col lg:flex lg:flex-row my-12">
            <div className="flex flex-col bg-gray-800 text-gray-200 sm:w-5/12 p-8">
                <span className="text-lg font-semibold">Contact information</span>
                <span className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam enim, recusandae autem facilis</span>
                <span className="mt-6">Phone: 0093 749 0744 68</span>
                <span className="mt-2">Email: matiullah.karimi@gmail.com</span>
                <div className="flex mt-6 gap-8">
                    <div className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-100 font-bold text-lg text-blue-700">F</div>
                    <div className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-100 font-bold text-lg text-red-700">G</div>
                    <div className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-100 font-bold text-lg text-blue-400">T</div>
                </div>
            </div>
            <div className="flex flex-col w-full p-8 bg-white shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mx-2">Send us a message</h4>
                <div className="flex-col sm:flex mt-6">
                    <Input type="text" placeholder="First name"/>
                    <Input type="text" placeholder="Last name"/>
                </div>

                <div className="flex-col sm:flex mt-6">
                    <Input type="email" placeholder="Email"/>
                    <Input type="text" placeholder="Phone"/>
                </div>

                <div className="flex-col sm:flex mt-6">
                    <Input type="text" placeholder="Subject"/>
                </div>

                <div className="flex-col sm:flex mt-6">
                    <Input type="text" placeholder="Message" className="h-32"/>
                </div>

                <div className="flex justify-end mt-8">
                    <button className="inline-block py-3 px-6 bg-gray-700 hover:bg-gray-800 text-white text-center rounded-md text-md font-bold">Submit</button>
                </div>
            </div>
        </div>
    </div>
);

export default ContactUs;