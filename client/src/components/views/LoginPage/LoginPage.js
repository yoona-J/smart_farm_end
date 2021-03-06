// L29 수정
import React, { useState } from 'react'
// L29
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action';

import Axios from 'axios';

// L34
import { withRouter } from 'react-router-dom'


function LoginPage(props) {



    // L29-30
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 페이지 새로고침 막기
        
        // console.log('Email', Email)
        // console.log('Password', Password)

        let body = {
            email: Email,
            password: Password
        }

        Axios.post ('/api/users/login', body)
        .then(response => {

        })

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/test')
                } else {
                    alert('Error')
                }
            })
    }



    return (



        // L29
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
                <br />
                <button type="register">
                    Join
                </button>
            </form>
        </div>



    )
}

export default withRouter(LoginPage)
