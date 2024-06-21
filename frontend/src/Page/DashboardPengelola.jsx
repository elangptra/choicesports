import React from "react";
import { useState } from 'react';
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import { NotebookPen, Pencil } from "lucide-react";

const DashboardPengelola = () => {
    const bookings = [
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa 10', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
        { name: 'Ini Nama Penyewa', date: '21/06/2024', duration: '16:00 - 17:00' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const renderTableData = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem);

        return currentItems.map((booking, index) => (
            <tr key={index}>
                <td className="p-2">{booking.name}</td>
                <td className="p-2">{booking.date}</td>
                <td className="p-2">{booking.duration}</td>
            </tr>
        ));
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(bookings.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(number => (
            <li
                key={number}
                id={number}
                onClick={handleClick}
                className={`inline-block px-3 py-1 mx-1 cursor-pointer ${currentPage === number ? 'bg-purple-600 text-white' : 'bg-white text-black'}`}
            >
                {number}
            </li>
        ));
    };

    const dummyUsers = [
        { name: 'Manuk Satoru', imageUrl: '/images/profile/avatar.jpeg' },
        { name: 'Satoru Manuk', imageUrl: '/images/profile/avatar2.jpg' },
        { name: 'El Manuk Satoru', imageUrl: '/images/profile/avatar.jpeg' },
        { name: 'El Satoru Manuk', imageUrl: '/images/profile/avatar2.jpg' },
    ];

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [searchUsername, setSearchUsername] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setImagePreviewUrl(URL.createObjectURL(file));
    };

    const handleUsernameSearch = (event) => {
        const username = event.target.value;
        setSearchUsername(username);

        const user = dummyUsers.find((user) => user.name.toLowerCase() === username.toLowerCase());
        setSearchResult(user ? user.imageUrl : null);
    };

  return (
    <div className="top-0 bg-[#171830]">
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      {/* Body Start */}
        <div className="container">
            <div className="py-16">
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col">
                        <div className="text-white">
                            <h1 className="font-bold text-2xl mb-5">Ini Untuk Nama Lapangan Yang Dikelola</h1>
                            <h3 className="text-md">Welcome Back, <span className="font-bold">Nama Pengelola</span>!</h3>
                        </div>
                        <div className="flex flex-wrap gap-10 mt-16">
                            <div className="relative flex flex-wrap w-64 h-32 p-4 bg-purple-600 text-white rounded-xl shadow-lg items-center justify-center">
                                <div className="flex flex-wrap w-16 h-16 rounded-full border-2 items-center justify-center mr-5">
                                    <img src="/images/icons/homepage-lapangan.png" className="w-10" alt="icon lapangan" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-2xl text-center">1</h3>
                                    <h4 className="text-sm text-center">Jumlah Lapangan</h4>
                                </div>
                            </div>
                            <div className="relative flex flex-wrap w-64 h-32 p-4 bg-purple-600 text-white rounded-xl shadow-lg items-center justify-center">
                                <div className="flex flex-wrap w-16 h-16 rounded-full border-2 items-center justify-center mr-5">
                                    <NotebookPen className="w-10" alt="icon-booking" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-2xl text-center">10</h3>
                                    <h4 className="text-sm text-center">Jumlah Booking</h4>
                                </div>
                            </div>
                        </div>
                        <table className="w-full table-auto text-white mt-16 rounded-lg overflow-hidden">
                            <thead className="bg-purple-600">
                                <tr>
                                    <th className="p-4">Nama Penyewa</th>
                                    <th className="p-4">Tanggal Booking</th>
                                    <th className="p-4">Durasi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-black text-center">
                                {renderTableData()}
                            </tbody>
                        </table>
                        <ul className="flex justify-center mt-4">
                            {renderPageNumbers()}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col lg:ml-10">
                        <div className="w-full bg-white p-4 rounded shadow-lg">
                            <h2 className="text-gray-700 text-lg font-semibold mb-2">Face Recognition</h2>
                            <h2 className="text-gray-700 font-medium mb-2">Pilih Penyewa</h2>
                            <select
                                value={searchUsername}
                                onChange={handleUsernameSearch}
                                className="block w-full p-2 border border-gray-300 rounded mb-4"
                            >
                                <option value="">Pilih Pengguna</option>
                                {dummyUsers.map((user, index) => (
                                    <option key={index} value={user.name}>{user.name}</option>
                                ))}
                            </select>
                            {searchResult && (
                                <div className="mt-4">
                                    <h3 className="text-gray-700 font-medium">Search Result:</h3>
                                    <img
                                        src={searchResult}
                                        alt="Search Result"
                                        className="mt-4 w-full h-64 object-cover rounded"
                                    />
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-300 mt-5"
                            />
                            {selectedFile && (
                                <div className="mt-4">
                                    <h3 className="text-gray-700 font-medium">Selected File:</h3>
                                    <p className="text-gray-500 text-sm">{selectedFile.name}</p>
                                    <img
                                        src={imagePreviewUrl}
                                        alt="Selected"
                                        className="mt-4 w-full h-64 object-cover rounded"
                                    />
                                </div>
                            )}
                            <button className="bg-purple-600 rounded-lg p-2 text-white mt-4 hover:bg-purple-300">Compare Faces</button>
                        </div>
                    </div>
                </div>

                <table class="w-full table-auto text-white mt-16 rounded-lg overflow-hidden">
                    <thead className="bg-purple-600">
                        <tr>
                            <th className="p-4">Nama Lapangan</th>
                            <th className="p-4">Harga Booking</th>
                            <th className="p-4">Jumlah Lapangan</th>
                            <th className="p-4">Alamat</th>
                            <th className="p-4">Jam Buka</th>
                            <th className="p-4">Jam Tutup</th>
                            <th className="p-4">Aksi</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white text-black text-center">
                        <tr>
                            <td className="p-2">Ini buat nama lapangan</td>
                            <td className="p-2">Rp. 500.000<span>/sesi</span></td>
                            <td className="p-2">1</td>
                            <td className="p-2">Batuceper, Kota Tangerang, Banten</td>
                            <td className="p-2">08:00</td>
                            <td className="p-2">23:00</td>
                            <td className="p-2">
                                <button className="bg-yellow-500 rounded-lg p-2 hover:bg-yellow-300">
                                    <Pencil />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      {/* Body End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default DashboardPengelola;