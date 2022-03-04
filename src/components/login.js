import React from 'react';
import photo from "../assets/img/zipline-img.jpg";

function login() {
    return (
        <div>
            <div className="oxygen bg-gray-200 " style={{border:'1px solid #e2e8f0', height:'100vh', backgroundColor:'#eff6ff'}}>
	    <div className="container mx-auto">
            <div className="flex justify-center px-5 my-3">
				<div className=" mt-4 flex" style={{width:'70vw', height:'80vh'}}>	
					<div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{backgroundImage: `url(${photo})`}}></div>						
					   <div className="w-full lg:w-1/2 bg-white pt-3 rounded-lg lg:rounded-l-none">
						  <div className="px-6 mb-4 text-center">
							<p className="mb-4 text-sm text-red-600 text-2xl">Login Into Your Account.</p>					
							<p className="mb-4 text-sm text-gray-500">Use your credentials to access your account.	</p>
						  </div>
			<form className="px-9 pt-0 pb-6 mb-0 bg-white rounded">
				 <div className="mb-4">
					<label className="block mb-2 text-sm font-bold text-gray-700" for="email">Email Address</label>	
						<input className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border border rounded  appearance-none focus:outline-none focus:border-red-700 focus:ring-red-700 focus:ring-1" id="email" type="email" placeholder=""/>								
							</div>
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="email">Password</label>
									<input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:border-red-700 focus:ring-red-700 focus:ring-1" id="email" type="password" placeholder="******************"/>								
									<p className=" mt-3 mr-4 text-xs italic text-red-500">Please choose a password.</p>
								</div>
									<div className="mb-4">
										<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
										<label className="text-sm" for="checkbox_id">Remember Me</label>	
									</div>
									<div className="mb-6 text-center">
										<button className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-darkblue-700 focus:outline-none focus:shadow-outline bg-darkblue-600 hover:#fca5a5" type="button">Sign In</button>	
									</div>
							<hr className="mb-6 border-t" />	
							<div className="text-right">
							<a href="/register" style={{float:'left', color:'#000'}}>Don't have an account?</a>
								<a className="inline-block text-sm text-gray-500 align-baseline hover:text-red-300" href="/forgot-pass">Forgot Password?</a>									
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    )
}

export default login;
