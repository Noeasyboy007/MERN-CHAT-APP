import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <div>
            <form className='flex items-center gap-2'>

                <input type='text'
                    placeholder='Search…'
                    className='input input-bordered rounded-full'
                />

                <button type='submit' className='btn btn-circle bg-purple-700 text-white'>
                    <FaSearch />
                </button>
            </form>
        </div>

    )
}

export default SearchInput






// STRATER CODE SNIPPET

// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//     return (
//         <div>
//             <form className='flex items-center gap-2'>

//                 <input type='text'
//                     placeholder='Search…'
//                     className='input input-bordered rounded-full'
//                 />

//                 <button type='submit' className='btn btn-circle bg-purple-700 text-white'>
//                     <FaSearch />
//                 </button>
//             </form>
//         </div>

//     )
// }

// export default SearchInput
