const apiRequest = async(url ='', optionObject =null,
     err =null) => {
        
        try{
            const res = await fetch(url, optionObject);

            if(!res.ok) throw  Error
                ("please reload the page  ");
            
        }catch( error){
            console.log(error);

        }finally{
            return err;
        }
        
}

export default apiRequest;