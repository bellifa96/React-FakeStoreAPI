import React from "react";

const FormUser = ({handleSubmit,notfound}) =>(
<form onSubmit={handleSubmit} className='col-md-6 m-auto'>
    <label>
        user name
        <input type="text" name='username' />
    </label>
    <input type="submit" value="Envoyer" />
    <input type="checkbox" checked={true} name='isOwned' />

    { notfound &&
    < div className="alert alert-warning" role="alert">
        User not found check username pls !
        </div>
    }
</form>

)
export default FormUser

