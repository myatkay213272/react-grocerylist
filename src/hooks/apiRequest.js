const apiRequest = async(url='',optionsObj=null,errMsg=null) => {

    try{
        const response = await fetch(url,optionsObj)
          if(!response.ok) throw Error('Please reload the app')
    }catch(err){
        errMsg = err.message
    }finally{
        return errMsg
    }
  
}

export default apiRequest



// Real Life	                Code Example
// You order food	            Send a request with fetch()
// Restaurant kitchen	        Server / API
// Food menu	                Data from the server
// Waiter/helper	            apiRequest function
// Something went wrong	        Error message like "Try again"