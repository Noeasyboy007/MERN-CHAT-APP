import GenderCheckbox from "./GenderCheckbox"


const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

        {/* For Heading */}
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'> ChatApp</span>
        </h1>

        {/* For SignUp FOrm */}
        <form >

          {/* For Full Name Input */}
          <div>
            {/* For Lable */}
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>

            {/* For Input */}
            <input type='text'
              placeholder='Aritra Bera'
              className='w-full input input-bordered  h-10'
            />
          </div>

          {/* ********************************************************************* */}

          {/* For Usename */}
          <div>
            {/* For Lable */}
            <label className='label p-2 '>
              <span className='text-base label-text'>Username</span>
            </label>

            {/* For Input */}
            <input type='text'
              placeholder='aritrabera'
              className='w-full input input-bordered h-10'
            />
          </div>

          {/* ********************************************************************* */}

          {/* For Password */}
          <div>
            {/* For Lable */}
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>

            {/* For Input */}
            <input type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
            />
          </div>

          {/* ********************************************************************* */}

          {/* For Password */}
          <div>
            {/* For Lable */}
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>

            {/* For Input */}
            <input type='password'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
            />
          </div>

          {/* ********************************************************************* */}

          {/* For Gender Check Box */}
          <GenderCheckbox />

          {/* ********************************************************************* */}

          {/* Alrady Account Login Page Link */}
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</a>

          {/* ********************************************************************* */}

          {/* For SingUp Button */}
          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>
              Sign Up
            </button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default SignUp





// STATER CODE FOR THE SIGNUP COMPONENT

// import GenderCheckbox from "./GenderCheckbox"


// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//         {/* For Heading */}
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Sign Up <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         {/* For SignUp FOrm */}
//         <form >

//           {/* For Full Name Input */}
//           <div>
//             {/* For Lable */}
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>

//             {/* For Input */}
//             <input type='text'
//               placeholder='Aritra Bera'
//               className='w-full input input-bordered  h-10'
//             />
//           </div>

//           {/* ********************************************************************* */}

//           {/* For Usename */}
//           <div>
//             {/* For Lable */}
//             <label className='label p-2 '>
//               <span className='text-base label-text'>Username</span>
//             </label>

//             {/* For Input */}
//             <input type='text'
//               placeholder='aritrabera'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           {/* ********************************************************************* */}

//           {/* For Password */}
//           <div>
//             {/* For Lable */}
//             <label className='label'>
//               <span className='text-base label-text'>Password</span>
//             </label>

//             {/* For Input */}
//             <input type='password'
//               placeholder='Enter Password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           {/* ********************************************************************* */}

//           {/* For Password */}
//           <div>
//             {/* For Lable */}
//             <label className='label'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>

//             {/* For Input */}
//             <input type='password'
//               placeholder='Confirm Password'
//               className='w-full input input-bordered h-10'
//             />
//           </div>

//           {/* ********************************************************************* */}

//           {/* For Gender Check Box */}
//           <GenderCheckbox />

//           {/* ********************************************************************* */}

//           {/* Alrady Account Login Page Link */}
//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</a>

//           {/* ********************************************************************* */}

//           {/* For SingUp Button */}
//           <div>
//             <button className='btn btn-block btn-sm mt-2 border border-slate-700'>
//               Sign Up
//             </button>
//           </div>

//         </form>

//       </div>

//     </div>
//   )
// }

// export default SignUp

