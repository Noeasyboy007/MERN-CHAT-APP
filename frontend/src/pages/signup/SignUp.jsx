import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"


const SignUp = () => {

  const [input, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })



  const { loading, signup } = useSignup()

  const handelCheckboxChange = (gender) => {
    setInput({ ...input, gender })
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    console.log(input)
    await signup(input)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

        {/* For Heading */}
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'> ChatApp</span>
        </h1>

        {/* For SignUp FOrm */}
        <form onSubmit={handelSubmit}>

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

              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
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

              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
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

              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
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

              value={input.confirmPassword}
              onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
            />
          </div>

          {/* ********************************************************************* */}

          {/* For Gender Check Box */}
          <GenderCheckbox onCheckboxChange={handelCheckboxChange} selectedGender={input.gender} />

          {/* ********************************************************************* */}

          {/* Alrady Account Login Page Link */}
          <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>


          {/* ********************************************************************* */}

          {/* For SingUp Button */}
          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'
              disabled={loading} >
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
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

